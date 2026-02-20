"use client";

import React from "react";
import { motion, Variants, useTransform } from "framer-motion";
import { useIntro } from "@/app/context/IntroContext";
import { HeroCurtains } from "@/components/motion/HeroCurtains";
import { useCurtainScroll } from "@/hooks/useCurtainScroll";

export const Hero = () => {
  const { isComplete } = useIntro();
  const curtainProgress = useCurtainScroll(isComplete);

  // Sync text fade-out with the middle-to-end of the curtain wipe
  const textOpacity = useTransform(curtainProgress, [0.4, 0.8], [1, 0]);

  const mainTitle = "BLUEPEDIA";

  const letterVariants: Variants = {
    initial: {
      y: 60,
      opacity: 0,
      filter: "blur(15px)",
      scale: 0.9,
    },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 1.4,
        delay: i * 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section className="relative h-screen w-full bg-black overflow-hidden">
      {/* HERO CONTENT */}
      <motion.div 
        style={{ opacity: textOpacity }}
        className="relative z-10 h-full w-full flex flex-col items-center justify-center"
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

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />

        <div className="relative z-20 text-center px-4 select-none">
          <div className="flex justify-center overflow-hidden">
            {mainTitle.split("").map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="initial"
                animate={isComplete ? "animate" : "initial"}
                className="inline-block text-8xl md:text-[12rem] font-bold tracking-tighter text-white uppercase leading-none"
              >
                {letter}
              </motion.span>
            ))}
          </div>

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

      {/* CURTAINS: Now wipes Left-to-Right */}
      <div className="absolute inset-0 z-50 pointer-events-none">
        <HeroCurtains scrollProgress={curtainProgress} />
      </div>
    </section>
  );
};