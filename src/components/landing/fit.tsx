import { Check, X } from "lucide-react";

import { PillBadge, Reveal, Section, SectionHeading } from "./primitives";

const works = [
  "You have more demand than your front desk can answer",
  "You can name one number you want moved",
  "Someone on your team can approve a decision without a committee",
  "You're fine starting with one workflow instead of ten",
];

const isnt = [
  "You want a full front-office replacement in week one",
  "Nobody can share a baseline, even roughly",
  "You need every change approved by a corporate committee",
  "You're shopping for the cheapest chatbot on the market",
];

export function Fit() {
  return (
    <Section tone="white">
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <PillBadge>Fit</PillBadge>
        </Reveal>
        <Reveal delay={60}>
          <SectionHeading
            className="mt-6"
            title="This isn't right for everybody"
            subtitle="Most practices can't tell you their own baseline, which is a little uncomfortable for everyone. We'd rather sort that out before you pay us."
          />
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <Reveal className="tint rounded-3xl border border-tint p-8 sm:p-10">
          <h3 className="text-[19px] font-semibold text-ink">Rally works when…</h3>
          <ul className="mt-6 space-y-4">
            {works.map((w) => (
              <li key={w} className="flex gap-3 text-[15.5px] leading-relaxed text-ink">
                <Check className="mt-0.5 size-4.5 shrink-0 text-primary" strokeWidth={2.4} />
                {w}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100} className="rounded-3xl border border-border bg-bone/40 p-8 sm:p-10">
          <h3 className="text-[19px] font-semibold text-warm-grey">Rally isn&apos;t right if…</h3>
          <ul className="mt-6 space-y-4">
            {isnt.map((w) => (
              <li key={w} className="flex gap-3 text-[15.5px] leading-relaxed text-warm-grey">
                <X className="mt-0.5 size-4.5 shrink-0 text-warm-grey" strokeWidth={2.4} />
                {w}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal delay={140} className="mt-10">
        <p className="mx-auto max-w-[56ch] text-center text-[15.5px] leading-relaxed text-warm-grey">
          We take a small number of practices at a time, because the work is operational and we
          actually have to run it.
        </p>
      </Reveal>
    </Section>
  );
}
