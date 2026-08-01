import { CalendarX2, Target, TimerOff, TriangleAlert } from "lucide-react";

import { Reveal, Section, SectionHeading, SectionPill } from "./primitives";

const pains = [
  {
    icon: TimerOff,
    title: "Slow follow-up kills leads",
    body: "A lead that waits 5 minutes is 10x less likely to book. Your team can't text back instantly every time.",
  },
  {
    icon: CalendarX2,
    title: "No-shows waste your time",
    body: "You blocked the chair, prepped the team, and they just... didn't come. No call, no text, nothing.",
  },
  {
    icon: Target,
    title: "Agencies sell leads, not patients",
    body: "You're paying for leads that never convert. High volume, high no-show, high frustration.",
  },
];

export function Problem() {
  return (
    <Section id="problem" tone="white">
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <SectionPill icon={TriangleAlert}>Why Rally</SectionPill>
        </Reveal>
        <Reveal delay={60}>
          <SectionHeading
            className="mt-6"
            title="Leads come in. Patients don't show up."
            subtitle="You're spending thousands on ads. Your front desk is buried in follow-up. And half your consults are empty chairs."
          />
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {pains.map((p, i) => (
          <Reveal
            key={p.title}
            delay={i * 90}
            className="rounded-3xl border border-border bg-cream p-7 transition-colors hover:bg-muted"
          >
            <span className="tint flex size-11 items-center justify-center rounded-2xl">
              <p.icon className="size-5 text-primary" strokeWidth={2} />
            </span>
            <h3 className="mt-5 text-[19px] font-medium text-ink">{p.title}</h3>
            <p className="mt-2.5 text-[14.5px] leading-relaxed text-warm-grey">{p.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
