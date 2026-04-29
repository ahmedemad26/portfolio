import { SectionHeader } from "./ui/SectionHeader";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative scroll-mt-28">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[min(100%,480px)] w-[min(100%,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,var(--accent-soft),transparent_70%)] opacity-90 blur-3xl"
        aria-hidden
      />
      <SectionHeader title="Professional Experience" eyebrow="Career" />

      <div className="mx-auto max-w-3xl">
        <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface/95 p-6 shadow-[0_20px_56px_-24px_rgba(0,0,0,0.5)] backdrop-blur-xl transition duration-300 hover:border-accent/35 hover:shadow-[0_28px_72px_-18px_rgba(167,139,250,0.2)] sm:p-8">
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                "linear-gradient(135deg, rgba(167,139,250,0.12) 0%, transparent 45%, rgba(192,132,252,0.08) 100%)",
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/15 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
            aria-hidden
          />
          <div className="relative flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                Internship
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold text-foreground sm:text-xl">
                Front-End Developer – Elevate, Egypt
              </h3>
            </div>
            <p className="shrink-0 rounded-full border border-border bg-surface-raised px-3 py-1.5 text-xs text-muted">
              July 2025 – Present
            </p>
          </div>

          <ul className="relative mt-6 list-none space-y-3 pl-0 text-sm leading-relaxed text-muted sm:text-[15px]">
            <li className="flex gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
              <span>
                Developed and maintained <strong className="font-medium text-foreground">15+ responsive web applications</strong>{" "}
                using React.js and Next.js.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
              <span>
                Built a library of <strong className="font-medium text-foreground">20+ reusable UI components</strong> using
                Tailwind CSS and ShadCN UI.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
              <span>
                Optimized web performance using <strong className="font-medium text-foreground">SSR and Image Optimization</strong>
                , improving load times.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
              <span>
                Collaborated in <strong className="font-medium text-foreground">30+ code reviews</strong> and Agile ceremonies
                within a 5-member team.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
