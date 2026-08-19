import { BadgeCheck, Fingerprint, Plug, ShieldCheck, Sparkle, Unlock } from "lucide-react";

import { Reveal, Section, SectionHeading, SectionPill } from "./primitives";

const rowOne = [
  {
    icon: Plug,
    title: "Works with any PMS",
    body: "Integrates alongside your existing practice management system. No migration, no disruption.",
  },
  {
    icon: ShieldCheck,
    title: "HIPAA-conscious design",
    body: "Minimum PHI exposure. We collect and store only what's needed, never route clinical data through uncovered systems.",
  },
  {
    icon: Fingerprint,
    title: "Custom to your practice",
    body: "Your agent knows your services, hours, insurance, providers, and personality. Not a generic chatbot.",
  },
];

const rowTwo = [
  {
    icon: Unlock,
    title: "No contracts, cancel anytime",
    body: "Month-to-month. If Rally isn't filling chairs, you walk away. We earn your business every month.",
  },
  {
    icon: BadgeCheck,
    title: "Transparent results",
    body: "See every lead, every conversation, every consult. Know exactly what you're paying for and why.",
  },
];

function Card({
  icon: Icon,
  title,
  body,
  delay,
}: {
  icon: typeof Plug;
  title: string;
  body: string;
  delay: number;
}) {
  return (
    <Reveal
      delay={delay}
      className="rounded-3xl border border-border bg-background p-7 transition-colors hover:bg-cream"
    >
      <span className="tint flex size-11 items-center justify-center rounded-2xl">
        <Icon className="size-5 text-primary" strokeWidth={2} />
      </span>
      <h3 className="mt-5 text-[19px] font-medium text-ink">{title}</h3>
      <p className="mt-2.5 text-[14.5px] leading-relaxed text-warm-grey">{body}</p>
    </Reveal>
  );
}

export function Benefits() {
  return (
    <Section tone="bone">
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <SectionPill icon={Sparkle}>Benefits</SectionPill>
        </Reveal>
        <Reveal delay={60}>
          <SectionHeading
            className="mt-6"
            title="Built for practices, not tech companies"
            subtitle="AI that works around your schedule, your systems, and your patients."
          />
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {rowOne.map((c, i) => (
          <Card key={c.title} {...c} delay={i * 90} />
        ))}
      </div>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {rowTwo.map((c, i) => (
          <Card key={c.title} {...c} delay={i * 90} />
        ))}
      </div>
    </Section>
  );
}
