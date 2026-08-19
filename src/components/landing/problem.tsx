import { Cta, PillBadge, Reveal, Section, SectionHeading } from "./primitives";

const stats = [
  {
    figure: "43%",
    title: "already use AI somewhere",
    body: "Imaging, notes, a chatbot somebody installed. The tools are in the building.",
  },
  {
    figure: "10%",
    title: "use it at the front desk",
    body: "Which is where the calls, the follow-up, and the missed revenue actually live.",
  },
  {
    figure: "32%",
    title: "still report being overworked",
    body: "Buying software didn't give anyone their afternoon back.",
  },
];

export function Problem() {
  return (
    <Section id="problem" tone="bone">
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <PillBadge>The problem</PillBadge>
        </Reveal>
        <Reveal delay={60}>
          <SectionHeading
            className="mt-6"
            title="The AI showed up. The front office never got any."
            subtitle="Adoption looks great in a survey. Then a new patient texts at 7pm and hears back Thursday."
          />
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {stats.map((s, i) => (
          <Reveal
            key={s.figure}
            delay={i * 90}
            className="lift rounded-3xl border border-border bg-white p-8"
          >
            <p className="font-display text-[3.2rem] leading-none font-semibold text-primary">
              {s.figure}
            </p>
            <h3 className="mt-4 text-[18px] font-semibold text-ink">{s.title}</h3>
            <p className="mt-2.5 text-[15px] leading-relaxed text-warm-grey">{s.body}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120} className="mt-8">
        <p className="font-mono text-[11px] tracking-[0.12em] text-warm-grey uppercase">
          Source: ADA Health Policy Institute, July 2026
        </p>
      </Reveal>

      <Reveal delay={160} className="mt-12 flex flex-col items-start gap-3">
        <Cta />
        <p className="text-[14px] text-warm-grey">
          Free, 25 minutes, and no deck. If we&apos;re not a fit we&apos;ll say so on the call.
        </p>
      </Reveal>
    </Section>
  );
}
