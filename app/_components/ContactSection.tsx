"use client";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";

export function ContactSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section id="contact" className="scroll-mt-28 pb-4 md:pb-8">
      <SectionHeader
        eyebrow="Contact"
        title="Let's Connect"
        description="I'm currently open to new opportunities and collaborations. Feel free to reach out!"
      />

      <div
        onMouseMove={handleMouseMove}
        className="group relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border bg-surface/95 p-6 shadow-[0_24px_64px_-24px_rgba(0,0,0,0.55)] backdrop-blur-xl transition duration-300 hover:border-accent/30 hover:shadow-[0_28px_72px_-20px_rgba(167,139,250,0.15)] sm:p-10"
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                520px circle at ${mouseX}px ${mouseY}px,
                rgba(167, 139, 250, 0.11),
                transparent 75%
              )
            `,
          }}
          aria-hidden
        />

        <div className="relative z-10 flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-12">
          <div className="max-w-sm space-y-3">
            <h3 className="font-display text-xl font-semibold text-foreground">Contact Details</h3>
            <p className="text-sm leading-relaxed text-muted">
              I usually respond within 24 hours. Feel free to call or email me directly.
            </p>
          </div>

          <div className="grid min-w-0 flex-1 grid-cols-1 gap-6 text-sm sm:text-base">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Phone
              </span>
              <a
                href="tel:+201102361856"
                className="font-medium text-foreground transition hover:text-accent"
              >
                +20 110 236 1856
              </a>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Email
              </span>
              <span className="font-medium text-foreground">ahmeedemadmohamed@gmail.com</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                LinkedIn
              </span>
              <a
                href="https://www.linkedin.com/in/ahmeedemad/"
                className="font-medium text-accent transition hover:brightness-110"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/ahmeedemad
              </a>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Resume
              </span>
              <a
                href="https://drive.google.com/file/d/1R80SVHl5AB8g8zJxhlGmVHFC0nCAeFJu/view?usp=sharing"
                className="inline-flex items-center gap-1.5 font-medium text-accent transition hover:brightness-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                View My CV
              </a>
            </div>

            <MagneticButton
              href="mailto:ahmeedemadmohamed@gmail.com"
              className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-xl bg-foreground px-8 text-sm font-semibold text-background shadow-lg transition hover:brightness-110 sm:w-auto"
            >
              Send Me an Email
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
