# Privacy Policy & Terms of Service pages

## Goal
Add app-owned Privacy Policy and Terms of Service pages for the Rally landing site, link them from the landing footer, and standardize the contact email to hello@try-rally.com everywhere.

Company identity: **Rally Co.** · Contact: **hello@try-rally.com** · Scope: landing site footer only (football footer gets no new links).

## 1. New routes

Create two standalone pages with a minimal legal-document layout (they do NOT reuse the landing Nav/Footer — those anchor links like `#how` only work on the landing page):

- **`src/routes/privacy.tsx`** → `/privacy`
- **`src/routes/terms.tsx`** → `/terms`

Each page gets:
- A slim brand header: Rally logo (links back to `/`) + "← Back to Rally".
- A document shell: centered prose column, title, "Last updated" line, and the standard section headings (e.g. Information we collect / How we use it / Sharing / Retention / Your rights for Privacy; Use of the service / IP / No guarantee of results / Liability / Contact for Terms).
- Body text under each heading starts as clearly marked placeholders (`[Your text here]`) — the footer links go live now, and the user pastes their own lawyer-drafted text in chat afterward; I drop it in verbatim.
- A slim bottom bar: © 2026 Rally Co. · Privacy Policy · Terms of Service · hello@try-rally.com.
- `head()` with unique SEO metadata per route (title, description, og:title, og:description, og:type, twitter:card). No og:image — no meaningful absolute hero image; hosting supplies the preview.

Content guardrail: the policies must describe what the site actually collects (lead form: name, practice name, email/mobile, practice size, "where the day gets hardest" → stored in the backend `leads` table). No HIPAA/SOC 2/compliance claims unless the user supplies them.

## 2. Landing footer links

In `src/components/landing/footer.tsx`, add **Privacy Policy** and **Terms of Service** links to the bottom bar (next to "© 2026 Rally Co."), styled like the existing muted footer text with hover. Use TanStack `<Link to="/privacy">` / `<Link to="/terms">`.

## 3. Email consistency (everywhere)

- `src/components/landing/final-cta.tsx` (line 215): `hello@rally.ai` → `hello@try-rally.com`
- `src/components/football/primitives.tsx` (line 7): `CONTACT_EMAIL = "football@rally.ai"` → `hello@try-rally.com` (rendered in the football footer)
- Copyright line already reads "© 2026 Rally Co." — no change.

## 4. Verification

- Build passes (`/tmp/observability/build-errors.log`).
- Grep confirms no `rally.ai` email remains.
- Live preview: footer shows both links, `/privacy` and `/terms` render with unique titles and no broken anchors.