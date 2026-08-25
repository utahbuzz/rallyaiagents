import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Check } from "lucide-react";

import { submitFootballLead } from "@/lib/football-leads.functions";

const roles = [
  { value: "head_coach", label: "Head coach" },
  { value: "athletic_director", label: "Athletic director" },
  { value: "general_manager", label: "General manager" },
  { value: "operations", label: "Operations / front office" },
  { value: "other", label: "Other" },
];

const painPoints = [
  { value: "recruiting", label: "Recruiting pipeline and follow-up" },
  { value: "donor_alumni", label: "Donor and alumni outreach" },
  { value: "ticketing", label: "Ticketing and attendance" },
  { value: "nil_compliance", label: "NIL and compliance tracking" },
  { value: "parent_comms", label: "Parent and player communication" },
  { value: "film_scouting", label: "Film breakdown and scouting" },
  { value: "not_sure", label: "Not sure yet" },
];

type Errors = Partial<Record<"name" | "program" | "email", string>>;

export function FootballLeadForm({ compact = false }: { compact?: boolean }) {
  const send = useServerFn(submitFootballLead);
  const [form, setForm] = useState({
    name: "",
    program: "",
    role: "head_coach",
    email: "",
    phone: "",
    painPoint: "recruiting",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const field =
    "focus-ring mt-2 w-full rounded-[10px] border border-night-line bg-night px-4 py-3 text-[16px] text-chalk placeholder:text-chalk-muted/60";
  const labelCls =
    "block text-[11px] font-semibold tracking-[0.14em] text-chalk-muted uppercase";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Tell us your name";
    if (!form.program.trim()) next.program = "Tell us your program or school";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = "Add a valid email";
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("sending");
    try {
      await send({ data: form });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-3xl border border-night-line bg-night-raised p-7 sm:p-9">
        <span className="brand-tint-dark flex size-11 items-center justify-center rounded-full">
          <Check className="size-5 text-brand-bright" strokeWidth={2.5} />
        </span>
        <h3 className="text-[1.6rem] leading-snug font-semibold text-chalk">
          Got it. You&apos;ll hear from us within one business day.
        </h3>
        <p className="text-[15.5px] leading-relaxed text-chalk-muted">
          One short note with a couple of times that work. No drip sequence.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl border border-night-line bg-night-raised p-7 sm:p-9"
    >
      <h3 className="text-[20px] font-semibold text-chalk">
        {compact ? "See if we're a fit" : "Tell us where the week goes"}
      </h3>
      <p className="mt-2 text-[15px] leading-relaxed text-chalk-muted">
        Six fields. We&apos;ll come back with whether this is worth a call.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="fb-name">
            Your name
          </label>
          <input
            id="fb-name"
            name="name"
            className={field}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            aria-invalid={!!errors.name}
          />
          {errors.name ? (
            <p className="mt-1.5 text-[13px] text-brand-bright">{errors.name}</p>
          ) : null}
        </div>
        <div>
          <label className={labelCls} htmlFor="fb-program">
            Program or school
          </label>
          <input
            id="fb-program"
            name="program"
            className={field}
            value={form.program}
            onChange={(e) => setForm({ ...form, program: e.target.value })}
            aria-invalid={!!errors.program}
          />
          {errors.program ? (
            <p className="mt-1.5 text-[13px] text-brand-bright">{errors.program}</p>
          ) : null}
        </div>
        <div>
          <label className={labelCls} htmlFor="fb-role">
            Your role
          </label>
          <select
            id="fb-role"
            name="role"
            className={field}
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          >
            {roles.map((r) => (
              <option key={r.value} value={r.value}>
                {r.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="fb-email">
            Email
          </label>
          <input
            id="fb-email"
            name="email"
            type="email"
            className={field}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            aria-invalid={!!errors.email}
          />
          {errors.email ? (
            <p className="mt-1.5 text-[13px] text-brand-bright">{errors.email}</p>
          ) : null}
        </div>
        <div>
          <label className={labelCls} htmlFor="fb-phone">
            Phone (optional)
          </label>
          <input
            id="fb-phone"
            name="phone"
            type="tel"
            className={field}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="fb-pain">
            Biggest current pain point
          </label>
          <select
            id="fb-pain"
            name="painPoint"
            className={field}
            value={form.painPoint}
            onChange={(e) => setForm({ ...form, painPoint: e.target.value })}
          >
            {painPoints.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {status === "error" ? (
        <p className="brand-tint-dark mt-5 rounded-[10px] px-4 py-3 text-[14px] text-chalk">
          That didn&apos;t send. Your answers are still here — try once more, or email us directly.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="focus-ring mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 text-[15px] font-semibold text-primary-foreground transition-all hover:bg-brand-bright disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send it over"}
      </button>
    </form>
  );
}
