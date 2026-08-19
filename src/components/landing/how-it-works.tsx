import { Cta, PillBadge, Reveal, Section, SectionHeading } from "./primitives";

const steps = [
  {
    n: "01",
    title: "A free 25-minute call",
    price: "Free",
    body: "We learn how your practice runs and where AI would help the most. You leave with a short list of ideas, even if you stop here.",
  },
  {
    n: "02",
    title: "A live workshop with your team",
    price: "Paid, one-time",
    body: "We sit down with you and your team and work through your real tasks with AI, on your screen. Everyone leaves able to use it on Monday.",
  },
  {
    n: "03",
    title: "We stay on as your AI partner",
    price: "Monthly",
    body: "We build the workflows you don't have time to build, keep training your team, and stay on call as new tools show up. Month to month.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how" tone="bone">
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <PillBadge>How it works</PillBadge>
        </Reveal>
        <Reveal delay={60}>
          <SectionHeading
            className="mt-6"
            title="Three steps. You can stop after any of them."
            subtitle="Every practice is different. The process is the same."
          />
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal
            key={s.n}
            delay={i * 90}
            className={
              i === 0
                ? "tint lift flex h-full flex-col rounded-3xl border border-primary p-8"
                : "lift flex h-full flex-col rounded-3xl border border-border bg-white p-8"
            }
          >
            <span className="flex size-11 items-center justify-center rounded-full border border-primary/30 font-mono text-[13px] text-primary">
              {s.n}
            </span>
            <h3 className="mt-5 text-[20px] leading-snug font-semibold text-ink">{s.title}</h3>
            <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-warm-grey">{s.body}</p>
            <p className="mt-6 font-mono text-[11px] tracking-[0.12em] text-primary uppercase">
              {s.price}
            </p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={140} className="mt-12 flex flex-col items-center gap-3 text-center">
        <Cta />
        <p className="text-[14px] text-warm-grey">
          The first call is free. If we&apos;re not a fit, we&apos;ll say so on it.
        </p>
      </Reveal>
    </Section>
  );
}
