import { CalendarDays, ClipboardList } from "lucide-react";

import { Reveal } from "@/components/landing/primitives";

import { BOOKING_URL, Eyebrow, Heading, SectionShell } from "./primitives";

export function FootballDualCta() {
  return (
    <SectionShell tone="raised">
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <Eyebrow>Two ways in</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <Heading
            className="mt-6"
            title="Pick whichever takes less effort right now."
            subtitle="Both end in the same place: a straight answer about where AI would actually help your program."
          />
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        <Reveal className="lift-dark flex h-full flex-col rounded-3xl border border-night-line bg-night p-8">
          <span className="brand-tint-dark flex size-11 items-center justify-center rounded-full">
            <CalendarDays className="size-5 text-brand-bright" />
          </span>
          <h3 className="mt-5 text-[21px] font-semibold text-chalk">Book the call</h3>
          <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-chalk-muted">
            Fifteen minutes on your schedule. We find the biggest time-sink in your week and tell
            you whether it&apos;s worth automating. No deck.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-[15px] font-semibold text-primary-foreground transition-colors hover:bg-brand-bright"
          >
            Book a free scoping call
          </a>
        </Reveal>

        <Reveal
          delay={90}
          className="lift-dark flex h-full flex-col rounded-3xl border border-night-line bg-night p-8"
        >
          <span className="brand-tint-dark flex size-11 items-center justify-center rounded-full">
            <ClipboardList className="size-5 text-brand-bright" />
          </span>
          <h3 className="mt-5 text-[21px] font-semibold text-chalk">Send the details</h3>
          <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-chalk-muted">
            Prefer to write it down? Six fields about your program and where the week goes, and
            we&apos;ll come back to you within one business day.
          </p>
          <a
            href="#fit"
            className="focus-ring mt-6 inline-flex items-center justify-center rounded-full border border-night-line px-6 py-3.5 text-[15px] font-semibold text-chalk transition-colors hover:border-brand-bright"
          >
            See if we&apos;re a fit
          </a>
        </Reveal>
      </div>
    </SectionShell>
  );
}
