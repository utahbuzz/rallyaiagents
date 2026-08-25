import rallyLogo from "@/assets/rally-logo.png.asset.json";

import { BOOKING_URL, CONTACT_EMAIL } from "./primitives";

const links = [
  { label: "The problem", href: "#problem" },
  { label: "Why now", href: "#shift" },
  { label: "How it works", href: "#process" },
  { label: "Who it's for", href: "#programs" },
  { label: "FAQ", href: "#faq" },
];

export function FootballFooter() {
  return (
    <footer className="border-t border-night-line bg-night">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <img src={rallyLogo.url} alt="Rally" className="h-10 w-auto brightness-0 invert" />
            <p className="mt-5 text-[15px] leading-relaxed text-chalk-muted">
              Rally builds small, focused AI workflows for football programs — and trains your staff
              to run them.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="focus-ring mt-4 inline-block text-[15px] font-medium text-chalk hover:text-brand-bright"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <nav aria-label="Footer" className="grid gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="focus-ring text-[15px] text-chalk-muted transition-colors hover:text-chalk"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-[15px] font-semibold text-primary-foreground transition-colors hover:bg-brand-bright"
            >
              Book a free scoping call
            </a>
            <a
              href="#fit"
              className="focus-ring inline-flex items-center justify-center rounded-full border border-night-line px-6 py-3.5 text-[15px] font-semibold text-chalk transition-colors hover:border-brand-bright"
            >
              See if we&apos;re a fit
            </a>
          </div>
        </div>

        <p className="mt-12 border-t border-night-line pt-6 text-[13.5px] text-chalk-muted">
          &copy; {new Date().getFullYear()} Rally. Built for programs ready to move first.
        </p>
      </div>
    </footer>
  );
}
