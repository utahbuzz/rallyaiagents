import { createFileRoute, notFound } from "@tanstack/react-router";

import { FootballDualCta } from "@/components/football/dual-cta";
import { FootballFaq } from "@/components/football/faq";
import { FootballFinalCta } from "@/components/football/final-cta";
import { FootballFooter } from "@/components/football/footer";
import { FootballHeader } from "@/components/football/header";
import { FootballHero } from "@/components/football/hero";
import { FootballProblem } from "@/components/football/problem";
import { FootballProcess } from "@/components/football/process";
import { FootballPrograms } from "@/components/football/programs";
import { FootballShift } from "@/components/football/shift";

const title = "Rally for Football Programs — AI workflows for the front office";
const description =
  "Football adopts innovation first. Rally builds small, focused AI workflows that take busywork off coaching staff and front offices, with staff training included. Book a free 15-minute scoping call.";

export const Route = createFileRoute("/football")({
  beforeLoad: () => {
    // Not live yet — hard-block until launch. Remove this block to publish the page.
    throw notFound();
  },
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
  component: FootballPage,
});

function FootballPage() {
  return (
    <div id="top" className="min-h-screen bg-night">
      <FootballHeader />
      <main>
        <FootballHero />
        <FootballProblem />
        <FootballShift />
        <FootballProcess />
        <FootballPrograms />
        <FootballDualCta />
        <FootballFaq />
        <FootballFinalCta />
      </main>
      <FootballFooter />
    </div>
  );
}
