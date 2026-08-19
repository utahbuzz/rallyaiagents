# Rally — full page rewrite (v5)

Rebuild `/` as the new conversion-focused page for Rally (AI partner for dental + orthodontic practices), single goal: book the free 25-minute call. The current Flexfolio-style sections are replaced.

Note: `rally-v5.html` was not attached, so all copy will be written to the voice spec in your brief — friendly, blunt, short sentences, one dry aside per section max, straight and sincere in Where We Draw The Line, the data/HIPAA answer, and the Happy Tooth numbers. No banned words, no emoji, no exclamation points.

## Design system (src/styles.css)

Exact palette as tokens: burgundy #6B2332, burgundy-dark #501A26, ink #1A1A17, bone #F5F1E8, warm-grey #8A8578, white, tint rgba(107,35,50,0.08), tint-strong rgba(107,35,50,0.14), border rgba(26,26,23,0.10).

- Playfair Display 600 headlines (italic only for logo + one accent phrase), Inter 400/500/600 body, JetBrains Mono for numbers/labels/eyebrows/KPI tags (added to the existing font `<link>`).
- Radii 10/16/24, pills 999px. Shadows only on floating cards. Gradients only in the final CTA and the case study panel.
- Alternating white / bone sections; shared `PillBadge` (tint bg, thin burgundy border, 6px dot, uppercase mono label).
- Reveal-on-scroll: fade-in-up, 24px, ~0.7s, one-time; card hover lift 2px; full `prefers-reduced-motion` disable.
- Visible focus rings on every interactive element.

## Sections (each its own file in src/components/landing/)

```text
Nav              fixed, transparent -> white + blur + hairline past 40px
Hero             radial burgundy glow, burgundy-italic accent sentence, 2 CTAs, 3 checks
ScopeCard        floating white card, rounded top, overlaps next section
                 bone header bar / 4-col Bucket-KPI-Baseline-Target grid / tint footer + mono +42%
TrustBar         grayscale logos 55% -> full color on hover + prior-work note
IcpRouter        3 self-select cards
Problem          43% / 10% / 32% big-number cards + ADA HPI July 2026 source + CTA
DrawTheLine      solid tinted "what we build" | dashed muted "what we won't" + centered pull-quote
RallyMethod      4 rungs, rung 01 highlighted; Free / $300-500 / $2,500-10,000 / $3,000-10,000 per mo
                 + dashed tinted gate callout with 4 mono chips
Buckets          3 cards, mono BUCKET 01 labels, dashed-divider example lists
WhatWeBuild      bento: wide after-hours intake (mock chat log) + narrow missed-call (phone mock),
                 then 2 rows of 3; every card ends in a mono KPI chip
SixtyDay         full-width tinted card: timeline (Day 0 / Wk 1 / Wk 2 / Wk 4 / Day 60) + copy + CTA
CaseStudy        burgundy gradient panel + prose, 3-col stat strip, Happy Tooth fine print
Fit             "works when" tinted checks | "isn't right if" muted x-marks + closing line
Faq              left pill/heading/CTA | right accordion, plus icon rotates 45deg, 10 items
FinalCta         burgundy gradient block, rounded top, 3-card agenda strip, white lead form card
Footer           ink bg, 4 columns + newsletter + copyright bar
StickyMobileCta  slides up after 700px, mobile only
```

Single CTA label everywhere: "Book the free 25-minute call →", each with a risk-reversal line in sight. Nothing gated: no popups, exit-intent, chat widget, or timers.

## Lead form + backend

Enable Lovable Cloud and add a `leads` table (name, practice name, email or mobile, practice size, hardest-part select, created_at) with grants, RLS allowing public inserts only and no public reads. Submission goes through a server function with Zod validation.

Form behavior: inline validation, button disabled while submitting, success replaces the card with a confirmation state (no navigation), failure shows an error and keeps the input. Sub-button line: "No pitch and no deck. If we're not the right fit, we'll tell you on the call."

## Technical notes

- Rewrite `src/routes/index.tsx`; delete the unused old sections (about, benefits, features, how-it-works, pricing, setup-highlight, testimonials).
- Keep the existing Rally logo asset for nav (burgundy) and footer (inverted).
- Trust bar: no client logo files exist, so I'll render neutral wordmark placeholders styled to spec — send real logos and I'll swap them in.
- SEO: unique `head()` on `/` (title, description, og:*, twitter:card), single H1, semantic heading order, real `<label>`s, alt text.
