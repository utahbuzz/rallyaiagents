import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/landing/legal-page";

const title = "Privacy Policy — Rally";
const description =
  "How Rally collects, uses, and protects information from dental practices and their patients.";
const url = "https://rallyaiagents.lovable.app/privacy";

export const Route = createFileRoute("/privacy")({
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
  component: Privacy,
});

function Privacy() {
  return (
    <LegalPage heading="Privacy Policy" updated="Last updated: August 2026">
      <p>
        Rally provides AI systems for dental practices. This policy explains what information we
        collect, how we use it, and the choices you have. Replace this placeholder copy with your
        reviewed legal text before launch.
      </p>
      <h2>Information we collect</h2>
      <p>
        We collect information you give us directly — your name, practice name, email address, and
        anything you send during a discovery call or audit. When we operate systems on your behalf, we
        process patient contact details and message content strictly to deliver the service.
      </p>
      <h2>How we use it</h2>
      <p>
        To run and support the systems we build for you, to communicate about your engagement, and to
        meet legal obligations. We do not sell information.
      </p>
      <h2>Patient data and HIPAA</h2>
      <p>
        Business associate agreements are in place with every vendor before any patient data moves.
        Access is limited to what is required to deliver and maintain the service.
      </p>
      <h2>Retention and security</h2>
      <p>
        We keep information only as long as needed for the purposes above, and use reasonable
        technical and organizational safeguards to protect it.
      </p>
      <h2>Contact</h2>
      <p>Questions about this policy can be sent to the email address in our footer.</p>
    </LegalPage>
  );
}
