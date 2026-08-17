import { Link } from "@tanstack/react-router";

import { site } from "@/lib/site";

import { Label } from "./primitives";
import { Wordmark } from "./wordmark";

const nav = [
  { label: "How it works", href: "#how-we-work" },
  { label: "What we build", href: "#what-we-build" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="bg-bone">
      <div className="mx-auto w-full max-w-[1160px] border-t border-border px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Wordmark />
            <p className="mt-4 max-w-[34ch] text-[15.5px] text-warm-grey">
              The AI partner for dental practices.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-2.5">
            <Label className="mb-2">Site</Label>
            {nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="w-fit text-[15.5px] text-ink transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2.5">
            <Label className="mb-2">Contact</Label>
            <a
              href={`mailto:${site.email}`}
              className="w-fit text-[15.5px] text-ink transition-colors hover:text-primary"
            >
              {site.email}
            </a>
            <Link
              to="/privacy"
              className="w-fit text-[15.5px] text-ink transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="w-fit text-[15.5px] text-ink transition-colors hover:text-primary"
            >
              Terms of Use
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <Label>© {new Date().getFullYear()} Rally. All rights reserved.</Label>
        </div>
      </div>
    </footer>
  );
}
