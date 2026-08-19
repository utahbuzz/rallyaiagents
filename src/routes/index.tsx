import { createFileRoute } from "@tanstack/react-router";

import { Faq } from "@/components/landing/faq";
import { FinalCta } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Nav } from "@/components/landing/nav";
import { StickyCta } from "@/components/landing/sticky-cta";
import { TrustBar } from "@/components/landing/trust-bar";
import { WhatWeHelpWith } from "@/components/landing/what-we-help-with";

const title = "Rally — AI partners for dental practices";
const description =
  "Rally helps dental practices learn and adopt AI: a free 25-minute call, a live workshop with your team, then we build and run the workflows that save the most time.";

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
        <TrustBar />
        <HowItWorks />
        <WhatWeHelpWith />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}
