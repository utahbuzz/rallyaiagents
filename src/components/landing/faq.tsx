import { useState } from "react";
import { Plus } from "lucide-react";

import { Cta, PillBadge, Reveal, Section } from "./primitives";

const items = [
  {
    q: "Do I need to know anything about AI?",
    a: "No. That's the point of us. We explain it in plain English and show you on your own work.",
  },
  {
    q: "What does it cost?",
    a: "The first call is free. The workshop is a one-time fee we quote on that call. If you want us to keep going after that, it's a monthly retainer, month to month.",
  },
  {
    q: "How much of my time does this take?",
    a: "Twenty-five minutes for the first call. The workshop is a couple of hours with your team. After that we do the work and report back.",
  },
  {
    q: "Is patient data safe?",
    a: "Yes. We work under a signed BAA, keep data in your existing systems, and never use patient information to train models.",
  },
  {
    q: "Does the AI make clinical decisions?",
    a: "Never. Clinical judgment stays with your licensed team. Anything clinical is reviewed by a person first.",
  },
  {
    q: "Will my team feel replaced?",
    a: "The work we take is the work they complain about. Nobody has asked us for their voicemail backlog back.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" tone="bone">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <Reveal>
          <PillBadge>FAQ</PillBadge>
          <h2 className="mt-6 text-[2rem] leading-[1.12] font-semibold text-ink sm:text-[2.6rem]">
            Questions we get on the first call
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-warm-grey">
            If yours isn&apos;t here, ask it live. It&apos;s a conversation, not a presentation.
          </p>
          <div className="mt-8 flex flex-col items-start gap-3">
            <Cta />
            <p className="text-[14px] text-warm-grey">
              No pitch and no deck. If we&apos;re not the right fit, we&apos;ll tell you on the call.
            </p>
          </div>
        </Reveal>

        <Reveal delay={90} className="divide-y divide-border rounded-3xl border border-border bg-white">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="focus-ring flex w-full items-start justify-between gap-5 px-6 py-5 text-left sm:px-7"
                  >
                    <span className="text-[16.5px] leading-snug font-semibold text-ink">
                      {item.q}
                    </span>
                    <Plus
                      aria-hidden
                      className={`mt-0.5 size-5 shrink-0 text-primary transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                </h3>
                {isOpen ? (
                  <p className="px-6 pb-6 text-[15.5px] leading-relaxed text-warm-grey sm:px-7">
                    {item.a}
                  </p>
                ) : null}
              </div>
            );
          })}
        </Reveal>
      </div>
    </Section>
  );
}
