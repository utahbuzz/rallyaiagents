import { MonoLabel } from "./primitives";

import brightLogo from "@/assets/logo-bright.png.asset.json";
import happyToothLogo from "@/assets/logo-happy-tooth.png.asset.json";
import horsleyLogo from "@/assets/logo-horsley.png.asset.json";
import hubbardLogo from "@/assets/logo-hubbard.png.asset.json";
import kuhniLogo from "@/assets/logo-kuhni.png.asset.json";

const clients = [
  { name: "Happy Tooth", src: happyToothLogo.url, ratio: 99 / 51, className: "h-9 sm:h-11" },
  { name: "Horsley Orthodontics", src: horsleyLogo.url, ratio: 500 / 162, className: "h-8 sm:h-10" },
  { name: "Hubbard Orthodontics", src: hubbardLogo.url, ratio: 1153 / 311, className: "h-8 sm:h-10" },
  {
    name: "Kuhni Orthodontic Studio",
    src: kuhniLogo.url,
    ratio: 500 / 109,
    className: "h-7 sm:h-8",
  },
  { name: "Bright", src: brightLogo.url, ratio: 470 / 168, className: "h-8 sm:h-10" },
];

export function Marquee() {
  return (
    <section className="border-y border-border bg-bone py-14 sm:py-16">
      <div className="flex flex-col items-center text-center">
        <MonoLabel>Previously worked with</MonoLabel>
      </div>
      <div className="mx-auto mt-8 max-w-5xl px-6">
        <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16">
          {clients.map((c) => (
            <li key={c.name} className="shrink-0">
              <span
                role="img"
                aria-label={c.name}
                className={`${c.className} logo-mark block bg-ink opacity-40 transition-all duration-300 hover:bg-primary hover:opacity-100`}
                style={{
                  aspectRatio: String(c.ratio),
                  maskImage: `url("${c.src}")`,
                  WebkitMaskImage: `url("${c.src}")`,
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
