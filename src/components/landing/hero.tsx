import { Check } from "lucide-react";

import { HeroWidget } from "./hero-widget";
import { Cta, PillBadge, Reveal } from "./primitives";

const reassurances = [
  "See where AI fits in your practice",
  "Find out what competitors already run",
  "Leave the call with a plan, not a pitch",
];


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

        <div className="relative flex flex-col items-center pt-12 pb-0 text-center sm:pt-20">
          <Reveal>
            <PillBadge>AI partners for dental practices</PillBadge>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-7 max-w-[24ch] text-[2.5rem] leading-[1.06] font-semibold text-ink sm:text-[3.6rem] lg:text-[4rem]">
              Not sure where AI fits in your practice? Let&apos;s find out.
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-warm-grey sm:text-[18px]">
              Your team learns it. We build the rest. It starts with one free 25-minute call, which
              is less time than you spent on hold with a payer today.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
              <Cta />
              <Cta variant="outline" href="#how" label="See how it works" />
            </div>
          </Reveal>


          <Reveal delay={240}>
            <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5">
              {reassurances.map((r) => (
                <li key={r} className="flex items-center gap-2 text-[14.5px] text-warm-grey">
                  <Check className="size-4 shrink-0 text-primary" strokeWidth={2.4} />
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={320}
            className="float-card relative z-10 mt-14 w-full max-w-[960px] translate-y-12 rounded-[1.8rem] border border-border bg-white/70 p-3 backdrop-blur sm:mt-16 sm:p-4"
          >
            <HeroWidget />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
