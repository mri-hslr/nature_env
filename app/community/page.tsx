"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const initiatives = [
  {
    id: "01",
    title: "10x Devs Network",
    tag: "DEVELOPMENT",
    desc: "A high-performance collective of software architects building on the MERN stack with integrated AI/ML for climate intelligence.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "02",
    title: "Open Source Nodes",
    tag: "CONTRIBUTION",
    desc: "Global contributors maintaining the core decentralized operating system protocols for environmental monitoring.",
    img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "03",
    title: "Eco-Artisan Collective",
    tag: "CULTURE",
    desc: "A bridge between technology and tradition, supporting indigenous craftsmen through cryptographically verified revenue streams.",
    img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1200",
  },
];

export default function CommunityPage() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // 1. TRACK SCROLL PROGRESS
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // 2. MAP SCROLL: INDIGO (#6366f1) TO CORAL (#fb7185)
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#6366f1", "#fb7185"] 
  );

  return (
    <motion.main 
      ref={targetRef}
      style={{ backgroundColor }}
      className="relative min-h-screen text-black selection:bg-black selection:text-white overflow-x-hidden"
    >
      
      {/* ATMOSPHERE: Liquid Indigo/Coral Animation */}
      <div className="fixed inset-0 z-0">
        <BackgroundGradientAnimation 
          containerClassName="h-full w-full"
          firstColor="99, 102, 241"   // Indigo
          secondColor="129, 140, 248" // Light Indigo
          thirdColor="251, 113, 133"  // Coral
          fourthColor="244, 114, 182" // Pink
          fifthColor="67, 56, 202"    // Deep Violet
        />
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay" 
             style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-32">
        <header className="mb-48">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black tracking-[0.6em] uppercase text-black/60 mb-8"
          >
            Social Intelligence
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-7xl md:text-[11vw] font-black tracking-tighter leading-[0.75] mb-12 uppercase"
          >
            The <br /> <span className="opacity-40">Network</span>
          </motion.h1>
          <p className="max-w-2xl text-2xl md:text-3xl font-medium leading-tight">
            A decentralized collective of developers, researchers, and artisans 
            fostering global environmental collaboration.
          </p>
        </header>

        <section className="relative">
          {/* Editorial Vertical Spine */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-black/20" />

          {initiatives.map((item) => (
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
                    NODE {item.id}
                  </span>
                  <p className="text-[12px] font-black tracking-[0.2em] uppercase text-black border-b-2 border-black inline-block pb-1">
                    {item.tag}
                  </p>
                </div>

                <div className="md:w-2/3">
                  <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.8] uppercase group-hover:text-white transition-colors duration-500">
                    {item.title}
                  </h2>
                  
                  <div className="aspect-[16/10] w-full overflow-hidden mb-12 rounded-sm bg-black/10 shadow-[20px_20px_0px_rgba(0,0,0,0.1)] transition-all">
                     <img 
                       src={item.img} 
                       alt={item.title}
                       className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[2s]" 
                     />
                  </div>
                  
                  <p className="text-xl md:text-2xl font-medium leading-snug text-black mb-12">
                    {item.desc}
                  </p>
                  
                  <button className="text-sm font-black tracking-[0.4em] uppercase py-4 px-8 border-2 border-black hover:bg-black hover:text-[#fb7185] transition-all">
                    Join Node
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        <footer className="mt-96 pb-32 text-center border-t-2 border-black pt-24">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-black uppercase">
            Human Resonance
          </h2>
          <p className="mt-8 text-xl font-bold uppercase tracking-[0.5em]">Unity is the frequency of action.</p>
        </footer>
      </div>
    </motion.main>
  );
}