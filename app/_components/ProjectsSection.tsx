"use client";

import Image from "next/image";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";

export type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  codeLink: string;
  liveLink: string;
};

function ProjectCard({ p }: { p: Project }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <article
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-zinc-900/80 border border-zinc-800 shadow-lg shadow-black/30 transition hover:-translate-y-1 hover:border-emerald-400/70 hover:shadow-emerald-500/20"
    >
      {/* Spotlight layer that follows the mouse */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(16, 185, 129, 0.15),
              transparent 80%
            )
          `,
        }}
        aria-hidden
      />

      {/* Image Section */}
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={p.image}
          alt={p.title}
          fill
          className="object-cover transition duration-500 hover:scale-110"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col justify-between p-5 space-y-4 relative z-10">
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-white">{p.title}</h3>
          <p className="text-xs leading-relaxed text-zinc-300">
            {p.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1 mt-1">
          {p.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-zinc-800 px-2 py-0.5 text-[10px] text-zinc-200 border border-zinc-700"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-3 text-xs">
          <motion.a
            href={p.codeLink}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="inline-flex flex-1 items-center justify-center rounded-full border border-zinc-600 px-3 py-2 font-medium text-zinc-100 hover:border-emerald-400 hover:text-emerald-300 transition"
          >
            Code
          </motion.a>
          <motion.a
            href={p.liveLink}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="inline-flex flex-1 items-center justify-center rounded-full bg-emerald-500 px-3 py-2 font-medium text-black hover:bg-emerald-400 transition"
          >
            Live Demo
          </motion.a>
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="py-12 sm:py-16 space-y-8">
      <div className="text-center space-y-3">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
          Featured Projects
        </h2>
        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-zinc-400">
          Here are some of my recent projects showcasing my front‑end skills and
          problem‑solving abilities.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
}
