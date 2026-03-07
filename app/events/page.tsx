"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const NARRATIVE_CONTENT = [
  {
    id: "01",
    title: "Blupedia Short Film & Social Media Reel Contest at IFFI Goa",
    //text: "Convening the world's leading environmental architects to synchronize on climate intelligence protocols and decentralized action.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000",
    overlay: "rgba(76, 29, 149, 0.4)" // Deep Violet Tint
  },
  {
    id: "02",
    title: "Celebrating Nature, Tourism & Indigenous Art through Cinema and Digital Storytelling",
    //text: "Live monitoring sessions from the Dehradun node, showcasing real-time data harvesting and indigenous collaboration.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=2000",
    
  },
  {
    id: "03",
    title: "Themes for Participation",
    text: "“Rebuilding the Ocean” – Creating artificial coral reefs and marine sanctuaries to revive underwater ecosystems. “Green Trails of India” – Documenting eco-friendly travel and nature-based tourism experiences.“Hands of Heritage” – Promoting indigenous handicraft traditions and local artisans through creative storytelling.The Plastic-Free Pledge – Real stories of communities that have successfully reduced plastic use.Green Trails of India” – Documenting eco-friendly travel and nature-based tourism experiences.“Voices of the Forest” – Narratives from tribal or rural communities living in harmony with nature.",
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
        {/* HEADER SECTION */}
<section className="h-[60vh] flex items-center justify-center px-6 md:px-12">
  <h1 className="text-7xl md:text-[12vw] font-black tracking-tighter uppercase text-white leading-[0.8] text-center">
    The  <span className="opacity-20 text-black">Archives</span>
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
      key={`${item.id}-${idx}`}
      className="max-w-xl"
      onViewportEnter={() => setActiveIndex(idx)}
      viewport={{ amount: 0.5 }}
    >
      <p className="text-[10px] font-black tracking-[0.6em] uppercase text-black/60 mb-8">
        Event // {item.id}
      </p>

      <h2 className="text-3xl md:text-2xl font-black tracking-tighter text-black uppercase mb-8">
        {item.title}
      </h2>

      <p className="text-xl md:text-xl font-medium leading-relaxed text-black/80">
        {item.text}
      </p>
    </motion.div>
  ))}

  <div className="h-[40vh]" />
</div>

<div className="flex flex-col justify-between py-12 px-4"
style={{ borderRight: "1px solid rgba(0,0,0,0.15)" }} />

<div
  className="hidden md:block sticky top-0 overflow-hidden"
  style={{
    gridColumn: "4 / span 2",
    height: "100vh",
  }}
>
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-full h-full overflow-hidden">

      <AnimatePresence mode="wait">
        <motion.img
          key={activeIndex}
          src={NARRATIVE_CONTENT[activeIndex].image}
          initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          animate={{ opacity: 0.9, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full h-full object-cover"
          alt="Narrative Visual"
        />
      </AnimatePresence>

      {/* COLOR OVERLAY */}
      {NARRATIVE_CONTENT[activeIndex].overlay && (
        <div
          className="absolute inset-0 pointer-events-none z-[2]"
          style={{
            background: NARRATIVE_CONTENT[activeIndex].overlay,
            mixBlendMode: "multiply",
          }}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40 pointer-events-none z-[3]" />

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