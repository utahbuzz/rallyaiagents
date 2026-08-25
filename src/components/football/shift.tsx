import { Reveal } from "@/components/landing/primitives";

import { BookCta, Eyebrow, Heading, SectionShell } from "./primitives";

const lineage = [
  { year: "1986", label: "Instant replay", body: "Officiating took the technology before the rest of sport did." },
  { year: "2000s", label: "Analytics departments", body: "Numbers stopped being a curiosity and became a staff position." },
  { year: "2010s", label: "Sports science", body: "Load management and biomechanics moved from lab to sideline." },
  { year: "Now", label: "The front office", body: "The last part of the building still running on manual effort." },
];

export function FootballShift() {
  return (
    <SectionShell id="shift">
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <Eyebrow>Why now</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <Heading
            className="mt-6"
            title="Your sport has never been late to an edge."
            subtitle="Football takes new tools early, proves them, then everyone else copies. AI in the front office is at exactly that stage — which means the advantage is still available."
          />
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {lineage.map((l, i) => (
          <Reveal
            key={l.label}
            delay={i * 80}
            className={
              i === 3
                ? "brand-tint-dark border-brand-dark lift-dark h-full rounded-3xl border p-7"
                : "lift-dark h-full rounded-3xl border border-night-line bg-night-raised p-7"
            }
          >
            <p className="text-[12px] font-semibold tracking-[0.16em] text-brand-bright uppercase">
              {l.year}
            </p>
            <h3 className="mt-4 text-[18px] font-semibold text-chalk">{l.label}</h3>
            <p className="mt-2.5 text-[15px] leading-relaxed text-chalk-muted">{l.body}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={160} className="mt-12 flex flex-col items-start gap-4 rounded-3xl border border-night-line bg-night-raised p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
        <p className="max-w-[52ch] text-[17px] leading-relaxed text-chalk">
          Programs that move first set the standard everyone else spends two seasons catching up to.
          We're taking on early partners now, at early-partner pricing.
        </p>
        <BookCta className="shrink-0" />
      </Reveal>
    </SectionShell>
  );
}
