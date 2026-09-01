import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

import rallyLogo from "@/assets/rally-logo.png.asset.json";

export function LegalShell({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-bone">
      <header className="border-b border-border bg-bone">
        <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-5 sm:px-8">
          <Link to="/" className="focus-ring rounded-md" aria-label="Rally home">
            <img src={rallyLogo.url} alt="Rally" className="h-8 w-auto" />
          </Link>
          <Link
            to="/"
            className="focus-ring rounded-md text-[14px] font-medium text-ink transition-colors hover:text-primary"
          >
            ← Back to Rally
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="font-mono text-[11px] tracking-[0.14em] text-warm-grey uppercase">{eyebrow}</p>
        <h1 className="mt-3 font-display text-[2.2rem] leading-[1.1] font-semibold text-ink sm:text-[2.8rem]">
          {title}
        </h1>
        <p className="mt-4 text-[14px] text-warm-grey">Last updated: {updated}</p>
        <div className="mt-10 space-y-10">{children}</div>
      </main>

      <footer className="border-t border-border bg-bone">
        <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-3 px-5 py-6 sm:px-8">
          <p className="text-[13.5px] text-warm-grey">© 2026 Rally Co. All rights reserved.</p>
          <div className="flex items-center gap-5 text-[13.5px]">
            <Link to="/privacy" className="focus-ring rounded-md text-warm-grey transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms" className="focus-ring rounded-md text-warm-grey transition-colors hover:text-primary">
              Terms of Service
            </Link>
            <a
              href="mailto:hello@try-rally.com"
              className="focus-ring rounded-md text-warm-grey transition-colors hover:text-primary"
            >
              hello@try-rally.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-[20px] font-semibold text-ink">{title}</h2>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-warm-grey">{children}</div>
    </section>
  );
}

export function Placeholder() {
  return <p className="text-warm-grey/60">[Your text here]</p>;
}