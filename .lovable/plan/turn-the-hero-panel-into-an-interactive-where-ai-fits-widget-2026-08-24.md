# Turn the hero panel into an interactive "where AI fits" widget

Right now the floating panel under the hero headline is a static screenshot-style mock. It becomes the first thing a prospect actually plays with: they click the part of their day that hurts, and the panel shows what AI does about it, what it changes, and how practices ahead of them are already using it.

Title: **"What AI could do in your practice"**, with a smaller line under it: "Pick where your day gets hardest. This is what the practices ahead of you already automated." (Alternates if you prefer: "How your competitors are using AI to win" or "Where AI fits in your practice".)

## How it works

Left side: six clickable rows a dental team recognises instantly.
- Phone rings while you're chairside
- Calls after you close
- Patients who never scheduled treatment
- Insurance and benefits checks
- Recall and reactivation
- Notes, letters, and admin writing

Right side: the selected row expands into a live-looking panel with four things:
1. A small mock of the thing happening (a text thread, a missed-call auto-reply, a follow-up sequence) — reuses the existing chat/call mock styling.
2. "What AI does" — one plain sentence.
3. "What changes" — one short outcome line, no invented metrics.
4. "Practices ahead of you" — one line of competitive framing, e.g. "The offices taking your after-hours callers answer in seconds, at 9pm, without a person."

Behaviour:
- First row is selected on load. The widget quietly auto-advances every few seconds so it looks alive; the moment the visitor clicks anything, auto-advance stops for good.
- Panel content cross-fades on change. Keyboard accessible (real buttons, arrow-key friendly, `aria-selected`).
- A footer strip inside the widget: "Not sure which one is yours? That's the first call." with a link to the booking form.
- On mobile the six rows become a horizontally scrollable chip row above the panel, so the widget stays short.

## Details

- New file `src/components/landing/hero-widget.tsx` holding the widget and its content array (one entry per row: label, icon, what-AI-does, what-changes, competitor line, mock type). All copy lives in that array so it's easy to edit.
- `src/components/landing/hero.tsx` swaps `DashboardMock` for the new widget inside the existing `float-card` wrapper — the glow, overlap, and spacing stay identical.
- `DashboardMock` stays in `src/components/landing/mocks.tsx` untouched because the features section still uses it. Small mock variants for the widget panel are added there or built inline in the widget, reusing the same bone/burgundy card styling.
- No new dependencies, no new colors or fonts, no backend. Icons come from the `lucide-react` set already in use.
- Copy follows the existing voice: short sentences, second person, no exclamation points, no fabricated numbers.
