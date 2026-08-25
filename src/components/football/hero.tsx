import { Reveal } from "@/components/landing/primitives";

import { BookCta, Eyebrow, FormCta } from "./primitives";

const proofPoints = [
  "One workflow at a time",
  "Live in weeks, not quarters",
  "Training always included",
];

export function FootballHero() {
  return (
    <section id="top" className="gridiron-glow relative pt-[76px]">
      <div
        aria-hidden
        className="yard-lines pointer-events-none absolute inset-0 opacity-40"
      />
      <div className="relative mx-auto w-full max-w-[1200px] px-5 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>AI workflows for football programs</Eyebrow>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-7 text-[2.6rem] leading-[1.03] font-semibold text-chalk sm:text-[4rem]">
              Football adopts first. The front office is next.
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 max-w-[56ch] text-[17.5px] leading-relaxed text-chalk-muted sm:text-[19px]">
              Instant replay, analytics departments, sports science — your sport has never waited
              for permission. Rally builds small, focused AI workflows that hand your staff their
              week back and get decisions made faster, without a platform rollout.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <BookCta />
              <FormCta />
            </div>
          </Reveal>

          <Reveal delay={260}>
            <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-3">
              {proofPoints.map((p) => (
                <li key={p} className="flex items-center gap-2 text-[14.5px] text-chalk-muted">
                  <span aria-hidden className="size-1.5 rounded-full bg-brand-bright" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
