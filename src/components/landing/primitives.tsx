import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

import { cn } from "@/lib/utils";

export const CTA_LABEL = "Book the free 25-minute call →";

/** Fade-in-up on scroll, one time per element. */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn("reveal", shown && "reveal-in", className)}
    >
      {children}
    </Tag>
  );
}

/** Mono eyebrow pill with a burgundy dot — opens every section. */
export function PillBadge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "tint inline-flex items-center gap-2 rounded-full border border-tint px-3.5 py-1.5 font-mono text-[11px] tracking-[0.14em] text-primary uppercase",
        className,
      )}
    >
      <span aria-hidden className="size-1.5 rounded-full bg-primary" />
      {children}
    </span>
  );
}

export function MonoLabel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "font-mono text-[11px] tracking-[0.14em] text-warm-grey uppercase",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function KpiTag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "tint inline-flex rounded-full px-3 py-1.5 font-mono text-[11px] tracking-[0.1em] text-primary uppercase",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** The single CTA used everywhere. */
export function Cta({
  variant = "solid",
  className,
  label = CTA_LABEL,
  href = "#book",
}: {
  variant?: "solid" | "outline" | "light";
  className?: string;
  label?: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "focus-ring inline-flex items-center justify-center rounded-full px-6 py-3.5 text-[15px] font-semibold transition-all",
        variant === "solid" &&
          "bg-primary text-primary-foreground hover:bg-primary-deep hover:-translate-y-0.5",
        variant === "outline" &&
          "border border-border bg-background text-ink hover:border-primary hover:text-primary",
        variant === "light" && "bg-white text-primary hover:-translate-y-0.5",
        className,
      )}
    >
      {label}
    </a>
  );
}

export function SectionHeading({
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
      <h2 className="text-[2rem] leading-[1.12] font-semibold text-ink sm:text-[2.6rem]">{title}</h2>
      {subtitle ? (
        <p className="mt-4 text-[16px] leading-relaxed text-warm-grey">{subtitle}</p>
      ) : null}
    </div>
  );
}

/** Section shell with the dashed container guides. */
export function Section({
  id,
  children,
  className,
  tone = "white",
  bare = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "white" | "bone" | "none";
  bare?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative",
        tone === "bone" && "bg-bone",
        tone === "white" && "bg-background",
        className,
      )}
    >
      <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-5 hidden border-l border-dashed border-border sm:left-8 lg:block"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-5 hidden border-r border-dashed border-border sm:right-8 lg:block"
        />
        <div className={cn(!bare && "py-20 sm:py-24 lg:py-32", "relative")}>{children}</div>
      </div>
    </section>
  );
}
