import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

/** Fade-in-up on scroll. Respects prefers-reduced-motion via CSS. */
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

/** Mono uppercase eyebrow / section label. */
export function Label({
  children,
  className,
  tone = "grey",
}: {
  children: ReactNode;
  className?: string;
  tone?: "grey" | "tangerine" | "bone";
}) {
  return (
    <p
      className={cn(
        "mono-label",
        tone === "grey" && "text-warm-grey",
        tone === "tangerine" && "text-primary",
        tone === "bone" && "text-bone/60",
        className,
      )}
    >
      {children}
    </p>
  );
}

/** The single primary CTA used sitewide. */
export function BookButton({
  className,
  children = "Book a call",
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a
      href={site.bookingUrl}
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-sans text-[15px] font-semibold text-primary-foreground transition-transform hover:scale-[1.02]",
        className,
      )}
    >
      {children}
    </a>
  );
}

/** Section shell: max-width container with generous vertical rhythm. */
export function Section({
  id,
  children,
  className,
  tone = "bone",
  as: Tag = "section",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "bone" | "ink" | "none";
  as?: ElementType;
}) {
  return (
    <Tag
      id={id}
      className={cn(
        "relative",
        tone === "bone" && "bg-bone text-ink",
        tone === "ink" && "bg-ink text-bone",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-[1160px] px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
        {children}
      </div>
    </Tag>
  );
}
