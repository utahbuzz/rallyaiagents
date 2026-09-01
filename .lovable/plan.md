# Remove fabricated social proof from the Rally landing page

## Goal

No fake reviews, ratings, or customers anywhere on the page. Rally has no reviews or testimonials yet, so nothing should pretend otherwise.

## Changes

### 1. Hero rating block — `src/components/landing/hero.tsx`

Remove the block under the CTA buttons that shows three stock-photo avatars, five stars, and "40+ practice teams trained · 5.0".

Also clean up what it makes unused:
- The `avatars` array and the three avatar image imports (`avatar-chelsea`, `avatar-james`, `avatar-sarah`)
- `Star` from the `lucide-react` import (keep `Check`, used by the reassurance list below)

The hero keeps its pill badge, headline, subhead, both CTAs, and the "See where AI fits…" reassurance list — just tighter.

### 2. Testimonials section — remove entirely

- `src/routes/index.tsx`: delete the `Testimonials` import and the `<Testimonials />` element, so the page flows What we help with → FAQ.
- Delete `src/components/landing/testimonials.tsx` — all three quotes are fabricated ("Dr. Sarah Mitchell", "Chelsea H.", "Dr. James Park") with stock photos.

### 3. Dead asset cleanup

Delete `src/assets/avatar-chelsea.jpg`, `avatar-james.jpg`, and `avatar-sarah.jpg` — after the two removals above, nothing references them.

## What stays

- "Previously worked with" marquee (real practice logos: Happy Tooth, Horsley, Hubbard, Kuhni, Bright)
- WHY RALLY section with the interactive estimator (projected/forward-looking, not claims of past results)
- Everything else: Nav, How it works, What we help with, FAQ, lead form, footer, sticky CTA

## Verification

- Build log clean (`/tmp/observability/build-errors.log`)
- Preview check: hero shows no avatar/star row, testimonials section gone, page still converts to the Book CTA