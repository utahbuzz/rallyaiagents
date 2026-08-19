import { MonoLabel, Reveal, Section } from "./primitives";

const clients = [
  "Happy Tooth",
  "Bright Arch Ortho",
  "Cedar Dental Group",
  "Lakeside Smiles",
  "Northfield Ortho",
];

export function TrustBar() {
  return (
    <Section tone="bone" className="pt-24 sm:pt-32" bare>
      <div className="pt-28 pb-16 sm:pt-36 sm:pb-20">
        <Reveal className="flex flex-col items-center text-center">
          <MonoLabel>Practices we&apos;ve worked with</MonoLabel>
          <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {clients.map((c) => (
              <li key={c}>
                <span className="font-display text-[20px] font-semibold text-ink opacity-55 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:text-[23px]">
                  {c}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-7 text-[13.5px] text-warm-grey">
            Prior work by the Rally team, not a client roster. We&apos;ll tell you which is which on
            the call.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
