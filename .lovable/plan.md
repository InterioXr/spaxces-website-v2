# AI Decor Ideas from a Room Photo

Visitors upload a photo of a room and get decor suggestions written for that specific space. No sign-in is needed. The feature matches the existing dark navy and blue-glow style.

## What visitors see
- A new section called "AI Decor Ideas" on the page, placed after "How to Use Spaxces". A new button for it is added to the side menu.
- An upload area where visitors drag in a photo or tap to choose one. It accepts JPG, PNG and WebP up to 8 MB, and shows a preview of the photo.
- An optional style picker (Modern, Minimal, Scandinavian, Boho, Industrial, Traditional) and an optional note, for example "small budget, kid-friendly".
- A "Get Decor Ideas" button. Suggestions appear word by word as they are written, so visitors aren't left waiting on a blank screen. A Stop button cancels a request partway through.
- Results come back in five parts:
  - Room read: what the AI sees, such as the light, layout and current colours.
  - Colour palette: 3 to 5 colour swatches with their names.
  - 4 to 6 decor ideas, each with what to add, where to put it, and why it suits this room.
  - Quick wins under a small budget.
  - A closing line inviting visitors to explore the space in Mixed Reality with Spaxces.
- Clear messages appear if the photo is too large, if the service is busy (try again shortly), or if AI credits run out.

## Privacy
- Photos are only used to create the suggestions. They are not saved.
- A short line under the upload area tells visitors this.

## Technical details
- **Backend function `decor-ideas`:**
  - Receives the image as a base64 data URL plus the optional style and note, and checks the file type and size.
  - Calls Lovable AI Gateway Responses (`/v1/responses`) with the model `openai/gpt-6-astra`. The image is sent as an `input_image` part.
  - Streams the answer using the AI SDK (`npm:ai`, `npm:@ai-sdk/openai` `.responses()`), with the required `providerOptions.openai` block: forceReasoning, reasoningEffort "low", reasoningSummary "auto", store false, include encrypted reasoning.
  - Uses a server-held `LOVABLE_API_KEY` and the run-ID fetch helper, and sends back only the `X-Lovable-AIG-*` headers plus CORS headers.
  - Passes 429, 402 and 403 statuses back unchanged, each with a safe message. It does not retry automatically, and handles a client abort as 499.
- **Helpers:** the gateway, Responses and run-ID helpers are copied from the AI SDK skill into `supabase/functions/decor-ideas/`.
- **Instructions to the model:** a prompt asks for markdown with fixed headings and hex colour codes, which the page turns into swatches. Output length is limited through the prompt.
- **Photo handling on the page:** a new `DecorIdeas` section component downscales the photo to a maximum of 1600px before upload, to keep requests small. It reads the stream, renders the markdown, and supports Stop through an AbortController.
- **Page changes:** the side menu gets a new item, and `Index.tsx` renders the section with the existing card classes and right-side padding.
- **No storage:** no database table or file storage is used.
- **Testing:** after deploying, the function is called with a sample room photo to confirm the streamed suggestions come back correctly.
- **`AGENTS.md`:** add a rule that AI calls run only inside backend functions, so the key stays private.
