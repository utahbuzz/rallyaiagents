import { Phone, MessageSquare, Sparkles, Check } from "lucide-react";

/** Soft product-style panel used in the hero and feature rows. */
export function DashboardMock() {
  const rows = [
    { name: "Missed call — 8:42pm", tag: "Texted back", done: true },
    { name: "New patient question", tag: "Answered", done: true },
    { name: "Unscheduled treatment", tag: "Follow-up sent", done: true },
    { name: "Insurance check", tag: "In progress", done: false },
  ];
  return (
    <div className="w-full rounded-[1.4rem] border border-border bg-white p-5 sm:p-7">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="tint flex size-8 items-center justify-center rounded-full">
            <Sparkles className="size-4 text-primary" />
          </span>
          <p className="text-[14px] font-semibold text-ink">Today with Rally</p>
        </div>
        <span className="tint rounded-full px-3 py-1 font-mono text-[10.5px] tracking-[0.1em] text-primary uppercase">
          Live
        </span>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        {[
          { k: "Hours saved", v: "11" },
          { k: "Calls caught", v: "34" },
          { k: "Replies sent", v: "126" },
        ].map((s) => (
          <div key={s.k} className="rounded-2xl bg-bone px-4 py-3.5">
            <p className="text-[22px] leading-none font-semibold text-ink">{s.v}</p>
            <p className="mt-1.5 font-mono text-[10px] tracking-[0.1em] text-warm-grey uppercase">
              {s.k}
            </p>
          </div>
        ))}
      </div>

      <ul className="mt-5 divide-y divide-border rounded-2xl border border-border">
        {rows.map((r) => (
          <li key={r.name} className="flex items-center justify-between gap-3 px-4 py-3">
            <span className="text-[13.5px] text-ink">{r.name}</span>
            <span className="flex items-center gap-1.5 text-[12px] text-warm-grey">
              {r.done ? <Check className="size-3.5 text-primary" strokeWidth={3} /> : null}
              {r.tag}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ChatMock() {
  const msgs = [
    { from: "them" as const, t: "Hi — do you take Delta Dental? And can my son be seen Saturday?" },
    { from: "us" as const, t: "We do take Delta Dental. We have Saturday at 9:20 or 11:00 — want one?" },
    { from: "them" as const, t: "9:20 works." },
    { from: "us" as const, t: "Booked. You'll get a reminder Friday." },
  ];
  return (
    <div className="w-full rounded-[1.4rem] border border-border bg-white p-5 sm:p-6">
      <div className="flex items-center gap-2.5 border-b border-border pb-4">
        <span className="tint flex size-8 items-center justify-center rounded-full">
          <MessageSquare className="size-4 text-primary" />
        </span>
        <p className="text-[14px] font-semibold text-ink">After-hours text</p>
        <span className="ml-auto font-mono text-[10.5px] tracking-[0.1em] text-warm-grey uppercase">
          8:42 pm
        </span>
      </div>
      <div className="mt-4 flex flex-col gap-2.5">
        {msgs.map((m, i) => (
          <p
            key={i}
            className={
              m.from === "us"
                ? "ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-primary px-4 py-2.5 text-[13.5px] leading-relaxed text-primary-foreground"
                : "mr-auto max-w-[85%] rounded-2xl rounded-bl-md bg-bone px-4 py-2.5 text-[13.5px] leading-relaxed text-ink"
            }
          >
            {m.t}
          </p>
        ))}
      </div>
    </div>
  );
}

export function CallMock() {
  return (
    <div className="w-full rounded-[1.4rem] border border-border bg-white p-5 sm:p-6">
      <div className="flex items-center gap-3">
        <span className="tint flex size-10 items-center justify-center rounded-full">
          <Phone className="size-4 text-primary" />
        </span>
        <div>
          <p className="text-[14px] font-semibold text-ink">Missed call, 12 seconds ago</p>
          <p className="text-[13px] text-warm-grey">Front desk was with a patient</p>
        </div>
      </div>
      <div className="mt-4 rounded-2xl bg-bone px-4 py-3.5">
        <p className="font-mono text-[10px] tracking-[0.1em] text-warm-grey uppercase">
          Auto text sent
        </p>
        <p className="mt-2 text-[13.5px] leading-relaxed text-ink">
          &ldquo;Sorry we missed you — this is Cedar Dental. What can we help with? We can book you
          this week.&rdquo;
        </p>
      </div>
      <p className="mt-3 text-[13px] text-warm-grey">
        Nobody had to remember to do it. That is the whole trick.
      </p>
    </div>
  );
}
