import { KpiTag, PillBadge, Reveal, Section, SectionHeading } from "./primitives";

const thread = [
  { from: "patient", text: "hi, do you take Delta and can my daughter be seen soon?" },
  { from: "rally", text: "We do take Delta. I can hold Thursday 4:10pm or Friday 8:30am — which works?" },
  { from: "patient", text: "thursday" },
  { from: "rally", text: "Booked for Thursday 4:10pm. I'll text a reminder Wednesday." },
];

const smaller = [
  {
    title: "Insurance verification",
    body: "Benefits checked before the appointment instead of while the patient sits in the chair.",
    kpi: "Verified before day-of: 96%",
  },
  {
    title: "Unscheduled treatment",
    body: "Diagnosed and never booked. We work the list every week and bring the reasons back to you.",
    kpi: "Treatment reactivated per month",
  },
  {
    title: "Recall that runs itself",
    body: "Hygiene reminders that keep going until somebody books or opts out.",
    kpi: "Recall rate lift",
  },
  {
    title: "No-show reduction",
    body: "Confirmations, reschedules, and a real reply when a patient says they can't make it.",
    kpi: "No-show rate down",
  },
  {
    title: "Note drafting",
    body: "Drafts prepared for review. A human signs off before anything is final, every time.",
    kpi: "Charting minutes saved",
  },
];

export function WhatWeBuild() {
  return (
    <Section id="build" tone="bone">
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <PillBadge>What we build</PillBadge>
        </Reveal>
        <Reveal delay={60}>
          <SectionHeading
            className="mt-6"
            title="Front-office workflows, not another dashboard"
            subtitle="Each one is a specific job with a number attached. Nothing here needs a new practice management system."
          />
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        <Reveal className="lift flex flex-col rounded-3xl border border-border bg-white p-7 lg:col-span-2">
          <h3 className="text-[21px] font-semibold text-ink">After-hours intake</h3>
          <p className="mt-2 max-w-[54ch] text-[15px] leading-relaxed text-warm-grey">
            Most people ask about your practice after dinner. Right now that message waits until
            morning, by which point they&apos;ve texted two other offices.
          </p>
          <div className="mt-6 flex-1 rounded-2xl border border-border bg-bone/60 p-4">
            <p className="font-mono text-[10.5px] tracking-[0.14em] text-warm-grey uppercase">
              Conversation log — 9:42pm
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {thread.map((m, i) => (
                <li
                  key={i}
                  className={
                    m.from === "rally"
                      ? "max-w-[85%] self-end rounded-2xl rounded-br-md bg-primary px-3.5 py-2.5 text-[13.5px] leading-snug text-primary-foreground"
                      : "max-w-[85%] rounded-2xl rounded-bl-md border border-border bg-white px-3.5 py-2.5 text-[13.5px] leading-snug text-ink"
                  }
                >
                  {m.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <KpiTag>Leads answered under 60s</KpiTag>
          </div>
        </Reveal>

        <Reveal delay={90} className="lift flex flex-col rounded-3xl border border-border bg-white p-7">
          <h3 className="text-[21px] font-semibold text-ink">Missed-call recovery</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-warm-grey">
            The call drops, the text goes out, the patient books. No voicemail involved.
          </p>
          <div className="mt-6 flex flex-1 items-end justify-center">
            <div className="w-[190px] rounded-[1.6rem] border border-border bg-bone/60 p-3">
              <div className="mx-auto h-1 w-10 rounded-full bg-border" />
              <div className="mt-4 rounded-xl bg-white p-3">
                <p className="font-mono text-[10px] tracking-[0.12em] text-warm-grey uppercase">
                  Missed call · 2:07pm
                </p>
                <p className="mt-2 text-[13px] leading-snug text-ink">
                  Sorry we missed you — this is Cedar Dental. Want me to find you a time?
                </p>
              </div>
              <div className="mt-2 ml-auto w-[80%] rounded-xl bg-primary p-3">
                <p className="text-[13px] leading-snug text-primary-foreground">
                  yes please, afternoons are better
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <KpiTag>Missed calls recovered</KpiTag>
          </div>
        </Reveal>

        {smaller.map((s, i) => (
          <Reveal
            key={s.title}
            delay={i * 70}
            className="lift flex flex-col rounded-3xl border border-border bg-white p-7"
          >
            <h3 className="text-[19px] font-semibold text-ink">{s.title}</h3>
            <p className="mt-2 flex-1 text-[15px] leading-relaxed text-warm-grey">{s.body}</p>
            <div className="mt-6">
              <KpiTag>{s.kpi}</KpiTag>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
