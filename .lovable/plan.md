# Unique preview per option in the hero widget

Right now every option in the "What AI could do in your practice" widget renders the same chat-thread mock. Only the words change. Give each option its own screen type so the panel actually looks like the tool doing that job.

## Screen per option

- Phone rings while you're chairside — missed-call card: caller row with timestamp, "no one picked up" status, then the auto-reply text bubble and the patient's reply.
- Calls after you close — text thread on an after-hours clock, with two selectable appointment-slot chips under it.
- Patients who never scheduled treatment — a small worklist table: patient, treatment, date diagnosed, status (Texted / Booked / No reply), with a count header.
- Insurance and benefits checks — a verification summary board: three counters (Confirmed / Lapsed / Needs a call) plus two flagged patient rows.
- Recall and reactivation — a progress view: overdue count, a filled-slots bar, and two booked-slot rows.
- Notes, letters, and admin writing — a document draft: letterhead line, subject, a few greyed body lines, and a Review / Send footer row.

Each keeps the existing three-line summary below it (What AI does / What changes / Practices ahead of you), the fade-in on change, auto-rotation, and the burgundy/bone styling.

## Technical notes

- In `src/components/landing/hero-widget.tsx`, replace the `screen: { title, meta, lines }` shape with a discriminated union (`kind: "call" | "thread" | "worklist" | "verify" | "recall" | "doc"` plus per-kind data), and render through a small switch of local sub-components in the same file.
- No copy changes to `does` / `changes` / `competitors`. No new dependencies, no backend work.
