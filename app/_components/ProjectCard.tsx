"use client";

import Image from "next/image";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import type { Project } from "@/lib/types";

export function ProjectCard({ p }: { p: Project }) {

  // Spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Handle mouse move
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

      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={p.image}
          alt={p.title}
          fill
          className="object-cover transition duration-500 hover:scale-110"
        />
      </div>

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
