"use client";

import React, { useRef, useState, useEffect, useMemo, useCallback } from "react";
import { motion, useTransform, useMotionValue, useSpring, MotionValue } from "framer-motion";

// --- Configuration ---
const SEA_IMAGES = [
  "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&q=80&w=1200", // Sea Turtle
  "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1200", // Scuba Diving
  "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80&w=1200"  // Marine Life / Jellyfish
];

const lines = [
  "REVOLUTIONARY WAY",
  "OF CELEBERATING  .",
  "NATURE,ECOTOURISM,AND ",
  "INDIGENOUS ART"
];

// --- Sub-component: The Micro-Pixel Tile ---
const PixelTile = ({ 
  index, 
  progress 
}: { 
  index: number; 
  progress: MotionValue<number> 
}) => {
  // 1. Grid Geometry Calculation (25x25)
  const cols = 25;
  const col = index % cols;
  const row = Math.floor(index / cols);

  // 2. Image Reconstruction Logic
  // Column 0–8 (Image 1), 9–16 (Image 2), 17–24 (Image 3)
  const imageIndex = col < 9 ? 0 : col < 17 ? 1 : 2;
  
  // To make the images appear seamless, we calculate background position
  // based on the tile's coordinates relative to the full grid.
  const backgroundSize = "2500% 2500%"; // 25 tiles across and down
  const bgPosX = (col * (100 / (cols - 1)));
  const bgPosY = (row * (100 / (cols - 1)));

  // 3. Animation Physics (Preserved exactly as requested)
  const xOffset = ((index * 31) % 600) - 300; 
  const yOffset = ((index * 37) % 600) - 300; 
  const rotOffset = ((index * 13) % 180) - 90; 
  const chaoticScale = 0.05 + ((index * 7) % 5) / 10; 

  const x = useTransform(progress, [0, 1], [`${xOffset}px`, "0px"]);
  const y = useTransform(progress, [0, 1], [`${yOffset}px`, "0px"]);
  const rotate = useTransform(progress, [0, 1], [rotOffset, 0]);
  const scale = useTransform(progress, [0, 1], [chaoticScale, 1]);
  const opacity = useTransform(progress, [0, 0.1, 0.4, 0.6], [0.1, 0.4, 0.8, 1]);

  return (
    <motion.div
      style={{ 
        x, y, rotate, scale, opacity,
        backgroundImage: `url(${SEA_IMAGES[imageIndex]})`,
        backgroundSize,
        backgroundPosition: `${bgPosX}% ${bgPosY}%`,
        backgroundRepeat: "no-repeat"
      }}
      className="w-full h-full border-[0.5px] border-white/5 rounded-none will-change-transform"
    />
  );
};

// --- Sub-component: The Animated Line ---
const EmphasisLine = ({ 
  text, 
  i, 
  progress 
}: { 
  text: string; 
  i: number; 
  progress: MotionValue<number> 
}) => {
  const opacity = useTransform(progress, [0.4 + (i * 0.04), 0.8], [0, 1]);
  const y = useTransform(progress, [0.4 + (i * 0.04), 0.8], [40, 0]);
  const filter = useTransform(progress, [0.4, 0.7], ["blur(10px)", "blur(0px)"]);

  return (
    <motion.div
      style={{ opacity, y, filter }}
      className="py-1 md:py-2"
    >
      <h2 className="text-4xl md:text-[6vw] font-black tracking-tighter text-white uppercase italic drop-shadow-[0_0_40px_rgba(255,255,255,0.2)]">
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
      
      const sensitivity = 1200; 
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

  // 25x25 grid = 625 tiles
  const gridSize = 625;
  const tiles = useMemo(() => Array.from({ length: gridSize }), []);

  const hintOpacity = useTransform(smoothProgress, [0, 0.05], [0.6, 0]);

  return (
    <div 
      ref={sectionRef} 
      className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden z-[100]"
    >
      {/* 1. IMAGE RECONSTRUCTION GRID (25x25) */}
      <div className="absolute inset-0 z-0 grid grid-cols-25 grid-rows-25 pointer-events-none p-0 gap-0">
        {tiles.map((_, i) => (
          <PixelTile key={i} index={i} progress={smoothProgress} />
        ))}
      </div>

      {/* 2. TEXT CONTENT */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center pointer-events-none">
        {lines.map((text, i) => (
          <EmphasisLine key={i} text={text} i={i} progress={smoothProgress} />
        ))}
      </div>
      
      {/* 3. INITIAL STATE HINT */}
      <motion.div 
        style={{ opacity: hintOpacity }}
        className="absolute bottom-12 text-[9px] tracking-[0.8em] text-white/60 uppercase font-mono"
      >
        Awaiting Restoration
      </motion.div>

      {/* Tailwind Style Injection for custom 25-col grid */}
      <style jsx>{`
        .grid-cols-25 {
          grid-template-columns: repeat(25, minmax(0, 1fr));
        }
        .grid-rows-25 {
          grid-template-rows: repeat(25, minmax(0, 1fr));
        }
      `}</style>
    </div>
  );
};