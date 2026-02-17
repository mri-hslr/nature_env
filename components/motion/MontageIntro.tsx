// app/components/motion/MontageIntro.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIntro } from "@/app/context/IntroContext";
import { ScribbleCanvas } from "./ScribbleCanvas";

const MONTAGE_ASSETS = [
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1465146633011-14f8e0781093?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2000&auto=format&fit=crop",
    "/hero.mp4", 
  ];

export const MontageIntro = () => {
  const { isIntroActive, isComplete, setIntroComplete } = useIntro();
  const [assetIndex, setAssetIndex] = useState(0);
  const [isZooming, setIsZooming] = useState(false);

  useEffect(() => {
    if (isZooming || !isIntroActive) return;

    const interval = setInterval(() => {
      setAssetIndex((prev) => (prev + 1) % (MONTAGE_ASSETS.length - 1));
    }, 150);

    const timer = setTimeout(() => {
      clearInterval(interval);
      setAssetIndex(MONTAGE_ASSETS.length - 1);
      setIsZooming(true);
    }, 1800);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [isZooming, isIntroActive]);

  if (isComplete) return null;

  return (
    <div className="fixed inset-0 z-[10001] flex items-center justify-center bg-black overflow-hidden pointer-events-none">
      
      {/* 1. PRE-LOADER (Hidden) */}
      <div className="hidden">
        {MONTAGE_ASSETS.slice(0, -1).map((src) => (
          <img key={src} src={src} alt="preload" />
        ))}
      </div>

      {/* 2. DYNAMIC SCRIBBLE BACKGROUND */}
      {!isZooming && <ScribbleCanvas />}

      {/* 3. CENTERED WINDOW */}
      <motion.div
        initial={{ 
          width: "20vw", 
          height: "12vh", 
          borderRadius: "1px",
          opacity: 0
        }}
        animate={{
          width: isZooming ? "100vw" : "20vw",
          height: isZooming ? "100vh" : "12vh",
          borderRadius: isZooming ? "0px" : "1px",
          opacity: 1
        }}
        transition={{
          duration: 1.4, 
          ease: [0.22, 1, 0.36, 1] 
        }}
        onAnimationComplete={() => {
          if (isZooming) setIntroComplete();
        }}
        className="relative z-10 overflow-hidden bg-zinc-900 border border-white/10"
      >
        {isZooming ? (
          <video autoPlay muted playsInline loop className="h-full w-full object-cover">
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        ) : (
          <img 
            key={assetIndex}
            src={MONTAGE_ASSETS[assetIndex]} 
            className="h-full w-full object-cover" 
            alt="Nature Montage" 
          />
        )}
      </motion.div>
    </div>
  );
};