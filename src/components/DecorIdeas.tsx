import { useRef, useState } from 'react';
import { Upload, Sparkles, Square, ImageIcon } from 'lucide-react';
import { toast } from 'sonner';

const STYLES = ['Modern', 'Minimal', 'Scandinavian', 'Boho', 'Industrial', 'Traditional'];
const MAX_BYTES = 8 * 1024 * 1024;
const ENDPOINT = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/decor-ideas`;
const KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

async function downscale(file: File): Promise<string> {
  const url = URL.createObjectURL(file);
  try {
    const img = await new Promise<HTMLImageElement>((res, rej) => {
      const i = new Image();
      i.onload = () => res(i);
      i.onerror = rej;
      i.src = url;
    });
    const scale = Math.min(1, 1600 / Math.max(img.width, img.height));
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(img.width * scale);
    canvas.height = Math.round(img.height * scale);
    canvas.getContext('2d')!.drawImage(img, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL('image/jpeg', 0.85);
  } finally {
    URL.revokeObjectURL(url);
  }
}

function renderInline(text: string) {
  return text.split(/(\*\*[^*]+\*\*|`#[0-9a-fA-F]{6}`)/g).map((part, i) => {
    if (part.startsWith('**')) return <strong key={i} className="text-foreground">{part.slice(2, -2)}</strong>;
    if (/^`#[0-9a-fA-F]{6}`$/.test(part)) {
      const hex = part.slice(1, -1);
      return (
        <span key={i} className="inline-flex items-center gap-2 align-middle">
          <span className="inline-block w-5 h-5 rounded-md border border-border" style={{ backgroundColor: hex }} />
          <code className="text-blue-700 dark:text-blue-300 text-sm">{hex}</code>
        </span>
      );
    }
    return part.replace(/^_|_$/g, '');
  });
}

function Result({ text }: { text: string }) {
  return (
    <div className="space-y-2 text-muted-foreground leading-relaxed">
      {text.split('\n').map((line, i) => {
        const t = line.trim();
        if (!t) return null;
        if (t.startsWith('## ')) return <h3 key={i} className="text-xl font-medium text-foreground pt-4 first:pt-0">{t.slice(3)}</h3>;
        if (/^[-*] /.test(t)) return <p key={i} className="pl-4">• {renderInline(t.slice(2))}</p>;
        if (/^\d+\. /.test(t)) return <p key={i} className="pl-4">{renderInline(t)}</p>;
        return <p key={i}>{renderInline(t)}</p>;
      })}
    </div>
  );
}

export default function DecorIdeas() {
  const [image, setImage] = useState<string | null>(null);
  const [style, setStyle] = useState<string | null>(null);
  const [note, setNote] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [dragging, setDragging] = useState(false);
  const abortRef = useRef<AbortController | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file?: File) => {
    if (!file) return;
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) return toast.error('Please upload a JPG, PNG or WebP photo.');
    if (file.size > MAX_BYTES) return toast.error('That photo is too large. Please use one under 8 MB.');
    try {
      setImage(await downscale(file));
      setOutput('');
    } catch {
      toast.error("We couldn't read that photo. Please try another.");
    }
  };

  const generate = async () => {
    if (!image) return;
    const controller = new AbortController();
    abortRef.current = controller;
    setLoading(true);
    setOutput('');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', apikey: KEY, Authorization: `Bearer ${KEY}` },
        body: JSON.stringify({ image, style, note }),
        signal: controller.signal,
      });
      if (!res.ok || !res.body) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        setOutput((prev) => prev + decoder.decode(value, { stream: true }));
      }
    } catch (e) {
      if ((e as Error).name !== 'AbortError') toast.error((e as Error).message);
    } finally {
      setLoading(false);
      abortRef.current = null;
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="p-8 rounded-3xl bg-card/80 backdrop-blur-sm shadow-lg border border-border space-y-6">
        <div
          role="button"
          tabIndex={0}
          aria-label="Upload a room photo"
          onClick={() => inputRef.current?.click()}
          onKeyDown={(e) => e.key === 'Enter' && inputRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
          className={`cursor-pointer rounded-2xl border-2 border-dashed transition-colors overflow-hidden flex items-center justify-center min-h-56 ${dragging ? 'border-blue-400 bg-blue-600/10' : 'border-border hover:border-blue-500/60'}`}
        >
          {image ? (
            <img src={image} alt="Your room" className="w-full max-h-80 object-cover" />
          ) : (
            <div className="text-center text-muted-foreground p-6">
              <Upload className="mx-auto mb-3 text-blue-400" size={32} />
              <p className="font-medium text-foreground">Drop a room photo or tap to choose</p>
              <p className="text-sm text-muted-foreground mt-1">JPG, PNG or WebP, up to 8 MB</p>
            </div>
          )}
        </div>
        <input ref={inputRef} type="file" accept="image/jpeg,image/png,image/webp" className="hidden" onChange={(e) => handleFile(e.target.files?.[0])} />
        <p className="text-xs text-muted-foreground -mt-3">Your photo is only used to create suggestions and is not stored.</p>

        <div>
          <p className="text-sm font-medium text-muted-foreground mb-3">Preferred style (optional)</p>
          <div className="flex flex-wrap gap-2">
            {STYLES.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setStyle(style === s ? null : s)}
                className={`px-4 py-2 rounded-full text-sm border transition-colors ${style === s ? 'bg-blue-600 border-blue-500 text-white' : 'border-border text-muted-foreground hover:border-blue-500/60'}`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value.slice(0, 300))}
          placeholder="Anything else? e.g. small budget, kid-friendly"
          rows={2}
          className="w-full rounded-2xl bg-card/60 border border-border text-foreground placeholder:text-muted-foreground p-4 focus:outline-none focus:border-blue-500"
        />

        {loading ? (
          <button type="button" onClick={() => abortRef.current?.abort()} className="w-full bg-muted hover:bg-muted/70 text-foreground px-8 py-4 rounded-full text-lg font-medium inline-flex items-center justify-center gap-2 transition-colors">
            <Square size={18} /> Stop
          </button>
        ) : (
          <button type="button" disabled={!image} onClick={generate} className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-full text-lg font-medium inline-flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-blue-500/25">
            <Sparkles size={20} /> Get Decor Ideas
          </button>
        )}
      </div>

      <div className="p-8 rounded-3xl bg-card/80 backdrop-blur-sm shadow-lg border border-border min-h-72" aria-live="polite">
        {output ? (
          <Result text={output} />
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-center text-muted-foreground gap-3">
            {loading ? <Sparkles className="text-blue-400 animate-pulse" size={40} /> : <ImageIcon className="text-blue-400" size={40} />}
            <p>{loading ? 'Looking at your room…' : 'Your tailored decor ideas will appear here.'}</p>
          </div>
        )}
      </div>
    </div>
  );
}
