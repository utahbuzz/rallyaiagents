import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import rallyLogo from "@/assets/rally-logo.png.asset.json";
import { cn } from "@/lib/utils";

import { BOOKING_URL, PRIMARY_CTA, SECONDARY_CTA } from "./primitives";

const links = [
  { label: "The problem", href: "#problem" },
  { label: "Why now", href: "#shift" },
  { label: "How it works", href: "#process" },
  { label: "Who it's for", href: "#programs" },
  { label: "FAQ", href: "#faq" },
];

export function FootballHeader() {
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
          ? "border-b border-night-line bg-night/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[76px] w-full max-w-[1200px] items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="focus-ring rounded-md" aria-label="Rally home">
          <img
            src={rallyLogo.url}
            alt="Rally"
            className="h-9 w-auto brightness-0 invert sm:h-10"
          />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 xl:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="focus-ring rounded-md text-[14.5px] font-medium text-chalk-muted transition-colors hover:text-chalk"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#fit"
            className="focus-ring hidden items-center rounded-full border border-night-line px-4 py-2.5 text-[14px] font-semibold text-chalk transition-colors hover:border-brand-bright md:inline-flex"
          >
            {SECONDARY_CTA}
          </a>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring hidden items-center rounded-full bg-primary px-4 py-2.5 text-[14px] font-semibold text-primary-foreground transition-colors hover:bg-brand-bright sm:inline-flex"
          >
            {PRIMARY_CTA}
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="focus-ring flex size-10 items-center justify-center rounded-full border border-night-line text-chalk xl:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-night-line bg-night px-5 pt-3 pb-5 xl:hidden">
          <nav aria-label="Mobile" className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="focus-ring border-b border-night-line py-3 text-[16px] font-medium text-chalk last:border-0"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 grid gap-2">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring flex items-center justify-center rounded-full bg-primary px-5 py-3 text-[15px] font-semibold text-primary-foreground"
            >
              {PRIMARY_CTA}
            </a>
            <a
              href="#fit"
              onClick={() => setOpen(false)}
              className="focus-ring flex items-center justify-center rounded-full border border-night-line px-5 py-3 text-[15px] font-semibold text-chalk"
            >
              {SECONDARY_CTA}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
