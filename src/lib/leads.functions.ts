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
    return { ok: true as const };
  });
