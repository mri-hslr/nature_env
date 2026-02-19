"use client";

import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

interface PinnedNarrativeProps {
  height?: number;
  // This union must match your library/page.tsx usage exactly.
  ambient?: "community" | "events" | "guide" | "library" | "none"; 
  visual: React.ReactNode;
  narrative: (progress: any) => React.ReactNode;
}

export const PinnedNarrative: React.FC<PinnedNarrativeProps> = ({ 
  height = 300, 
  ambient = "none", 
  visual, 
  narrative 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full" 
      style={{ height: `${height}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div 
          style={{ opacity: contentOpacity }}
          className="flex h-full w-full items-center px-6 md:px-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full max-w-7xl mx-auto">
            <div className="relative">
              {narrative(scrollYProgress)}
            </div>
            <div className="relative aspect-square w-full">
              <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/50">
                {visual}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};