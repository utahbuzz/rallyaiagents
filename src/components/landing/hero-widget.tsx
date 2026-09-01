import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  CalendarClock,
  FileText,
  MoonStar,
  PhoneIncoming,
  PhoneMissed,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

type Bubble = { from: "them" | "us"; t: string };

type Screen =
  | {
      kind: "call";
      title: string;
      meta: string;
      caller: string;
      number: string;
      status: string;
      bubbles: Bubble[];
    }
  | {
      kind: "thread";
      title: string;
      meta: string;
      bubbles: Bubble[];
      slots: string[];
    }
  | {
      kind: "worklist";
      title: string;
      meta: string;
      rows: { name: string; treatment: string; since: string; status: string }[];
    }
  | {
      kind: "verify";
      title: string;
      meta: string;
      counts: { label: string; n: number; tone: "good" | "warn" | "flag" }[];
      flags: { name: string; note: string }[];
    }
  | {
      kind: "recall";
      title: string;
      meta: string;
      overdue: number;
      filled: number;
      total: number;
      booked: { name: string; slot: string }[];
    }
  | {
      kind: "doc";
      title: string;
      meta: string;
      to: string;
      subject: string;
      lines: number[];
    };

type Topic = {
  id: string;
  label: string;
  icon: LucideIcon;
  screen: Screen;
  does: string;
  changes: string;
  competitors: string;
};

const topics: Topic[] = [
  {
    id: "chairside",
    label: "Phone rings while you're chairside",
    icon: PhoneIncoming,
    screen: {
      kind: "call",
      title: "Missed call",
      meta: "12 seconds ago",
      caller: "Unknown caller",
      number: "(919) 555-0138",
      status: "Front desk was with a patient",
      bubbles: [
        {
          from: "us",
          t: "Sorry we missed you — this is Cedar Dental. What can we help with? We can get you in this week.",
        },
        { from: "them", t: "Chipped a tooth. Anything tomorrow?" },
      ],
    },
    does: "Texts the caller back the second nobody picks up, then holds the conversation until your desk is free.",
    changes: "The caller stops dialing the next office in the search results.",
    competitors:
      "They treat a missed call as a lead, not a voicemail somebody clears on Monday.",
  },
  {
    id: "after-hours",
    label: "Calls after you close",
    icon: MoonStar,
    screen: {
      kind: "thread",
      title: "After-hours text",
      meta: "8:42 pm",
      bubbles: [
        { from: "them", t: "Do you take Delta Dental? Can my son be seen Saturday?" },
        { from: "us", t: "We do take Delta. Two Saturday openings left — pick one." },
      ],
      slots: ["Sat 9:20 am", "Sat 11:00 am"],
    },
    does: "Answers the usual questions — insurance, hours, pricing, first visit — and offers real openings.",
    changes: "Evening and weekend questions turn into Monday appointments.",
    competitors:
      "They answer at 9pm without paying anyone to sit by the phone at 9pm.",
  },
  {
    id: "unscheduled",
    label: "Patients who never scheduled treatment",
    icon: CalendarClock,
    screen: {
      kind: "worklist",
      title: "Unscheduled treatment",
      meta: "37 patients flagged",
      rows: [
        { name: "Marcus B.", treatment: "Crown #14", since: "Mar 12", status: "Booked" },
        { name: "Renee O.", treatment: "Quad SRP", since: "Apr 02", status: "Texted" },
        { name: "Devon L.", treatment: "Night guard", since: "Apr 28", status: "No reply" },
      ],
    },
    does: "Follows up patient by patient on treatment nobody booked, in your tone, until they answer.",
    changes: "Production you already diagnosed stops aging in a report.",
    competitors: "The quietest thing your competitors do, and usually the most profitable.",
  },
  {
    id: "insurance",
    label: "Insurance and benefits checks",
    icon: ShieldCheck,
    screen: {
      kind: "verify",
      title: "Benefits check",
      meta: "Tomorrow, 14 patients",
      counts: [
        { label: "Confirmed", n: 11, tone: "good" },
        { label: "Lapsed", n: 2, tone: "warn" },
        { label: "Needs a call", n: 1, tone: "flag" },
      ],
      flags: [
        { name: "Alicia P.", note: "Pre-auth expired — call payer" },
        { name: "Tom R.", note: "Plan terminated 07/31" },
      ],
    },
    does: "Verifies overnight, puts the numbers in one place, and flags only the ones needing a person.",
    changes: "Your front desk spends the morning on patients instead of hold music.",
    competitors: "Nobody with a healthy margin pays staff to listen to a payer's hold music.",
  },
  {
    id: "recall",
    label: "Recall and reactivation",
    icon: Sparkles,
    screen: {
      kind: "recall",
      title: "Overdue recall",
      meta: "Ran this morning",
      overdue: 92,
      filled: 17,
      total: 24,
      booked: [
        { name: "Dana W.", slot: "Tue 8:00 am" },
        { name: "Kevin S.", slot: "Wed 2:40 pm" },
      ],
    },
    does: "Finds who's overdue, texts them where they actually reply, and keeps nudging politely.",
    changes: "Hygiene fills without anyone dreading the call list.",
    competitors: "A full hygiene column is rarely luck. It's follow-up nobody skipped.",
  },
  {
    id: "admin",
    label: "Notes, letters, and admin writing",
    icon: FileText,
    screen: {
      kind: "doc",
      title: "Referral letter",
      meta: "Drafted in 20 seconds",
      to: "Dr. Amara Osei, Oral Surgery",
      subject: "Referral — extraction #17, patient J. Hale",
      lines: [100, 92, 96, 74, 88, 46],
    },
    does: "Drafts the letters, summaries, post-op instructions, and replies your team retypes weekly.",
    changes: "The paperwork tail gets short enough to finish before you leave.",
    competitors:
      "Doctors who stopped taking admin home didn't get faster. They stopped writing first drafts.",
  },
];

