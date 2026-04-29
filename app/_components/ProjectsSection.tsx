"use client";

import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/lib/types";
import { SectionHeader } from "./ui/SectionHeader";

export function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="scroll-mt-28">
      <SectionHeader
        eyebrow="Work"
        title="Featured Projects"
        description="Here are some of my recent projects showcasing my front‑end skills and problem‑solving abilities."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
}
