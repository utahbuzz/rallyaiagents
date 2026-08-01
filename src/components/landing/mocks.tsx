import {
  BarChart3,
  Bell,
  CalendarCheck,
  CheckCircle2,
  Inbox,
  LayoutDashboard,
  MessageSquare,
  Phone,
  Search,
  Settings,
  Users,
} from "lucide-react";

import { cn } from "@/lib/utils";

function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="flex size-6 items-center justify-center rounded-md bg-primary text-[11px] font-bold text-primary-foreground">
        R
      </span>
      <span className="font-display text-[13px] font-semibold text-ink italic">Rally</span>
    </div>
  );
}

/** Hero product screenshot: sidebar + stat tiles + live thread + pipeline. */
export function DashboardMock() {
  const nav = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: Inbox, label: "Conversations" },
    { icon: Users, label: "Leads" },
    { icon: CalendarCheck, label: "Consults" },
    { icon: BarChart3, label: "Reporting" },
    { icon: Settings, label: "Settings" },
  ];

  const stats = [
    { label: "Conversations", value: "1,284", delta: "+18%", sub: "312 this week" },
    { label: "Consults booked", value: "216", delta: "+26%", sub: "48 last 7 days" },
    { label: "Avg. response", value: "22s", delta: "-41%", sub: "always on" },
    { label: "Show rate", value: "93%", delta: "+9%", sub: "vs 68% before" },
  ];

  const pipeline = [
    { title: "New leads", count: 12, items: ["Maya R. — Invisalign", "Tom B. — Braces consult"] },
    { title: "Qualified", count: 8, items: ["Dana P. — Insurance ok", "Luis G. — Teen eval"] },
    { title: "Booked", count: 6, items: ["Alex W. — Tue 10:30", "Priya S. — Thu 14:00"] },
  ];

  return (
    <div className="overflow-hidden rounded-[1.25rem] border border-border bg-background text-left">
      <div className="flex">
        {/* sidebar */}
        <aside className="hidden w-[184px] shrink-0 flex-col gap-4 border-r border-border bg-cream p-4 md:flex">
          <Logo />
          <p className="text-[10px] font-medium tracking-wide text-warm-grey uppercase">Essentials</p>
          <nav className="flex flex-col gap-1">
            {nav.map(({ icon: Icon, label, active }) => (
              <span
                key={label}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-2.5 py-2 text-[11.5px] font-medium",
                  active ? "bg-ink text-bone" : "text-warm-grey",
                )}
              >
                <Icon className="size-3.5" strokeWidth={2} />
                {label}
              </span>
            ))}
          </nav>
          <div className="tint mt-auto rounded-xl p-3">
            <p className="text-[11px] font-semibold text-ink">Agent live</p>
            <p className="mt-1 text-[10px] leading-snug text-warm-grey">
              Answering on web, SMS &amp; phone
            </p>
          </div>
        </aside>

        {/* main */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3 border-b border-border px-4 py-3">
            <div className="flex flex-1 items-center gap-2 rounded-lg border border-border bg-cream px-2.5 py-1.5 text-[11px] text-warm-grey">
              <Search className="size-3" />
              Search patients, leads, consults
            </div>
            <Bell className="size-3.5 text-warm-grey" />
            <span className="flex size-6 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
              SM
            </span>
          </div>

          <div className="p-4">
            <div className="flex flex-wrap items-end justify-between gap-2">
              <div>
                <p className="text-[15px] font-semibold text-ink">Good morning, Dr. Mitchell</p>
                <p className="text-[11px] text-warm-grey">
                  Your agent handled 41 conversations overnight
                </p>
              </div>
              <span className="tint rounded-full border border-tint px-2.5 py-1 text-[10px] font-semibold text-primary">
                93% show rate
              </span>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2 lg:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-border bg-cream p-2.5">
                  <p className="text-[10px] font-medium text-warm-grey">{s.label}</p>
                  <p className="mt-1 flex items-baseline gap-1.5 text-[17px] leading-none font-semibold text-ink">
                    {s.value}
                    <span className="text-[9.5px] font-semibold text-primary">{s.delta}</span>
                  </p>
                  <p className="mt-1 text-[9.5px] text-warm-grey">{s.sub}</p>
                </div>
              ))}
            </div>

            <div className="mt-3 grid gap-2 lg:grid-cols-5">
              {/* live thread */}
              <div className="rounded-xl border border-border p-3 lg:col-span-2">
                <div className="flex items-center gap-2 border-b border-border pb-2">
                  <MessageSquare className="size-3.5 text-primary" />
                  <p className="text-[11px] font-semibold text-ink">Live conversation</p>
                  <span className="ml-auto flex items-center gap-1 text-[9.5px] text-warm-grey">
                    <span className="size-1.5 rounded-full bg-primary" /> now
                  </span>
                </div>
                <div className="mt-2.5 space-y-2">
                  <p className="max-w-[85%] rounded-2xl rounded-bl-sm bg-muted px-2.5 py-1.5 text-[10.5px] leading-snug text-ink">
                    Hi! Do you take Delta Dental for adult Invisalign?
                  </p>
                  <p className="ml-auto max-w-[88%] rounded-2xl rounded-br-sm bg-primary px-2.5 py-1.5 text-[10.5px] leading-snug text-primary-foreground">
                    We do — and adult Invisalign starts at $3,900 with in-house financing. I have
                    Thursday 2:00pm open for a free scan. Want me to hold it?
                  </p>
                  <p className="max-w-[70%] rounded-2xl rounded-bl-sm bg-muted px-2.5 py-1.5 text-[10.5px] leading-snug text-ink">
                    Yes please 🙌
                  </p>
                  <p className="flex items-center gap-1.5 text-[9.5px] font-medium text-primary">
                    <CheckCircle2 className="size-3" /> Consult booked · Thu 2:00pm
                  </p>
                </div>
              </div>

              {/* pipeline */}
              <div className="rounded-xl border border-border p-3 lg:col-span-3">
                <div className="flex items-center justify-between border-b border-border pb-2">
                  <p className="text-[11px] font-semibold text-ink">Lead pipeline</p>
                  <span className="text-[9.5px] text-warm-grey">This week</span>
                </div>
                <div className="mt-2.5 grid grid-cols-3 gap-2">
                  {pipeline.map((col) => (
                    <div key={col.title} className="rounded-lg bg-cream p-2">
                      <p className="flex items-center justify-between text-[10px] font-semibold text-ink">
                        {col.title}
                        <span className="text-warm-grey">{col.count}</span>
                      </p>
                      <div className="mt-1.5 space-y-1.5">
                        {col.items.map((item) => (
                          <p
                            key={item}
                            className="rounded-md border border-border bg-background px-1.5 py-1.5 text-[9px] leading-snug text-warm-grey"
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Chat widget mock used in the large bento card. */
export function ChatMock() {
  return (
    <div className="rounded-2xl border border-border bg-background p-3 shadow-[0_18px_40px_-28px_rgba(26,26,23,0.35)]">
      <div className="flex items-center gap-2 border-b border-border pb-2.5">
        <span className="flex size-7 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground">
          R
        </span>
        <div>
          <p className="text-[11.5px] font-semibold text-ink">Rally Agent</p>
          <p className="flex items-center gap-1 text-[9.5px] text-warm-grey">
            <span className="size-1.5 rounded-full bg-primary" /> Online · replies instantly
          </p>
        </div>
      </div>
      <div className="mt-3 space-y-2">
        <p className="max-w-[86%] rounded-2xl rounded-bl-sm bg-muted px-3 py-2 text-[11px] leading-snug text-ink">
          How much are braces for my 13 year old?
        </p>
        <p className="ml-auto max-w-[90%] rounded-2xl rounded-br-sm bg-primary px-3 py-2 text-[11px] leading-snug text-primary-foreground">
          Teen braces run $4,200–$5,600 depending on the plan, and we offer $0-down monthly
          payments. Free consult includes x-rays and a treatment timeline.
        </p>
        <p className="max-w-[86%] rounded-2xl rounded-bl-sm bg-muted px-3 py-2 text-[11px] leading-snug text-ink">
          Can we come Saturday?
        </p>
        <p className="ml-auto max-w-[90%] rounded-2xl rounded-br-sm bg-primary px-3 py-2 text-[11px] leading-snug text-primary-foreground">
          Saturday 9:40am is open — booking it now and texting you a confirmation. ✅
        </p>
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-full border border-border bg-cream px-3 py-2 text-[10.5px] text-warm-grey">
        Type a message…
        <span className="ml-auto flex size-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
          ↑
        </span>
      </div>
    </div>
  );
}

/** Phone frame mock for the AI receptionist card. */
export function PhoneMock() {
  return (
    <div className="mx-auto w-[172px] rounded-[1.75rem] border border-border bg-background p-2.5 shadow-[0_18px_40px_-28px_rgba(26,26,23,0.4)]">
      <div className="rounded-[1.35rem] bg-cream p-3">
        <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-border" />
        <div className="flex flex-col items-center text-center">
          <span className="tint flex size-11 items-center justify-center rounded-full">
            <Phone className="size-4 text-primary" />
          </span>
          <p className="mt-2 text-[11.5px] font-semibold text-ink">Incoming call</p>
          <p className="text-[9.5px] text-warm-grey">(512) 555-0148</p>
          <span className="tint mt-2 rounded-full px-2 py-0.5 text-[9px] font-semibold text-primary">
            Answered by Rally
          </span>
        </div>
        <div className="mt-3 space-y-1.5">
          <p className="rounded-lg bg-background px-2 py-1.5 text-[9px] leading-snug text-warm-grey">
            “Are you open Saturdays?”
          </p>
          <p className="rounded-lg bg-primary px-2 py-1.5 text-[9px] leading-snug text-primary-foreground">
            “We are, 9–2. I can book you at 10:15.”
          </p>
          <p className="flex items-center gap-1 rounded-lg bg-background px-2 py-1.5 text-[9px] font-medium text-primary">
            <CheckCircle2 className="size-2.5" /> Appointment created
          </p>
        </div>
      </div>
    </div>
  );
}

/** Setup / onboarding visual for the full-width highlight card. */
export function SetupMock() {
  const steps = [
    { label: "Practice profile imported", done: true },
    { label: "Services & pricing trained", done: true },
    { label: "Insurance rules added", done: true },
    { label: "Web + SMS + phone connected", done: false },
  ];

  return (
    <div className="rounded-2xl border border-border bg-background p-4 shadow-[0_24px_60px_-40px_rgba(26,26,23,0.4)]">
      <div className="flex items-center justify-between border-b border-border pb-3">
        <Logo />
        <span className="tint rounded-full px-2.5 py-1 text-[10px] font-semibold text-primary">
          Day 3 of setup
        </span>
      </div>
      <p className="mt-3 text-[12px] font-semibold text-ink">Agent training</p>
      <div className="mt-2 space-y-2">
        {steps.map((s) => (
          <div
            key={s.label}
            className="flex items-center gap-2 rounded-xl border border-border bg-cream px-3 py-2.5"
          >
            <CheckCircle2
              className={cn("size-4", s.done ? "text-primary" : "text-border")}
              strokeWidth={2.2}
            />
            <span className="text-[11px] font-medium text-ink">{s.label}</span>
            <span className="ml-auto text-[9.5px] text-warm-grey">{s.done ? "Done" : "In progress"}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-xl bg-ink px-3 py-2.5">
        <p className="text-[10.5px] font-medium text-bone">Go-live estimate</p>
        <p className="text-[15px] font-semibold text-background">4 days</p>
      </div>
    </div>
  );
}
