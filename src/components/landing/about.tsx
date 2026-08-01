import { Building2 } from "lucide-react";

import { Reveal, Section, SectionPill } from "./primitives";

const tags = [
  { label: "Orthodontics", className: "rotate-[-6deg] sm:ml-0" },
  { label: "AI Agents", className: "rotate-[4deg] sm:ml-16" },
  { label: "Lead Gen", className: "rotate-[-3deg] sm:ml-4" },
  { label: "Patient Follow-up", className: "rotate-[6deg] sm:ml-20" },
  { label: "Voice AI", className: "rotate-[-5deg] sm:ml-8" },
  { label: "SMS Automation", className: "rotate-[3deg] sm:ml-24" },
];

const stats = [
  { value: "93%", label: "Show-up rate" },
  { value: "<30s", label: "Response time" },
  { value: "24/7", label: "Always on" },
];

export function About() {
  return (
    <Section tone="bone">
      <Reveal>
        <SectionPill icon={Building2}>About Rally</SectionPill>
      </Reveal>

      <div className="mt-8 grid gap-12 lg:grid-cols-[1.45fr_1fr] lg:items-center lg:gap-16">
        <Reveal delay={60}>
          <p className="text-fade-statement font-display text-[1.6rem] leading-[1.3] font-medium sm:text-[2.1rem] sm:leading-[1.28]">
            We&apos;re an AI agency built for orthodontic practices. We deploy intelligent agents
            that handle every step from first contact to seated consult — so your front desk can
            focus on patients, not follow-up. We believe great technology should feel invisible.
            Your patients get fast, personal responses. You get full chairs.
          </p>
        </Reveal>

        <Reveal delay={140} className="flex flex-wrap gap-3 lg:flex-col lg:items-start">
          {tags.map((t) => (
            <span
              key={t.label}
              className={`inline-flex rounded-full border border-tint bg-background px-4 py-2 text-[13.5px] font-medium text-ink shadow-[0_10px_24px_-18px_rgba(26,26,23,0.5)] transition-transform hover:rotate-0 ${t.className}`}
            >
              {t.label}
            </span>
          ))}
        </Reveal>
      </div>

      <Reveal delay={100} className="mt-14 grid gap-8 border-t border-border pt-10 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-display text-[2.4rem] leading-none font-medium text-primary">
              {s.value}
            </p>
            <p className="mt-2 text-[14px] text-warm-grey">{s.label}</p>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
