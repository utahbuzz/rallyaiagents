import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";

import { CTA_LABEL } from "./primitives";

const links = [
  { label: "The Problem", href: "#problem" },
  { label: "Our Limits", href: "#limits" },
  { label: "The Rally Method", href: "#method" },
  { label: "What We Build", href: "#build" },
  { label: "Case Study", href: "#case-study" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[76px] w-full max-w-[1200px] items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="focus-ring rounded-md text-[24px] font-semibold tracking-[-0.03em] text-primary"
        >
          Rally
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 xl:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="focus-ring rounded-md text-[14.5px] font-medium text-ink transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#book"
            className="focus-ring hidden items-center rounded-full border border-border bg-background px-5 py-2.5 text-[14px] font-semibold text-ink transition-colors hover:border-primary hover:text-primary md:inline-flex"
          >
            {CTA_LABEL}
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="focus-ring flex size-10 items-center justify-center rounded-full border border-border text-ink xl:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background px-5 pt-3 pb-5 xl:hidden">
          <nav aria-label="Mobile" className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="focus-ring border-b border-border py-3 text-[16px] font-medium text-ink last:border-0"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#book"
            onClick={() => setOpen(false)}
            className="focus-ring mt-4 flex items-center justify-center rounded-full bg-primary px-5 py-3 text-[15px] font-semibold text-primary-foreground"
          >
            {CTA_LABEL}
          </a>
        </div>
      ) : null}
    </header>
  );
}
