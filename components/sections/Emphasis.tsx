// components/sections/Emphasis.tsx
"use client";

import React, { useRef, useState, useEffect, useMemo, useCallback } from "react";
import { motion, useTransform, useMotionValue, useSpring, MotionValue } from "framer-motion";

const lines = [
  "DATA IS NOT",
  "THE DESTINATION.",
  "IT IS THE",
  "COMPASS FOR",
  "RESTORATION."
];

// --- Sub-component: The Micro-Pixel Tile ---
const PixelTile = ({ 
  index, 
  progress 
}: { 
  index: number; 
  progress: MotionValue<number> 
}) => {
  const xOffset = ((index * 31) % 600) - 300; 
  const yOffset = ((index * 37) % 600) - 300; 
  const rotOffset = ((index * 13) % 180) - 90; 
  const chaoticScale = 0.05 + ((index * 7) % 5) / 10; 

  const x = useTransform(progress, [0, 1], [`${xOffset}px`, "0px"]);
  const y = useTransform(progress, [0, 1], [`${yOffset}px`, "0px"]);
  const rotate = useTransform(progress, [0, 1], [rotOffset, 0]);
  const scale = useTransform(progress, [0, 1], [chaoticScale, 1]);
  const opacity = useTransform(progress, [0, 0.2, 0.8, 1], [0.1, 0.4, 0.8, 1]);

  return (
    <motion.div
      style={{ x, y, rotate, scale, opacity }}
      className="w-full h-full bg-[#2dd4bf]/40 border-[0.1px] border-[#2dd4bf]/10 rounded-none will-change-transform"
    />
  );
};

// --- Sub-component: The Animated Line (FIXES HOOK ERROR) ---
const EmphasisLine = ({ 
  text, 
  i, 
  progress 
}: { 
  text: string; 
  i: number; 
  progress: MotionValue<number> 
}) => {
  const opacity = useTransform(progress, [0.7 + (i * 0.04), 0.95], [0, 1]);
  const y = useTransform(progress, [0.7 + (i * 0.04), 0.95], [40, 0]);
  const filter = useTransform(progress, [0.7, 0.9], ["blur(10px)", "blur(0px)"]);

  return (
    <motion.div
      style={{ opacity, y, filter }}
      className="py-1 md:py-2"
    >
      <h2 className="text-4xl md:text-[6vw] font-black tracking-tighter text-[#2dd4bf] uppercase italic drop-shadow-[0_0_40px_rgba(45,212,191,0.4)]">
        {text}
      </h2>
    </motion.div>
  );
};

export const Emphasis = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rawProgress = useMotionValue(0);
  const smoothProgress = useSpring(rawProgress, { stiffness: 35, damping: 25 });

  const handleScroll = useCallback((e: WheelEvent) => {
    const current = rawProgress.get();
    const scrollingDown = e.deltaY > 0;
    const scrollingUp = e.deltaY < 0;

    if ((scrollingDown && current < 1) || (scrollingUp && current > 0)) {
      if (e.cancelable) e.preventDefault();
      
      const sensitivity = 2800; 
      const delta = e.deltaY / sensitivity;
      const next = Math.min(Math.max(current + delta, 0), 1);
      
      rawProgress.set(next);
      
      if (next > 0 && next < 1) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    } else {
      document.body.style.overflow = "unset";
    }
  }, [rawProgress]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.9) {
          window.addEventListener("wheel", handleScroll, { passive: false });
        } else {
          window.removeEventListener("wheel", handleScroll);
          document.body.style.overflow = "unset";
        }
      },
      { threshold: [0, 0.9, 1] }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => {
      observer.disconnect();
      window.removeEventListener("wheel", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, [handleScroll]);

  const gridSize = 900;
  const tiles = useMemo(() => Array.from({ length: gridSize }), []);

  // Corrected Status Hint Transform (moved outside return to follow rules)
  const hintOpacity = useTransform(smoothProgress, [0, 0.05], [0.6, 0]);

  return (
    <div 
      ref={sectionRef} 
      className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden z-[100]"
    >
      {/* 1. MICRO-PIXEL BACKGROUND */}
      <div className="absolute inset-0 z-0 grid grid-cols-[repeat(30,minmax(0,1fr))] grid-rows-[repeat(30,minmax(0,1fr))] pointer-events-none p-2 gap-1">
        {tiles.map((_, i) => (
          <PixelTile key={i} index={i} progress={smoothProgress} />
        ))}
      </div>

      {/* 2. DELAYED TEXT CONTENT */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center pointer-events-none">
        {lines.map((text, i) => (
          <EmphasisLine key={i} text={text} i={i} progress={smoothProgress} />
        ))}
      </div>
      
      {/* 3. INITIAL STATE HINT */}
      <motion.div 
        style={{ opacity: hintOpacity }}
        className="absolute bottom-12 text-[9px] tracking-[0.8em] text-[#2dd4bf] uppercase font-mono"
      >
        Awaiting Restoration
      </motion.div>
    </div>
  );
};