import type { ReactNode } from "react";

import { Footer } from "./footer";
import { Label } from "./primitives";
import { Nav } from "./nav";

export function LegalPage({
  heading,
  updated,
  children,
}: {
  heading: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-bone">
      <Nav />
      <main className="mx-auto w-full max-w-[820px] px-5 pt-[140px] pb-24 sm:px-8">
        <Label>Legal</Label>
        <h1 className="mt-5 text-[2.2rem] text-ink sm:text-[3rem]">{heading}</h1>
        <p className="mono-label mt-4 text-warm-grey">{updated}</p>
        <div className="legal-body mt-12 space-y-6 text-[16.5px] leading-[1.75] text-warm-grey [&>h2]:pt-4 [&>h2]:font-display [&>h2]:text-[1.3rem] [&>h2]:text-ink">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
