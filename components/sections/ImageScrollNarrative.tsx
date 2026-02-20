// app/components/sections/ImageScrollNarrative.tsx
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const NARRATIVE_DATA = [
  { id: 1, title: "CYAN HORIZON", sub: "Pacific Ocean", src: "/image3.jpg" },
  { id: 2, title: "VERDANT VEINS", sub: "Amazon Basin", src: "/image4.jpg" },
  { id: 3, title: "WHITE SILENCE", sub: "Arctic Shelf", src: "/image5.jpg" },
  { id: 4, title: "GOLDEN RANGE", sub: "Rocky Mountains", src: "/image6.jpg" },
  { id: 5, title: "DUSK EMBER", sub: "Sahara Dunes", src: "/paragliding.jpg" },
  { id: 6, title: "AZURE ABYSS", sub: "Great Barrier Reef", src: "/pexels-pixabay-70361.jpg" },
  { id: 7, title: "LUSH SOLITUDE", sub: "Icelandic Highlands", src: "/pexels-pixabay-73759.jpg" },
];

export const ImageScrollNarrative = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"] 
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Use a 0.1 buffer to ensure user reaches the section before images move
  const mainX = useTransform(smoothProgress, [0, 0.1, 1], ["0%", "0%", "-86%"]);

  return (
    <section ref={targetRef} className="relative h-[800vh] bg-[#050505]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* NEW RENAULT-STYLE EDITORIAL BACKGROUND */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          
          {/* 1. Dynamic Chevron / Vector Pattern (Replaces Grid) */}
          <div className="absolute inset-0 opacity-[0.15]" 
               style={{ 
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0l40 40L80 0v20L40 60 0 20z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                 backgroundSize: '160px 160px'
               }} 
          />
          
          {/* 2. Abstract Editorial Glows (Increased Brightness) */}
          <div className="absolute top-1/4 -right-1/4 w-[90vw] h-[90vw] bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.2)_0%,_transparent_70%)] rounded-full blur-[120px]" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[70vw] h-[70vw] bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.15)_0%,_transparent_70%)] rounded-full blur-[100px]" />
          
          {/* 3. Graphic Vector Shards */}
          <div className="absolute top-[20%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-[15deg] blur-[1px]" />
          <div className="absolute bottom-[25%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/15 to-transparent -rotate-[10deg] blur-[2px]" />

          {/* 4. Film Grain Texture */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        </div>

        <motion.div 
          style={{ x: mainX }} 
          className="flex gap-[15vw] px-[15vw] items-center transform-gpu will-change-transform z-10"
        >
          {NARRATIVE_DATA.map((item, i) => {
            const segmentSize = 0.9 / NARRATIVE_DATA.length;
            const start = 0.1 + (i * segmentSize);
            const end = 0.1 + ((i + 1) * segmentSize);
            const center = (start + end) / 2;

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

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>

                <span className="absolute -top-10 -left-10 text-[20rem] font-black text-white/[0.04] -z-10 select-none">
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