"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* Navigation links */
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-zinc-800 pb-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 ring-1 ring-zinc-700/60">
          <span className="text-lg font-semibold text-zinc-50">A</span>
        </div>
        <div>
          <p className="text-sm font-medium text-zinc-100">Ahmed Emad</p>
          <p className="text-xs text-zinc-400">Front-End Developer</p>
        </div>
      </div>

      <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
        {navLinks.map(({ href, label }) => (
          <Link key={href} href={href} className="transition hover:text-white hover:underline underline-offset-4">
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {label}
            </motion.span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
