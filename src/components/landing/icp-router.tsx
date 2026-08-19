import { ArrowRight } from "lucide-react";

import { MonoLabel, PillBadge, Reveal, Section, SectionHeading } from "./primitives";

const cards = [
  {
    label: "Solo / two-provider",
    title: "My front desk is drowning",
    body: "Two people, forty jobs, and the phone doesn't stop. Follow-up is the first thing to go.",
    href: "#build",
  },
  {
    label: "Growing multi-provider",
    title: "We bought tools and nothing changed",
    body: "You have the software. Nobody owns the workflow, so it sits there looking modern.",
    href: "#method",
  },
  {
    label: "Multi-location / DSO",
    title: "I need this to work the same at every office",
    body: "One location figured it out. The other four each invented their own version.",
    href: "#case-study",
  },
];

export function IcpRouter() {
  return (
    <Section tone="white">
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <PillBadge>Start here</PillBadge>
        </Reveal>
        <Reveal delay={60}>
          <SectionHeading
            className="mt-6"
            title="Which one sounds like your Tuesday?"
            subtitle="Pick the closest fit. It changes what we'd actually build for you."
          />
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 90}>
            <a
              href={c.href}
              className="lift focus-ring flex h-full flex-col rounded-3xl border border-border bg-white p-7"
            >
              <MonoLabel>{c.label}</MonoLabel>
              <h3 className="mt-4 text-[20px] leading-snug font-semibold text-ink">{c.title}</h3>
              <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-warm-grey">{c.body}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-primary">
                That&apos;s me
                <ArrowRight className="size-4" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
