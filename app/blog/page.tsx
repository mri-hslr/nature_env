"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const NARRATIVE_CONTENT = [
  {
    id: "intro",
    title: "When does an app become Web3?",
    text: "Short answer: 👉 An app becomes Web3 the moment user value is cryptographically owned, not when money is paid.",
    image: "https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=2000"
  },

];

export default function BlogPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ CORRECT: pass the ref object, not the element
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    [ "#f97316","#451a03"]
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
          firstColor="5, 150, 105"
          secondColor="16, 185, 129"
          thirdColor="20, 184, 166"
          fourthColor="132, 204, 22"
          fifthColor="6, 78, 59"
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
      <section className="h-[60vh] flex items-center justify-center px-6 md:px-12">
        <h1 className="text-7xl md:text-[12vw] font-black tracking-tighter uppercase text-white leading-[0.8] text-center">
          The  <span className="opacity-20 text-black">Project</span>
        </h1>
      </section>
      {/* SPLIT NARRATIVE SECTION */}
<section
  className="relative grid min-h-screen"
  style={{
    gridTemplateColumns: "10% 40% 10% 40%", // Simplified grid
  }}
>
  {/* LEFT CONTENT COLUMN (Numbers + Text) */}
  <div
    className="col-span-2 py-32 px-8 space-y-[60vh]"
    style={{ borderRight: "1px solid rgba(0,0,0,0.15)" }}
  >
    {NARRATIVE_CONTENT.map((item, idx) => (
      <motion.div
        key={`${item.id}-${idx}`}
        className="grid grid-cols-[80px_1fr] gap-8" // This aligns number and text side-by-side
        onViewportEnter={() => setActiveIndex(idx)}
        viewport={{ amount: 0.5 }}
      >
        {/* THE NUMBER */}
        <div className="text-7xl md:text-8xl font-black text-black opacity-20 sticky top-32 h-fit">
          {item.id}
        </div>

        {/* THE TEXT */}
        <div className="max-w-xl">
          <p className="text-[10px] font-black tracking-[0.6em] uppercase text-black/60 mb-8">
            Intelligence // {item.id}
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black uppercase mb-8">
            {item.title}
          </h2>
          <p className="text-xl md:text-xl font-medium leading-relaxed text-black/80">
            {item.text}
          </p>
        </div>
      </motion.div>
    ))}
    <div className="h-[40vh]" />
  </div>

  {/* RIGHT PINNED IMAGE COLUMN */}
  <div className="hidden md:block sticky top-0 h-screen col-span-2 overflow-hidden"
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
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          filter: "grayscale(100%)",
        }}
        alt="Narrative Visual"
      />
    </AnimatePresence>
  </div>
</div>

</section>
      </div>
    </motion.main>
  );
}