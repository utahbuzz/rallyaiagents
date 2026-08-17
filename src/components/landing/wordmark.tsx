import { cn } from "@/lib/utils";

/**
 * Rally script wordmark. Text-based placeholder for the real logo file —
 * swap the span for an <img> when the asset is available, keeping the sizing.
 */
export function Wordmark({ className, tone = "ink" }: { className?: string; tone?: "ink" | "bone" }) {
  return (
    <span
      className={cn(
        "font-display text-[24px] leading-none font-extrabold tracking-[-0.04em]",
        tone === "ink" ? "text-ink" : "text-bone",
        className,
      )}
    >
      Rally
    </span>
  );
}
