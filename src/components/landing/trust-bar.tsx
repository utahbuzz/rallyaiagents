import { Reveal } from "./primitives";

const marks = [
  "Bright Smile Ortho",
  "Northgate Dental",
  "Cedar Park Braces",
  "Lakeview Orthodontics",
  "Summit Smile Co.",
];

export function TrustBar() {
  return (
    <section className="border-b border-border bg-background pt-32 sm:pt-40">
      <div className="mx-auto w-full max-w-[1200px] px-5 pb-14 sm:px-8">
        <Reveal className="text-center">
          <p className="text-[13.5px] font-medium text-warm-grey">
            Trusted by forward-thinking orthodontic practices
          </p>
          <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {marks.map((m) => (
              <li
                key={m}
                className="font-display text-[17px] font-medium text-ink/35 transition-colors hover:text-ink/70"
              >
                {m}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
