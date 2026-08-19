import { useState, type FormEvent } from "react";
import { ArrowRight, Facebook, Instagram, Linkedin } from "lucide-react";
import { toast } from "sonner";

import rallyLogo from "@/assets/rally-logo.png.asset.json";

const company = [
  { label: "The problem", href: "#problem" },
  { label: "Our limits", href: "#limits" },
  { label: "The Rally method", href: "#method" },
  { label: "What we build", href: "#build" },
];

const product = [
  { label: "Case study", href: "#case-study" },
  { label: "FAQ", href: "#faq" },
  { label: "Book a call", href: "#book" },
];


const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Instagram, label: "Instagram" },
];

export function Footer() {
  const [email, setEmail] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setEmail("");
    toast.success("You're subscribed — we'll be in touch.");
  };

  return (
    <footer className="bg-ink">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1.2fr]">
          <div>
            <p className="text-[24px] font-semibold tracking-[-0.03em] text-bone">Rally</p>

            <p className="mt-3 max-w-[30ch] text-[14px] leading-relaxed text-bone/55">
              AI that runs the front office work your team never gets to.

            </p>
            <div className="mt-6 flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#top"
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-full border border-bone/15 text-bone/70 transition-colors hover:border-primary-light hover:text-bone"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[13px] font-semibold tracking-widest text-bone/45 uppercase">
              Company
            </p>
            <ul className="mt-4 space-y-3">
              {company.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[14.5px] text-bone/70 transition-colors hover:text-bone"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[13px] font-semibold tracking-widest text-bone/45 uppercase">
              Product
            </p>
            <ul className="mt-4 space-y-3">
              {product.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[14.5px] text-bone/70 transition-colors hover:text-bone"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[13px] font-semibold tracking-widest text-bone/45 uppercase">
              Newsletter
            </p>
            <p className="mt-4 text-[14px] leading-relaxed text-bone/60">
              Get tips, product updates, and insights on growing your practice with AI.
            </p>
            <form onSubmit={onSubmit} className="mt-5 flex flex-col gap-2.5 sm:flex-row">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@practice.com"
                className="min-w-0 flex-1 rounded-full border border-bone/15 bg-bone/5 px-4 py-2.5 text-[14px] text-bone placeholder:text-bone/40 focus:border-primary-light focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-[14px] font-semibold text-primary-foreground transition-colors hover:bg-primary-light"
              >
                Subscribe
                <ArrowRight className="size-3.5" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-bone/10 pt-6">
          <p className="text-[13.5px] text-bone/45">© 2026 Rally Co. All rights reserved.</p>
          <p className="text-[13.5px] text-bone/45">Powered by Rally</p>
        </div>
      </div>
    </footer>
  );
}
