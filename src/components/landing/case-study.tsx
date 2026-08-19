import { PillBadge, Reveal, Section } from "./primitives";

const stats = [
  { figure: "$1.8M", label: "in total production" },
  { figure: "2,688", label: "new patients scheduled" },
  { figure: "2×", label: "the average dental startup" },
];

export function CaseStudy() {
  return (
    <Section id="case-study" tone="bone">
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <PillBadge>Case study</PillBadge>
        </Reveal>
      </div>

      <Reveal delay={60} className="mt-10 overflow-hidden rounded-[1.75rem] border border-border bg-white">
        <div className="grid lg:grid-cols-2">
          <div className="cta-gradient p-8 sm:p-12">
            <h2 className="font-display text-[2rem] leading-[1.14] font-semibold text-white sm:text-[2.4rem]">
              A startup practice that filled its schedule before it filled its second operatory
            </h2>
          </div>
          <div className="p-8 sm:p-12">
            <p className="text-[16px] leading-relaxed text-ink">
              A brand-new pediatric practice opened with no patient base and one front desk. Instead
              of hiring ahead of revenue, the growth work was systemized: every inquiry answered
              fast, every unscheduled family followed up, recall running on rails from month one.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-warm-grey">
              The result was production that outpaced the typical startup curve by two years, on a
              front office that stayed small.
            </p>
          </div>
        </div>

        <div className="grid border-t border-border sm:grid-cols-3">
          {stats.map((s, i) => (
            <div
              key={s.figure}
              className={
                i === 0
                  ? "p-8 sm:p-10"
                  : "border-t border-border p-8 sm:border-t-0 sm:border-l sm:p-10"
              }
            >
              <p className="font-display text-[2.5rem] leading-none font-semibold text-primary">
                {s.figure}
              </p>
              <p className="mt-3 font-mono text-[11px] tracking-[0.12em] text-warm-grey uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={100} className="mt-6">
        <p className="text-[13px] leading-relaxed text-warm-grey">
          These numbers come from prior work at Happy Tooth Pediatric Dentistry. They reflect that
          practice&apos;s results and are not a projection of yours.
        </p>
      </Reveal>
    </Section>
  );
}
