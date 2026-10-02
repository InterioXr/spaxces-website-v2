import { createOpenAI } from "npm:@ai-sdk/openai";
import { streamText } from "npm:ai";
import {
  createLovableAiGatewayRunIdFetch,
  getLovableAiGatewayRunId,
  getLovableAiGatewayResponseHeaders,
} from "./run-id.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-lovable-aig-run-id",
  "Access-Control-Expose-Headers": "X-Lovable-AIG-Run-ID",
};

const MODEL = "openai/gpt-6-astra";
const GATEWAY = "https://ai.gateway.lovable.dev/v1";
const STYLES = ["Modern", "Minimal", "Scandinavian", "Boho", "Industrial", "Traditional"];
const MAX_DATA_URL = 12 * 1024 * 1024;

const SYSTEM = `You are Spaxces' interior decor assistant. Analyse the room photo and give decor ideas tailored to THIS space.
Respond in concise markdown using exactly these headings:
## Room read
2-3 sentences on light, layout, size and current colours.
## Colour palette
3-5 bullet lines, each formatted as: \`#RRGGBB\` Name - where to use it
## Decor ideas
4-6 numbered items: **What to add** - where to place it - why it suits this room.
## Quick wins on a small budget
3 bullets.
## Next step
One sentence inviting them to explore the space in Mixed Reality with Spaxces.
Keep the whole answer under 350 words. If the image is not a room or interior, say so briefly and ask for a room photo.`;

const json = (status: number, error: string) =>
  new Response(JSON.stringify({ error }), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

function safeMessage(status?: number) {
  if (status === 429) return "The AI service is busy right now. Please try again in a moment.";
  if (status === 402) return "AI credits have run out. Please try again later.";
  if (status === 403) return "AI suggestions are currently unavailable.";
  return "Something went wrong while generating ideas. Please try again.";
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  if (req.method !== "POST") return json(405, "Method not allowed");

  let body: { image?: string; style?: string; note?: string };
  try {
    body = await req.json();
  } catch {
    return json(400, "Invalid request.");
  }
  const image = typeof body.image === "string" ? body.image : "";
  if (!/^data:image\/(jpeg|png|webp);base64,/.test(image)) return json(400, "Please upload a JPG, PNG or WebP photo.");
  if (image.length > MAX_DATA_URL) return json(413, "That photo is too large. Please use one under 8 MB.");
  const style = STYLES.includes(body.style ?? "") ? body.style : undefined;
  const note = typeof body.note === "string" ? body.note.trim().slice(0, 300) : "";

  const apiKey = Deno.env.get("LOVABLE_API_KEY");
  if (!apiKey) return json(500, "AI is not configured.");

  const runIdFetch = createLovableAiGatewayRunIdFetch(getLovableAiGatewayRunId(req));
  const provider = createOpenAI({
    baseURL: GATEWAY,
    apiKey,
    headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
    fetch: runIdFetch.fetch,
  });

  const userText = [
    "Suggest decor ideas for this room.",
    style ? `Preferred style: ${style}.` : "",
    note ? `Visitor notes: ${note}` : "",
  ].filter(Boolean).join(" ");

  const result = streamText({
    model: provider.responses(MODEL),
    system: SYSTEM,
    messages: [{ role: "user", content: [{ type: "text", text: userText }, { type: "image", image: new URL(image) }] }],
    abortSignal: req.signal,
    providerOptions: {
      openai: {
        forceReasoning: true,
        reasoningEffort: "low",
        reasoningSummary: "auto",
        store: false,
        include: ["reasoning.encrypted_content"],
      },
    },
  });

  const reader = result.fullStream[Symbol.asyncIterator]();
  const encoder = new TextEncoder();

  // Read until first text or error so HTTP status can reflect upstream failures.
  const buffered: string[] = [];
  let firstError: { status?: number } | null = null;
  let done = false;
  try {
    while (true) {
      const { value, done: d } = await reader.next();
      if (d) { done = true; break; }
      if (value.type === "text-delta") { buffered.push(value.text); break; }
      if (value.type === "error") {
        const e = value.error as { statusCode?: number };
        firstError = { status: e?.statusCode };
        break;
      }
    }
  } catch (e) {
    if (req.signal.aborted) return new Response(null, { status: 499, headers: corsHeaders });
    firstError = { status: (e as { statusCode?: number })?.statusCode };
  }

  if (firstError) {
    const status = [429, 402, 403].includes(firstError.status ?? 0) ? firstError.status! : 502;
    console.error("decor-ideas upstream error", firstError.status);
    return json(status, safeMessage(firstError.status));
  }

  const stream = new ReadableStream({
    async start(controller) {
      for (const t of buffered) controller.enqueue(encoder.encode(t));
      try {
        while (!done) {
          const { value, done: d } = await reader.next();
          if (d) break;
          if (value.type === "text-delta") controller.enqueue(encoder.encode(value.text));
          if (value.type === "error") {
            controller.enqueue(encoder.encode(`\n\n_${safeMessage((value.error as { statusCode?: number })?.statusCode)}_`));
            break;
          }
        }
      } catch (e) {
        if (!req.signal.aborted) console.error("decor-ideas stream error", e);
      }
      controller.close();
    },
    cancel() {
      reader.return?.();
    },
  });

  const headers = getLovableAiGatewayResponseHeaders(undefined, {
    ...corsHeaders,
    "Content-Type": "text/plain; charset=utf-8",
    "Cache-Control": "no-cache",
  });
  const runId = runIdFetch.getRunId();
  if (runId) {
    headers.set("X-Lovable-AIG-Run-ID", runId);
  }
  return new Response(stream, { headers });
});
