"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useReducedMotionAfterHydration } from "@/lib/hooks/useReducedMotionAfterHydration";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const reduceMotion = useReducedMotionAfterHydration();

  return (
    <header className="sticky top-4 z-50 md:top-6">
      <div className="flex flex-col gap-3 rounded-2xl border border-border/80 bg-surface/70 px-4 py-3 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)] backdrop-blur-xl supports-backdrop-filter:bg-surface/50 sm:px-5 md:flex-row md:items-center md:justify-between md:gap-4 md:rounded-full md:py-3 md:pl-6 md:pr-5">
        <Link
          href="/"
          className="group shrink-0 rounded-lg outline-none ring-offset-2 ring-offset-background focus-visible:ring-2 focus-visible:ring-accent"
        >
          <p className="font-display text-base font-semibold tracking-tight sm:text-lg">
            <span className="text-foreground transition group-hover:text-foreground/90">Ahmed</span>
            <span className="text-accent">Emad</span>
          </p>
          <p className="mt-0.5 hidden text-[11px] text-muted sm:block">Front-End Developer</p>
        </Link>

        <nav
          aria-label="Primary"
          className="-mx-1 flex max-w-full items-center gap-0.5 overflow-x-auto overscroll-x-contain px-1 pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] md:mx-0 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="shrink-0 rounded-full px-3 py-2 text-sm text-muted outline-none ring-offset-2 ring-offset-background transition-colors hover:bg-accent-soft hover:text-foreground focus-visible:ring-2 focus-visible:ring-accent"
            >
              <motion.span
                className="inline-block"
                whileHover={reduceMotion ? undefined : { y: -1 }}
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {label}
              </motion.span>
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
