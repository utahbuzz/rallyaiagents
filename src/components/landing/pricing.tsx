import { ArrowRight, Check, Tag } from "lucide-react";

import { cn } from "@/lib/utils";

import { Reveal, Section, SectionHeading, SectionPill } from "./primitives";

const tiers = [
  {
    name: "Starter",
    price: "$99",
    unit: "/consult",
    subtitle: "For practices testing AI",
    cta: "Get Started",
    featured: false,
    features: [
      "1 AI agent",
      "Website chat",
      "SMS follow-up",
      "Smart reminders",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "$79",
    unit: "/consult",
    badge: "Save 20%",
    subtitle: "For growing practices",
    cta: "Get Started",
    featured: true,
    features: [
      "Everything in Starter",
      "AI receptionist (voice)",
      "Patient reactivation",
      "Online booking integration",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    unit: "",
    subtitle: "For multi-location practices",
    cta: "Contact Us",
    featured: false,
    features: [
      "Everything in Growth",
      "Multiple locations",
      "Custom integrations",
      "Dedicated account manager",
      "White-label options",
    ],
  },
];

export function Pricing() {
  return (
    <Section id="pricing" tone="bone">
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <SectionPill icon={Tag}>Pricing</SectionPill>
        </Reveal>
        <Reveal delay={60}>
          <SectionHeading
            className="mt-6"
            title="Pay for patients, not promises"
            subtitle="Choose a plan that fits your practice. Every plan includes the full AI agent — the only difference is scale."
          />
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {tiers.map((t, i) => (
          <Reveal
            key={t.name}
            delay={i * 90}
            className={cn(
              "flex flex-col rounded-3xl border bg-background p-7 sm:p-8",
              t.featured
                ? "border-primary shadow-[0_30px_70px_-45px_rgba(107,35,50,0.6)] lg:-mt-4 lg:mb-4"
                : "border-border",
            )}
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-[15px] font-semibold text-ink">{t.name}</p>
              {t.badge ? (
                <span className="rounded-full bg-primary px-2.5 py-1 text-[11px] font-semibold text-primary-foreground">
                  {t.badge}
                </span>
              ) : null}
            </div>
            <p className="mt-5 flex items-baseline gap-1 font-display text-[2.6rem] leading-none font-medium text-ink">
              {t.price}
              <span className="text-[14px] font-normal text-warm-grey">{t.unit}</span>
            </p>
            <p className="mt-3 text-[14px] text-warm-grey">{t.subtitle}</p>

            <a
              href="#book"
              className={cn(
                "mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[14.5px] font-semibold transition-colors",
                t.featured
                  ? "bg-primary text-primary-foreground hover:bg-primary-light"
                  : "border border-ink/15 text-ink hover:border-primary hover:text-primary",
              )}
            >
              {t.cta}
              <ArrowRight className="size-4" />
            </a>

            <p className="mt-8 text-[12px] font-semibold tracking-widest text-warm-grey uppercase">
              What&apos;s included
            </p>
            <ul className="mt-4 space-y-3">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-[14.5px] text-ink">
                  <span className="tint mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full">
                    <Check className="size-3 text-primary" strokeWidth={3} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
