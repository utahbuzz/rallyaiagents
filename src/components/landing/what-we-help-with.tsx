import { PillBadge, Reveal, Section, SectionHeading } from "./primitives";

const items = [
  {
    title: "After-hours questions",
    body: "New patients text at 8pm. They get an answer, not a callback on Thursday.",
  },
  {
    title: "Missed calls",
    body: "A text goes back in seconds, before the caller tries the office down the street.",
  },
  {
    title: "Follow-up nobody does",
    body: "Unscheduled treatment gets chased without anyone remembering to chase it.",
  },
  {
    title: "Insurance and paperwork",
    body: "The checking and typing your front desk squeezes in between patients.",
  },
  {
    title: "Notes and writing",
    body: "Letters, summaries, referrals, and the emails everyone keeps postponing.",
  },
  {
    title: "Teaching your team",
    body: "Half the win is just showing people what these tools already do.",
  },
];

export function WhatWeHelpWith() {
  return (
    <Section id="help" tone="white">
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <PillBadge>What we help with</PillBadge>
        </Reveal>
        <Reveal delay={60}>
          <SectionHeading
            className="mt-6"
            title="The boring parts of the day"
            subtitle="We start with whatever is costing you the most time. Usually it's one of these."
          />
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <Reveal
            key={it.title}
            delay={(i % 3) * 80}
            className="lift h-full rounded-3xl border border-border bg-white p-7"
          >
            <h3 className="text-[18px] leading-snug font-semibold text-ink">{it.title}</h3>
            <p className="mt-2.5 text-[15px] leading-relaxed text-warm-grey">{it.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
