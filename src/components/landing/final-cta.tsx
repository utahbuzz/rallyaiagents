import { ArrowRight } from "lucide-react";

import { Reveal } from "./primitives";

export function FinalCta() {
  return (
    <section id="book" className="bg-background">
      <div className="cta-gradient relative overflow-hidden rounded-t-[2.5rem]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.5) 0, transparent 45%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.35) 0, transparent 40%)",
          }}
        />
        <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center px-5 py-24 text-center sm:px-8 sm:py-32">
          <Reveal>
            <span className="rounded-full border border-primary-foreground/25 px-3.5 py-1.5 text-[13px] font-medium text-primary-foreground/80">
              15-minute discovery call
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 max-w-[20ch] text-[2.4rem] leading-[1.05] font-medium text-primary-foreground sm:text-[3.4rem]">
              Ready to fill your chairs?
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 max-w-[52ch] text-[15.5px] leading-relaxed text-primary-foreground/75">
              Book a 15-minute discovery call. We&apos;ll show you exactly how Rally works for your
              practice.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <a
              href="#book"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-[15px] font-semibold text-primary transition-transform hover:scale-[1.03]"
            >
              Book your free call
              <ArrowRight className="size-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
