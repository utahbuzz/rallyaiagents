import { Label, Reveal, Section } from "./primitives";

const columns = [
  {
    title: "Software you set up yourself",
    body: "You get a login and a manual. The configuration, the scripts, the edge cases, and the maintenance are your problem.",
    highlight: false,
  },
  {
    title: "A marketing agency",
    body: "They send you more leads. The leads still hit the same front desk that couldn't keep up with the last batch.",
    highlight: false,
  },
  {
    title: "Rally",
    body: "We find the constraint, build for it, run it, and agree up front on the number it has to move. You'll know in 60 days whether it worked.",
    highlight: true,
  },
];

export function WhyRally() {
  return (
    <Section id="why-rally">
      <Reveal>
        <Label>Why not just buy a tool</Label>
      </Reveal>

      <div className="mt-12 grid gap-px border-t border-border pt-10 md:grid-cols-3 md:gap-12">
        {columns.map((c, i) => (
          <Reveal
            key={c.title}
            delay={i * 90}
            className="border-t border-border pt-7 first:border-t-0 first:pt-0 md:border-t-0 md:pt-0"
          >
            <h3 className={`text-[1.35rem] ${c.highlight ? "text-primary" : "text-ink"}`}>
              {c.title}
            </h3>
            <p className="mt-3 text-[16px] leading-[1.7] text-warm-grey">{c.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
