# Reframe the WHY RALLY section

## Goal

Reframe the WHY RALLY section from "why Rally over another vendor" to "why a practice should work with an AI partner at all." Most visitors land curious, with little AI experience but enough to imagine the use cases. The section should make the case for the partnership itself, before any vendor comparison.

## The case (from the brief)

Orthodontists know AI should be used in the business and front-office side of the practice, but they don't know exactly how. They lack the time, knowledge, and resources to:

1. educate their team on AI,
2. build out the AI procedures for the business and the people who use them,
3. maintain those workflows over time.

Rally closes that gap as an AI partner.

## What changes

Single file: `src/components/landing/stats.tsx` (the copy block at lines ~108–138). Layout, styles, the estimator widget ("What that partnership could free up"), and the "Built for these practices" tags all stay as-is.

Structure becomes three cards that mirror the three gaps — Teach, Build, Maintain:

**MonoLabel (unchanged):** `WHY RALLY`

**Headline:** "You know AI belongs in your practice. You just don't have time to figure out how."

**Intro paragraph:** "It's not that you're behind. You can picture it — the phone answered, recall handled, insurance checked before the claim goes out. What you don't have is the time, the knowledge, or the resources to get from picturing it to running it. That gap is exactly what Rally is for."

**Card 1 — Teach your team:** "AI only works if the people using it trust it. We run your real work — recall lists, insurance checks, patient emails — through AI with your front desk until they can do it without us."

**Card 2 — Build the procedures:** "No platform to learn, no year-long contract. We build the workflows your practice actually needs, one at a time, starting with whatever saves the most hours."

**Card 3 — Maintain it over time:** "AI doesn't stay set up by itself. We keep it running, tune it as your practice changes, and stay as long as it's saving you time."

**Dry aside (kept, lightly trimmed):** "Month to month. If it ever stops saving you time, you cancel. That keeps us honest — and the meetings short."

## Voice guardrails

- Short sentences, second person, no exclamation points, no marketing fluff.
- No vendor comparison anywhere in the section ("other vendors", "hand you a login") — that's the framing being removed.
- One dry aside per section (the month-to-month line above).

## Out of scope

- Other sections (Hero, How It Works, FAQ, etc.) unchanged.
- Estimator widget and specialty tags unchanged.
- No visual or structural redesign — the three cards replace the current two-card grid plus closing paragraph, keeping existing card styles.