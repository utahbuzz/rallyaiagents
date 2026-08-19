import { Check } from "lucide-react";

import { Cta, PillBadge, Reveal } from "./primitives";

const reassurances = ["Free first call", "No software to buy", "Plain English, no jargon"];

export function Hero() {
  return (
    <section id="top" className="hero-glow relative z-10 pt-[100px]">
      <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-5 hidden border-l border-dashed border-border sm:left-8 lg:block"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-5 hidden border-r border-dashed border-border sm:right-8 lg:block"
        />

        <div className="relative flex flex-col items-center pt-12 pb-16 text-center sm:pt-20 sm:pb-24">
          <Reveal>
            <PillBadge>AI partners for dental practices</PillBadge>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-7 max-w-[24ch] text-[2.5rem] leading-[1.06] font-semibold text-ink sm:text-[3.6rem] lg:text-[4rem]">
              We help your practice actually use AI.
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-warm-grey sm:text-[18px]">
              We teach your team what AI can do for a dental practice, then build the parts that
              save you the most time. Start with one free 25-minute call.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
              <Cta />
              <Cta variant="outline" href="#how" label="See how it works" />
            </div>
          </Reveal>

          <Reveal delay={260}>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5">
              {reassurances.map((r) => (
                <li key={r} className="flex items-center gap-2 text-[14.5px] text-warm-grey">
                  <Check className="size-4 shrink-0 text-primary" strokeWidth={2.4} />
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
