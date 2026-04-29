"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Framer's useReducedMotion can differ between server and first client render, causing hydration mismatches.
 * Until the client has mounted, this always returns false so SSR markup matches the initial client tree.
 */
export function useReducedMotionAfterHydration() {
  const [mounted, setMounted] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return false;
  return prefersReduced === true;
}
