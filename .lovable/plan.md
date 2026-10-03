# Interactive Demo & Our Projects

Keep the current look: the dark glass cards, blue accents and animations stay as they are.

## 1. Interactive Demo
- Remove the large empty "Interactive Demo" block.
- Add two slots in its place: a walkthrough video (16:9, loads only when scrolled into view, shows a poster image, never autoplays with sound) and a 3D model viewer below it (you can rotate and zoom it, it turns slowly on its own, and it has a "View in your space" button for phones).
- Caption: "Generated with Spaxces AI. Rotate it, zoom in, or tap 'View in your space' on your phone."
- You don't have a video link or model file yet, so each slot shows a "Demo coming soon" card in the site's style. Once you send the links, adding each one is a one-line change.

## 2. Our Projects carousel
- Replace the 4 old projects and their "2024" labels with 3 placeholder projects: "Project One", "Project Two", "Project Three". Each gets a one-line placeholder description.
- Every card is marked "In Development" and gets placeholder tags such as "Unreal Engine", "MR" and "AI-generated".
- Each card gets an AI-generated interior/spatial render shown as a real image with descriptive alt text, at the top of the card.
- The carousel keeps its current scrolling behaviour.

## Technical details
- Store the demo sources as constants (`DEMO_VIDEO_URL`, `DEMO_MODEL_URL`, empty for now). Turn a YouTube or Vimeo link into a privacy-friendly embed URL. Use an iframe with `loading="lazy"`, wrapped in an `aspect-video` container.
- Add `@google/model-viewer`, imported lazily only when a model URL exists, with `camera-controls auto-rotate ar ar-modes="webxr scene-viewer quick-look"`. Add a TS JSX type declaration for it.
- Keep the project data in an array of `{title, description, image, alt, tags, status}`. Generate the images to `src/assets/project-1..3.jpg` and render them as `<img loading="lazy">`.
- Use semantic tokens and the existing card classes, so no new colours are introduced.
