# Rally — Landing Page

A single-page, conversion-focused site at `/` that closely mirrors the Flexfolio reference's layout, spacing, and card language, restyled with Rally's burgundy/bone/serif branding.

## Design system

Tokens added to `src/styles.css` (oklch equivalents of the hex values, registered in `@theme inline`):

- `burgundy` #6B2332 (primary), `burgundy-tint` rgba(107,35,50,0.08), `ink` #1A1A17, `bone` #F5F1E8, `warm-grey` #8A8578, white
- Fonts loaded via `<link>` in `src/routes/__root.tsx`: **Playfair Display** (headlines, `font-display`) + **Inter** (body, `font-sans`)
- Radius scale matching the reference: pills fully rounded, cards ~20–24px
- Section rhythm: alternating `white` / `bone` backgrounds, generous vertical padding (~96–128px desktop), max-width 1200px container
- One shared `SectionPill` component (icon + label, burgundy tint bg, hairline border, muted text) used by every section
- One shared `fade-in-up on scroll` hook using IntersectionObserver, applied per section/card with small stagger
- Subtle dashed vertical guide lines at the container edges, like the reference

## Page structure

Single route: rewrite `src/routes/index.tsx`. Sections in the exact requested order, each as its own component under `src/components/landing/`:

```text
Nav (fixed, transparent → white + border on scroll)
Hero (light warm tint, pill / serif headline / burgundy CTA / avatar social proof
      / floating dashboard mockup overlapping next section)
TrustBar ("Trusted by forward-thinking orthodontic practices")
About (fading serif statement + angled floating tag pills + 3 stats)
Problem  #problem   (3 pain cards)
HowItWorks #how     (3 circular steps + dashed curved SVG connectors)
Features #features  (bento: large chat card + small phone card, then 3 cards)
SetupHighlight      (full-width burgundy-tint card, mockup left / copy right)
Benefits            (3 + 2 card grid)
Testimonials        (3 cards, prev/next arrows top-right, 5-star rows)
Pricing #pricing    (3 tiers, middle highlighted w/ burgundy border + "Save 20%")
FAQ #faq            (left copy + CTA | right accordion)
FinalCTA #book      (bold burgundy gradient band, rounded top, white CTA button)
Footer              (ink bg, 4 columns, newsletter, bottom bar)
```

All copy exactly as specified in the brief.

## Mockups and visuals

The hero dashboard, chat UI, phone UI, and setup visual are built as **real HTML/CSS/Tailwind mock components** (not generated images) so they stay crisp, responsive, and on-brand: sidebar + stat tiles (conversations, lead pipeline columns, "93% show rate"), a live SMS thread, and a phone frame. Avatars for social proof and testimonials are generated portrait images in `src/assets/`.

## Interactions

- Smooth scroll anchors; every "Book a Call" / "Get Started" CTA links to `#book`
- Nav: mobile hamburger sheet; scroll-state border/shadow
- Testimonial arrows shift the visible card window (single card on mobile)
- FAQ accordion via shadcn `Accordion` restyled with chevrons
- Fade-in-up on scroll for each section
- Fully responsive: 1 column mobile, 2 tablet, full bento/3-col desktop

## Technical notes

- Static page, no backend needed — newsletter and pricing CTAs are presentational (newsletter shows a toast via sonner, `<Toaster />` mounted in `__root.tsx`)
- SEO: unique `head()` on the index route (title, description, og:title/description, og:type, twitter:card), single `<h1>`, semantic `<section>` landmarks, alt text on all imagery
- No new dependencies beyond what's installed (shadcn + lucide-react)
