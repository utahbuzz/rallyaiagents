import { createFileRoute } from "@tanstack/react-router";

import { LegalSection, LegalShell, Placeholder } from "@/components/landing/legal-shell";

// Terms for the site itself: the free discovery call, the paid live workshop,
// and the monthly partnership. The final text below comes from Rally Co. —
// replace the placeholders with their wording.

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Rally" },
      {
        name: "description",
        content:
          "The terms that apply when you use Rally's website, free call, and services for dental practices.",
      },
      { property: "og:title", content: "Terms of Service — Rally" },
      {
        property: "og:description",
        content:
          "The terms that apply when you use Rally's website, free call, and services for dental practices.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://rallyaiagents.lovable.app/terms" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://rallyaiagents.lovable.app/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalShell eyebrow="Rally Co." title="Terms of Service" updated="September 1, 2026">
      <LegalSection title="Use of the service">
        <Placeholder />
      </LegalSection>
      <LegalSection title="The free call and paid services">
        <Placeholder />
      </LegalSection>
      <LegalSection title="Intellectual property">
        <Placeholder />
      </LegalSection>
      <LegalSection title="No guarantee of results">
        <Placeholder />
      </LegalSection>
      <LegalSection title="Limitation of liability">
        <Placeholder />
      </LegalSection>
      <LegalSection title="Changes to these terms">
        <Placeholder />
      </LegalSection>
      <LegalSection title="Contact">
        <Placeholder />
      </LegalSection>
    </LegalShell>
  );
}