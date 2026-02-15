"use client";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";

export function ContactSection() {
  // Spotlight effect
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section id="contact" className="py-12 sm:py-24">
      {/* Title */}
      <div className="text-center space-y-3 mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Let&apos;s Connect
        </h2>
        <p className="max-w-xl mx-auto text-sm sm:text-base text-zinc-400">
          I&apos;m currently open to new opportunities and collaborations. 
          Feel free to reach out!
        </p>
      </div>

      {/* Card with Spotlight Effect */}
      <div 
        onMouseMove={handleMouseMove}
        className="group relative mx-auto max-w-3xl rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-10 shadow-2xl overflow-hidden"
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                rgba(16, 185, 129, 0.08),
                transparent 80%
              )
            `,
          }}
        />

        <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-white">Contact Details</h3>
            <p className="text-zinc-400 max-w-xs text-sm">
              I usually respond within 24 hours. Feel free to call or email me directly.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 text-sm sm:text-base">
            {/* Phone Number */}
            <div className="flex flex-col space-y-1">
              <span className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] font-bold">Phone</span>
              <a 
                href="tel:+201102361856" 
                className="font-medium text-zinc-100 hover:text-emerald-400 transition-colors"
              >
                +20 110 236 1856
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col space-y-1">
              <span className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] font-bold">Email</span>
              <span className="font-medium text-zinc-100">ahmeedemadmohamed@gmail.com</span>
            </div>
            
            {/* LinkedIn */}
            <div className="flex flex-col space-y-1">
              <span className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] font-bold">LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/ahmeedemad/"
                className="font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/ahmeedemad
              </a>
            </div>

            <MagneticButton
              href="mailto:ahmeedemadmohamed@gmail.com"
              className="mt-4 inline-flex items-center justify-center rounded-xl bg-emerald-500 px-8 py-3 text-sm font-bold text-black shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400 active:scale-95"
            >
              Send Me an Email
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}