import { Reveal } from "@/components/landing/primitives";

import { Eyebrow, Heading, SectionShell } from "./primitives";

const columns = [
  {
    title: "Front Office",
    items: [
      "Recruiting turns into a scattered mess of spreadsheets, film links, and texts instead of one system that flags who's gone quiet and needs a follow-up.",
      "Donor and alumni outreach falls behind because no one has time to run it consistently — pledges tracked in someone's inbox, thank-you notes sent late or not at all.",
      "Ticketing and attendance dip because there's no time to run targeted campaigns to lapsed season-ticket holders or build real game-day promotion.",
      "NIL paperwork and compliance deadlines get tracked manually, one missed signature away from a real problem.",
      "Parent communication eats a coordinator's whole week answering the same schedule, gear, and forms questions over and over.",
    ],
  },
  {
    title: "Coaching Staff",
    items: [
      "Opponent scouting means hours of manual film breakdown before a coach ever sees a tendencies report.",
      "Practice planning starts from scratch each week instead of building off install priorities and last game's self-scout.",
      "Roster and eligibility status lives in someone's head instead of one place that flags risk before it becomes a problem.",
    ],
  },
  {
    title: "Players",
    items: [
      "Studying the playbook means static PDFs, not something built to help install actually stick.",
      "Film feedback comes as raw cutups instead of a digestible summary of what to fix.",
    ],
  },
];

export function FootballProblem() {
  return (
    <SectionShell id="problem" tone="raised">
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <Eyebrow>Sound familiar?</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <Heading
            className="mt-6"
            title="None of this is a coaching problem. It's an admin problem."
            subtitle="Every program runs on the same handful of manual loops. Here's where they usually sit."
          />
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {columns.map((col, i) => (
          <Reveal
            key={col.title}
            delay={i * 90}
            className="lift-dark flex h-full flex-col rounded-3xl border border-night-line bg-night p-7"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-[13px] font-semibold tracking-[0.16em] text-brand-bright uppercase">
                {col.title}
              </h3>
              <span className="text-[12px] text-chalk-muted">
                {String(col.items.length).padStart(2, "0")}
              </span>
            </div>
            <ul className="mt-6 space-y-5">
              {col.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-2 h-px w-4 shrink-0 bg-brand-bright"
                  />
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
