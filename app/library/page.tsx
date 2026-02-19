"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const resources = [
  { id: "01", title: "Carbon Credits Guide Book", tag: "HANDBOOK", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200", desc: "Unlocking Revenue for a Cleaner Tomorrow: A guidebook for STUs / SPVs / ULBs / Bus Operators." },
  { id: "02", title: "Types of Carbon Credits", tag: "MARKET ANALYSIS", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200", desc: "Primary Markets to generate Carbon Credits from. Information Note on Reduced emissions and Removal of CO2." },
  { id: "03", title: "Carbon Credit Framework", tag: "GOVERNANCE", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200", desc: "United Nations Framework Convention on Climate Change (UNFCCC). Global carbon accounting standards." },
  { id: "04", title: "World Bank Report", tag: "POLICY", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200", desc: "A Guide to developing Domestic Carbon Crediting Mechanisms by the World Bank Group." },
];

export default function LibraryPage() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // 1. TRACK SCROLL PROGRESS
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // 2. MAP SCROLL TO COLORS
  // Page starts Orange (#ea580c) and ends in a Vibrant Yellow (#fbbf24)
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#ea580c", "#fbbf24"]
  );

  return (
    <motion.main 
      ref={targetRef}
      style={{ backgroundColor }} // Dynamic background binding
      className="relative min-h-screen text-black transition-colors duration-500 selection:bg-black selection:text-white"
    >
      
      {/* ATMOSPHERE: Liquid Pigment Layer */}
      <div className="fixed inset-0 z-0">
        <BackgroundGradientAnimation 
          containerClassName="h-full w-full"
          firstColor="234, 88, 12"   // Base Orange
          secondColor="251, 146, 60" // Light Amber
          thirdColor="154, 52, 18"   // Burnt Sienna
        />
        <div className="absolute inset-0 opacity-[0.1] pointer-events-none mix-blend-overlay" 
             style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-32">
        <header className="mb-48">
          <motion.p className="text-[10px] font-black tracking-[0.6em] uppercase text-black/60 mb-8">
            Institutional Resource
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[11vw] font-black tracking-tighter leading-[0.75] mb-12 uppercase"
          >
            Library <br /> <span className="opacity-40">Archive</span>
          </motion.h1>
          <p className="max-w-2xl text-2xl md:text-3xl font-medium leading-tight">
            A curated collection of research and datasets supporting 
            evidence-based environmental understanding.
          </p>
        </header>

        <section className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-black/20" />

          {resources.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              className="group pl-12 mb-64"
            >
              <div className="flex flex-col md:flex-row gap-16">
                <div className="md:w-1/3">
                  <span className="text-lg font-mono text-black/40 mb-4 block">
                    INDEX {item.id}
                  </span>
                  <p className="text-[12px] font-black tracking-[0.2em] uppercase text-black border-b-2 border-black inline-block pb-1">
                    {item.tag}
                  </p>
                </div>

                <div className="md:w-2/3">
                  <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.8] uppercase">
                    {item.title}
                  </h2>
                  <div className="aspect-[16/10] w-full overflow-hidden mb-12 rounded-sm bg-black/10 shadow-[20px_20px_0px_rgba(0,0,0,0.1)]">
                     <img 
                       src={item.img} 
                       alt={item.title}
                       className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1s]" 
                     />
                  </div>
                  <p className="text-xl md:text-2xl font-medium leading-snug">
                    {item.desc}
                  </p>
                  <button className="text-sm font-black tracking-[0.4em] uppercase py-4 px-8 border-2 border-black hover:bg-black hover:text-white transition-all">
                    Access Record
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        <footer className="mt-96 pb-32 text-center border-t-2 border-black pt-24">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-black uppercase">
            Permanent Record
          </h2>
        </footer>
      </div>
    </motion.main>
  );
}