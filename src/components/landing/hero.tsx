import { Check } from "lucide-react";

import { Cta, PillBadge, Reveal } from "./primitives";
import { ScopeCard } from "./scope-card";

const reassurances = [
  "No retainer to start",
  "No software to buy",
  "Miss the target and you don't pay the retainer",
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

        <div className="relative flex flex-col items-center pt-12 text-center sm:pt-20">
          <Reveal>
            <PillBadge>AI partner for dental and ortho</PillBadge>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-7 max-w-[20ch] text-[2.5rem] leading-[1.06] font-semibold text-ink sm:text-[3.6rem] lg:text-[4.2rem]">
              Your practice already has AI.{" "}
              <span className="text-primary">It just isn&apos;t moving anything.</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 max-w-[56ch] text-[16.5px] leading-relaxed text-warm-grey sm:text-[17.5px]">
              About 43% of practices say they use AI somewhere. Almost none of it touches the front
              office, which is where the money actually leaks. That&apos;s the part we fix.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
              <Cta />
              <Cta variant="outline" href="#method" label="See how it works" />
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

        {/* Scope card floats over the next section */}
        <Reveal delay={140} className="relative z-10 mt-16 -mb-20 sm:mt-20 sm:-mb-28">
          <ScopeCard />
        </Reveal>
      </div>
    </section>
  );
}
