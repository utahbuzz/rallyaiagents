import { PillBadge, Reveal, Section, SectionHeading } from "./primitives";

const buckets = [
  {
    n: "Bucket 01",
    title: "More patients",
    body: "Same marketing spend, more of the people who already raised their hand.",
    examples: [
      "Every new lead answered in under a minute",
      "After-hours intake that books instead of apologizing",
      "Missed calls recovered by text before they call the next office",
    ],
  },
  {
    n: "Bucket 02",
    title: "Higher patient value",
    body: "The treatment you already diagnosed, actually scheduled.",
    examples: [
      "Unscheduled treatment worked every week, not when someone remembers",
      "Recall that runs on its own",
      "Financing conversations started before the patient leaves",
    ],
  },
  {
    n: "Bucket 03",
    title: "Lower cost to run",
    body: "Fewer hours spent on work nobody wanted to do by hand.",
    examples: [
      "Insurance verification done overnight",
      "Note drafts ready for review, not written from scratch",
      "No-show confirmations without a phone tree",
    ],
  },
];

export function Buckets() {
  return (
    <Section tone="white">
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <PillBadge>Three buckets</PillBadge>
        </Reveal>
        <Reveal delay={60}>
          <SectionHeading
            className="mt-6"
            title="Every build lands in one of three buckets"
            subtitle="You pick one. Picking all three is how projects turn into a year of meetings."
          />
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {buckets.map((b, i) => (
          <Reveal
            key={b.n}
            delay={i * 90}
            className="lift flex flex-col rounded-3xl border border-border bg-white p-7"
          >
            <p className="font-mono text-[11px] tracking-[0.14em] text-primary uppercase">{b.n}</p>
            <h3 className="mt-4 text-[21px] font-semibold text-ink">{b.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-warm-grey">{b.body}</p>
            <ul className="mt-6 flex flex-col">
              {b.examples.map((e) => (
                <li
                  key={e}
                  className="border-t border-dashed border-border py-3.5 text-[14.5px] leading-relaxed text-ink"
                >
                  {e}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
