import { BookButton } from "./primitives";

/** Sticky single-CTA bar, mobile only. */
export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bone/95 px-5 py-3 backdrop-blur-md md:hidden">
      <BookButton className="w-full py-3.5" />
    </div>
  );
}
