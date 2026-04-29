import { SectionHeader } from "./ui/SectionHeader";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28">
      <SectionHeader title="About Me" eyebrow="Profile" />

      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        <div className="rounded-2xl border border-border bg-surface/95 p-6 shadow-[0_16px_48px_-24px_rgba(0,0,0,0.45)] backdrop-blur-xl transition duration-300 hover:border-accent/25 hover:shadow-[0_22px_56px_-18px_rgba(167,139,250,0.12)] sm:p-8">
          <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
            Who I Am
          </h3>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted sm:text-[15px]">
            <p>
              Frontend Developer specializing in React, Next.js, and TypeScript, with 2 years of
              experience building high performance, maintainable web applications, with a focus on
              delivering seamless RTL user experiences and real time systems.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface/95 p-6 shadow-[0_16px_48px_-24px_rgba(0,0,0,0.45)] backdrop-blur-xl transition duration-300 hover:border-accent/25 hover:shadow-[0_22px_56px_-18px_rgba(167,139,250,0.12)] sm:p-8">
          <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
            Education & Courses
          </h3>

          <div className="mt-5 space-y-6 text-sm">
            <div className="border-l-2 border-accent/40 pl-4">
              <p className="font-medium text-foreground">
                B.Sc. in Computer Science – Egyptian E‑Learning University
              </p>
              <p className="mt-1 text-xs text-muted-foreground">Sept 2022 – Jul 2026 </p>
            </div>

            <div className="border-l-2 border-accent/40 pl-4">
              <p className="font-medium text-foreground">Front End Diploma – Route Academy</p>
              <p className="mt-1 text-xs text-muted-foreground">Mar 2024 – Sep 2024 </p>
            </div>

            <div className="border-l-2 border-accent/40 pl-4">
              <p className="font-medium text-foreground">
                Web Design Track – National Telecommunication Institute (NTI)
              </p>
              <p className="mt-1 text-xs text-muted-foreground">Oct 2024 – Dec 2024 </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
