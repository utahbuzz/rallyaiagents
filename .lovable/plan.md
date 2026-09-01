# Remove social links from the footer

## Goal
Remove the Facebook, LinkedIn, and Instagram icon buttons from the Rally landing page footer, since the business doesn't have social accounts yet.

## Change (single file: `src/components/landing/footer.tsx`)

1. Remove the `socials` array (Facebook / LinkedIn / Instagram icon entries).
2. Remove the icon button block rendered under the tagline (`<div className="mt-6 flex gap-2.5">…` with the three round icon links).
3. Clean up the import on line 2: keep `ArrowRight` (still used by the Subscribe button), drop `Facebook`, `Instagram`, `Linkedin` from `lucide-react`.

## Scope
- Only the main landing footer is affected.
- The football page footer already has no social icons — no change there.
- No layout rework needed: the footer grid and remaining columns (tagline, Company, Product, Newsletter) stay as-is.

## Verification
- Build passes (check `/tmp/observability/build-errors.log`).
- Confirm the icon row is gone from the live footer and no unused-import errors remain.