# Replace the fake stats with a projected-ROI block

The three counters in the About section (40+ teams trained, 11hrs saved, 25min call) are invented numbers. They get replaced with a projection a practice owner can see themselves in — built from real, cited industry data rather than Rally results we don't have.

## The idea

A small "What this could look like for your practice" panel sits where the counters are. The visitor sets two or three simple inputs about their own practice, and three projected outcomes update live. Nothing is claimed as a Rally result; every number is framed as an estimate from published industry benchmarks.

Inputs (simple, no thinking required):
- Practice type: Orthodontic / General / Pediatric
- Calls you can't get to in a week: a short slider or three buttons (low / typical / high)
- Average case or new-patient value: pre-filled per practice type, editable

Projected outputs:
- New patients recovered per month (from calls that currently go unanswered)
- Projected annual production from those patients
- Front-desk hours returned per week

Under it: one line of honest framing plus the source list, e.g. "Estimates based on published dental industry benchmarks, not Rally guarantees. Your numbers will differ — that's what the first call is for." Then a small text link straight to the booking form.

Two format options — pick whichever you prefer, otherwise I build A:

- **A. Interactive** (recommended): the visitor moves the inputs and the numbers animate. Highest engagement, and it makes the money argument feel like theirs, not ours.
- **B. Static "typical practice"** version: same three projected numbers, fixed for a representative practice, with the assumptions listed beneath. Simpler, less to maintain.

## Details

- Before hardcoding anything, I'll verify the benchmark inputs (share of inbound calls missed by dental practices, average new-patient/case value by specialty, admin time per front-desk day) against citable published sources and put the source names in the panel. If a figure can't be sourced, it doesn't go in.
- Math stays visible and conservative: recovered patients = missed calls x conservative recovery share x conversion to start. All assumption values live in one constants block at the top of the file so they're easy to tune.
- Work is contained to `src/components/landing/stats.tsx`: the `stats` array and `Counter` are removed, replaced by the estimator. The existing headline, About copy, and the specialty tag row stay exactly as they are.
- Reuses existing primitives (`Reveal`, `MonoLabel`, `Section`) and brand tokens — no new colors, fonts, or dependencies. Numbers animate with the same easing the counters used, so the section keeps its current feel.
- Fully responsive: inputs stack above the three outputs on mobile, side by side on desktop.
