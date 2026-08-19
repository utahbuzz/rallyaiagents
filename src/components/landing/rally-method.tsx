import { PillBadge, Reveal, Section, SectionHeading } from "./primitives";

const rungs = [
  {
    n: "01",
    title: "The call",
    body: "Twenty-five minutes. We find the bucket, the KPI, the baseline, and the target. You leave with those four answers whether you hire us or not.",
    price: "Free",
  },
  {
    n: "02",
    title: "The audit",
    body: "We watch how a lead actually moves through your practice, from first text to seated chair. It's usually less of a system than everyone thinks.",
    price: "$300–500",
  },
  {
    n: "03",
    title: "The build",
    body: "One workflow, built and shipped against the scope card. Intake, verification, follow-up, recall — whichever one is costing you the most.",
    price: "$2,500–10,000",
  },
  {
    n: "04",
    title: "The run",
    body: "We operate it, report on the KPI, and keep tuning. Miss the 60-day target and you don't pay the retainer.",
    price: "$3,000–10,000 per month",
  },
];

const gate = ["Bucket", "KPI", "Baseline", "60-day target"];

export function RallyMethod() {
  return (
    <Section id="method" tone="bone">
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <PillBadge>The Rally method</PillBadge>
        </Reveal>
        <Reveal delay={60}>
          <SectionHeading
            className="mt-6"
            title="Four rungs. You can stop after any of them."
            subtitle="Nobody signs a year to find out if this works. You climb one rung at a time and keep what you learn."
          />
        </Reveal>
      </div>

      <div className="mt-14 flex flex-col gap-4">
        {rungs.map((r, i) => (
          <Reveal
            key={r.n}
            delay={i * 80}
            className={
              i === 0
                ? "tint lift rounded-3xl border border-primary p-7 sm:p-8"
                : "lift rounded-3xl border border-border bg-white p-7 sm:p-8"
            }
          >
            <div className="grid gap-5 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-start">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-primary/30 font-mono text-[13px] text-primary">
                {r.n}
              </span>
              <div className="min-w-0">
                <h3 className="text-[20px] font-semibold text-ink">{r.title}</h3>
                <p className="mt-2 max-w-[62ch] text-[15px] leading-relaxed text-warm-grey">
                  {r.body}
                </p>
              </div>
              <p className="font-mono text-[13px] font-medium text-primary sm:text-right">
                {r.price}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120} className="tint mt-10 rounded-3xl border border-dashed border-tint p-7 sm:p-8">
        <h3 className="text-[18px] font-semibold text-ink">
          The gate — we don&apos;t build without these four answers
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-warm-grey">
          If we can&apos;t fill these in together, a build is just expensive guessing.
        </p>
        <ul className="mt-6 flex flex-wrap gap-2.5">
          {gate.map((g) => (
            <li
              key={g}
              className="rounded-full border border-primary/25 bg-white px-4 py-2 font-mono text-[11px] tracking-[0.12em] text-primary uppercase"
            >
              {g}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
