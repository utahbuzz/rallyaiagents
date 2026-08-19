import { Star } from "lucide-react";

import avatarChelsea from "@/assets/avatar-chelsea.jpg";
import avatarJames from "@/assets/avatar-james.jpg";
import avatarSarah from "@/assets/avatar-sarah.jpg";

import { PillBadge, Reveal, Section, SectionHeading } from "./primitives";

const quotes = [
  {
    quote:
      "I thought this would be another software demo. It was two hours of us doing our actual work faster. My office manager was sold before lunch.",
    name: "Dr. Sarah Mitchell",
    role: "Owner, Cedar Dental Group",
    img: avatarSarah,
  },
  {
    quote:
      "The missed-call texts alone paid for the month. Patients answer at 9pm now, which still surprises me.",
    name: "Chelsea H.",
    role: "Office manager, Lakeside Smiles",
    img: avatarChelsea,
  },
  {
    quote:
      "They told us two of our ideas weren't worth doing. That's when I trusted the other three.",
    name: "Dr. James Park",
    role: "Bright Arch Ortho",
    img: avatarJames,
  },
];

export function Testimonials() {
  return (
    <Section id="results" tone="bone">
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <PillBadge>What practices say</PillBadge>
        </Reveal>
        <Reveal delay={60}>
          <SectionHeading className="mt-6" title="Ordinary practices, less busywork" />
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {quotes.map((q, i) => (
          <Reveal
            key={q.name}
            delay={i * 80}
            className="lift flex h-full flex-col rounded-3xl border border-border bg-white p-7"
          >
            <div aria-hidden className="flex gap-1">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="size-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="mt-5 flex-1 text-[15.5px] leading-relaxed text-ink">
              &ldquo;{q.quote}&rdquo;
            </p>
            <div className="mt-7 flex items-center gap-3 border-t border-border pt-5">
              <img
                src={q.img}
                alt={q.name}
                loading="lazy"
                className="size-10 rounded-full object-cover"
              />
              <div>
                <p className="text-[14.5px] font-semibold text-ink">{q.name}</p>
                <p className="text-[13px] text-warm-grey">{q.role}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
