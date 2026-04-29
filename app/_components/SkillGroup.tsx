import type { SkillGroupProps } from "@/lib/types";

export function SkillGroup({ title, items }: SkillGroupProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface/90 p-5 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.4)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_20px_52px_-14px_rgba(167,139,250,0.18)] sm:p-6">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />
      <div className="relative space-y-4">
        <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-lg border border-border bg-surface-raised/50 px-3 py-1.5 text-xs font-medium text-foreground/90 transition duration-200 hover:border-accent/30 hover:bg-accent/10 hover:text-accent"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
