const columns = [
  {
    label: "Bucket",
    value: "More patients",
    caption: "Pick one. Not three.",
  },
  {
    label: "KPI",
    value: "Consults booked",
    caption: "One number we both watch.",
  },
  {
    label: "Baseline",
    value: "38 / month",
    caption: "Where you are today, honestly.",
  },
  {
    label: "60-day target",
    value: "54 / month",
    caption: "What we're on the hook for.",
  },
];

export function ScopeCard() {
  return (
    <div className="float-card overflow-hidden rounded-t-[1.5rem] rounded-b-[1rem] border border-border bg-white">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border bg-bone px-6 py-4 sm:px-8">
        <p className="font-mono text-[11px] tracking-[0.14em] text-ink uppercase">
          Scope card — every Rally build starts here
        </p>
        <p className="font-mono text-[11px] tracking-[0.14em] text-warm-grey uppercase">
          Signed before day one
        </p>
      </div>

      <div className="grid gap-6 px-6 py-8 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {columns.map((c) => (
          <div key={c.label}>
            <p className="font-mono text-[11px] tracking-[0.14em] text-warm-grey uppercase">
              {c.label}
            </p>
            <p className="mt-2 font-display text-[24px] leading-tight font-semibold text-ink">
              {c.value}
            </p>
            <p className="mt-1.5 text-[13.5px] text-warm-grey">{c.caption}</p>
          </div>
        ))}
      </div>

      <div className="tint flex flex-wrap items-center justify-between gap-2 border-t border-border px-6 py-4 sm:px-8">
        <p className="text-[14px] text-ink">
          We don&apos;t build until all four boxes are filled in. Most practices can&apos;t fill them
          on the first try, which is a little uncomfortable for everyone.
        </p>
        <p className="font-mono text-[13px] font-medium text-primary">+42%</p>
      </div>
    </div>
  );
}
