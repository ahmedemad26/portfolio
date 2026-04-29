"use client";

import Image from "next/image";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import type { Project } from "@/lib/types";

export function ProjectCard({ p }: { p: Project }) {
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
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface/95 shadow-[0_20px_56px_-28px_rgba(0,0,0,0.55)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-accent/45 hover:shadow-[0_28px_72px_-16px_rgba(167,139,250,0.22)]"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              420px circle at ${mouseX}px ${mouseY}px,
              rgba(167, 139, 250, 0.14),
              transparent 75%
            )
          `,
        }}
        aria-hidden
      />

      <div className="relative aspect-video w-full overflow-hidden border-b border-border">
        <Image
          src={p.image}
          alt={p.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-between space-y-4 p-5 sm:p-6">
        <div className="space-y-2">
          <h3 className="font-display text-base font-semibold text-foreground">{p.title}</h3>
          <p className="text-xs leading-relaxed text-muted sm:text-[13px]">{p.description}</p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {p.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-border bg-surface-raised/60 px-2 py-0.5 text-[10px] font-medium text-muted sm:text-[11px]"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 pt-1 text-xs">
          <motion.a
            href={p.codeLink}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="inline-flex min-h-10 flex-1 items-center justify-center rounded-xl border border-border bg-transparent px-3 py-2 font-semibold text-foreground transition hover:border-accent/50 hover:text-accent"
          >
            Code
          </motion.a>
          <motion.a
            href={p.liveLink}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="inline-flex min-h-10 flex-1 items-center justify-center rounded-xl bg-accent px-3 py-2 font-semibold text-background shadow-[0_8px_24px_-6px_var(--accent-glow)] transition hover:brightness-110"
          >
            Live Demo
          </motion.a>
        </div>
      </div>
    </article>
  );
}
