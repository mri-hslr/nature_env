"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const CinematicIntro = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on initial refresh
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
    if (!hasSeenIntro) {
      setIsVisible(true);
      document.body.classList.add("no-scroll");
    }
  }, []);

  const handleComplete = () => {
    setIsVisible(false);
    sessionStorage.setItem("hasSeenIntro", "true");
    document.body.classList.remove("no-scroll");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          onAnimationComplete={handleComplete}
          className="fixed inset-0 z-[10001] bg-black flex items-center justify-center overflow-hidden"
        >
          {/* Video Mask Container */}
          <motion.div
            initial={{ clipPath: "inset(20% 30% 20% 30% rounded 20px)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0% rounded 0px)" }}
            transition={{ 
              duration: 2.5, 
              delay: 0.5, 
              ease: [0.85, 0, 0.15, 1] 
            }}
            className="relative w-full h-full"
          >
            <video
              autoPlay
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              onEnded={handleComplete}
            >
              <source src="/hero.mp4" type="video/mp4" />
            </video>

            {/* Cinematic Branding Reveal */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <h1 className="text-white text-xs tracking-[1em] font-light uppercase opacity-50">
                Environmental Intelligence
              </h1>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};