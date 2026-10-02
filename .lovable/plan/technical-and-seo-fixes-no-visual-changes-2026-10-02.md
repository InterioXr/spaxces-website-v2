# Technical and SEO fixes (no visual changes)

The design, layout, colours and animations all stay as they are.

## 1. Page info for search engines and link previews
- Title: "Spaxces by InterioXr Labs — AI-Generated 3D Spaces in Mixed Reality"
- Description (also used for social descriptions): "Spaxces combines Mixed Reality with AI to generate 3D objects and spaces in AR, VR and MR. Interior and spatial design visualised in Unity and Unreal Engine."
- Author: InterioXr Labs. Social title: "Spaxces by InterioXr Labs"
- Page address and preferred address: https://spaxces.interioxr.com/
- Remove the @lovable_dev X/Twitter tag. No replacement, as you asked.
- Share image: a 1200x630 version of the Spaxces logo, cropped from the existing logo file

## 2. Main heading
- Make "Regenerating Scattered Realities" the page's only main heading (H1), with no change to how it looks.

## 3. Turn buttons into real links (same look)
- spaxces@interioxr.com opens an email to that address
- +91 8826144224 opens WhatsApp at https://wa.me/918826144224 in a new tab
- Footer info@interioxr.com opens an email to that address
- eBb Platforms goes to https://platforms.ebuildbazaar.in
- InterioXr Labs goes to https://www.interioxr.com
- Read about us here goes to https://bit.ly/InterioXrNotion
- All outside links open in a new tab

## 4. Structured data for search engines
- Organization: InterioXr Labs, https://interioxr.com, logo, info@interioxr.com, serving Delhi/NCR, Sydney and London
- Software application: Spaxces, with the description above, category DesignApplication, published by InterioXr Labs, at https://spaxces.interioxr.com/

## 5. Footer
- Change "© 2022-2025" to "© 2022–2026"

## 6. Lovable badge
- Hide the "Edit with Lovable" badge on the published site

## 7. Contact form
- Turn on Lovable Cloud.
- Check that name, a valid email address and a message are filled in, and show an error under any field that isn't.
- On "Send Message", save the message and email it to spaxces@interioxr.com.
- Show a success or error notice after sending, and clear the form when it succeeds.
- **What you'll need to do:** to send these emails, you'll need to set up a sender domain you own (for example, notify.interioxr.com). This takes one DNS step at your domain provider. Until that's done, messages are still saved but not emailed.

## 8. Search engine files
- Update robots.txt to allow all search engines and point to the sitemap
- Add sitemap.xml listing https://spaxces.interioxr.com/

## Technical details
- Edit `index.html` for the meta tags, canonical, og:url, og:image and twitter:image (pointing to an absolute https URL on the custom domain), and add two JSON-LD scripts.
- Create the share image as a 1200x630 crop of `public/Spaxces_Logo_v1_1.png` and save it as `public/og-image.png`.
- In `src/pages/Index.tsx`:
  - Change the hero title element to `<h1>` with the same classes.
  - Replace the button elements with `<a target="_blank" rel="noopener">` and add mailto links, keeping the existing classes.
  - Update the footer year.
- Turn off badge visibility in the publish settings.
- Contact form:
  - Create a `contact_messages` table with grants and RLS that allows anyone to insert.
  - Validate the form with zod and show results with toasts.
  - Set up the app email system with a "contact-notification" template sent to spaxces@interioxr.com, and deploy it.
- Add `public/sitemap.xml` and a Sitemap line in `public/robots.txt`.
- Changes to the head tags reach the live site on the next publish.
