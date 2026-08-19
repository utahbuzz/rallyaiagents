import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

/** Fade-in-up on scroll. */
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
      { rootMargin: "0px 0px -12% 0px", threshold: 0.06 },
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

/** Small rounded label pill used at the top of every section. */
export function SectionPill({
  icon: Icon,
  children,
  className,
}: {
  icon: ElementType;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "tint inline-flex items-center gap-2 rounded-full border border-tint px-3.5 py-1.5 text-[13px] font-medium text-warm-grey",
        className,
      )}
    >
      <Icon className="size-3.5 text-primary" strokeWidth={2.2} />
      {children}
    </span>
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
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl",
        className,
      )}
    >
      <h2 className="text-[2rem] leading-[1.1] font-medium text-ink sm:text-[2.6rem]">{title}</h2>
      {subtitle ? (
        <p className="mt-4 text-[15px] leading-relaxed text-warm-grey">{subtitle}</p>
      ) : null}
    </div>
  );
}

export function Stars({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-3.5 fill-primary text-primary" />
      ))}
    </div>
  );
}

/** Section shell with the reference's dashed vertical container guides. */
export function Section({
  id,
  children,
  className,
  tone = "white",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "white" | "bone" | "none";
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
          className="pointer-events-none absolute inset-y-0 left-5 hidden border-l border-dashed border-border/70 sm:left-8 lg:block"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-5 hidden border-r border-dashed border-border/70 sm:right-8 lg:block"
        />
        <div className="relative py-20 sm:py-24 lg:py-28">{children}</div>
      </div>
    </section>
  );
}
