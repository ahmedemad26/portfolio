import type { SkillGroupProps } from "@/lib/types";

export function SkillGroup({ title, items }: SkillGroupProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5 shadow-lg transition-all duration-300 hover:border-emerald-500/40 hover:bg-zinc-900/60 hover:shadow-emerald-500/5 hover:shadow-xl">
      {/* Accent line */}
      <div className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-linear-to-b from-emerald-500/80 to-emerald-600/40 opacity-60 transition-opacity group-hover:opacity-100" />
      <div className="relative space-y-4 pl-1">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-400/90">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-lg bg-zinc-800/80 px-3 py-1.5 text-xs font-medium text-zinc-200 ring-1 ring-zinc-700/50 transition-all duration-200 hover:bg-emerald-500/15 hover:ring-emerald-500/30 hover:text-emerald-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
