"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const NARRATIVE_CONTENT = [
  {
    id: "01",
    title: "Global Summit",
    text: "Convening the world's leading environmental architects to synchronize on climate intelligence protocols and decentralized action.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000"
  },
  {
    id: "02",
    title: "Field Intelligence",
    text: "Live monitoring sessions from the Dehradun node, showcasing real-time data harvesting and indigenous collaboration.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=2000"
  },
  {
    id: "03",
    title: "The Aftermath",
    text: "Documenting the long-term resonance of our interventions and the growing strength of the 10x network nodes.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=2000"
  }
];

export default function EventsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ EXACT SAME SCROLL LOGIC
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ✅ COLOR DUALITY: DEEP VIOLET TO CRIMSON
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#4c1d95", "#991b1b"]
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
          firstColor="76, 29, 149"    // Violet
          secondColor="124, 58, 237"  // Purple
          thirdColor="153, 27, 27"    // Red
          fourthColor="220, 38, 38"   // Bright Red
          fifthColor="30, 10, 60"     // Dark Night
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
            The <br /> <span className="opacity-20 text-black">Archives</span>
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
                  Event // {item.id}
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
                    alt="Narrative Visual"
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
            Resonance is the proof
          </h2>
        </section>
      </div>
    </motion.main>
  );
}