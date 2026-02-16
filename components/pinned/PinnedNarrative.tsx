"use client";

import { motion } from "framer-motion";
import { ReactNode, useMemo } from "react";
import { useScroll } from "framer-motion";

interface PinnedNarrativeProps {
  height: number;
  visual: ReactNode;
  narrative: (progress: any) => ReactNode;
  ambient?: "community" | "events" | "guide" | "library";
}

export function PinnedNarrative({
  height,
  visual,
  narrative,
  ambient,
}: PinnedNarrativeProps) {
  const { scrollYProgress } = useScroll();

  const ambientGradient = useMemo(() => {
    switch (ambient) {
      case "community":
        return "radial-gradient(60% 50% at 50% 40%, rgba(80, 200, 160, 0.18), transparent 70%)";
      case "events":
        return "radial-gradient(60% 50% at 50% 40%, rgba(120, 160, 255, 0.18), transparent 70%)";
      case "guide":
        return "radial-gradient(60% 50% at 50% 40%, rgba(240, 210, 140, 0.18), transparent 70%)";
      case "library":
        return "radial-gradient(60% 50% at 50% 40%, rgba(180, 140, 255, 0.18), transparent 70%)";
      default:
        return null;
    }
  }, [ambient]);

  return (
    <section
      className="relative w-full"
      style={{ height: `${height}vh` }}
    >
      {/* Ambient background (pin-safe) */}
      {ambientGradient && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={{ background: ambientGradient }}
          animate={{
            opacity: [0.4, 0.65, 0.4],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 18,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      )}

      {/* Sticky Wrapper 
          Changed from Grid to Flex to allow the Narrative to dictate the vertical flow 
          while the visual remains pinned and less intrusive.
      */}
      <div className="sticky top-0 h-screen w-full flex flex-col lg:flex-row items-center justify-between z-10 px-6 lg:px-24 overflow-hidden">
        
        {/* Narrative (Left/Center Column) */}
        <div className="relative z-20 w-full lg:w-[55%] h-full flex flex-col justify-center">
          {/* This container ensures the narrative has its own vertical space 
              without being compressed by the visual asset.
          */}
          <div className="w-full max-w-2xl">
            {narrative(scrollYProgress)}
          </div>
        </div>

        {/* Visual (Right Side - Pinned) */}
        <div className="relative z-10 w-full lg:w-[35%] h-full flex items-center justify-center lg:justify-end">
          {/* Reduced visual weight from 50% to 35%.
              Added explicit constraints to prevent overlap with the narrative column.
          */}
          <div className="w-full max-w-md aspect-square lg:aspect-auto lg:h-[70vh] flex items-center">
            {visual}
          </div>
        </div>
      </div>
    </section>
  );
}