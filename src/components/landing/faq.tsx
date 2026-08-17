import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Label, Reveal, Section } from "./primitives";

const items = [
  {
    q: "Do we need to switch practice management software?",
    a: "No — Rally sits on top of what you already run. Nothing gets ripped out and your team keeps working the way they work today.",
  },
  {
    q: "Is this HIPAA compliant?",
    a: "Yes. BAAs are in place with every vendor before any patient data moves.",
  },
  {
    q: "How long until it's live?",
    a: "The audit takes about a week. A first build is typically live within two to three weeks after that, depending on how much we're configuring and how fast we can get your scripts, hours, and services confirmed.",
  },
  {
    q: "What does it cost?",
    a: "Three stages, priced separately. The audit is a flat fee and stands on its own. The build is quoted once we know what we're building — anchored against what the manual version of that work costs your practice every week. Then a monthly fee to run and maintain it. We'll give you the numbers on the first call. It's a real investment, not a $99 chatbot.",
  },
  {
    q: "Is there a contract?",
    a: "Month to month. If it isn't moving the number we agreed on, you shouldn't be locked in.",
  },
  {
    q: "What if it doesn't work?",
    a: "We agree on one number and a 60-day target before we build anything. If it hasn't moved, we tell you straight, and you can stop. No renewal games.",
  },
];

export function Faq() {
  return (
    <Section id="faq">
      <Reveal>
        <Label>Questions</Label>
      </Reveal>

      <Reveal delay={70}>
        <h2 className="mt-6 max-w-[22ch] text-[2rem] text-ink sm:text-[3rem]">
          The things practices ask first.
        </h2>
      </Reveal>

      <Reveal delay={120} className="mt-12">
        <Accordion type="single" collapsible className="border-t border-border">
          {items.map((it) => (
            <AccordionItem key={it.q} value={it.q} className="border-b border-border">
              <AccordionTrigger className="py-6 text-left font-display text-[1.15rem] font-semibold tracking-[-0.02em] text-ink hover:no-underline sm:text-[1.3rem]">
                {it.q}
              </AccordionTrigger>
              <AccordionContent className="max-w-[70ch] pb-7 text-[16.5px] leading-[1.7] text-warm-grey">
                {it.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </Section>
  );
}
