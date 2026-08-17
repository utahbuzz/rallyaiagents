import { Label, Reveal, Section } from "./primitives";

export function AboutCaleb() {
  return (
    <Section id="about">
      <Reveal>
        <Label>Who you&apos;re actually working with</Label>
      </Reveal>

      <div className="mt-10 grid gap-10 border-t border-border pt-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <Reveal>
          {/* Placeholder frame — swap for a real photo of Caleb (no stock imagery). */}
          <div
            role="img"
            aria-label="Photo of Caleb Taylor, founder of Rally — coming soon"
            className="flex aspect-[4/5] w-full items-end border border-border bg-bone-deep p-5"
          >
            <p className="mono-label text-warm-grey">Photo of Caleb — to come</p>
          </div>
        </Reveal>

        <Reveal delay={90} className="space-y-6 text-[16.5px] leading-[1.75] text-warm-grey">
          <h2 className="text-[2rem] text-ink sm:text-[2.6rem]">Caleb Taylor</h2>
          <p>
            I spent years in dental marketing, sending practices more leads. The pattern was always
            the same: the leads showed up, the front desk was already full, and half of them never
            got a real response. The problem was never traffic.
          </p>
          <p>
            So Rally is built as a fixed set of systems, not open-ended custom work. The diagnosis is
            specific to your practice. The build comes from things we&apos;ve already shipped and
            tested. That&apos;s deliberate — it&apos;s what keeps it reliable and keeps it live.
          </p>
          <p>
            Every call, every build, every fix goes through me. Discovery, onboarding, and support
            are mine. Not a support ticket, not a rotating account manager. When something needs to
            change, you text me.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
