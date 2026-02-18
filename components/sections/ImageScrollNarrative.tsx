// app/components/sections/ImageScrollNarrative.tsx
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const NARRATIVE_DATA = [
  { id: 1, title: "CYAN HORIZON", sub: "Pacific Ocean", src: "https://images.unsplash.com/photo-1505118380757-91f5f45d8de8?auto=format&fit=crop&q=80&w=2000" },
  { id: 2, title: "VERDANT VEINS", sub: "Amazon Basin", src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2000" },
  { id: 3, title: "WHITE SILENCE", sub: "Arctic Shelf", src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=2000" },
  { id: 4, title: "GOLDEN RANGE", sub: "Rocky Mountains", src: "https://images.unsplash.com/photo-1500627760312-ad3016a401c1?auto=format&fit=crop&q=80&w=2000" },
  { id: 5, title: "DUSK EMBER", sub: "Sahara Dunes", src: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&q=80&w=2000" },
  { id: 6, title: "AZURE ABYSS", sub: "Great Barrier Reef", src: "https://images.unsplash.com/photo-1544551763-47a0160c1e94?auto=format&fit=crop&q=80&w=2000" },
  { id: 7, title: "LUSH SOLITUDE", sub: "Icelandic Highlands", src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80&w=2000" },
];

export const ImageScrollNarrative = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // SINGLE SOURCE OF TRUTH: Clamped strictly to the section's active pinned area
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"] 
  });

  // Inertial damping for the mechanical feel - keeps motion fluid but heavy
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate total horizontal travel: (Number of images - 1) * 100vw + gaps
  // We use -86% to ensure the last image is perfectly framed
  const mainX = useTransform(smoothProgress, [0, 1], ["0%", "-86%"]);

  return (
    <section ref={targetRef} className="relative h-[800vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* ABSTRACT DEPTH GRID - ALWAYS VISIBLE */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />
        </div>

        <motion.div 
          style={{ x: mainX }} 
          className="flex gap-[15vw] px-[15vw] items-center transform-gpu will-change-transform"
        >
          {NARRATIVE_DATA.map((item, i) => {
            // SCROLL WINDOW MATH: Each image gets a specific slice of the 0-1 progress
            const segmentSize = 1 / NARRATIVE_DATA.length;
            const start = i * segmentSize;
            const end = (i + 1) * segmentSize;
            const center = (start + end) / 2;

            // TYPOGRAPHY CHOREOGRAPHY: Synced 1:1 with horizontal position
            // Text wipes from right (100px) to center (0px) to left (-100px)
            const textX = useTransform(smoothProgress, [start, center, end], [100, 0, -100]);
            const textOpacity = useTransform(smoothProgress, [start, center, end], [0, 1, 0]);
            const imgScale = useTransform(smoothProgress, [start, center, end], [1.1, 1, 1.1]);

            return (
              <div key={item.id} className="relative flex-shrink-0 w-[90vw] h-[80vh] flex items-center justify-center">
                <div className="relative w-full h-full overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,1)] bg-zinc-950">
                  <motion.img 
                    src={item.src}
                    alt={item.title}
                    style={{ scale: imgScale }}
                    className="w-full h-full object-cover opacity-80"
                  />
                  
                  {/* TEXT LAYER: Locked to progress center */}
                  <motion.div 
                    style={{ x: textX, opacity: textOpacity }}
                    className="absolute inset-0 flex flex-col justify-end p-12 md:p-24 z-20 pointer-events-none"
                  >
                    <h3 className="text-7xl md:text-[11rem] font-bold tracking-tighter text-white uppercase leading-[0.8] drop-shadow-[0_20px_50px_rgba(0,0,0,1)]">
                      <span className="block opacity-30" style={{ WebkitTextStroke: "1px white", color: "transparent" }}>
                        {item.title.split(" ")[0]}
                      </span>
                      <span className="block">{item.title.split(" ")[1]}</span>
                    </h3>
                    <div className="mt-8 flex items-center gap-6">
                      <div className="w-16 h-[2px] bg-emerald-500 shadow-[0_0_15px_#10b981]" />
                      <p className="text-sm font-mono tracking-[0.6em] text-white font-bold uppercase">
                        {item.sub}
                      </p>
                    </div>
                  </motion.div>

                  {/* HEAVY VIGNETTE: Ensures text visibility on any image background */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>

                {/* BACKGROUND INDEXING */}
                <span className="absolute -top-10 -left-10 text-[20rem] font-black text-white/[0.03] -z-10 select-none">
                  0{i + 1}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};