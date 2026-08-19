import { Cta, PillBadge, Reveal, Section } from "./primitives";

const timeline = [
  { when: "Day 0", what: "Scope card signed. Bucket, KPI, baseline, target." },
  { when: "Week 1", what: "Audit done. We show you where leads actually fall out." },
  { when: "Week 2", what: "First workflow live in your channels." },
  { when: "Week 4", what: "Tuning against real conversations, not assumptions." },
  { when: "Day 60", what: "Target hit, or you don't pay the retainer." },
];

export function SixtyDay() {
  return (
    <Section tone="white">
      <Reveal className="tint overflow-hidden rounded-[1.75rem] border border-tint">
        <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
          <ol className="flex flex-col">
            {timeline.map((t, i) => (
              <li
                key={t.when}
                className={
                  i === timeline.length - 1
                    ? "grid grid-cols-[86px_minmax(0,1fr)] gap-4 py-4"
                    : "grid grid-cols-[86px_minmax(0,1fr)] gap-4 border-b border-dashed border-primary/20 py-4"
                }
              >
                <span className="font-mono text-[11px] tracking-[0.12em] text-primary uppercase">
                  {t.when}
                </span>
                <span className="text-[15px] leading-relaxed text-ink">{t.what}</span>
              </li>
            ))}
          </ol>

          <div>
            <PillBadge>The 60-day promise</PillBadge>
            <h2 className="mt-6 text-[2rem] leading-[1.12] font-semibold text-ink sm:text-[2.4rem]">
              Sixty days to move the number, or the retainer&apos;s on us
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-warm-grey">
              We agree on the target before we build anything, so there&apos;s no argument later
              about what counted. If we miss it, you keep the workflow and we eat the retainer.
            </p>
            <div className="mt-8 flex flex-col items-start gap-3">
              <Cta />
              <p className="text-[14px] text-warm-grey">
                No retainer to start and nothing to buy. You can walk after the audit.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
