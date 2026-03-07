"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const NARRATIVE_CONTENT = [
  {
    id: "01",
    title: "10x Devs Network",
    text: "A high-performance collective of software architects building on the MERN stack with integrated AI/ML for climate intelligence.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "02",
    title: "Open Source Nodes",
    text: "Global contributors maintaining the core decentralized operating system protocols for environmental monitoring and data transparency.",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "03",
    title: "Eco-Artisan Collective",
    text: "A bridge between technology and tradition, supporting indigenous craftsmen through cryptographically verified revenue streams.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=2000",
  },
];

export default function CommunityPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ EXACT SAME SCROLL LOGIC
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ✅ COLOR DUALITY: INDIGO (#6366f1) TO CORAL (#fb7185)
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#6366f1", "#fb7185"]
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
          firstColor="99, 102, 241"   // Indigo
          secondColor="129, 140, 248" // Light Indigo
          thirdColor="251, 113, 133"  // Coral
          fourthColor="244, 114, 182" // Pink
          fifthColor="67, 56, 202"    // Deep Violet
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
        {/* HEADER SECTION */}
        <section className="h-[60vh] flex items-center justify-center px-6 md:px-12">
          <h1 className="text-7xl md:text-[12vw] font-black tracking-tighter uppercase text-white leading-[0.8] text-center">
            The  <span className="opacity-20 text-black">Network</span>
          </h1>
        </section>

        {/* SPLIT NARRATIVE SECTION */}
        <section
          className="relative grid min-h-screen"
          style={{
            gridTemplateColumns: "10% 30% 20% 20% 20%",
          }}
>
          {/* LEFT COLUMN */}
          <div
  
  style={{ borderRight: "1px solid rgba(0,0,0,0.15)" }}
>
  
</div>

<div
  className="py-32 px-8 space-y-[60vh]"
  style={{ borderRight: "1px solid rgba(0,0,0,0.15)" }}
>
  {NARRATIVE_CONTENT.map((item, idx) => (
    <motion.div
      key={item.id}
      className="max-w-xl"
      onViewportEnter={() => setActiveIndex(idx)}
      viewport={{ amount: 0.5 }}
    >
      <p className="text-[10px] font-black tracking-[0.6em] uppercase text-black/60 mb-8">
        Node // {item.id}
      </p>

      <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black uppercase mb-8">
        {item.title}
      </h2>

      <p className="text-xl md:text-1xl font-medium leading-relaxed text-black/80">
        {item.text}
      </p>
    </motion.div>
  ))}

  <div className="h-[40vh]" />
</div>

<div style={{ borderRight: "1px solid rgba(0,0,0,0.15)" }} />

<div
  className="hidden md:block sticky top-0 overflow-hidden"
  style={{
    gridColumn: "4 / span 2",
    height: "100vh",
  }}
>
  <div style={{ position: "relative", width: "100%", height: "100%" }}>
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
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
        alt="Network Visual"
      />
    </AnimatePresence>
  </div>
</div>
        </section>

        {/* FOOTER SECTION */}
        <section className="h-screen flex items-center justify-center border-t border-black/10">
          <h2 className="text-4xl md:text-8xl font-black tracking-tighter uppercase text-black opacity-10">
            Unity is the frequency
          </h2>
        </section>
      </div>
    </motion.main>
  );
}