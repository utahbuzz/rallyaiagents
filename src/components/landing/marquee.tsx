import { MonoLabel } from "./primitives";

const clients = [
  "Happy Tooth",
  "Bright Arch Ortho",
  "Cedar Dental Group",
  "Lakeside Smiles",
  "Northfield Ortho",
];

export function Marquee() {
  const row = [...clients, ...clients, ...clients];
  return (
    <section className="border-y border-border bg-bone py-14 sm:py-16">
      <div className="flex flex-col items-center text-center">
        <MonoLabel>Practices the Rally team has worked with</MonoLabel>
      </div>
      <div className="marquee-mask mt-8 overflow-hidden">
        <ul className="marquee-track flex w-max items-center gap-12 sm:gap-16">
          {row.map((c, i) => (
            <li
              key={`${c}-${i}`}
              className="text-[19px] font-semibold whitespace-nowrap text-ink opacity-45 transition-opacity duration-300 hover:opacity-100 sm:text-[22px]"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
