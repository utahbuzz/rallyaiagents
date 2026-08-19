import { createFileRoute } from "@tanstack/react-router";

import { Buckets } from "@/components/landing/buckets";
import { CaseStudy } from "@/components/landing/case-study";
import { DrawTheLine } from "@/components/landing/draw-the-line";
import { Faq } from "@/components/landing/faq";
import { FinalCta } from "@/components/landing/final-cta";
import { Fit } from "@/components/landing/fit";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { IcpRouter } from "@/components/landing/icp-router";
import { Nav } from "@/components/landing/nav";
import { Problem } from "@/components/landing/problem";
import { RallyMethod } from "@/components/landing/rally-method";
import { SixtyDay } from "@/components/landing/sixty-day";
import { StickyCta } from "@/components/landing/sticky-cta";
import { TrustBar } from "@/components/landing/trust-bar";
import { WhatWeBuild } from "@/components/landing/what-we-build";

const title = "Rally — AI that moves the front office in 60 days";
const description =
  "Rally builds and runs AI front-office workflows for dental and orthodontic practices. One number, 60 days, or you don't pay the retainer. Book a free 25-minute call.";

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
        <IcpRouter />
        <Problem />
        <DrawTheLine />
        <RallyMethod />
        <Buckets />
        <WhatWeBuild />
        <SixtyDay />
        <CaseStudy />
        <Fit />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}
