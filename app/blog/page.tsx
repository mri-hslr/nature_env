"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const NARRATIVE_CONTENT = [
  {
    id: "intro",
    title: "The Genesis",
    text: "Our journey began with a simple observation of the shifting tides in the Pacific. We realized that environmental intelligence wasn't just about data; it was about narrative flow.",
    image: "https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=2000"
  },
  {
    id: "system",
    title:"10x Architecture",
    text: "The infrastructure we've built allows for real-time satellite analysis. By bridging the gap between AI and raw ecological data, we've created a lens into the planet's pulse.",
    image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=2000"
  },
  {
    id: "future",
    title: "Cyan Horizons",
    text: "Looking forward, the horizon is clear. We are expanding the node network to Dehradun and beyond, ensuring that every shift in the climate is documented and understood.",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2000"
  }
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
      <section
  className="relative grid min-h-screen"
  style={{
    gridTemplateColumns: "10% 30% 20% 20% 20%",
  }}
>
<div
  className="flex flex-col justify-between py-12 px-4"
  style={{ borderRight: "1px solid rgba(0,0,0,0.15)" }}
>
  <div className="hidden md:flex flex-col justify-between h-full">
    {NARRATIVE_CONTENT.map((item, idx) => (
      <div
        key={item.id}
        className="text-[8rem] font-black text-black leading-none opacity-20"
      >
        {idx + 1}
      </div>
    ))}
  </div>
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
        The Project
      </p>

      <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-black uppercase mb-8">
        {item.title}
      </h3>

      <p className="text-base md:text-lg font-medium leading-relaxed text-black/80 mb-10">
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