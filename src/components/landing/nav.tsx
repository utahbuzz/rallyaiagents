import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";

const links = [
  { label: "Why Rally", href: "#problem" },
  { label: "How it works", href: "#how" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
      <div className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between px-5 sm:px-8">
        <a href="#top" aria-label="Rally home" className="flex items-center">
          <img
            src={rallyLogo.url}
            alt="Rally"
            className="h-9 w-auto sm:h-10"
            width={1519}
            height={961}
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14.5px] font-medium text-ink transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#book"
            className="hidden items-center gap-1.5 rounded-full border border-border bg-background px-5 py-2.5 text-[14px] font-semibold text-ink transition-colors hover:border-primary hover:text-primary sm:inline-flex"
          >
            Book a Call
            <ArrowRight className="size-3.5" />
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-full border border-border text-ink lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background px-5 pt-3 pb-5 lg:hidden">
          <nav className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-[15px] font-medium text-ink last:border-0"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#book"
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center gap-1.5 rounded-full bg-primary px-5 py-3 text-[14.5px] font-semibold text-primary-foreground"
          >
            Book a Discovery Call
            <ArrowRight className="size-4" />
          </a>
        </div>
      ) : null}
    </header>
  );
}
