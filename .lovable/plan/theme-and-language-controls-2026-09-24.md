# Theme and Language Controls

## What will change
- Add a compact control group in the top navigation for dark/light appearance and English/French.
- Keep the selected appearance and language while visitors move between the location pages and when they return.
- Translate all visitor-facing text on the location chooser, Bépanda page, Bonamoussadi page, policies, gallery controls, contact area, footer, and mobile menu.
- Add a complete light color palette that preserves the existing warm amber character and photo-led design.
- Keep the controls accessible with clear labels, keyboard support, and mobile-friendly sizing.

## Technical details
- Introduce one shared preferences provider at the site root so every page and shared section uses the same language and theme state.
- Store preferences in browser storage only after the page loads, avoiding server-rendering mismatches.
- Move translated strings into a centralized bilingual content module while leaving contact details, links, and property facts unchanged.
- Apply the light palette through existing semantic design tokens, not one-off colors.

## Verification
- Check all three pages in English and French, including navigation, policy, galleries, and contact copy.
- Check dark and light appearance on desktop and mobile, including the open mobile menu.
- Confirm selections persist across navigation and no text overlaps or page errors appear.
