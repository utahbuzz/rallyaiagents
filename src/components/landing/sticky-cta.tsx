import { useEffect, useState } from "react";

import { CTA_LABEL } from "./primitives";

export function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white/95 p-3 backdrop-blur transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href="#book"
        className="focus-ring flex w-full items-center justify-center rounded-full bg-primary px-5 py-3.5 text-[15px] font-semibold text-primary-foreground"
      >
        {CTA_LABEL}
      </a>
    </div>
  );
}
