import { ArrowRight, HelpCircle } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Reveal, Section, SectionPill } from "./primitives";

const faqs = [
  {
    q: "How is this different from other marketing agencies?",
    a: "Most agencies sell you leads and disappear. Rally deploys an AI agent that handles the entire journey — from first contact to seated consult. And you only pay when the patient actually shows up.",
  },
  {
    q: "How long does it take to get set up?",
    a: "Most practices are live within a week. We do a discovery call, build your agent's knowledge base, and deploy across your channels.",
  },
  {
    q: "Will the AI sound robotic to my patients?",
    a: "No. Rally's agent is conversational, warm, and customized to your practice. Most patients don't realize they're talking to AI.",
  },
  {
    q: "What if a patient asks something the AI can't answer?",
    a: "The agent knows when to hand off. Complex questions or frustrated patients get routed to your team with the full conversation context.",
  },
  {
    q: "Do I need to change my current systems?",
    a: "No. Rally works alongside your existing practice management system and website. We add a layer on top.",
  },
  {
    q: "Is my patient data safe?",
    a: "Yes. We follow a minimum-PHI design philosophy — we collect and store only what's necessary, and never route clinical information through uncovered systems.",
  },
];

export function Faq() {
  return (
    <Section id="faq" tone="white">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <SectionPill icon={HelpCircle}>FAQs</SectionPill>
          <h2 className="mt-6 text-[2rem] leading-[1.1] font-medium text-ink sm:text-[2.5rem]">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-[42ch] text-[15px] leading-relaxed text-warm-grey">
            From setup to support, here are the answers you need to get started with confidence.
          </p>
          <a
            href="#book"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-[14.5px] font-semibold text-primary-foreground transition-colors hover:bg-primary-light"
          >
            Book a Call
            <ArrowRight className="size-4" />
          </a>
        </Reveal>

        <Reveal delay={100}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="border-border">
                <AccordionTrigger className="py-5 text-left text-[16px] font-medium text-ink hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[14.5px] leading-relaxed text-warm-grey">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </Section>
  );
}
