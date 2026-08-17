# Rally — AI Partner Reframe

Rebuild the single-page site around new positioning: Rally is the AI partner for dental practices, not a tool vendor or marketing agency. Every section leads with the practice's problem. Existing component architecture (route structure, section primitives, reveal-on-scroll, shadcn accordion) is kept; the token values and copy change.

## Brand system update

`src/styles.css` tokens are re-pointed to the new palette (current burgundy/serif system is replaced, structure kept):

- Tangerine `#FF6B35` — primary accent, used sparingly (CTA button, icons, numerals)
- Ink `#1A1A17` — body text and dark sections
- Bone `#F5F1E8` — page background
- Warm Grey `#8A8578` — secondary text and hairline dividers
- Fonts via `<link>` in `src/routes/__root.tsx`: Bricolage Grotesque (display, 600–800, tight tracking), Geist (body 16–18px), Geist Mono (uppercase 11px letterspaced eyebrows / section labels / captions). Inter and Playfair Display are removed everywhere.
- Hairline warm-grey dividers, minimal shadows, generous whitespace. Scroll reveals only, gated behind `prefers-reduced-motion`.
- Wordmark renders as styled text "Rally" (no logo file in the project yet); drop-in ready when you upload one.

## Page structure

`src/routes/index.tsx` is recomposed from new section components under `src/components/landing/`. Old sections that no longer fit the frame (pricing, testimonials, trust bar, bento features, setup highlight, benefits, about) are removed.

```text
Nav            wordmark | How it works, What we build, Results, About | tangerine "Book a call"
               sticky, bone at 90% opacity + blur
Hero           mono eyebrow, two-line display headline, one-sentence subhead,
               primary CTA + text link to the Hubbard section, mono practice-types strip
Problem        Ink background, Bone text, 4 stacked statements w/ hairline dividers,
               closing "coverage problem" line
How we work    01 / 02 / 03 — audit, build, run — plus the italic warm-grey
               "Custom diagnosis. Standard build." line
What we build  3x2 hairline-separated cards (chat, voice, speed-to-lead, no-show
               recovery, reactivation, websites) + "you don't need all six" line
Results        full-width Hubbard block: practice, location, what was built, and
               "First results publishing soon" + link to the Hubbard site.
               No invented metrics, no fabricated quote.
Why Rally      3 short columns: DIY software | marketing agency | Rally
About Caleb    photo placeholder frame left, 3 short paragraphs right
FAQ            6-item accordion, including the cost answer verbatim, no dollar figures
Closing CTA    Ink background, "Let's find out where your practice is leaking."
Footer         wordmark, nav links, email, Privacy Policy, Terms of Use, copyright
```

Copy is used exactly as written in the brief.

## Other pages and widgets

- New `/privacy` and `/terms` routes with basic editable placeholder content, matching the site's type system, each with its own head metadata.
- Riley chat widget: a clearly marked mount point is added once, site-wide, in `src/routes/__root.tsx`, bottom-right, ready for you to paste the embed script. Nothing else occupies that slot.
- Mobile: sticky bottom bar with the single "Book a call" CTA. All other actions are text links.

## Technical notes

- Static page — no backend, no forms, no newsletter. "Book a call" links to a single configurable booking URL constant (placeholder until you supply it).
- Accessibility: semantic heading order, visible keyboard focus rings in tangerine, alt text on the photo placeholder.
- SEO: rewritten `head()` on `/` reflecting the new positioning; `__root.tsx` defaults updated to match; unique metadata on `/privacy` and `/terms`.
- No new dependencies.

## Gaps left open

- Hubbard metrics and pull quote (fallback line ships instead)
- Real photo of Caleb (placeholder frame ships)
- Logo file, booking URL, contact email, Hubbard site URL
