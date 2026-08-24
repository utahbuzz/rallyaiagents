import { MonoLabel } from "./primitives";

import brightLogo from "@/assets/logo-bright.png.asset.json";
import happyToothLogo from "@/assets/logo-happy-tooth.png.asset.json";
import horsleyLogo from "@/assets/logo-horsley.png.asset.json";
import hubbardLogo from "@/assets/logo-hubbard.png.asset.json";
import kuhniLogo from "@/assets/logo-kuhni.png.asset.json";

const clients = [
  { name: "Happy Tooth", src: happyToothLogo.url, className: "h-9 sm:h-11" },
  { name: "Horsley Orthodontics", src: horsleyLogo.url, className: "h-8 sm:h-10" },
  { name: "Hubbard Orthodontics", src: hubbardLogo.url, className: "h-8 sm:h-10" },
  { name: "Kuhni Orthodontic Studio", src: kuhniLogo.url, className: "h-7 sm:h-9" },
  { name: "Bright", src: brightLogo.url, className: "h-8 sm:h-10" },
];

export function Marquee() {
  const row = [...clients, ...clients, ...clients];
  return (
    <section className="border-y border-border bg-bone py-14 sm:py-16">
      <div className="flex flex-col items-center text-center">
        <MonoLabel>Previously worked with</MonoLabel>
      </div>
      <div className="marquee-mask mt-8 overflow-hidden">
        <ul className="marquee-track flex w-max items-center gap-12 sm:gap-16">
          {row.map((c, i) => (
            <li key={`${c.name}-${i}`} className="shrink-0">
              <img
                src={c.src}
                alt={c.name}
                loading="lazy"
                className={`${c.className} w-auto opacity-45 transition-all duration-300 hover:opacity-100`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
