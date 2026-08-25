import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  CalendarClock,
  FileText,
  MoonStar,
  PhoneIncoming,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

type Line = { from: "them" | "us" | "note"; t: string };

type Topic = {
  id: string;
  label: string;
  icon: LucideIcon;
  screen: { title: string; meta: string; lines: Line[] };
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
      title: "Missed call, 12 seconds ago",
      meta: "Front desk was with a patient",
      lines: [
        { from: "note", t: "Nobody was free to pick up." },
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
      title: "After-hours text",
      meta: "8:42 pm",
      lines: [
        { from: "them", t: "Do you take Delta Dental? Can my son be seen Saturday?" },
        { from: "us", t: "We do take Delta. Saturday at 9:20 or 11:00 — want one?" },
        { from: "them", t: "9:20 works." },
      ],
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
      title: "Unscheduled treatment",
      meta: "37 patients flagged",
      lines: [
        { from: "note", t: "Diagnosed, never booked. Sitting in your system." },
        {
          from: "us",
          t: "Hi Marcus — Dr. Lee recommended a crown back in March. We have Thursday at 3:10 held for you.",
        },
        { from: "them", t: "Yes please, I forgot about that." },
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
      title: "Benefits check",
      meta: "Tomorrow's schedule, 14 patients",
      lines: [
        { from: "note", t: "Verified overnight. Flagged what needs a human." },
        { from: "us", t: "11 confirmed. 2 plans lapsed. 1 needs a call — pre-auth expired." },
        { from: "note", t: "Your team starts the day with the exceptions, not the list." },
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
      title: "Overdue recall",
      meta: "Ran this morning",
      lines: [
        { from: "note", t: "Nobody had to build a list." },
        { from: "us", t: "It's been 14 months since your cleaning, Dana. Want the 8am Tuesday?" },
        { from: "them", t: "Book it." },
      ],
    },
    does: "Finds who is overdue, reaches out on the channel they actually reply to, and keeps nudging politely.",
    changes: "The hygiene schedule fills without anyone dreading the call list.",
    competitors: "Full hygiene columns are rarely luck. They are usually follow-up nobody skipped.",
  },
  {
    id: "admin",
    label: "Notes, letters, and admin writing",
    icon: FileText,
    screen: {
      title: "Referral letter",
      meta: "Drafted in 20 seconds",
      lines: [
        { from: "note", t: "You gave it three bullet points." },
        { from: "us", t: "Draft ready for your review — clinical summary, findings, next steps." },
        { from: "note", t: "You read it, fix a line, send it. Done before lunch." },
      ],
    },
    does: "Drafts the letters, summaries, post-op instructions, and replies your team keeps rewriting from scratch.",
    changes: "The paperwork tail after each day gets short enough to finish at the office.",
    competitors:
      "Doctors who stopped taking admin home did not get faster. They stopped writing first drafts.",
  },
];

const AUTO_MS = 5200;

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
            automated.
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

        <div key={active.id} className="widget-fade rounded-2xl border border-border bg-bone p-4 sm:p-5">
          <div className="flex items-baseline justify-between gap-3">
            <p className="text-[13.5px] font-semibold text-ink">{active.screen.title}</p>
            <span className="font-mono text-[10px] tracking-[0.1em] text-warm-grey uppercase">
              {active.screen.meta}
            </span>
          </div>

          <div className="mt-3.5 flex flex-col gap-2">
            {active.screen.lines.map((l, idx) =>
              l.from === "note" ? (
                <p key={idx} className="text-[12.5px] leading-relaxed text-warm-grey italic">
                  {l.t}
                </p>
              ) : (
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
              ),
            )}
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
          Not sure which one is yours? That is the first call.
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
