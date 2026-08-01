import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/landing/about";
import { Benefits } from "@/components/landing/benefits";
import { Faq } from "@/components/landing/faq";
import { Features } from "@/components/landing/features";
import { FinalCta } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Nav } from "@/components/landing/nav";
import { Pricing } from "@/components/landing/pricing";
import { Problem } from "@/components/landing/problem";
import { SetupHighlight } from "@/components/landing/setup-highlight";
import { Testimonials } from "@/components/landing/testimonials";
import { TrustBar } from "@/components/landing/trust-bar";

const title = "Rally — AI Agents That Fill Orthodontic Chairs";
const description =
  "Rally deploys AI agents for orthodontic practices: instant lead follow-up, 24/7 booking, reminders and reactivation. Pay per seated consult. Book a discovery call.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Problem />
        <HowItWorks />
        <Features />
        <SetupHighlight />
        <Benefits />
        <Testimonials />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
