import React from "react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-12 sm:py-16">
      <div className="text-center mb-10 space-y-2">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
          Professional Experience
        </h2>
        <div className="mx-auto h-[2px] w-16 rounded-full bg-emerald-400" />
      </div>

      <div className="max-w-3xl mx-auto space-y-6 text-sm">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition hover:border-zinc-700">
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div>
              <p className="text-xs font-semibold text-emerald-400 uppercase tracking-[0.18em]">
                Internship
              </p>
              <h3 className="mt-1 text-lg font-semibold text-zinc-100">
                Front-End Developer – Elevate, Egypt
              </h3>
            </div>
            <p className="text-xs text-zinc-400 bg-zinc-800 px-3 py-1 rounded-full">
              July 2025 – Present
            </p>
          </div>

          <ul className="mt-4 space-y-3 text-zinc-300 list-disc pl-4">
            <li>
              Developed and maintained <strong>15+ responsive web applications</strong> using React.js and Next.js[cite: 14].
            </li>
            <li>
              Built a library of <strong>20+ reusable UI components</strong> using Tailwind CSS and ShadCN UI[cite: 15].
            </li>
            <li>
              Optimized web performance using <strong>SSR and Image Optimization</strong>, improving load times[cite: 17].
            </li>
            <li>
              Collaborated in <strong>30+ code reviews</strong> and Agile ceremonies within a 5-member team[cite: 15, 19].
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}