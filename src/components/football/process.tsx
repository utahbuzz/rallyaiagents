import { Reveal } from "@/components/landing/primitives";

import { Eyebrow, Heading, SectionShell } from "./primitives";

const steps = [
  {
    n: "01",
    title: "A free 15-minute scoping call",
    body: "We ask how your week actually runs and find the biggest time-sink. You leave with a straight answer about what's worth automating, whether or not you hire us.",
    tag: "Free",
  },
  {
    n: "02",
    title: "One focused build",
    body: "We build the single workflow that clears the most hours. Live in weeks, not a season. No platform migration, no rip-and-replace.",
    tag: "One workflow",
  },
  {
    n: "03",
    title: "Training so it's yours",
    body: "Every engagement includes training your staff on how to run and change it themselves. Ongoing support is available, not required.",
    tag: "Included",
  },
];

export function FootballProcess() {
  return (
    <SectionShell id="process" tone="raised">
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <Eyebrow>How Rally works</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <Heading
            className="mt-6"
            title="Three steps. You can stop after any of them."
            subtitle="This is deliberately small. One bottleneck, one build, one trained staff — then you decide if there's a second."
          />
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal
            key={s.n}
            delay={i * 90}
            className="lift-dark flex h-full flex-col rounded-3xl border border-night-line bg-night p-8"
          >
            <span className="border-brand-dark flex size-11 items-center justify-center rounded-full border text-[13px] font-semibold text-brand-bright">
              {s.n}
            </span>
            <h3 className="mt-5 text-[20px] leading-snug font-semibold text-chalk">{s.title}</h3>
            <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-chalk-muted">{s.body}</p>
            <p className="mt-6 text-[11px] font-semibold tracking-[0.16em] text-brand-bright uppercase">
              {s.tag}
            </p>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
