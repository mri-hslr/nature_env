"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { usePathname } from "next/navigation";

const PANEL_COUNT = 4;
const STAGGER = 0.1;
const DURATION = 0.6;
const transitionEase = [0.76, 0, 0.24, 1];

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
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, (DURATION + PANEL_COUNT * STAGGER) * 1000);
    return () => clearTimeout(timer);
  }, [pathname, mounted]);

  // We use 'as any' or 'as Variants' here to bypass the strict index signature check.
  // This is the standard "industry fix" for dynamic Framer Motion variants in TS.
  const panelVariants = {
    initial: {
      scaleY: 0,
    },
    animate: (i: number) => ({
      scaleY: 1,
      transition: {
        duration: DURATION,
        delay: i * STAGGER,
        ease: transitionEase,
      },
    }),
    exit: (i: number) => ({
      scaleY: 0,
      transition: {
        duration: DURATION,
        delay: i * STAGGER,
        ease: transitionEase,
      },
    }),
  } as any; 

  if (!mounted) return <>{children}</>;

  return (
    <>
      <main className="relative z-0">
        {children}
      </main>

      <div className="fixed inset-0 pointer-events-none z-[9999] flex flex-row">
        {[...Array(PANEL_COUNT)].map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={panelVariants}
            initial="initial"
            animate={isTransitioning ? "animate" : "exit"}
            className="relative h-full w-full origin-top"
            style={{ 
              backgroundColor: i % 2 === 0 ? "#0a0a0a" : "#161616" 
            }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div 
            key="blocker"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] cursor-wait pointer-events-auto bg-transparent" 
          />
        )}
      </AnimatePresence>
    </>
  );
}