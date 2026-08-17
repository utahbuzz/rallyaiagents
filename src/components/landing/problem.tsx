import { Label, Reveal, Section } from "./primitives";

const costs = [
  {
    line: "A lead fills out your form Friday at 6pm.",
    consequence: "Your front desk sees it Monday. They booked somewhere else Saturday.",
  },
  {
    line: "Your phone rings while the coordinator is chairside.",
    consequence: "No voicemail, no callback, no consult.",
  },
  {
    line: "Someone asks about insurance at 10pm.",
    consequence: "They wanted an answer, not a form.",
  },
  {
    line: "Two hundred past-due patients sit in your system.",
    consequence: "Reaching out to them is a full day nobody has.",
  },
];

export function Problem() {
  return (
    <Section id="problem" tone="ink">
      <Reveal>
        <Label tone="bone">What this actually costs you</Label>
      </Reveal>

      <Reveal delay={70}>
        <h2 className="mt-6 max-w-[26ch] text-[2rem] text-bone sm:text-[3rem]">
          The leads are already there. Nobody is picking them up.
        </h2>
      </Reveal>

      <div className="mt-14">
        {costs.map((c, i) => (
          <Reveal
            key={c.line}
            delay={i * 80}
            className="grid gap-2 border-t border-bone/15 py-7 last:border-b md:grid-cols-2 md:gap-10"
          >
            <p className="font-display text-[1.35rem] leading-tight font-semibold text-bone sm:text-[1.6rem]">
              {c.line}
            </p>
            <p className="text-[16px] leading-relaxed text-bone/55">{c.consequence}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={80}>
        <p className="mt-12 font-display text-[1.4rem] font-semibold text-primary sm:text-[1.8rem]">
          None of this is a staffing problem. It&apos;s a coverage problem.
        </p>
      </Reveal>
    </Section>
  );
}
