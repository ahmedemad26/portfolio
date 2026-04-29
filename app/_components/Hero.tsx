"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useReducedMotionAfterHydration } from "@/lib/hooks/useReducedMotionAfterHydration";

const SUBTITLE = "Front-End Developer | React.js & Next.js";

export function Hero() {
  const reduceMotion = useReducedMotionAfterHydration();
  const chars = SUBTITLE.split("");

  return (
    <section className="space-y-7 text-left sm:space-y-8">
      <p className="text-sm font-medium text-accent sm:text-base">Hello, I&apos;m</p>

      <div className="space-y-3 sm:space-y-4">
        <h1 className="font-display text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl md:leading-[1.08]">
          Ahmed Emad Mohamed
        </h1>
        <p className="min-h-[1.5em] text-base text-muted sm:text-lg md:text-xl md:leading-snug">
          {reduceMotion ? (
            SUBTITLE
          ) : (
            chars.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.2,
                  delay: i / 12,
                }}
              >
                {char}
              </motion.span>
            ))
          )}
        </p>
      </div>

      <p className="max-w-xl text-sm leading-relaxed text-muted sm:max-w-2xl sm:text-base md:leading-relaxed">
        Frontend Developer specializing in React, Next.js, and TypeScript, with 2 years of
        experience building high performance, maintainable web applications, with a focus on
        delivering seamless RTL user experiences and real time systems. 
      </p>

      <div className="flex flex-wrap items-center gap-3 pt-1 sm:gap-4">
        <MagneticButton
          href="#projects"
          className="inline-flex h-11 items-center justify-center rounded-full bg-accent px-8 text-sm font-semibold text-background shadow-[0_0_28px_-4px_var(--accent-glow)] outline-none ring-offset-2 ring-offset-background transition hover:brightness-110 hover:shadow-[0_0_36px_-2px_var(--accent-glow)] focus-visible:ring-2 focus-visible:ring-accent sm:h-12 sm:px-9"
        >
          View My Work
        </MagneticButton>

        <MagneticButton
          href="https://drive.google.com/file/d/1R80SVHl5AB8g8zJxhlGmVHFC0nCAeFJu/view?usp=sharing"
          className="inline-flex h-11 items-center justify-center rounded-full border-2 border-accent/70 bg-transparent px-8 text-sm font-semibold text-accent outline-none ring-offset-2 ring-offset-background transition hover:border-accent hover:bg-accent/10 focus-visible:ring-2 focus-visible:ring-accent sm:h-12 sm:px-9"
          target="_blank"
          rel="noopener noreferrer"
        >
          View My CV
        </MagneticButton>

        <MagneticButton
          href="#contact"
          className="inline-flex h-11 items-center justify-center rounded-full border-2 border-foreground/25 bg-transparent px-8 text-sm font-semibold text-foreground outline-none ring-offset-2 ring-offset-background transition hover:border-foreground/50 hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-accent sm:h-12 sm:px-9"
        >
          Contact Me
        </MagneticButton>
      </div>
    </section>
  );
}
