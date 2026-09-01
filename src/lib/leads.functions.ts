import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(1, "Tell us your name").max(120),
  practiceName: z.string().trim().min(1, "Tell us your practice name").max(160),
  contact: z.string().trim().min(5, "Add an email or mobile number").max(160),
  practiceSize: z.enum(["solo_two", "three_six", "multi_dso"]),
  hardestPart: z.enum([
    "new_patient_followup",
    "insurance_verification",
    "unscheduled_treatment",
    "no_shows_recall",
    "charting_notes",
    "not_sure",
  ]),
});

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("leads").insert({
      name: data.name,
      practice_name: data.practiceName,
      contact: data.contact,
      practice_size: data.practiceSize,
      hardest_part: data.hardestPart,
    });
    if (error) throw new Error(error.message);

    const sizeLabels: Record<string, string> = {
      solo_two: "Solo or two providers",
      three_six: "3-6 people",
      multi_dso: "Multi-location / DSO",
    };
    const hardestLabels: Record<string, string> = {
      new_patient_followup: "New patient follow-up",
      insurance_verification: "Insurance verification",
      unscheduled_treatment: "Unscheduled treatment",
      no_shows_recall: "No-shows and recall",
      charting_notes: "Charting and notes",
      not_sure: "Not sure yet",
    };

    try {
      const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
      const emailOptions = {
        templateData: {
          source: "Rally — dental practices",
          name: data.name,
          organization: data.practiceName,
          contact: data.contact,
          detailLabel: "Practice size",
          detailValue: sizeLabels[data.practiceSize] ?? data.practiceSize,
          extraLabel: "Where the day gets hardest",
          extraValue: hardestLabels[data.hardestPart] ?? data.hardestPart,
          submittedAt: new Date().toUTCString(),
        },
        idempotencyKey: `lead-${data.contact}-${Date.now()}`,
        ...(data.contact.includes("@") ? { replyTo: data.contact } : {}),
      };
      await sendTemplateEmail("new-lead-notification", "hello@try-rally.com", emailOptions);
    } catch (err) {
      console.error("lead notification email failed", err);
    }

    return { ok: true as const };
  });
