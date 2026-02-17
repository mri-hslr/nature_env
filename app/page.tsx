"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import { Hero } from "@/components/sections/Hero";
import { EditorialHeadlines } from "@/components/sections/EditorialHeadlines";
import { PinnedNarrative } from "@/components/sections/PinnedNarrative";
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

  // BACKGROUND TRANSITION: Keep it black through Hero and Ticker phases.
  const backgroundColor = useTransform(
    smoothProgress,
    [0, 0.2, 0.25, 0.45, 0.65, 0.85, 1],
    ["#000000", "#000000", "#0d1a1a", "#1a1c1e", "#0a1120", "#052c24", "#02110e"]
  );

  return (
    <motion.div ref={containerRef} style={{ backgroundColor }} className="relative w-full">
      
      {/* 1. HERO - High z-index to slide OVER the next section */}
      <section className="relative h-[110vh] w-full z-[70]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {isMounted && <Hero scrollProgress={smoothProgress} />}
        </div>
      </section>

      {/* 2. THE TICKER - Sits in its own dedicated space */}
      <section className="relative z-[60] h-screen w-full">
        {isMounted && <EditorialHeadlines progress={smoothProgress} />}
      </section>

      {/* 3. PINNED NARRATIVE SEQUENCE - Lower z-index so it stays behind the ticker/hero during scroll */}
      <div className="relative z-30">
        {isMounted && (
          <>
            <PinnedNarrative 
              progress={smoothProgress} 
              chapterNumber="Chapter 01"
              imageSrc="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2560"
              title="Sylvan Intelligence"
              description="Forest ecosystems function as decentralized neural networks."
            />
            {/* Chapters 2 & 3 follow... */}
            <PinnedNarrative progress={smoothProgress} chapterNumber="Chapter 02" imageSrc="https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&q=80&w=2560" title="Glacial Memory" description="Arctic ice sheets act as planetary archives." />
            <PinnedNarrative progress={smoothProgress} chapterNumber="Chapter 03" imageSrc="https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&q=80&w=2560" title="Pelagic Systems" description="The deep ocean regulates global thermal equilibrium." />
          </>
        )}
      </div>

      <section className="relative z-20"><Emphasis /></section>
      <section className="relative z-10"><HorizontalScroll /></section>
      <section className="relative z-0"><ReflectiveOutro /></section>
    </motion.div>
  );
}