import { Reveal } from "@/components/landing/primitives";

import { Eyebrow, Heading, SectionShell } from "./primitives";

const tracks = [
  {
    label: "High School Programs",
    headline: "Small staff, mostly volunteers, everything lands on one person.",
    items: [
      "Parent and player communication that answers itself instead of eating your coordinator's week.",
      "Schedules, forms, and gear requests handled in one place.",
      "Booster and fundraising follow-up that keeps running when nobody has time to run it.",
      "Built for tight budgets — one workflow, one fee, no seat licensing.",
    ],
  },
  {
    label: "College Programs",
    headline: "More headcount, more compliance exposure, more recruiting volume.",
    items: [
      "NIL paperwork and compliance deadlines tracked automatically, with alerts before they're late.",
      "Recruiting pipelines that surface who's gone quiet without anyone re-reading a spreadsheet.",
      "Donor, alumni, and ticketing outreach that runs on a schedule.",
      "Front-office relief without adding a line to next year's budget request.",
    ],
  },
];

export function FootballPrograms() {
  return (
    <SectionShell id="programs">
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <Eyebrow>Who this is for</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <Heading
            className="mt-6"
            title="High school or college — the bottleneck is just a different size."
            subtitle="Same process either way. What changes is where we start."
          />
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        {tracks.map((t, i) => (
          <Reveal
            key={t.label}
            delay={i * 90}
            className="lift-dark flex h-full flex-col rounded-3xl border border-night-line bg-night-raised p-8"
          >
            <p className="text-[12px] font-semibold tracking-[0.16em] text-brand-bright uppercase">
              {t.label}
            </p>
            <h3 className="mt-4 text-[21px] leading-snug font-semibold text-chalk">{t.headline}</h3>
            <ul className="mt-6 space-y-4">
              {t.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-brand-bright" />
                  <p className="text-[15px] leading-relaxed text-chalk-muted">{item}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
