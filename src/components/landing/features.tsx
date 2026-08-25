import { Cta, MonoLabel, PillBadge, Reveal, Section, SectionHeading } from "./primitives";
import { CallMock, ChatMock, DashboardMock } from "./mocks";

const rows = [
  {
    label: "Learn",
    title: "Your team learns on your own work",
    body: "We open your real tasks — recall lists, insurance notes, patient emails — and do them with AI while your team tries it. No slides.",
    mock: <DashboardMock />,
  },
  {
    label: "Adopt",
    title: "Then we build what saves the most time",
    body: "Missed-call texts, after-hours answers, follow-up that actually happens. We build it and we run it.",
    mock: <ChatMock />,
    flip: true,
  },
];

export function Features() {
  return (
    <Section id="features" tone="white">
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <PillBadge>What it looks like</PillBadge>
        </Reveal>
        <Reveal delay={60}>
          <SectionHeading
            className="mt-6"
            title="Teach first, build second"
            subtitle="Same two moves at every practice. Only what we build changes."
          />
        </Reveal>
      </div>

      <div className="mt-16 flex flex-col gap-16 sm:gap-20">
        {rows.map((r, i) => (
          <div key={r.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal delay={i * 60} className={r.flip ? "lg:order-2" : ""}>
              <MonoLabel>{r.label}</MonoLabel>
              <h3 className="mt-5 text-[1.6rem] leading-snug font-semibold text-ink sm:text-[2rem]">
                {r.title}
              </h3>
              <p className="mt-4 text-[16.5px] leading-relaxed text-warm-grey">{r.body}</p>
              <Cta variant="outline" className="mt-7" label="Book the free call →" />
            </Reveal>
            <Reveal delay={i * 60 + 80} className={r.flip ? "lg:order-1" : ""}>
              <div className="lift rounded-[1.6rem] bg-bone p-4 sm:p-6">{r.mock}</div>
            </Reveal>
          </div>
        ))}

        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <Reveal>
            <MonoLabel>Day one</MonoLabel>
            <h3 className="mt-5 text-[1.6rem] leading-snug font-semibold text-ink sm:text-[2rem]">
              The first thing most practices fix
            </h3>
            <p className="mt-4 text-[16.5px] leading-relaxed text-warm-grey">
              A missed call is a patient booking somewhere else. Cheapest thing to turn on, and the
              one your front desk notices by Wednesday.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="lift rounded-[1.6rem] bg-bone p-4 sm:p-6">
              <CallMock />
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
