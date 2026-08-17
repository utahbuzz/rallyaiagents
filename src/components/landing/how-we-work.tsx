import { Label, Reveal, Section } from "./primitives";

const steps = [
  {
    n: "01",
    title: "The practice audit",
    body: "We map how a lead actually moves through your practice, front to back — where they come in, who touches them, where they drop. You get a written findings doc naming the single biggest leak, what it's costing you, and what fixing it would take. This is a paid, standalone piece of work. If you never build anything with us, it's still yours.",
  },
  {
    n: "02",
    title: "We build",
    body: "We configure the systems the audit pointed at, from what we've already built and tested. Not a custom software project — a proven build, set up for your hours, your services, your scripts, your tone.",
  },
  {
    n: "03",
    title: "We run it",
    body: "It stays ours to maintain. Before we start we agree on one number, where it sits today, and where it should be in 60 days. You get a monthly readout against that number. When something needs to change, you text Caleb.",
  },
];

export function HowWeWork() {
  return (
    <Section id="how-we-work">
      <Reveal>
        <Label>How we work</Label>
      </Reveal>

      <Reveal delay={70}>
        <h2 className="mt-6 max-w-[24ch] text-[2rem] text-ink sm:text-[3rem]">
          We find the leak, then build against it.
        </h2>
      </Reveal>

      <div className="mt-14">
        {steps.map((s, i) => (
          <Reveal
            key={s.n}
            delay={i * 90}
            className="grid gap-4 border-t border-border py-9 last:border-b md:grid-cols-[7rem_1fr_1.4fr] md:gap-10"
          >
            <p className="mono-label pt-1 text-primary">{s.n}</p>
            <h3 className="text-[1.5rem] text-ink sm:text-[1.75rem]">{s.title}</h3>
            <p className="text-[16.5px] leading-[1.7] text-warm-grey">{s.body}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={60}>
        <p className="mt-10 text-[16px] text-warm-grey italic">
          Custom diagnosis. Standard build. That&apos;s the only way this stays reliable.
        </p>
      </Reveal>
    </Section>
  );
}
