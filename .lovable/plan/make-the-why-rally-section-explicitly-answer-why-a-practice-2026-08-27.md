Make the "WHY RALLY" section explicitly answer why a practice should partner with Rally, instead of leading with the cost of inaction and then dropping into a generic ROI calculator.

Current state
- Section eyebrow is "WHY RALLY".
- Headline says "Doing nothing about AI is a decision. It's just the expensive one."
- Body talks about missed calls and competitors using AI, then loosely introduces Rally.
- An interactive estimator follows, labeled "What this could look like for your practice", with production/hours metrics.
- Specialty tags sit at the bottom with no connecting line.

The disconnect: the title promises "why Rally", but the copy mostly argues "why AI now" and the estimator feels like a separate tool rather than proof of the partnership.

Plan
1. Rewrite the top copy block in `src/components/landing/stats.tsx` so it directly states Rally's difference as an AI partner.
   - Headline option direction: "Rally is the AI partner that shows up before you buy anything."
   - Three short reasons: (a) we teach on your real tasks, (b) we build only what earns time back, (c) month-to-month, no long contract.
   - One dry aside, no exclamation points, Dental Launch tone.
2. Reframe the interactive estimator as a partner proof point, not a standalone calculator.
   - Change the widget title from "What this could look like for your practice" to something like "What that partnership could free up".
   - Tighten the output labels so each metric maps to a reason above (recovered patients, production freed, front-desk hours back).
   - Keep the disclaimer conservative and link it to booking the first call.
3. Tighten the specialty tags.
   - Add a small intro line like "Built for these practices" so the tags feel part of the argument, not orphaned.
4. Check continuity with adjacent sections.
   - Avoid repeating the same points already covered in "How it works" and "What it looks like"; keep this section focused on the partnership decision.
5. Verify.
   - Run the build and confirm no exclamation points or tone drift.
