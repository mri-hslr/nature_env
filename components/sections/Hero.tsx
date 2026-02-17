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

  const mainTitle = "NATURE";

  // Type-casted to 'any' to fix the TS(2322) error while maintaining custom bezier easing
  const letterVariants = {
    initial: { y: 60, opacity: 0, filter: "blur(15px)", scale: 0.9 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 1.4, // SLOWER REVEAL
        delay: i * 0.1, // SLOWER STAGGER
        ease: [0.22, 1, 0.36, 1], // Quintic ease-out
      },
    }),
  } as any;

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

      <div className="z-20 text-center px-4 select-none">
        {/* MAIN TITLE: INCREASED SIZE & SLOW MOTION */}
        <div className="flex justify-center overflow-hidden">
          {mainTitle.split("").map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="initial"
              animate={isComplete ? "animate" : "initial"}
              // Added custom larger size: 12rem on desktop
              className="inline-block text-8xl md:text-[12rem] font-bold tracking-tighter text-white uppercase leading-none"
            >
              {letter}
            </motion.span>
          ))}
        </div>
        
        {/* SUBTEXT: COORDINATED FADE */}
        <motion.p 
          initial={{ opacity: 0, letterSpacing: "0.2em", y: 10 }}
          animate={isComplete ? { opacity: 1, letterSpacing: "0.5em", y: 0 } : {}}
          transition={{ duration: 1.8, delay: 1.2, ease: "easeOut" }}
          className="mt-4 md:mt-2 text-xs md:text-sm text-zinc-400 font-medium uppercase"
        >
          Environmental Intelligence
        </motion.p>
      </div>
    </motion.div>
  );
};