import rallyLogo from "@/assets/rally-logo.png.asset.json";

const company = [
  { label: "How it works", href: "#how" },
  { label: "What we help with", href: "#help" },
];

const product = [
  { label: "FAQ", href: "#faq" },
  { label: "Book a call", href: "#book" },
];

export function Footer() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_0.8fr_0.8fr]">
          <div>
            <img
              src={rallyLogo.url}
              alt="Rally"
              className="h-10 w-auto brightness-0 invert"
            />

            <p className="mt-3 max-w-[30ch] text-[14px] leading-relaxed text-bone/55">
              AI that runs the front office work your team never gets to.
            </p>
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
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-bone/10 pt-6">
          <p className="text-[13.5px] text-bone/45">© 2026 Rally Co. All rights reserved.</p>
          <p className="text-[13.5px] text-bone/45">Powered by Rally</p>
        </div>
      </div>
    </footer>
  );
}