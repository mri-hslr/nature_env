"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { usePathname } from "next/navigation";

// Matching the aesthetic of your Hero Curtains
const PANEL_COUNT = 5;
const STAGGER = 0.12;
const DURATION = 0.8;
const transitionEase = [0.45, 0, 0.55, 1]; // Matching your mechanical feel

const PANELS = [
  { id: 0, color: "#050505" },
  { id: 1, color: "#080808" },
  { id: 2, color: "#0a0a0a" },
  { id: 3, color: "#0c0c0c" },
  { id: 4, color: "#000000" },
];

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    setIsTransitioning(true);
    
    // Hold the curtains closed slightly longer for a cinematic feel
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, (DURATION + PANEL_COUNT * STAGGER) * 1100);
    
    return () => clearTimeout(timer);
  }, [pathname, mounted]);

  const panelVariants = {
    initial: {
      scaleX: 0,
    },
    animate: (i: number) => ({
      scaleX: 1,
      transition: {
        duration: DURATION,
        delay: i * STAGGER,
        ease: transitionEase,
      },
    }),
    exit: (i: number) => ({
      scaleX: 0,
      transition: {
        duration: DURATION,
        delay: i * STAGGER,
        ease: transitionEase,
      },
      transitionEnd: {
        scaleX: 0 // Reset for next transition
      }
    }),
  } as any;

  if (!mounted) return <>{children}</>;

  return (
    <>
      <main className="relative z-0">
        {children}
      </main>

      {/* CURTAIN OVERLAY: Horizontal Wipe */}
      <div className="fixed inset-0 pointer-events-none z-[9999] flex flex-row">
        {PANELS.map((panel, i) => (
          <motion.div
            key={panel.id}
            custom={i}
            variants={panelVariants}
            initial="initial"
            animate={isTransitioning ? "animate" : "exit"}
            style={{ 
              backgroundColor: panel.color,
              originX: 0, // Wipes from Left to Right
            }}
            className="relative h-full w-full border-r border-white/5 last:border-none will-change-transform"
          />
        ))}
      </div>
    </>
  );
}