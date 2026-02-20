"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const NARRATIVE_CONTENT = [
  {
    id: "01",
    title: "The Whitepapers",
    text: "Access the foundational research driving our climate intelligence. These documents outline the mathematical proofs for our decentralized monitoring nodes and satellite telemetry.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "02",
    title: "Visual Archives",
    text: "A curated collection of satellite imagery and field photography documenting ecological shifts. High-resolution proof of the planet's changing narrative.",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "03",
    title: "Protocol Docs",
    text: "Technical documentation for developers looking to integrate with the 10x network. From API endpoints to MERN-stack deployment guides for localized nodes.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=1200",
  },
];

export default function LibraryPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ EXACT SAME SCROLL LOGIC
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ✅ COLOR DUALITY: DEEP SLATE (#0f172a) TO PAPER WHITE (#f8fafc)
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#0f172a", "#f8fafc"]
  );

  return (
    <motion.main
      ref={containerRef}
      style={{ backgroundColor }}
      className="relative min-h-screen transition-colors duration-500"
    >
      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0">
        <BackgroundGradientAnimation
          containerClassName="h-full w-full"
          firstColor="15, 23, 42"    // Slate 900
          secondColor="30, 41, 59"   // Slate 800
          thirdColor="248, 250, 252" // Slate 50
          fourthColor="203, 213, 225" // Slate 300
          fifthColor="2, 6, 23"      // Blackest Blue
        />
        <div
          className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,
          }}
        />
      </div>

      <div className="relative z-10">
        {/* HEADER SECTION */}
        <section className="h-[60vh] flex items-end px-6 md:px-12 pb-24">
          <h1 className="text-7xl md:text-[12vw] font-black tracking-tighter uppercase text-white leading-[0.8]">
            The <br /> <span className="opacity-20 text-black">Library</span>
          </h1>
        </section>

        {/* SPLIT NARRATIVE SECTION */}
        <section className="relative flex flex-col md:flex-row w-full">
          {/* LEFT COLUMN */}
          <div className="w-full md:w-1/2 px-6 md:px-12 py-32 space-y-[60vh]">
            {NARRATIVE_CONTENT.map((item, idx) => (
              <motion.div
                key={item.id}
                className="max-w-xl"
                onViewportEnter={() => setActiveIndex(idx)}
                viewport={{ amount: 0.5 }}
              >
                <p className="text-[10px] font-black tracking-[0.6em] uppercase text-black/60 mb-8">
                  Collection // {item.id}
                </p>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-black uppercase mb-8">
                  {item.title}
                </h2>
                <p className="text-xl md:text-2xl font-medium leading-relaxed text-black/80">
                  {item.text}
                </p>
              </motion.div>
            ))}
            <div className="h-[40vh]" />
          </div>

          {/* RIGHT PINNED COLUMN */}
          <div className="hidden md:block w-1/2 h-screen sticky top-0 overflow-hidden bg-black/10 border-l border-black/5">
            <div className="relative w-full h-full flex items-center justify-center p-12">
              <div className="relative w-full h-full overflow-hidden rounded-sm shadow-2xl bg-zinc-900">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeIndex}
                    src={NARRATIVE_CONTENT[activeIndex].image}
                    initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                    animate={{ opacity: 0.8, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                    transition={{
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="w-full h-full object-cover"
                    alt="Library Resource Visual"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40 pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER SECTION */}
        <section className="h-screen flex items-center justify-center border-t border-black/10">
          <h2 className="text-4xl md:text-8xl font-black tracking-tighter uppercase text-black opacity-10">
            Information is the fuel
          </h2>
        </section>
      </div>
    </motion.main>
  );
}