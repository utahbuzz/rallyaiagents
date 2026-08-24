import { useEffect, useRef, useState } from "react";

import { MonoLabel, Reveal, Section } from "./primitives";

const stats = [
  { value: 40, suffix: "+", label: "Practice teams trained" },
  { value: 11, suffix: "hrs", label: "Given back per week, typical" },
  { value: 25, suffix: "min", label: "That's all the first call takes" },
];

const tags = [
  "Orthodontics",
  "Pediatric",
  "Front desk teams",
  "Practice owners",
  "General dentistry",
  "Multi-location",
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let raf = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / 1100);
          setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to]);

  return (
    <p ref={ref} className="text-[3rem] leading-none font-semibold text-ink sm:text-[3.6rem]">
      {n}
      <span className="text-primary">{suffix}</span>
    </p>
  );
}

export function Stats() {
  return (
    <Section id="about" tone="white">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <Reveal>
          <MonoLabel>About Rally</MonoLabel>
          <h2 className="mt-6 text-[2rem] leading-[1.12] font-semibold text-ink sm:text-[2.5rem]">
            Doing nothing about AI is a decision. It&apos;s just the expensive one.
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="text-[17px] leading-relaxed text-warm-grey">
            The practices already using it are pulling ahead on scheduling, follow-up, and
            unscheduled treatment. Rally teaches your team what AI can do in a dental practice, then
            builds the parts worth building. No enterprise software to buy, no year-long contract,
            no jargon. We work on your real tasks, on your screen, with your team in the room.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label}>
                <Counter to={s.value} suffix={s.suffix} />
                <p className="mt-3 text-[14.5px] leading-snug text-warm-grey">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={140} className="mt-16 flex flex-wrap justify-center gap-3">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border bg-bone px-4 py-2 text-[14px] text-ink"
          >
            {t}
          </span>
        ))}
      </Reveal>
    </Section>
  );
}
