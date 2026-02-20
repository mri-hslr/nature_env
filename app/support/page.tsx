"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const NARRATIVE_CONTENT = [
  {
    id: "01",
    title: "What is Blupedia?",
    text: "Blupedia is a learning and innovation platform that helps people understand modern ideas like digital ownership, climate action, and new technologies in a simple and beginner-friendly way.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "02",
    title: "Nature of Platform",
    text: "Blupedia is all three: A website with educational content, a platform for digital innovation, and a community of learners, creators, and climate-conscious individuals.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "03",
    title: "Accessible NFT Tech",
    text: "An NFT is a digital certificate that proves ownership of a digital item. Blupedia uses them to ensure authenticity, transparency, and a connection between digital records and real-world impact.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "04",
    title: "The ADSTR Token",
    text: "ADSTR is a digital utility token used within the Blupedia ecosystem for participation and rewards. It is designed for use within the platform, not for speculation or trading.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "05",
    title: "Climate Action",
    text: "A carbon credit proves that one tonne of CO2 has been reduced or removed. Blupedia links NFTs to verified climate projects, turning digital records into real environmental impact.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "06",
    title: "Safety & Future",
    text: "Blupedia is legal in India and safe for students. We teach future-ready skills that combine environmental awareness, tech literacy, and creative innovation.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200",
  },
];

export default function FAQPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ EXACT SAME SCROLL LOGIC
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ✅ COLOR DUALITY: DEEP FOREST (#064e3b) TO ELECTRIC CYAN (#22d3ee)
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#064e3b", "#22d3ee"]
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
          firstColor="6, 78, 59"    // Emerald 900
          secondColor="13, 148, 136" // Teal 600
          thirdColor="34, 211, 238"  // Cyan 400
          fourthColor="8, 51, 68"    // Cyan 950
          fifthColor="20, 184, 166"   // Teal 500
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
            The <br /> <span className="opacity-20 text-black">FAQ</span>
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
                  Intelligence // {item.id}
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
                    alt="FAQ Visual Context"
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
            Curiosity is the engine
          </h2>
        </section>
      </div>
    </motion.main>
  );
}