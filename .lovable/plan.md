# Real practice logos in the rotating banner

Swap the text-only names in the scrolling banner for the five real logos you uploaded, and retitle the strip.

## Logos

- Happy Tooth
- Horsley Orthodontics
- Hubbard Orthodontics
- Kuhni Orthodontic Studio (uploaded as a white version)
- Bright

## Label

The mono eyebrow above the strip becomes "Previously worked with".

## Color handling

The five files arrive in clashing colors (gold gradient, navy, near-black, pure white), which looks messy in one row. To keep it on-brand and consistent:

- Each logo is converted to a single-color silhouette in Rally ink using its transparency, so all five sit at the same weight regardless of the original color. This also fixes the Kuhni file, which is currently white on white and invisible.
- Default state: ink at ~45% opacity, matching the muted look the row has today.
- Hover: full-strength burgundy, so the row still has the reference site's grayscale-to-brand hover behavior.
- Each mark is height-capped and vertically centered so the wordmarks and the circular badge marks read at similar visual size.

If you'd rather keep each practice's original brand colors instead of the unified ink treatment, say so and I'll use the files as-is.

## Technical notes

- Uploads are prepared as recolored PNGs, then uploaded to the CDN as `.asset.json` pointers in `src/assets/` (no binaries committed).
- `src/components/landing/marquee.tsx` renders `<img>` marks in place of the text list, keeps the existing triple-duplicated track, 32s scroll, edge mask, and reduced-motion disable.
- Each logo gets real `alt` text (practice name) for accessibility; no layout or section-order changes elsewhere.
