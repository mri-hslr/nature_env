"use client";

import { useState, useEffect, useCallback } from "react";
import { useMotionValue } from "framer-motion";

export const useCurtainScroll = (isIntroComplete: boolean) => {
  const progress = useMotionValue(0);
  const [isLocked, setIsLocked] = useState(true);

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (!isIntroComplete) return;

      const currentProgress = progress.get();
      const scrollDirection = e.deltaY > 0 ? "down" : "up";

      // SCROLLING DOWN
      if (scrollDirection === "down" && currentProgress < 1) {
        if (e.cancelable) e.preventDefault();
        // REDUCED INCREMENT: 0.03 makes the "drop" take more scrolling
        const nextValue = Math.min(1, currentProgress + 0.03); 
        progress.set(nextValue);
        
        if (nextValue >= 1) setIsLocked(false);
      }

      // SCROLLING UP
      if (scrollDirection === "up" && window.scrollY <= 10) {
        if (currentProgress > 0) {
          if (e.cancelable) e.preventDefault();
          const nextValue = Math.max(0, currentProgress - 0.03);
          progress.set(nextValue);
          setIsLocked(true);
        }
      }
    },
    [isIntroComplete, progress]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  useEffect(() => {
    if (isLocked && isIntroComplete && window.scrollY <= 10) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isLocked, isIntroComplete]);

  return progress;
};