"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const lines = [
  "DATA IS NOT",
  "THE DESTINATION.",
  "IT IS THE",
  "COMPASS FOR",
  "RESTORATION."
];

export const Emphasis = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <div ref={containerRef} className="relative w-full py-[30vh] bg-[#052c24] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
        {lines.map((text, i) => (
          <Line key={i} text={text} />
        ))}
      </div>
      
      {/* Ambient SVG Element: A subtle atmospheric pulse */}
      <motion.div 
        style={{ 
          scale: useTransform(scrollYProgress, [0, 1], [0.8, 1.2]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.15, 0])
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] rounded-full border-[0.5px] border-[#2dd4bf] pointer-events-none"
      />
    </div>
  );
};

const Line = ({ text }: { text: string }) => {
  const lineRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start 0.9", "start 0.1"]
  });

  // Iceberg Style: Text brightens and moves slightly as it enters the focus zone
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.1, 1, 1, 0.1]);
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [30, 0, -30]);

  return (
    <motion.div
      ref={lineRef}
      style={{ opacity, x }}
      className="py-4"
    >
      <h2 className="text-5xl md:text-[9vw] font-black leading-[0.8] tracking-tighter text-[#2dd4bf] uppercase">
        {text}
      </h2>
    </motion.div>
  );
};