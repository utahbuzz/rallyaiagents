import { useState } from "react";
import { Plus } from "lucide-react";

import { Cta, PillBadge, Reveal, Section } from "./primitives";

const items = [
  {
    q: "How much of my time does this take?",
    a: "The call is 25 minutes. The audit needs about an hour of someone's time, usually your office manager. After that we're doing the work and reporting on it.",
  },
  {
    q: "How is this different from the AI vendors calling me every week?",
    a: "They sell you software and leave. We agree on a number, build the workflow, and run it. If the number doesn't move in 60 days you don't pay the retainer.",
  },
  {
    q: "Does the AI make clinical decisions?",
    a: "No. It never diagnoses, never recommends treatment, and never explains clinical findings on its own. Clinical judgment stays with your licensed team. Anything clinical that gets drafted is reviewed and approved by a human before it counts.",
  },
  {
    q: "We bought a tool already and nothing changed.",
    a: "That's most practices. A tool with nobody operating it is a subscription. The build is only a third of what we do — running it is the rest.",
  },
  {
    q: "Will patients know they're talking to AI?",
    a: "It introduces itself as your practice, answers plainly, and hands off to a person the moment the conversation needs one. We don't pretend it's a receptionist named Amber.",
  },
  {
    q: "Will my team feel like they're being replaced?",
    a: "The work we take is the work they complain about: verification, chasing texts, recall lists. Nobody has ever asked us for their voicemail backlog back.",
  },
  {
    q: "Who actually does the work?",
    a: "We do. You get one person accountable for the KPI, not a ticket queue.",
  },
  {
    q: "What results should I expect?",
    a: "It depends on the bucket and your baseline, which is exactly why we set the 60-day target together before building. We'd rather commit to one honest number than promise a range we made up.",
  },
  {
    q: "How is patient data handled?",
    a: "Under a signed BAA, with access limited to the systems required for the workflow. Data stays in your existing systems of record, transfers are encrypted, access is logged and revoked when an engagement ends, and we do not use patient information to train models.",
  },
  {
    q: "How long is the contract?",
    a: "Month to month once we're running. Thirty days' notice and we hand everything over.",
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
