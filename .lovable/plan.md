# Rally for Football Programs — new `/football` landing page

A separate single-page site at `/football` for high school and college football programs. The existing dental page at `/` stays exactly as it is. Two conversion paths carry equal weight throughout: book a free 15-minute scoping call, and a short lead-capture form that writes to the database.

## Look and feel

Dark, high-contrast, sideline-quiet rather than fan-facing. Near-black ink surfaces (#0E0E0C / #1A1A17) with Rally burgundy (#6B2332) as the single accent and bone (#F5F1E8) for text and light panels. Bold headline type, mono eyebrow labels, dashed vertical container guides, and thin burgundy hairlines used like yard markers. Scroll-reveal on section entry, no fan hype, no stadium stock photos.

Because the existing page is light-on-bone, the football page gets its own dark scoped surface (a `football-dark` wrapper plus a few dark-mode-safe tokens) so nothing about the dental page changes.

## Sections

1. **Sticky header** — Rally logo, anchor nav (Problem, Why now, How it works, Who it's for, FAQ), plus both CTAs always visible: solid "Book a free scoping call" and quieter "See if we're a fit".
2. **Hero** — headline on football's history of adopting innovation first, with the front office as the next edge. One-sentence subhead about time back for staff. Primary + secondary CTA immediately above the fold, minimal scroll to first action.
3. **The Problem — "Sound familiar?"** — three light columns: Front Office (5 items: recruiting sprawl, donor/alumni outreach, ticketing and lapsed holders, NIL and compliance deadlines, parent communication), Coaching Staff (3 items: manual film breakdown, practice planning from scratch, roster/eligibility risk), Players (2 items: static playbook PDFs, raw cutups instead of digestible feedback). Copy as supplied.
4. **The shift / why now** — replay, analytics departments, sports science, biomechanics as the lineage; front office is next, and early programs get the edge first. Forward-looking language only.
5. **How Rally works** — three light steps: free scoping call to find the biggest time-sink; one focused build live in weeks, not months; training included so staff run it themselves, with optional ongoing support. Framed as low-risk, not a vendor rollout.
6. **Who this is for** — two columns: High School Programs (volunteer-heavy staff, tight budgets, communication-first) and College Programs (NIL/compliance, recruiting scale, headcount pressure). Same page, no branching flows.
7. **Dual CTA band (mid-page)** — the two paths side by side with equal weight: calendar booking card and the lead form entry point.
8. **FAQ** — five short objection handlers: budget, technical staff, timeline, "not sure what to automate yet" (that's the scoping call), what training includes.
9. **Final CTA + footer** — both CTAs once more, the lead form, contact email placeholder, Rally wordmark and logo.

No testimonials, no client logos, no "trusted by", no invented stats or results anywhere on the page. Early-partner framing instead.

## Lead form

Fields: name, program/school, role (dropdown: head coach, athletic director, general manager, operations/front office, other), email, phone (optional), and biggest current pain point (dropdown covering recruiting, donor/alumni, ticketing, NIL/compliance, parent communication, film/scouting, not sure yet). Required fields validate inline with clear messages; the submit button disables while sending and the form swaps to a confirmation state on success, with a recoverable error state that keeps the entered answers.

Submissions save to a new `football_leads` table. The calendar CTA points at a placeholder booking URL in one shared constant, easy to swap for the real link later.

## Technical notes

- New route `src/routes/football.tsx` with its own `head()` metadata (title, description, og/twitter tags). Dental route and its components untouched.
- New components under `src/components/football/`: sticky header, hero, problem columns, shift, process, audiences, dual-CTA band, FAQ, lead form, footer. Reuse `Reveal`, `PillBadge`, `MonoLabel` from the existing landing primitives where they fit; new dark variants live in the football components.
- Dark surface tokens and a couple of utilities added to `src/styles.css` scoped to the football wrapper so the dental page's tokens are unaffected.
- Migration creates `public.football_leads` with GRANTs (insert for anon so the public form works, full access for service_role), RLS enabled, and an insert-only policy — no public read.
- New server function `src/lib/football-leads.functions.ts` with Zod validation mirroring the existing `submitLead` pattern.
- Booking placeholder URL kept in one exported constant.

## Note on priorities

Football is currently logged as a longer-term pipeline item, not active. This page moves it toward active — worth updating priorities if that reflects the new reality.
