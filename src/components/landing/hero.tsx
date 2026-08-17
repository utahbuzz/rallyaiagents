import { site } from "@/lib/site";

import { BookButton, Label, Reveal } from "./primitives";

export function Hero() {
  return (
    <section id="top" className="relative bg-bone pt-[112px]">
      <div className="mx-auto w-full max-w-[1160px] px-5 pb-16 sm:px-8 sm:pb-20">
        <Reveal>
          <Label tone="tangerine">AI partner for dental practices</Label>
        </Reveal>

        <Reveal delay={70}>
          <h1 className="mt-6 max-w-[22ch] text-[2.7rem] text-ink sm:text-[4.2rem] lg:text-[5.2rem]">
            Your front desk can&apos;t answer at 9pm. Ours can.
          </h1>
        </Reveal>

        <Reveal delay={130}>
          <p className="mt-7 max-w-[62ch] text-[17px] leading-[1.7] text-warm-grey sm:text-[18px]">
            Rally builds the AI systems that catch every lead, answer every question, and book the
            consult — configured for how your practice actually runs.
          </p>
        </Reveal>

        <Reveal delay={190} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <BookButton />
          <a
            href="#results"
            className="text-[15px] text-ink underline decoration-warm-grey/50 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
          >
            See what we built for {site.hubbardName}
          </a>
        </Reveal>
      </div>

      <div className="border-y border-border">
        <div className="mx-auto w-full max-w-[1160px] px-5 py-4 sm:px-8">
          <Label>Working with orthodontic, pediatric, and general dental practices</Label>
        </div>
      </div>
    </section>
  );
}
