// app/components/sections/NarrativeBackground.tsx
"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

interface NarrativeBackgroundProps {
  progress: MotionValue<number>;
}

export const NarrativeBackground = ({ progress }: NarrativeBackgroundProps) => {
  // Parallax movement for the geometric abstract shapes
  const bgX1 = useTransform(progress, [0, 1], ["0%", "-30%"]);
  const bgX2 = useTransform(progress, [0, 1], ["0%", "25%"]);
  const bgRotate = useTransform(progress, [0, 1], [0, 45]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#050505]">
      {/* 1. TEXTURE LAYER: Editorial Film Grain */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      {/* 2. GRAPHIC LAYER: Technical Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:100px_100px]" />

      {/* 3. ABSTRACT LAYER: Kinetic Parallax Shards */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          style={{ x: bgX1, rotate: bgRotate }}
          className="absolute w-[80vw] h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent blur-sm rotate-[35deg]" 
        />
        <motion.div 
          style={{ x: bgX2, rotate: -15 }}
          className="absolute w-[60vw] h-[1px] bg-gradient-to-r from-transparent via-blue-500/15 to-transparent blur-md -rotate-[15deg]" 
        />
        <motion.div 
          style={{ x: useTransform(progress, [0, 1], ["-20%", "20%"]) }}
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-emerald-900/5 blur-[150px] rounded-full"
        />
      </div>

      {/* 4. ANCHOR LAYER: Global Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000_100%)] opacity-80" />
    </div>
  );
};