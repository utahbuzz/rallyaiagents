import { Label, Reveal, Section } from "./primitives";

const capabilities = [
  {
    n: "01",
    title: "Website chat",
    body: "Answers questions and books consults directly from your site, day or night. This is the one running on this page right now.",
  },
  {
    n: "02",
    title: "Inbound voice",
    body: "Picks up when your team can't. Handles new-patient calls, insurance questions, and scheduling without a voicemail box.",
  },
  {
    n: "03",
    title: "Speed-to-lead follow-up",
    body: "Every new lead gets a real response in under a minute, by text, before they shop around.",
  },
  {
    n: "04",
    title: "No-show recovery",
    body: "Confirms upcoming consults and works the ones that fall off, automatically.",
  },
  {
    n: "05",
    title: "Patient reactivation",
    body: "Works your past-due list without anyone typing texts one at a time.",
  },
  {
    n: "06",
    title: "Practice websites",
    body: "When the site itself is the bottleneck, we rebuild it. Fast, mobile-first, built to book.",
  },
];

export function WhatWeBuild() {
  return (
    <Section id="what-we-build">
      <Reveal>
        <Label>What we build</Label>
      </Reveal>

      <Reveal delay={70}>
        <h2 className="mt-6 max-w-[24ch] text-[2rem] text-ink sm:text-[3rem]">
          Every practice gets a different combination.
        </h2>
      </Reveal>

      <Reveal delay={120}>
        <p className="mt-5 max-w-[52ch] text-[17px] text-warm-grey">All of it comes from here.</p>
      </Reveal>

      <div className="mt-14 grid border-t border-l border-border sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((c, i) => (
          <Reveal
            key={c.title}
            delay={(i % 3) * 80}
            className="border-r border-b border-border bg-bone p-7 sm:p-8"
          >
            <p className="mono-label text-primary">{c.n}</p>
            <h3 className="mt-5 text-[1.35rem] text-ink">{c.title}</h3>
            <p className="mt-3 text-[16px] leading-[1.7] text-warm-grey">{c.body}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={60}>
        <p className="mt-8 text-[16.5px] text-ink">
          You don&apos;t need all six. Most practices start with one or two.
        </p>
      </Reveal>
    </Section>
  );
}
