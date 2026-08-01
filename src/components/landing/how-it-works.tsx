import { CalendarCheck2, Route, Rocket, Search } from "lucide-react";

import { Reveal, Section, SectionHeading, SectionPill } from "./primitives";

const steps = [
  {
    icon: Search,
    title: "We learn your practice",
    body: "A quick discovery call to understand your services, hours, insurance, and what makes your practice special.",
  },
  {
    icon: Rocket,
    title: "Your agent goes live",
    body: "We deploy your AI across your website, phone, and text. It answers questions, books consults, and follows up — 24/7.",
  },
  {
    icon: CalendarCheck2,
    title: "Patients show up",
    body: "Your agent sends confirmations, reminders, and re-engages no-shows. You only pay for patients who sit in the chair.",
  },
];

function DashedCurve({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 60"
      className={`absolute top-9 hidden h-14 w-full md:block ${flip ? "scale-y-[-1]" : ""}`}
      fill="none"
    >
      <path
        d="M2 30 C 55 -8, 145 -8, 198 30"
        stroke="var(--tint-strong)"
        strokeWidth="2"
        strokeDasharray="7 8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HowItWorks() {
  return (
    <Section id="how" tone="bone">
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <SectionPill icon={Route}>How it works</SectionPill>
        </Reveal>
        <Reveal delay={60}>
          <SectionHeading
            className="mt-6"
            title="Three steps to full chairs"
            subtitle="No setup fees. No long contracts. We plug in, your AI agent goes live, and patients start showing up."
          />
        </Reveal>
      </div>

      <div className="relative mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
        {/* dashed connectors between the circles */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 hidden md:block">
          <div className="mx-auto grid max-w-full grid-cols-3">
            <div className="relative col-start-1 col-end-3 px-[18%]">
              <DashedCurve />
            </div>
            <div className="relative col-start-2 col-end-4 px-[18%]">
              <DashedCurve flip />
            </div>
          </div>
        </div>

        {steps.map((s, i) => (
          <Reveal
            key={s.title}
            delay={i * 110}
            className="relative flex flex-col items-center text-center"
          >
            <span className="tint relative z-10 flex size-[72px] items-center justify-center rounded-full border border-tint bg-background">
              <s.icon className="size-6 text-primary" strokeWidth={1.9} />
            </span>
            <span className="mt-4 text-[12px] font-semibold tracking-widest text-primary uppercase">
              Step {i + 1}
            </span>
            <h3 className="mt-2 text-[20px] font-medium text-ink">{s.title}</h3>
            <p className="mt-2.5 max-w-[34ch] text-[14.5px] leading-relaxed text-warm-grey">
              {s.body}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
