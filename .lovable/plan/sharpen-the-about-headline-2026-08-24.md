# Sharpen the About headline

Replace the About section headline so it names the real problem instead of describing Rally.

## Change

In `src/components/landing/stats.tsx`:

- Headline becomes: "Most practices don't need more software. They need someone to show them."
- Keep the "About Rally" mono label above it unchanged.
- Adjust the first line of the supporting paragraph so it doesn't repeat the same idea back: open with what Rally actually does ("Rally teaches your team what AI can do in a dental practice, then builds the parts worth building."), and keep the rest of the paragraph as-is.

Everything else in the section — stat counters, specialty tags, layout, spacing — stays exactly the same.

## Technical notes

Single file edit, static copy only. Both apostrophes render as `&apos;` to match the existing convention in the file. No new components, styles, or data sources.
