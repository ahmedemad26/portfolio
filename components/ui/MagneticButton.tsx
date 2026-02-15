"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { MagneticButtonProps } from "@/lib/types";

export function MagneticButton({
  children,
  className,
  strength = 10,
  ...props
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spring = { stiffness: 300, damping: 20 };
  const xSpring = useSpring(x, spring);
  const ySpring = useSpring(y, spring);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) / rect.width;
    const deltaY = (e.clientY - centerY) / rect.height;
    x.set(deltaX * strength);
    y.set(deltaY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const isLink = "href" in props && props.href != null;
  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { type: "spring" as const, stiffness: 400, damping: 17 },
  };

  return (
    <motion.div
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      {isLink ? (
        <motion.a
          className={className}
          {...motionProps}
          {...(props as React.ComponentProps<typeof motion.a>)}
        >
          {children}
        </motion.a>
      ) : (
        <motion.button
          type="button"
          className={className}
          {...motionProps}
          {...(props as React.ComponentProps<typeof motion.button>)}
        >
          {children}
        </motion.button>
      )}
    </motion.div>
  );
}
