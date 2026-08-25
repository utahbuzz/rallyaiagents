import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Check } from "lucide-react";

import { submitLead } from "@/lib/leads.functions";
import { CTA_LABEL } from "./primitives";

const agenda = [
  {
    n: "01",
    title: "How your day runs",
    body: "You tell us where the time goes. We ask a few annoying questions.",
  },
  {
    n: "02",
    title: "Where AI would help",
    body: "Two or three spots worth starting with. Also the ones that aren't.",
  },
  {
    n: "03",
    title: "What happens next",
    body: "If it's a fit, we book the workshop. If it isn't, we say so.",
  },
];


const sizes = [
  { value: "solo_two", label: "Solo or two providers" },
  { value: "three_six", label: "Three to six providers" },
  { value: "multi_dso", label: "Multi-location or DSO" },
];

const hardest = [
  { value: "new_patient_followup", label: "New patient follow-up" },
  { value: "insurance_verification", label: "Insurance verification" },
  { value: "unscheduled_treatment", label: "Unscheduled treatment" },
  { value: "no_shows_recall", label: "No-shows and recall" },
  { value: "charting_notes", label: "Charting and notes" },
  { value: "not_sure", label: "Not sure yet" },
];

type Errors = Partial<Record<"name" | "practiceName" | "contact", string>>;

export function FinalCta() {
  const send = useServerFn(submitLead);
  const [form, setForm] = useState({
    name: "",
    practiceName: "",
    contact: "",
    practiceSize: "solo_two",
    hardestPart: "new_patient_followup",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const field =
    "focus-ring mt-2 w-full rounded-[10px] border border-border bg-white px-4 py-3 text-[16px] text-ink placeholder:text-warm-grey/70";
  const labelCls = "block font-mono text-[11px] tracking-[0.12em] text-warm-grey uppercase";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Tell us your name";
    if (!form.practiceName.trim()) next.practiceName = "Tell us your practice name";
    if (form.contact.trim().length < 5) next.contact = "Add an email or mobile number";
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

  return (
    <section id="book" className="bg-background">
      <div className="cta-gradient rounded-t-[2rem] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 font-mono text-[11px] tracking-[0.14em] text-white uppercase">
              <span aria-hidden className="size-1.5 rounded-full bg-white" />
              Book the call
            </span>
            <h2 className="mt-6 font-display text-[2.2rem] leading-[1.1] font-semibold text-white sm:text-[3rem]">
              See if Rally is a fit for your practice
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-white/80">
              Twenty-five minutes, free, no deck. Worst case you hang up knowing exactly where to
              start without us.
            </p>

          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {agenda.map((a) => (
              <div key={a.n} className="rounded-2xl border border-white/20 bg-white/10 p-6">
                <p className="font-mono text-[11px] tracking-[0.14em] text-white/70 uppercase">
                  {a.n}
                </p>
                <h3 className="mt-3 text-[17px] font-semibold text-white">{a.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-white/75">{a.body}</p>
              </div>
            ))}
          </div>

          <div className="float-card mt-12 max-w-2xl rounded-3xl bg-white p-7 sm:p-9">
            {status === "done" ? (
              <div className="flex flex-col items-start gap-4">
                <span className="tint flex size-11 items-center justify-center rounded-full">
                  <Check className="size-5 text-primary" strokeWidth={2.5} />
                </span>
                <h3 className="font-display text-[1.7rem] leading-snug font-semibold text-ink">
                  Got it. You&apos;ll hear from us within one business day.
                </h3>
                <p className="text-[15.5px] leading-relaxed text-warm-grey">
                  One short note with a couple of times. No drip sequence, we promise.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <h3 className="text-[20px] font-semibold text-ink">Request your call</h3>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelCls} htmlFor="lead-name">
                      Your name
                    </label>
                    <input
                      id="lead-name"
                      name="name"
                      className={field}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name ? (
                      <p className="mt-1.5 text-[13px] text-primary">{errors.name}</p>
                    ) : null}
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="lead-practice">
                      Practice name
                    </label>
                    <input
                      id="lead-practice"
                      name="practiceName"
                      className={field}
                      value={form.practiceName}
                      onChange={(e) => setForm({ ...form, practiceName: e.target.value })}
                      aria-invalid={!!errors.practiceName}
                    />
                    {errors.practiceName ? (
                      <p className="mt-1.5 text-[13px] text-primary">{errors.practiceName}</p>
                    ) : null}
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelCls} htmlFor="lead-contact">
                      Email or mobile
                    </label>
                    <input
                      id="lead-contact"
                      name="contact"
                      className={field}
                      value={form.contact}
                      onChange={(e) => setForm({ ...form, contact: e.target.value })}
                      aria-invalid={!!errors.contact}
                    />
                    {errors.contact ? (
                      <p className="mt-1.5 text-[13px] text-primary">{errors.contact}</p>
                    ) : null}
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="lead-size">
                      Practice size
                    </label>
                    <select
                      id="lead-size"
                      name="practiceSize"
                      className={field}
                      value={form.practiceSize}
                      onChange={(e) => setForm({ ...form, practiceSize: e.target.value })}
                    >
                      {sizes.map((s) => (
                        <option key={s.value} value={s.value}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="lead-hardest">
                      Where does the day get hardest?
                    </label>
                    <select
                      id="lead-hardest"
                      name="hardestPart"
                      className={field}
                      value={form.hardestPart}
                      onChange={(e) => setForm({ ...form, hardestPart: e.target.value })}
                    >
                      {hardest.map((h) => (
                        <option key={h.value} value={h.value}>
                          {h.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {status === "error" ? (
                  <p className="tint mt-5 rounded-[10px] px-4 py-3 text-[14px] text-primary">
                    That didn&apos;t send. Your answers are still here — try once more, or email
                    hello@rally.ai.
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="focus-ring mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 text-[15px] font-semibold text-primary-foreground transition-all hover:bg-primary-deep disabled:opacity-60 sm:w-auto"
                >
                  {status === "sending" ? "Sending…" : CTA_LABEL}
                </button>
                <p className="mt-3 text-[14px] text-warm-grey">
                  No pitch and no deck. If we&apos;re not the right fit, we&apos;ll tell you on the
                  call.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
