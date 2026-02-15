"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";

const SUBTITLE = "Front-End Developer | React.js & Next.js";

export function Hero() {
  const chars = SUBTITLE.split("");

  return (
    <section className="space-y-6">
      <p className="text-sm font-medium text-zinc-300">Hello, I&apos;m</p>

      <div className="space-y-2">
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Ahmed Emad Mohamed
        </h1>
        <p className="text-xl text-zinc-400 min-h-[1.5em]">
          {chars.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 10,
              }}
            >
              {char}
            </motion.span>
          ))}
        </p>
      </div>

      <p className="max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
        Specialized in React.js and Next.js with 1+ year of experience building scalable,
        production-ready web applications. Skilled in developing reusable UI components,
        optimizing web performance, and integrating APIs within clean, maintainable architectures.
      </p>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <MagneticButton
          href="#projects"
          className="inline-flex h-11 items-center justify-center rounded-lg bg-white px-6 text-sm font-medium text-black transition hover:bg-zinc-200"
        >
          View My Work
        </MagneticButton>

        <MagneticButton
          href="#contact"
          className="inline-flex h-11 items-center justify-center rounded-lg border border-zinc-700 bg-transparent px-6 text-sm font-medium text-white transition hover:border-zinc-500 hover:bg-zinc-900"
        >
          Contact Me <span className="ml-2">→</span>
        </MagneticButton>
      </div>
    </section>
  );
}
