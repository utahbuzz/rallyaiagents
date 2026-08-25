import { useEffect, useMemo, useRef, useState } from "react";

import { MonoLabel, Reveal, Section } from "./primitives";

const tags = [
  "Orthodontics",
  "Pediatric",
  "Front desk teams",
  "Practice owners",
  "General dentistry",
  "Multi-location",
];

/**
 * Assumptions. Conservative on purpose, all in one place so they are easy to tune.
 * Missed-call rate: small healthcare practices miss roughly 1 in 4 inbound calls
 * (Solutionreach, missed-call cost guide). We only credit part of those back.
 */
const RECOVERY_SHARE = 0.5; // share of unanswered calls an after-hours/overflow agent actually catches
const START_RATE = 0.35; // share of those recovered callers who become a patient or start treatment
const HOURS_PER_MISSED_CALL_WEEK = 0.12; // front-desk time returned per weekly call handled by automation
const ADMIN_HOURS_BASE = 4; // hours/week of writing, forms and follow-up handled before any call volume

type PracticeType = "ortho" | "general" | "pediatric";

const practiceTypes: {
  id: PracticeType;
  label: string;
  value: number;
  valueLabel: string;
}[] = [
  { id: "ortho", label: "Orthodontic", value: 5500, valueLabel: "Average case fee" },
  { id: "general", label: "General", value: 900, valueLabel: "Average new patient, first year" },
  { id: "pediatric", label: "Pediatric", value: 600, valueLabel: "Average new patient, first year" },
];

const volumes = [
  { id: "low", label: "A few", callsPerWeek: 10 },
  { id: "typical", label: "Typical", callsPerWeek: 25 },
  { id: "high", label: "More than we admit", callsPerWeek: 45 },
];

function useCountUp(target: number) {
  const [n, setN] = useState(target);
  const from = useRef(target);

  useEffect(() => {
    const start = performance.now();
    const origin = from.current;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / 700);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(origin + (target - origin) * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
      else from.current = target;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target]);

  return n;
}

function Metric({ value, format, label }: { value: number; format: (n: number) => string; label: string }) {
  const n = useCountUp(value);
  return (
    <div>
      <p className="text-[2.4rem] leading-none font-semibold text-ink sm:text-[2.9rem]">
        {format(n)}
      </p>
      <p className="mt-3 text-[14.5px] leading-snug text-warm-grey">{label}</p>
    </div>
  );
}

const money = (n: number) =>
  n >= 1_000_000
    ? `$${(n / 1_000_000).toFixed(1)}M`
    : `$${Math.round(n / 1000).toLocaleString()}k`;

export function Stats() {
  const [type, setType] = useState<PracticeType>("ortho");
  const [volume, setVolume] = useState(volumes[1]!.id);
  const active = practiceTypes.find((p) => p.id === type)!;
  const [caseValue, setCaseValue] = useState(active.value);

  const selectType = (next: PracticeType) => {
    setType(next);
    setCaseValue(practiceTypes.find((p) => p.id === next)!.value);
  };

  const projection = useMemo(() => {
    const callsPerWeek = volumes.find((v) => v.id === volume)!.callsPerWeek;
    const recoveredPerWeek = callsPerWeek * RECOVERY_SHARE;
    const patientsPerMonth = recoveredPerWeek * START_RATE * 4.33;
    return {
      patients: patientsPerMonth,
      production: patientsPerMonth * 12 * caseValue,
      hours: ADMIN_HOURS_BASE + callsPerWeek * HOURS_PER_MISSED_CALL_WEEK,
    };
  }, [volume, caseValue]);

  return (
    <Section id="about" tone="white">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <Reveal>
          <MonoLabel>About Rally</MonoLabel>
          <h2 className="mt-6 text-[2rem] leading-[1.12] font-semibold text-ink sm:text-[2.5rem]">
            Doing nothing about AI is a decision. It&apos;s just the expensive one.
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="text-[17px] leading-relaxed text-warm-grey">
            Small practices miss roughly one in four inbound calls. That&apos;s not a phone problem,
            it&apos;s a schedule with holes in it. The offices already using AI are pulling ahead on
            scheduling, follow-up, and unscheduled treatment. Rally teaches your team what AI can do
            in a dental practice, then builds the parts worth building. Nothing to buy, no
            year-long contract, no jargon. Your real tasks, your screen, your team in the room.
          </p>
        </Reveal>
      </div>

      <Reveal delay={120} className="mt-14">
        <div className="rounded-3xl border border-border bg-bone p-6 sm:p-9">
          <MonoLabel>What this could look like for your practice</MonoLabel>

          <div className="mt-7 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14">
            <div className="space-y-7">
              <div>
                <p className="text-[14px] font-medium text-ink">Your practice</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {practiceTypes.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => selectType(p.id)}
                      className={`rounded-full border px-4 py-2 text-[14px] transition-colors ${
                        p.id === type
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-background text-ink hover:border-primary/40"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[14px] font-medium text-ink">
                  Calls each week nobody gets to
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {volumes.map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setVolume(v.id)}
                      className={`rounded-full border px-4 py-2 text-[14px] transition-colors ${
                        v.id === volume
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-background text-ink hover:border-primary/40"
                      }`}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="case-value" className="text-[14px] font-medium text-ink">
                  {active.valueLabel}
                </label>
                <div className="mt-3 flex items-center gap-3">
                  <span className="text-[15px] text-warm-grey">$</span>
                  <input
                    id="case-value"
                    type="number"
                    min={100}
                    step={100}
                    value={caseValue}
                    onChange={(e) => setCaseValue(Math.max(0, Number(e.target.value)))}
                    className="w-32 rounded-xl border border-border bg-background px-3 py-2 text-[15px] text-ink outline-none focus:border-primary"
                  />
                  <span className="text-[13.5px] text-warm-grey">Change it if we&apos;re off.</span>
                </div>
              </div>
            </div>

            <div className="grid gap-8 border-t border-dashed border-border pt-8 sm:grid-cols-3 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-14">
              <Metric
                value={projection.patients}
                format={(n) => Math.round(n).toString()}
                label="New patients a month you're not getting today"
              />
              <Metric
                value={projection.production}
                format={money}
                label="Projected production over a year"
              />
              <Metric
                value={projection.hours}
                format={(n) => `${Math.round(n)}hrs`}
                label="Front desk hours back per week"
              />
            </div>
          </div>

          <p className="mt-9 border-t border-dashed border-border pt-6 text-[13.5px] leading-relaxed text-warm-grey">
            Estimates, not promises. Built on published benchmarks: small healthcare practices miss
            roughly one in four inbound calls (Solutionreach), and we only count half of those as
            recoverable and 35% of those as starts. Your numbers will be different. Working out
            which ones actually move is what the first call is for.{" "}
            <a href="#book" className="text-primary underline underline-offset-4">
              Book the call
            </a>
            .
          </p>
        </div>
      </Reveal>

      <Reveal delay={140} className="mt-16 flex flex-wrap justify-center gap-3">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border bg-bone px-4 py-2 text-[14px] text-ink"
          >
            {t}
          </span>
        ))}
      </Reveal>
    </Section>
  );
}
