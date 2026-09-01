import { createFileRoute } from "@tanstack/react-router";

import { LegalSection, LegalShell, Placeholder } from "@/components/landing/legal-shell";

// What this site actually collects (the lead form on the home page):
// name, practice name, email or mobile, practice size, "where the day gets hardest".
// Submissions are stored in the backend leads table and used to follow up about
// the free call. The final policy text below comes from Rally Co. — replace the
// placeholders with their wording.

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Rally" },
      {
        name: "description",
        content:
          "How Rally Co. handles the information you share when you request a call about AI for your dental practice.",
      },
      { property: "og:title", content: "Privacy Policy — Rally" },
      {
        property: "og:description",
        content:
          "How Rally Co. handles the information you share when you request a call about AI for your dental practice.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://rallyaiagents.lovable.app/privacy" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://rallyaiagents.lovable.app/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalShell eyebrow="Rally Co." title="Privacy Policy" updated="September 1, 2026">
      <LegalSection title="Information we collect">
        <Placeholder />
      </LegalSection>
      <LegalSection title="How we use your information">
        <Placeholder />
      </LegalSection>
      <LegalSection title="Sharing and disclosure">
        <Placeholder />
      </LegalSection>
      <LegalSection title="Data retention">
        <Placeholder />
      </LegalSection>
      <LegalSection title="Your rights">
        <Placeholder />
      </LegalSection>
      <LegalSection title="Cookies">
        <Placeholder />
      </LegalSection>
      <LegalSection title="Contact">
        <Placeholder />
      </LegalSection>
    </LegalShell>
  );
}