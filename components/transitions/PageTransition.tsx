"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PANEL_COUNT = 5;
const STAGGER = 0.12;
const DURATION = 0.8;
const transitionEase = [0.45, 0, 0.55, 1];

const PANELS = [
  { id: 0, color: "#050505" },
  { id: 1, color: "#080808" },
  { id: 2, color: "#0a0a0a" },
  { id: 3, color: "#0c0c0c" },
  { id: 4, color: "#000000" },
];

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  /**
   * THE FIX: 
   * We use a single 'sweep' variant. 
   * 1. Start at scaleX: 0 (Origin Left)
   * 2. Grow to scaleX: 1 (Origin Left) -> This covers the screen.
   * 3. Instantly flip Origin to Right.
   * 4. Shrink to scaleX: 0 (Origin Right) -> This reveals the screen.
   */
  const panelVariants: any = {
    initial: {
      scaleX: 0,
      originX: 0,
    },
    animate: (i: number) => ({
      scaleX: [0, 1, 1, 0], 
      originX: [0, 0, 1, 1], // Pivot the origin mid-animation
      transition: {
        duration: DURATION * 1.5, // Total sweep time
        times: [0, 0.4, 0.6, 1], // Timing of the keyframes
        delay: i * STAGGER,
        ease: transitionEase,
      },
    }),
  };

  if (!mounted) return <>{children}</>;

  return (
    <>
      <main className="relative z-0">
        {children}
      </main>

      {/* KEYED CONTAINER: 
          Changing the 'key' to the pathname ensures the animation 
          re-triggers exactly once per navigation.
      */}
      <div 
        key={pathname} 
        className="fixed inset-0 pointer-events-none z-[9999] flex flex-row"
      >
        {PANELS.map((panel, i) => (
          <motion.div
            key={panel.id}
            custom={i}
            variants={panelVariants}
            initial="initial"
            animate="animate"
            style={{ backgroundColor: panel.color }}
            className="relative h-full w-full border-r border-white/5 last:border-none will-change-transform"
          />
        ))}
      </div>
    </>
  );
}