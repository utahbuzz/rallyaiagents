import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

import avatarChelsea from "@/assets/avatar-chelsea.jpg";
import avatarJames from "@/assets/avatar-james.jpg";
import avatarSarah from "@/assets/avatar-sarah.jpg";

import { Reveal, Section, SectionHeading, SectionPill, Stars } from "./primitives";

const items = [
  {
    name: "Dr. Sarah Mitchell",
    title: "Mitchell Orthodontics",
    avatar: avatarSarah,
    quote:
      "We went from chasing leads manually to having every single one followed up within seconds. Our show rate has never been higher.",
  },
  {
    name: "Chelsea H.",
    title: "Practice Operations Manager",
    avatar: avatarChelsea,
    quote:
      "I used to spend hours texting patients one by one. Now the AI handles it and I actually have time for the patients in the office.",
  },
  {
    name: "Dr. James Park",
    title: "Park Ortho & Dental",
    avatar: avatarJames,
    quote:
      "The per-consult pricing sold me. No risk, no retainer, and our chairs are fuller than they've been in years.",
  },
];

export function Testimonials() {
  const [start, setStart] = useState(0);
  const ordered = [...items.slice(start), ...items.slice(0, start)];

  return (
    <Section tone="white">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <Reveal>
          <SectionPill icon={Quote}>Testimonials</SectionPill>
          <SectionHeading
            align="left"
            className="mt-6"
            title="Trusted by practice owners"
            subtitle="See how orthodontic practices are using Rally to fill their chairs."
          />
        </Reveal>
        <Reveal delay={80} className="flex gap-2">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => setStart((s) => (s - 1 + items.length) % items.length)}
            className="flex size-11 items-center justify-center rounded-full border border-border text-ink transition-colors hover:border-primary hover:text-primary"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => setStart((s) => (s + 1) % items.length)}
            className="flex size-11 items-center justify-center rounded-full border border-border text-ink transition-colors hover:border-primary hover:text-primary"
          >
            <ArrowRight className="size-4" />
          </button>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {ordered.map((t, i) => (
          <Reveal
            key={t.name}
            delay={i * 90}
            className="flex flex-col rounded-3xl border border-border bg-cream p-7"
          >
            <div className="flex items-center gap-3">
              <img
                src={t.avatar}
                alt={t.name}
                loading="lazy"
                width={512}
                height={512}
                className="size-12 rounded-full object-cover"
              />
              <div>
                <p className="text-[15px] font-semibold text-ink">{t.name}</p>
                <p className="text-[13px] text-warm-grey">{t.title}</p>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-2">
              <Stars />
              <span className="text-[13px] font-semibold text-ink">5.0</span>
            </div>
            <p className="mt-4 text-[14.5px] leading-relaxed text-warm-grey">“{t.quote}”</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
