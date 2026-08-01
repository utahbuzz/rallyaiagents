import { ArrowRight, Wand2 } from "lucide-react";

import { SetupMock } from "./mocks";
import { Reveal, SectionPill } from "./primitives";

export function SetupHighlight() {
  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-[1200px] px-5 pb-20 sm:px-8 sm:pb-24 lg:pb-28">
        <Reveal className="tint overflow-hidden rounded-[2rem] border border-tint p-6 sm:p-10 lg:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <SetupMock />
            </div>
            <div className="order-1 lg:order-2">
              <SectionPill icon={Wand2} className="bg-background">
                Setup
              </SectionPill>
              <h2 className="mt-6 text-[2rem] leading-[1.12] font-medium text-ink sm:text-[2.5rem]">
                Instant setup, powered by AI
              </h2>
              <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-warm-grey">
                Launch your practice&apos;s AI agent in days, not months. We handle the build, the
                training, and the deployment — your team doesn&apos;t need to learn any new
                software.
              </p>
              <a
                href="#book"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-background px-6 py-3 text-[14.5px] font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
              >
                Learn More
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
