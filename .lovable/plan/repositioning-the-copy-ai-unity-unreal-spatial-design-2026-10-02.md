# Repositioning the copy: AI + Unity/Unreal + spatial design

Only the text and section content change. The dark navy and blue-glow look, the floating side menu, the card styles, the images and the animations all stay as they are.

## 1. Hero
- Keep the main heading "Regenerating Scattered Realities".
- New subheading underneath it: "AI-generated 3D objects and spaces, experienced in Augmented, Virtual and Mixed Reality."
- Replace the current supporting paragraph with: "From a single idea to an immersive space — designed with AI, built in Unity & Unreal Engine, and explored in MR."
- Keep the "Explore Spaxces" button.

## 2. What is Spaxces?
- New paragraph: "Spaxces is a Mixed Reality platform by InterioXr Labs that uses AI to generate 3D objects and environments, then places them in the real world (AR), a fully virtual one (VR), or a blend of both (MR)."
- The three cards become:
  - **AI → 3D Generation:** Turn prompts, sketches or reference images into ready-to-place 3D objects in minutes.
  - **Interior & Spatial Design:** Design rooms and spaces at true scale, then walk through them before anything is built.
  - **Real-Time Engines:** Photorealistic environments rendered in Unity and Unreal Engine, viewable on headsets, phones and the web.
- Each card keeps its current picture in the corner.

## 3. New "How it works" block
- Placed straight after the three cards above, before the "Powered by…" area and the Interactive Demo box.
- It has 4 numbered steps. They sit side by side on computers and stack on phones, in the same card style.
  1. **Describe or Scan:** Start from a prompt, a reference image or a scan of your room.
  2. **AI Generates 3D:** Our AI pipeline creates the 3D objects and materials.
  3. **Built in Unity / Unreal:** Assets are placed into a real-time, true-to-scale environment.
  4. **Experience in AR / VR / MR:** Walk through it on a headset, phone or browser.

## 4. "Powered by…" area
- Rename the heading to "Powered by AI, Unity & Unreal".
- New text: "We combine generative AI with real-time game engines to build spaces you can step into — with full locomotion, panning and zooming, true-to-scale objects and realistic lighting."
- Labels: keep "Full Locomotion" and "Panning & Zooming", and add "AI Asset Generation" and "Unity / Unreal".

## 5. How to Use Spaxces
- Steps 1 to 3 stay the same.
- Step 4 changes from "Purchase & Enjoy" to **Refine & Realise:** "Adjust materials, layouts and lighting, then take your design into the real world — with our partners or your own team."

## 6. Collaborate with Us
- New subheading: "Join our ecosystem of interior and spatial designers, architects, developers and XR innovators."
- The four cards become "Interior & Spatial Designers", "Architects & Developers", "Real Estate Partners" and "Tech & XR Partners".
- Each new card reuses the closest existing picture: design workspace, global network, real estate agent and tech integration.
- Your brief doesn't include text for these cards, so I'll write a short description for each that fits the new direction. You can replace it with your own.

## 7. Contact and footer
- The contact intro line becomes "Ready to see your space in a new dimension? Let's talk."
- The footer tagline becomes "Regenerating scattered realities with AI and Mixed Reality."

## 8. Toning down real-estate language
- Any remaining mentions of real estate or a marketplace in the main copy will be softened to fit the new direction. "Real Estate Partners" stays, because your brief names it.
- Project card names and text in "Our Projects" stay as they are unless you'd like them updated too.

## Technical details
- All changes are text and markup edits in `src/pages/Index.tsx`.
- The hero subheading is a styled `<p>` under the existing `<h1>`, so the page keeps a single H1.
- "How it works" goes inside the `#spaxces` section as a responsive grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4`) that reuses the existing card classes, with `h3` step titles.
- The side menu is unchanged, because the new block sits inside an existing section.
- Also update the meta description in `index.html` if it still mentions real estate. It already matches the new positioning.
