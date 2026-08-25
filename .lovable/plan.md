# Match the Dental Launch voice

Rewrite the page copy in the tone of dentallaunch.framer.website: short punchy lines, second person, a question as the headline, hard numbers with a dry joke attached, and no consultant vocabulary. Layout, sections, colors, and the interactive widgets stay exactly as they are — this is a copy pass only.

## The voice rules we're adopting

- Headlines are questions or blunt statements: "Ready for more patients? Let's make it happen." → ours read the same way.
- Every claim gets a number, and the number gets a punchline: "59% of dental offices leave marketing to their front office — that's like asking your barista to file your taxes."
- Short sentences. Contractions. Talk like a person who's been in a practice.
- One dry aside per section, never two.
- Cut hedging ("we help you", "we can assist with") for direct verbs ("we build it", "you keep it").

## Section-by-section copy changes

**Hero** (`hero.tsx`) — Headline becomes a question plus a promise, e.g. "Wondering where AI fits in your practice? Let's find out." Subhead in one or two short sentences: your team learns it, we build it, first call is free. Reassurance chips stay but get shorter.

**Hero widget** (`hero-widget.tsx`) — Keep all six scenarios and the interaction. Tighten each "What AI does / What changes / Practices ahead of you" line to one punchy sentence, and add a light aside to the competitor line where it lands naturally.

**About** (`stats.tsx`) — Keep the ROI estimator and its math untouched. Rewrite the headline and paragraph in the problem-framing style: name the cost of waiting with a number, then the dry aside. Keep the estimates disclaimer honest but shorter.

**How it works** (`how-it-works.tsx`) — Recast the three steps as plain "Step 1 / Step 2 / Step 3" style bodies: one sentence on what happens, one on what you get. Section heading gets the confident-question treatment.

**Features** (`features.tsx`) — Tighten both rows to the shortest version of the same point. Learn first, build second, said in fewer words.

**What we help with** (`what-we-help-with.tsx`) — Six cards, each body cut to one line with more bite.

**Testimonials** (`testimonials.tsx`) — Keep the quotes; they're already in this voice.

**FAQ** (`faq.tsx`) — Reword the questions the way a practice owner actually asks them ("How much of my time is this going to take?", "What if we've tried AI and it flopped?") and keep answers to two sentences.

**Final CTA** (`final-cta.tsx`) — Headline in the reference's confident-with-a-wink style, e.g. "See if Rally is a fit for your practice." Subhead: book the free 25-minute call. Agenda items cut to one line each. Form labels and the success message get the same plain tone.

## Two places I'm not copying the reference

- **Exclamation points and heavy jokes.** The reference uses both freely; your earlier direction was no exclamation points and one dry aside per section. I'll keep the punchy rhythm and the asides, but hold the line on exclamation marks unless you want them.
- **Their offer and their numbers.** No "you only pay if it works" guarantee and no $1.8M / 2,688-patient results, since those are Dental Launch's. Benchmark stats we cite stay sourced and framed as estimates.

## Technical notes

Static copy edits across `src/components/landing/*.tsx` plus the route meta title/description in `src/routes/index.tsx`. No new components, no styling changes, no changes to the ROI math, widget logic, or the lead form's fields and server function.
