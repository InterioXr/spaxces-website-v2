# Make the light/dark switch actually work

## The problem (confirmed)
The sun/moon button only changes the menu, the two top-left buttons and nothing else. The page itself is fixed to dark colours, so in light mode you get pale buttons on a black page, and the switch looks broken.

## What changes
- Light mode gets a real light look: a soft off-white page, white glass cards, dark readable text, and the same blue accents, gradient and glowing circles (toned down so they suit a light page).
- Dark mode looks exactly as it does today.
- The sun/moon button itself changes colour with the theme.
- Every section is covered: top section, What is Spaxces, How to Use, AI Decor Ideas, Demo, Our Projects, Collaborate, Contact form and the footer.
- The logo tile keeps its black backing in both modes so it still looks right.

## Technical details
- Define light and dark values for the existing semantic tokens in `src/index.css` (`--background`, `--foreground`, `--card`, `--muted-foreground`, `--border`, `--primary`) under `:root` / `.dark`.
- Replace hard-coded `bg-black`, `text-white`, `text-slate-300/400`, `bg-slate-800/80`, `border-slate-700/60` in Index.tsx, DecorIdeas, DemoShowcase, ContactForm, Navigation and ThemeToggle with token classes (`bg-background`, `text-foreground`, `bg-card/80`, `text-muted-foreground`, `border-border`).
- Keep the card picture fades and the blue accents, and check both themes with screenshots.
