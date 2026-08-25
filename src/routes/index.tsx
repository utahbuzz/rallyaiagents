import { createFileRoute } from "@tanstack/react-router";

import { Faq } from "@/components/landing/faq";
import { Features } from "@/components/landing/features";
import { FinalCta } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Marquee } from "@/components/landing/marquee";
import { Nav } from "@/components/landing/nav";
import { Stats } from "@/components/landing/stats";
import { StickyCta } from "@/components/landing/sticky-cta";
import { Testimonials } from "@/components/landing/testimonials";
import { WhatWeHelpWith } from "@/components/landing/what-we-help-with";

const title = "Rally — AI partners for dental practices";
const description =
  "Not sure where AI fits in your dental practice? Rally teaches your team, then builds what saves the most time. Start with a free 25-minute call.";

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
  component: LandingPage,
});

function LandingPage() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <div className="pt-24 sm:pt-28">
          <Marquee />
        </div>
        <Stats />
        <HowItWorks />
        <Features />
        <WhatWeHelpWith />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}
