// app/page.tsx (Updated)
"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import { Hero } from "@/components/sections/Hero";
import { EditorialHeadlines } from "@/components/sections/EditorialHeadlines";
import { ImageScrollNarrative } from "@/components/sections/ImageScrollNarrative"; // NEW IMPORT
import { Emphasis } from "@/components/sections/Emphasis";
import { HorizontalScroll } from "@/components/sections/HorizontalScroll";
import { ReflectiveOutro } from "@/components/sections/ReflectiveOutro";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => { setIsMounted(true); }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const backgroundColor = useTransform(
    smoothProgress,
    [0, 0.2, 0.25, 0.45, 0.65, 0.85, 1],
    ["#000000", "#000000", "#0d1a1a", "#1a1c1e", "#0a1120", "#052c24", "#02110e"]
  );

  return (
    <motion.div ref={containerRef} style={{ backgroundColor }} className="relative w-full">
      
      {/* 1. HERO */}
      <section className="relative h-[110vh] w-full z-[70]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {isMounted && <Hero scrollProgress={smoothProgress} />}
        </div>
      </section>

      {/* 2. THE TICKER */}
      <section className="relative z-[60] h-screen w-full">
        {isMounted && <EditorialHeadlines progress={smoothProgress} />}
      </section>

      {/* 3. NEW: IMAGE SCROLL NARRATIVE (Renault Originals Style) */}
      <section className="relative z-[50]">
        {isMounted && <ImageScrollNarrative />}
      </section>

      {/* 4. REMAINING SECTIONS */}
      <section className="relative z-20"><Emphasis /></section>
      <section className="relative z-10"><HorizontalScroll /></section>
      <section className="relative z-0"><ReflectiveOutro /></section>
    </motion.div>
  );
}