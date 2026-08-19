import { PillBadge, Reveal, Section, SectionHeading } from "./primitives";

const items = [
  {
    title: "Answering after-hours questions",
    body: "New patients text at 8pm. They get a real answer instead of a callback on Thursday.",
  },
  {
    title: "Missed calls and voicemails",
    body: "Every missed call gets a text back in seconds so the caller doesn't book somewhere else.",
  },
  {
    title: "Follow-up that never happens",
    body: "Unscheduled treatment and cold leads get followed up on without anyone remembering to.",
  },
  {
    title: "Insurance and paperwork",
    body: "The repetitive checking and typing your front desk does between patients.",
  },
  {
    title: "Notes and admin writing",
    body: "Letters, summaries, referral notes, and the emails nobody wants to write.",
  },
  {
    title: "Teaching your team",
    body: "The biggest win is usually just showing people what these tools can already do.",
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
