import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/landing/legal-page";

const title = "Terms of Use — Rally";
const description = "The terms that apply to using the Rally website and engaging Rally's services.";
const url = "https://rallyaiagents.lovable.app/terms";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <LegalPage heading="Terms of Use" updated="Last updated: August 2026">
      <p>
        These terms apply to your use of this website. Replace this placeholder copy with your
        reviewed legal text before launch. Service engagements are governed by the separate agreement
        signed with your practice.
      </p>
      <h2>Use of this site</h2>
      <p>
        You may use this site for lawful purposes only. Content here is provided for information and
        does not constitute a binding offer or professional advice.
      </p>
      <h2>Engagements</h2>
      <p>
        Audits, builds, and ongoing service are provided under a separate written agreement. Fees,
        scope, and term are defined there. Ongoing service is month to month unless stated otherwise.
      </p>
      <h2>Intellectual property</h2>
      <p>
        The Rally name, wordmark, site content, and the systems we build and maintain remain our
        property except as set out in your agreement.
      </p>
      <h2>Limitation of liability</h2>
      <p>
        This site is provided as is. To the extent permitted by law, we are not liable for indirect or
        consequential losses arising from its use.
      </p>
      <h2>Contact</h2>
      <p>Questions about these terms can be sent to the email address in our footer.</p>
    </LegalPage>
  );
}
