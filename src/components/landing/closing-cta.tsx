import { BookButton, Reveal, Section } from "./primitives";

export function ClosingCta() {
  return (
    <Section id="book" tone="ink">
      <div className="max-w-[46ch]">
        <Reveal>
          <h2 className="text-[2.2rem] text-bone sm:text-[3.4rem]">
            Let&apos;s find out where your practice is leaking.
          </h2>
        </Reveal>
        <Reveal delay={90}>
          <p className="mt-7 text-[17px] leading-[1.7] text-bone/60">
            A 20-minute call. We&apos;ll map how leads move through your practice and tell you
            straight whether there&apos;s anything worth building.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <BookButton className="mt-9" />
        </Reveal>
      </div>
    </Section>
  );
}
