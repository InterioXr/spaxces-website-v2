import { useEffect, useState } from 'react';
import { Box, PlayCircle } from 'lucide-react';

// Add real sources here when available.
export const DEMO_VIDEO_URL = '';
export const DEMO_MODEL_URL = '';
export const DEMO_VIDEO_POSTER = '';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        alt?: string;
        poster?: string;
        ar?: boolean | string;
        'ar-modes'?: string;
        'camera-controls'?: boolean | string;
        'auto-rotate'?: boolean | string;
        loading?: string;
      };
    }
  }
}

const toEmbedUrl = (url: string): string | null => {
  try {
    const u = new URL(url);
    if (u.hostname.includes('youtu')) {
      const id = u.hostname === 'youtu.be' ? u.pathname.slice(1) : u.searchParams.get('v') || u.pathname.split('/').pop();
      return id ? `https://www.youtube-nocookie.com/embed/${id}?rel=0` : null;
    }
    if (u.hostname.includes('vimeo')) {
      const id = u.pathname.split('/').filter(Boolean).pop();
      return id ? `https://player.vimeo.com/video/${id}?dnt=1` : null;
    }
  } catch { /* invalid */ }
  return null;
};

const ComingSoon = ({ icon: Icon, label }: { icon: typeof Box; label: string }) => (
  <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-2xl border border-border flex items-center justify-center">
    <div className="text-center text-muted-foreground px-6">
      <Icon size={40} className="mx-auto mb-3 text-blue-400 animate-pulse" />
      <p className="text-lg font-medium text-foreground">Demo coming soon</p>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </div>
  </div>
);

const DemoShowcase = () => {
  const embed = DEMO_VIDEO_URL ? toEmbedUrl(DEMO_VIDEO_URL) : null;
  const [viewerReady, setViewerReady] = useState(false);

  useEffect(() => {
    if (DEMO_MODEL_URL) import('@google/model-viewer').then(() => setViewerReady(true));
  }, []);

  return (
    <div className="space-y-6">
      {embed ? (
        <div className="aspect-video rounded-2xl overflow-hidden border border-border bg-muted">
          <iframe
            src={embed}
            title="Spaxces Unity / Unreal walkthrough"
            loading="lazy"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            className="w-full h-full"
            style={DEMO_VIDEO_POSTER ? { backgroundImage: `url(${DEMO_VIDEO_POSTER})`, backgroundSize: 'cover' } : undefined}
          />
        </div>
      ) : (
        <ComingSoon icon={PlayCircle} label="Unity / Unreal walkthrough video" />
      )}

      {DEMO_MODEL_URL && viewerReady ? (
        <model-viewer
          src={DEMO_MODEL_URL}
          alt="AI-generated 3D object created with Spaxces"
          camera-controls
          auto-rotate
          ar
          ar-modes="webxr scene-viewer quick-look"
          loading="lazy"
          className="block w-full aspect-video rounded-2xl bg-card/60 border border-border"
        />
      ) : (
        <ComingSoon icon={Box} label="Interactive 3D object viewer" />
      )}

      <p className="text-sm text-muted-foreground text-center">
        Generated with Spaxces AI. Rotate it, zoom in, or tap 'View in your space' on your phone.
      </p>
    </div>
  );
};

export default DemoShowcase;
