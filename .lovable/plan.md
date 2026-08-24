# Rewrite the About headline with no easy out

The current headline ("Most practices don't need more software. They need someone to show them.") lets a reader nod along and move on. Replace it with a line that names the cost of waiting, so doing nothing stops feeling free.

## Change

In `src/components/landing/stats.tsx`:

- Headline becomes: "Doing nothing about AI is a decision. It's just the expensive one."
- Keep the "About Rally" mono label, stat counters, specialty tags, and layout unchanged.
- Follow the headline with a paragraph that keeps the pressure and then offers the path: open with the practices already using AI pulling ahead on scheduling, follow-up, and unscheduled treatment, then Rally teaching your team what AI can do in a dental practice and building the parts worth building. Keep the existing "no enterprise software to buy, no year-long contract, no jargon" reassurance and the closing line about working on your real tasks with your team in the room.

## Technical notes

Static copy edit in one file. Apostrophes written as `&apos;` to match the file's existing convention. No new components, styles, or data sources.
