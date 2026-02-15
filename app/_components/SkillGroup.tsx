import type { SkillGroupProps } from "@/lib/types";

export function SkillGroup({ title, items }: SkillGroupProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-zinc-100">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-zinc-900 px-3 py-1 text-xs text-zinc-200 border border-zinc-700 transition-colors duration-200 hover:border-emerald-400 hover:text-emerald-400 hover:bg-zinc-800"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
