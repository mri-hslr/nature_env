// app/components/sections/Hero.tsx
"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import { useIntro } from "@/app/context/IntroContext";

interface HeroProps {
  scrollProgress: MotionValue<number>;
}

export const Hero: React.FC<HeroProps> = ({ scrollProgress }) => {
  const { isComplete } = useIntro();
  
  const opacity = useTransform(scrollProgress, [0, 0.08], [1, 0]);
  const scale = useTransform(scrollProgress, [0, 0.08], [1, 0.9]);
  const y = useTransform(scrollProgress, [0, 0.08], [0, -100]);

  return (
    <motion.div 
      style={{ opacity, scale, y }}
      className="relative flex h-screen w-full flex-col items-center justify-center bg-black overflow-hidden"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-transparent to-black" />

      <div className="z-20 text-center px-4">
        <motion.h1 
          initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
          animate={isComplete ? { y: 0, opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ 
            duration: 1.5, // SLOWER, EASY ON THE EYES
            ease: [0.16, 1, 0.3, 1] 
          }}
          className="text-7xl md:text-9xl font-bold tracking-tighter text-white uppercase"
        >
          NATURE
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={isComplete ? { opacity: 1 } : {}}
          transition={{ 
            duration: 1.2, 
            delay: 0.3 // Staggered for a premium feel
          }}
          className="mt-6 text-sm md:text-base text-zinc-300 font-medium tracking-[0.4em] uppercase"
        >
          Environmental Intelligence
        </motion.p>
      </div>
    </motion.div>
  );
};