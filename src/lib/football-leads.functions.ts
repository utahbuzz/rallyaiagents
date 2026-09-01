import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const footballLeadSchema = z.object({
  name: z.string().trim().min(1, "Tell us your name").max(120),
  program: z.string().trim().min(1, "Tell us your program or school").max(160),
  role: z.enum([
    "head_coach",
    "athletic_director",
    "general_manager",
    "operations",
    "other",
  ]),
  email: z.string().trim().email("Add a valid email").max(180),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  painPoint: z.enum([
    "recruiting",
    "donor_alumni",
    "ticketing",
    "nil_compliance",
    "parent_comms",
    "film_scouting",
    "not_sure",
  ]),
});

export const submitFootballLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => footballLeadSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("football_leads").insert({
      name: data.name,
      program: data.program,
      role: data.role,
      email: data.email,
      phone: data.phone ? data.phone : null,
      pain_point: data.painPoint,
    });
    if (error) throw new Error(error.message);

    const roleLabels: Record<string, string> = {
      head_coach: "Head coach",
      athletic_director: "Athletic director",
      general_manager: "General manager",
      operations: "Operations",
      other: "Other",
    };
    const painLabels: Record<string, string> = {
      recruiting: "Recruiting",
      donor_alumni: "Donor and alumni",
      ticketing: "Ticketing",
      nil_compliance: "NIL and compliance",
      parent_comms: "Parent communication",
      film_scouting: "Film and scouting",
      not_sure: "Not sure yet",
    };

    try {
      const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
      await sendTemplateEmail("new-lead-notification", "hello@try-rally.com", {
        templateData: {
          source: "Rally — football programs",
          name: data.name,
          organization: data.program,
          contact: data.phone ? `${data.email} · ${data.phone}` : data.email,
          detailLabel: "Role",
          detailValue: roleLabels[data.role] ?? data.role,
          extraLabel: "Biggest pain point",
          extraValue: painLabels[data.painPoint] ?? data.painPoint,
          submittedAt: new Date().toUTCString(),
        },
        idempotencyKey: `football-lead-${data.email}-${Date.now()}`,
        replyTo: data.email,
      });
    } catch (err) {
      console.error("football lead notification email failed", err);
    }

    return { ok: true as const };
  });
