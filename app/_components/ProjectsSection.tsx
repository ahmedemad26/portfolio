"use client";

import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/lib/types";

export function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="py-12 sm:py-16 space-y-8">
      {/* Title */}
      <div className="text-center space-y-3">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
          Featured Projects
        </h2>
        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-zinc-400">
          Here are some of my recent projects showcasing my front‑end skills and
          problem‑solving abilities.
        </p>
      </div>
      {/* Projects */}
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
}
