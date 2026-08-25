import { Reveal } from "@/components/landing/primitives";

import { FootballLeadForm } from "./lead-form";
import { BOOKING_URL, Eyebrow } from "./primitives";

const agenda = [
  { n: "01", title: "Where the week goes", body: "You talk, we ask the annoying questions." },
  { n: "02", title: "What's worth automating", body: "Usually one thing. Sometimes it's nothing yet." },
  { n: "03", title: "What it would take", body: "Scope, timeline, and cost in plain numbers." },
];

export function FootballFinalCta() {
  return (
    <section id="fit" className="bg-night">
      <div className="cta-gradient rounded-t-[2rem] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="max-w-3xl">
            <Eyebrow className="border-white/25 bg-white/10 text-white">Start here</Eyebrow>
            <h2 className="mt-6 text-[2.2rem] leading-[1.08] font-semibold text-white sm:text-[3rem]">
              Move first, or spend two seasons catching up.
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-white/80">
              Book the free 15-minute scoping call, or send us the details and we&apos;ll come back
              to you. Either way you get a straight answer about your program.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-primary transition-transform hover:-translate-y-0.5"
              >
                Book a free scoping call
              </a>
              <a
                href="#fit-form"
                className="focus-ring inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:border-white"
              >
                Use the form instead
              </a>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {agenda.map((a) => (
              <div key={a.n} className="rounded-2xl border border-white/20 bg-white/10 p-6">
                <p className="text-[11px] font-semibold tracking-[0.16em] text-white/70 uppercase">
                  {a.n}
                </p>
                <h3 className="mt-3 text-[17px] font-semibold text-white">{a.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-white/75">{a.body}</p>
              </div>
            ))}
          </div>

          <Reveal id="fit-form" className="float-card mt-12 max-w-2xl" as="div">
            <FootballLeadForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