const AUTO_MS = 5200;

function Bubbles({ bubbles }: { bubbles: Bubble[] }) {
  return (
    <div className="flex flex-col gap-2">
      {bubbles.map((l, idx) => (
        <p
          key={idx}
          className={
            l.from === "us"
              ? "ml-auto max-w-[88%] rounded-2xl rounded-br-md bg-primary px-3.5 py-2.5 text-[13px] leading-relaxed text-primary-foreground"
              : "mr-auto max-w-[88%] rounded-2xl rounded-bl-md border border-border bg-white px-3.5 py-2.5 text-[13px] leading-relaxed text-ink"
          }
        >
          {l.t}
        </p>
      ))}
    </div>
  );
}

function ScreenBody({ s }: { s: Screen }) {
  switch (s.kind) {
    case "call":
      return (
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 rounded-xl border border-border bg-white px-3.5 py-3">
            <span className="flex size-8 items-center justify-center rounded-full bg-primary/10">
              <PhoneMissed className="size-4 text-primary" strokeWidth={2} />
            </span>
            <div className="min-w-0">
              <p className="text-[13px] font-medium text-ink">{s.caller}</p>
              <p className="font-mono text-[11px] text-warm-grey">{s.number}</p>
            </div>
            <span className="ml-auto text-right font-mono text-[10px] tracking-[0.08em] text-warm-grey uppercase">
              {s.status}
            </span>
          </div>
          <Bubbles bubbles={s.bubbles} />
        </div>
      );

    case "thread":
      return (
        <div className="flex flex-col gap-3">
          <Bubbles bubbles={s.bubbles} />
          <div className="flex flex-wrap gap-2">
            {s.slots.map((slot, idx) => (
              <span
                key={slot}
                className={`rounded-full border px-3 py-1.5 text-[12.5px] ${
                  idx === 0
                    ? "border-primary bg-primary/[0.07] text-primary"
                    : "border-border bg-white text-warm-grey"
                }`}
              >
                {slot}
              </span>
            ))}
          </div>
        </div>
      );

    case "worklist":
      return (
        <div className="overflow-hidden rounded-xl border border-border bg-white">
          <div className="grid grid-cols-[1.1fr_1.2fr_0.8fr] gap-2 border-b border-border px-3 py-2 font-mono text-[10px] tracking-[0.08em] text-warm-grey uppercase">
            <span>Patient</span>
            <span>Treatment</span>
            <span className="text-right">Status</span>
          </div>
          {s.rows.map((r) => (
            <div
              key={r.name}
              className="grid grid-cols-[1.1fr_1.2fr_0.8fr] items-center gap-2 border-b border-border/70 px-3 py-2.5 text-[12.5px] last:border-b-0"
            >
              <span className="text-ink">{r.name}</span>
              <span className="text-warm-grey">
                {r.treatment}
                <span className="ml-1.5 font-mono text-[10.5px]">{r.since}</span>
              </span>
              <span className="text-right">
                <span
                  className={`rounded-full px-2 py-0.5 text-[11px] ${
                    r.status === "Booked"
                      ? "bg-primary/10 text-primary"
                      : r.status === "Texted"
                        ? "bg-ink/[0.06] text-ink"
                        : "bg-transparent text-warm-grey"
                  }`}
                >
                  {r.status}
                </span>
              </span>
            </div>
          ))}
        </div>
      );

    case "verify":
      return (
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-3 gap-2">
            {s.counts.map((c) => (
              <div
                key={c.label}
                className="rounded-xl border border-border bg-white px-3 py-2.5"
              >
                <p
                  className={`text-[1.5rem] leading-none font-semibold ${
                    c.tone === "good" ? "text-ink" : "text-primary"
                  }`}
                >
                  {c.n}
                </p>
                <p className="mt-1.5 font-mono text-[10px] tracking-[0.08em] text-warm-grey uppercase">
                  {c.label}
                </p>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-dashed border-border px-3 py-2.5">
            {s.flags.map((f) => (
              <div key={f.name} className="flex items-baseline justify-between gap-3 py-1">
                <span className="text-[12.5px] text-ink">{f.name}</span>
                <span className="text-right text-[12.5px] text-warm-grey">{f.note}</span>
              </div>
            ))}
          </div>
        </div>
      );

    case "recall":
      return (
        <div className="flex flex-col gap-3.5">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-[1.9rem] leading-none font-semibold text-ink">{s.overdue}</p>
              <p className="mt-1.5 font-mono text-[10px] tracking-[0.08em] text-warm-grey uppercase">
                Overdue patients found
              </p>
            </div>
            <p className="text-[12.5px] text-warm-grey">
              Hygiene next week: {s.filled} of {s.total} filled
            </p>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-ink/[0.07]">
            <div
              className="h-full rounded-full bg-primary"
              style={{ width: `${Math.round((s.filled / s.total) * 100)}%` }}
            />
          </div>
          <div className="rounded-xl border border-border bg-white px-3 py-2">
            {s.booked.map((b) => (
              <div key={b.name} className="flex items-center justify-between gap-3 py-1.5">
                <span className="text-[12.5px] text-ink">{b.name}</span>
                <span className="font-mono text-[11px] text-primary">{b.slot}</span>
              </div>
            ))}
          </div>
        </div>
      );

    case "doc":
      return (
        <div className="rounded-xl border border-border bg-white p-3.5">
          <p className="font-mono text-[10px] tracking-[0.08em] text-warm-grey uppercase">
            To — {s.to}
          </p>
          <p className="mt-2 text-[13px] font-medium text-ink">{s.subject}</p>
          <div className="mt-3 space-y-2">
            {s.lines.map((w, idx) => (
              <div
                key={idx}
                className="h-2 rounded-full bg-ink/[0.07]"
                style={{ width: `${w}%` }}
              />
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between gap-3 border-t border-dashed border-border pt-3">
            <span className="text-[12px] text-warm-grey">Waiting on your review</span>
            <span className="rounded-full bg-primary px-3 py-1 text-[12px] text-primary-foreground">
              Send
            </span>
          </div>
        </div>
      );
  }
}

export function HeroWidget() {
  const [i, setI] = useState(0);
  const [locked, setLocked] = useState(false);
  const railRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (locked) return;
    const id = window.setInterval(() => setI((p) => (p + 1) % topics.length), AUTO_MS);
    return () => window.clearInterval(id);
  }, [locked]);

  const pick = (next: number) => {
    setLocked(true);
    setI(((next % topics.length) + topics.length) % topics.length);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      pick(i + 1);
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      pick(i - 1);
    }
  };

  const active = topics[i]!;

  return (
    <div className="w-full rounded-[1.4rem] border border-border bg-white p-5 text-left sm:p-7">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-[15px] font-semibold text-ink sm:text-[16px]">
            What AI could do in your practice
          </p>
          <p className="mt-1.5 text-[13.5px] leading-relaxed text-warm-grey">
            Pick where your day gets hardest. This is what the practices ahead of you already
            handed off.
          </p>
        </div>
        <span className="tint rounded-full px-3 py-1 font-mono text-[10.5px] tracking-[0.1em] text-primary uppercase">
          Live
        </span>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-7">
        <div
          ref={railRef}
          role="tablist"
          aria-label="Where your day gets hardest"
          aria-orientation="vertical"
          onKeyDown={onKeyDown}
          className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
        >
          {topics.map((t, idx) => {
            const on = idx === i;
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={on}
                tabIndex={on ? 0 : -1}
                onClick={() => pick(idx)}
                className={`flex shrink-0 items-center gap-2.5 rounded-2xl border px-3.5 py-3 text-left text-[13.5px] leading-snug transition-colors lg:w-full lg:shrink ${
                  on
                    ? "border-primary/40 bg-primary/[0.06] text-ink"
                    : "border-border bg-white text-warm-grey hover:border-primary/30 hover:text-ink"
                }`}
              >
                <Icon
                  className={`size-4 shrink-0 ${on ? "text-primary" : "text-warm-grey"}`}
                  strokeWidth={2}
                />
                <span className="whitespace-nowrap lg:whitespace-normal">{t.label}</span>
              </button>
            );
          })}
        </div>

        <div
          key={active.id}
          className="widget-fade rounded-2xl border border-border bg-bone p-4 sm:p-5"
        >
          <div className="flex items-baseline justify-between gap-3">
            <p className="text-[13.5px] font-semibold text-ink">{active.screen.title}</p>
            <span className="font-mono text-[10px] tracking-[0.1em] text-warm-grey uppercase">
              {active.screen.meta}
            </span>
          </div>

          <div className="mt-3.5">
            <ScreenBody s={active.screen} />
          </div>

          <dl className="mt-4 space-y-3 border-t border-dashed border-border pt-4">
            <div>
              <dt className="font-mono text-[10px] tracking-[0.1em] text-warm-grey uppercase">
                What AI does
              </dt>
              <dd className="mt-1 text-[13.5px] leading-relaxed text-ink">{active.does}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-[0.1em] text-warm-grey uppercase">
                What changes
              </dt>
              <dd className="mt-1 text-[13.5px] leading-relaxed text-ink">{active.changes}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-[0.1em] text-primary uppercase">
                Practices ahead of you
              </dt>
              <dd className="mt-1 text-[13.5px] leading-relaxed text-warm-grey">
                {active.competitors}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-dashed border-border pt-4">
        <p className="text-[13.5px] text-warm-grey">
          Not sure which one is yours? That&apos;s the first call.
        </p>
        <a
          href="#book"
          className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-primary underline-offset-4 hover:underline"
        >
          Book the free call
          <ArrowRight className="size-3.5" />
        </a>
      </div>
    </div>
  );
}
