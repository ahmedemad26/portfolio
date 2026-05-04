"use client";

import { useState } from "react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 md:top-6">
      <div className="flex items-center justify-between gap-3 rounded-2xl border border-border/80 bg-surface/70 px-4 py-3 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)] backdrop-blur-xl supports-backdrop-filter:bg-surface/50 sm:px-5 md:rounded-full md:pl-6 md:pr-5">
        <div className="md:contents">
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
        </div>

        <nav aria-label="Primary" className="hidden items-center gap-0.5 md:flex">
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

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-surface-raised/20 text-foreground outline-none transition-colors hover:border-border-hover hover:bg-accent-soft focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span className="sr-only">{isMobileMenuOpen ? "Close menu" : "Open menu"}</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="h-5 w-5"
                aria-hidden
              >
                {isMobileMenuOpen ? (
                  <>
                    <path d="M6 6l12 12" />
                    <path d="M18 6L6 18" />
                  </>
                ) : (
                  <>
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-60 md:hidden ${isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <button
          type="button"
          aria-label="Close menu backdrop"
          onClick={() => setIsMobileMenuOpen(false)}
          className={`absolute inset-0 bg-black/50 transition-opacity ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-[min(82vw,320px)] border-l border-border/80 bg-background/95 px-5 py-6 shadow-2xl backdrop-blur-xl transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="mb-6">
            <p className="font-display text-lg font-semibold tracking-tight">
              <span className="text-foreground">Ahmed</span>
              <span className="text-accent">Emad</span>
            </p>
          </div>

          <nav aria-label="Mobile primary" className="flex flex-col gap-1.5">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm text-muted outline-none ring-offset-2 ring-offset-background transition-colors hover:bg-accent-soft hover:text-foreground focus-visible:ring-2 focus-visible:ring-accent"
              >
                {label}
              </Link>
            ))}
          </nav>
        </aside>
      </div>
    </header>
  );
}
