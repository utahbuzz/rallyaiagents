import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Swap this for the real scheduling link once it exists. */
export const BOOKING_URL = "https://cal.com/rally/football-scoping-call";
export const CONTACT_EMAIL = "football@rally.ai";
export const PRIMARY_CTA = "Book a free scoping call";
export const SECONDARY_CTA = "See if we're a fit";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "brand-tint-dark border-brand-dark inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.16em] text-chalk uppercase",
        className,
      )}
    >
      <span aria-hidden className="size-1.5 rounded-full bg-brand-bright" />
      {children}
    </span>
  );
}

export function BookCta({
  className,
  label = PRIMARY_CTA,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "focus-ring inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-[15px] font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-brand-bright",
        className,
      )}
    >
      {label}
    </a>
  );
}

export function FormCta({
  className,
  label = SECONDARY_CTA,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      href="#fit"
      className={cn(
        "focus-ring inline-flex items-center justify-center rounded-full border border-night-line bg-night-raised px-6 py-3.5 text-[15px] font-semibold text-chalk transition-colors hover:border-brand-bright hover:text-chalk",
        className,
      )}
    >
      {label}
    </a>
  );
}

export function SectionShell({
  id,
  children,
  className,
  tone = "night",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "night" | "raised";
}) {
  return (
    <section
      id={id}
      className={cn("relative", tone === "raised" ? "bg-night-raised" : "bg-night", className)}
    >
      <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-5 hidden border-l border-dashed border-night-line sm:left-8 lg:block"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-5 hidden border-r border-dashed border-night-line sm:right-8 lg:block"
        />
        <div className="relative py-20 sm:py-24 lg:py-28">{children}</div>
      </div>
    </section>
  );
}

export function Heading({
  title,
  subtitle,
  align = "center",
  className,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl", className)}>
      <h2 className="text-[2rem] leading-[1.1] font-semibold text-chalk sm:text-[2.7rem]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-[16.5px] leading-relaxed text-chalk-muted">{subtitle}</p>
      ) : null}
    </div>
  );
}
