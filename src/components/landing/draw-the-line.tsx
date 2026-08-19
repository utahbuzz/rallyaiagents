import { Check, X } from "lucide-react";

import { PillBadge, Reveal, Section, SectionHeading } from "./primitives";

const build = [
  "New patient intake and scheduling",
  "Insurance verification and benefit checks",
  "Follow-up on every lead, every time",
  "Recall and reactivation outreach",
  "Note drafting, reviewed by a human before it counts",
];

const wont = [
  "Treatment recommendations",
  "Diagnosis of any kind",
  "Unsupervised clinical explanation to patients",
  "Anything that nudges a patient toward more treatment",
];

export function DrawTheLine() {
  return (
    <Section id="limits" tone="white">
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <PillBadge>Our limits</PillBadge>
        </Reveal>
        <Reveal delay={60}>
          <SectionHeading
            className="mt-6"
            title="Where we draw the line"
            subtitle="Administrative work is ours. Clinical judgment is yours. We don't blur that, and we won't be talked into it."
          />
        </Reveal>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        <Reveal className="tint rounded-3xl border border-tint p-8 sm:p-10">
          <p className="font-mono text-[11px] tracking-[0.14em] text-primary uppercase">
            What we build
          </p>
          <ul className="mt-6 space-y-4">
            {build.map((b) => (
              <li key={b} className="flex gap-3 text-[15.5px] leading-relaxed text-ink">
                <Check className="mt-0.5 size-4.5 shrink-0 text-primary" strokeWidth={2.4} />
                {b}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100} className="rounded-3xl border border-dashed border-border bg-bone/40 p-8 sm:p-10">
          <p className="font-mono text-[11px] tracking-[0.14em] text-warm-grey uppercase">
            What we won&apos;t touch
          </p>
          <ul className="mt-6 space-y-4">
            {wont.map((w) => (
              <li key={w} className="flex gap-3 text-[15.5px] leading-relaxed text-warm-grey">
                <X className="mt-0.5 size-4.5 shrink-0 text-warm-grey" strokeWidth={2.4} />
                {w}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal delay={140} className="mt-14">
        <blockquote className="mx-auto max-w-[46ch] text-center font-display text-[1.6rem] leading-snug font-semibold text-ink sm:text-[2rem]">
          &ldquo;A patient&apos;s care is decided by the person licensed to decide it. Everything
          else is logistics, and logistics is what we automate.&rdquo;
        </blockquote>
      </Reveal>
    </Section>
  );
}
