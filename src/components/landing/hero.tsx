import { ArrowRight, Sparkles } from "lucide-react";

import avatarChelsea from "@/assets/avatar-chelsea.jpg";
import avatarJames from "@/assets/avatar-james.jpg";
import avatarSarah from "@/assets/avatar-sarah.jpg";

import { DashboardMock } from "./mocks";
import { Reveal, Stars } from "./primitives";

const avatars = [
  { src: avatarSarah, alt: "Dr. Sarah Mitchell" },
  { src: avatarChelsea, alt: "Chelsea H." },
  { src: avatarJames, alt: "Dr. James Park" },
];

export function Hero() {
  return (
    <section id="top" className="hero-glow relative overflow-hidden pt-[112px]">
      <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-5 hidden border-l border-dashed border-border/70 sm:left-8 lg:block"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-5 hidden border-r border-dashed border-border/70 sm:right-8 lg:block"
        />

        <div className="relative flex flex-col items-center pt-10 text-center sm:pt-16">
          <Reveal>
            <span className="tint inline-flex items-center gap-2 rounded-full border border-tint px-3.5 py-1.5 text-[13px] font-medium text-warm-grey">
              <span className="flex items-center gap-1.5 font-semibold text-primary">
                <Sparkles className="size-3.5" />
                AI-Powered
              </span>
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 max-w-[15ch] text-[2.6rem] leading-[1.05] font-medium text-ink sm:text-[4rem] lg:text-[4.6rem]">
              Your AI agent that fills chairs
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 max-w-[54ch] text-[15.5px] leading-relaxed text-warm-grey sm:text-[17px]">
              Built for orthodontic practices who need every lead followed up, every appointment
              confirmed, and every chair filled — without adding headcount.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <a
              href="#book"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-[15px] font-semibold text-primary-foreground shadow-[0_16px_34px_-18px_rgba(107,35,50,0.7)] transition-transform hover:scale-[1.03]"
            >
              Book a Discovery Call
              <ArrowRight className="size-4" />
            </a>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-full border border-border bg-background/70 px-4 py-2.5 backdrop-blur-sm">
              <div className="flex -space-x-2.5">
                {avatars.map((a) => (
                  <img
                    key={a.alt}
                    src={a.src}
                    alt={a.alt}
                    width={512}
                    height={512}
                    className="size-8 rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              <span className="text-[13.5px] font-semibold text-ink">Trusted by Practices</span>
              <span aria-hidden className="h-4 w-px bg-border" />
              <span className="flex items-center gap-1.5 text-[13.5px] font-semibold text-ink">
                5.0
                <Stars />
              </span>
            </div>
          </Reveal>
        </div>

        {/* Floating product screenshot — overlaps the next section */}
        <Reveal delay={140} className="relative z-10 mt-14 -mb-24 sm:mt-20 sm:-mb-32">
          <div className="rounded-[1.5rem] border border-border bg-background/70 p-1.5 shadow-[0_50px_100px_-50px_rgba(26,26,23,0.5)] backdrop-blur-sm sm:p-2.5">
            <DashboardMock />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
