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
    return { ok: true as const };
  });
