import { createFileRoute } from "@tanstack/react-router";

import { AboutCaleb } from "@/components/landing/about-caleb";
import { ClosingCta } from "@/components/landing/closing-cta";
import { Faq } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { HowWeWork } from "@/components/landing/how-we-work";
import { MobileCtaBar } from "@/components/landing/mobile-cta-bar";
import { Nav } from "@/components/landing/nav";
import { Problem } from "@/components/landing/problem";
import { Results } from "@/components/landing/results";
import { WhatWeBuild } from "@/components/landing/what-we-build";
import { WhyRally } from "@/components/landing/why-rally";

const title = "Rally — the AI partner for dental practices";
const description =
  "Rally audits how leads move through your dental practice, builds the AI systems that catch every lead and book the consult, then runs them. Book a call.";
const url = "https://rallyaiagents.lovable.app/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-bone">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowWeWork />
        <WhatWeBuild />
        <Results />
        <WhyRally />
        <AboutCaleb />
        <Faq />
        <ClosingCta />
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
