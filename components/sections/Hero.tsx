"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

interface HeroProps {
  scrollProgress: MotionValue<number>;
}

export const Hero: React.FC<HeroProps> = ({ scrollProgress }) => {
  // Animating the exit of the Hero section
  const opacity = useTransform(scrollProgress, [0, 0.08], [1, 0]);
  const scale = useTransform(scrollProgress, [0, 0.08], [1, 0.9]);
  const y = useTransform(scrollProgress, [0, 0.08], [0, -100]);

  return (
    <motion.div 
      style={{ opacity, scale, y }}
      className="relative flex h-screen w-full flex-col items-center justify-center bg-black overflow-hidden"
    >
      {/* BACKGROUND VIDEO RESTORED */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY GRADIENT */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-transparent to-black" />

      {/* BRAND CONTENT */}
      <div className="z-20 text-center px-4">
        <motion.h1 
          className="text-7xl md:text-9xl font-bold tracking-tighter text-white uppercase"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          NATURE
        </motion.h1>
        <motion.p 
          className="mt-6 text-sm md:text-base text-zinc-300 font-medium tracking-[0.4em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Environmental Intelligence
        </motion.p>
      </div>
    </motion.div>
  );
};