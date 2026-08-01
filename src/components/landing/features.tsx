import { BellRing, LayoutGrid, MessageSquareText, PhoneCall, RefreshCcw } from "lucide-react";

import { ChatMock, PhoneMock } from "./mocks";
import { Reveal, Section, SectionHeading, SectionPill } from "./primitives";

const small = [
  {
    icon: MessageSquareText,
    title: "SMS Follow-up",
    body: "Instant text response to every new lead. Conversational, persistent, and always on brand.",
  },
  {
    icon: BellRing,
    title: "Smart Reminders",
    body: "Automated confirmations at 24hr and 2hr. No-show re-engagement if they miss.",
  },
  {
    icon: RefreshCcw,
    title: "Patient Reactivation",
    body: "Reach dormant patients who dropped off. Turn old leads into new consults.",
  },
];

export function Features() {
  return (
    <Section id="features" tone="white">
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <SectionPill icon={LayoutGrid}>Features</SectionPill>
        </Reveal>
        <Reveal delay={60}>
          <SectionHeading
            className="mt-6"
            title="Smarter tools for full chairs"
            subtitle="Everything your practice needs to convert leads into seated consults, without adding work for your team."
          />
        </Reveal>
      </div>

      {/* bento row: 2/3 + 1/3 */}
      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        <Reveal className="rounded-3xl border border-border bg-cream p-6 sm:p-8 lg:col-span-2">
          <div className="tint -mx-2 rounded-2xl p-5 sm:p-7">
            <ChatMock />
          </div>
          <h3 className="mt-7 text-[22px] font-medium text-ink">AI-Powered Chat Agent</h3>
          <p className="mt-2.5 max-w-[58ch] text-[14.5px] leading-relaxed text-warm-grey">
            Your website gets a 24/7 AI assistant that answers patient questions, qualifies leads,
            and books consults in real time. It knows your practice inside and out.
          </p>
        </Reveal>

        <Reveal delay={110} className="rounded-3xl border border-border bg-cream p-6 sm:p-8">
          <div className="tint -mx-2 rounded-2xl p-5">
            <PhoneMock />
          </div>
          <h3 className="mt-7 flex items-center gap-2 text-[22px] font-medium text-ink">
            <PhoneCall className="size-5 text-primary" />
            AI Receptionist
          </h3>
          <p className="mt-2.5 text-[14.5px] leading-relaxed text-warm-grey">
            Handles inbound calls, answers FAQs, and books appointments when your front desk is busy
            or closed.
          </p>
        </Reveal>
      </div>

      {/* three smaller cards */}
      <div className="mt-5 grid gap-5 md:grid-cols-3">
        {small.map((c, i) => (
          <Reveal
            key={c.title}
            delay={i * 90}
            className="rounded-3xl border border-border bg-cream p-7 transition-colors hover:bg-muted"
          >
            <span className="tint flex size-11 items-center justify-center rounded-2xl">
              <c.icon className="size-5 text-primary" strokeWidth={2} />
            </span>
            <h3 className="mt-5 text-[19px] font-medium text-ink">{c.title}</h3>
            <p className="mt-2.5 text-[14.5px] leading-relaxed text-warm-grey">{c.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
