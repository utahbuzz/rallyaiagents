import { site } from "@/lib/site";

import { Label, Reveal, Section } from "./primitives";

export function Results() {
  return (
    <Section id="results">
      <Reveal>
        <Label>Results</Label>
      </Reveal>

      <Reveal delay={70} className="mt-8 border-t border-border pt-10">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="text-[2rem] text-ink sm:text-[2.6rem]">{site.hubbardName}</h2>
            <p className="mono-label mt-4 text-warm-grey">{site.hubbardLocation}</p>
            <p className="mt-6 max-w-[46ch] text-[16.5px] leading-[1.7] text-warm-grey">
              Website chat and speed-to-lead follow-up, configured for their hours, services, and
              intake scripts — answering after close and responding to new leads in under a minute.
            </p>
          </div>

          <div className="flex flex-col justify-center border-t border-border pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-16">
            <p className="font-display text-[1.6rem] leading-tight font-semibold text-ink sm:text-[2rem]">
              First results publishing soon.
            </p>
            <p className="mt-4 max-w-[42ch] text-[16px] text-warm-grey">
              We publish numbers once they&apos;re measured against the baseline we agreed on — not
              before.
            </p>
            <a
              href={site.hubbardUrl}
              className="mt-6 w-fit text-[15px] text-ink underline decoration-warm-grey/50 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
            >
              Visit the {site.hubbardName} site
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
