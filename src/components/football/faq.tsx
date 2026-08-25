import { useState } from "react";
import { Minus, Plus } from "lucide-react";

import { Reveal } from "@/components/landing/primitives";

import { Eyebrow, Heading, SectionShell } from "./primitives";

const faqs = [
  {
    q: "Do we need a big budget?",
    a: "No. We scope one workflow at a time, priced as a single project rather than a platform contract. Early partners get early-partner pricing, and you can stop after any build.",
  },
  {
    q: "Do we need technical staff?",
    a: "No. If your staff can use a shared drive and a group text, they can run what we build. Training is part of every engagement, not an upsell.",
  },
  {
    q: "How long does a build take?",
    a: "Weeks, not seasons. Most first builds go live inside a month of the scoping call, because we deliberately keep the first one narrow.",
  },
  {
    q: "What if we're not sure what to automate yet?",
    a: "That's exactly what the scoping call is for. Most programs know something is eating the week but not which part. We'll name it, and you can act on it with or without us.",
  },
  {
    q: "Will this change how we coach?",
    a: "No. We stay out of gameplay decisions. Rally works on the admin layer around the program — the paperwork, follow-up, and reporting that pulls staff off their actual jobs.",
  },
];

export function FootballFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SectionShell id="faq">
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <Heading className="mt-6" title="The questions we get first." />
        </Reveal>
      </div>

      <div className="mx-auto mt-12 max-w-3xl divide-y divide-night-line rounded-3xl border border-night-line bg-night-raised">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="focus-ring flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-8"
              >
                <span className="text-[16.5px] font-semibold text-chalk">{f.q}</span>
                <span
                  aria-hidden
                  className="brand-tint-dark flex size-8 shrink-0 items-center justify-center rounded-full"
                >
                  {isOpen ? (
                    <Minus className="size-4 text-brand-bright" />
                  ) : (
                    <Plus className="size-4 text-brand-bright" />
                  )}
                </span>
              </button>
              {isOpen ? (
                <p className="px-6 pb-6 text-[15.5px] leading-relaxed text-chalk-muted sm:px-8">
                  {f.a}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
