"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { NetworkBackground } from "@/components/ui/network-background";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { Meteors } from "@/components/ui/meteors";

const corePillars = [
  { id: 1, text: "Mittal Maurya", color: "#7dd3fc", img: "c1.jpeg" },
  { id: 2, text: "Anjay Anil", color: "#10b981", img: "c2.avif" },
  { id: 3, text: "Rajat Mukherjee", color: "#0ea5e9", img: "c4.avif" },
  { id: 4, text: "Victoria Schaw", color: "#8b5cf6", img: "c5.avif" },
  { id: 5, text: "Hazel Paige", color: "#f43f5e", img: "c3.avif" },
  { id: 6, text: "Prerna", color: "#7dd3fc", img: "c6.avif" },
  { id: 7, text: "Oshib", color: "#10b981", img: "c7.avif" },
  { id: 8, text: "Mercy", color: "#f43f5e", img: "c8.avif" },
  { id: 9, text: "Arya", color: "#0ea5e9", img: "c9.avif" },
  { id: 10, text: "(Nikki) Paarbati Tamang", color: "#8b5cf6", img: "c10.avif" },
  { id: 5, text: "Divyanshi Mishra", color: "#0ea5e9", img: "c11.avif" },
];

export default function AboutPage() {
  const fadeInText: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    })
  };

  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      {/* BACKGROUND LAYERS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
       
        {/* We add a container for meteors to cover the full viewport */}
        <div className="absolute inset-0 overflow-hidden">
           <Meteors number={40} />
        </div>
      </div>

      <div className="relative z-10 pt-20">
        {/* --- SECTION 1: HEADER & INTRO --- */}
        <div className="px-6 md:px-20 mb-20">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-[10vw] font-black leading-[0.75] tracking-tighter text-white uppercase mb-10"
          >
             ABOUT <br /> <span className="text-[#7dd3fc]">BLUPEDIA</span>
          </motion.h1>
          
          <motion.p 
            custom={1}
            variants={fadeInText}
            initial="hidden"
            animate="visible"
            className="max-w-4xl text-2xl md:text-3xl text-[#bae6fd] font-light leading-relaxed border-l-4 border-[#7dd3fc] pl-8"
          >
            A revolutionary platform focused on building a sustainable, nature-conscious community led by Mittal Maurya, with co-Founder Anjay Anil.
          </motion.p>
        </div>

        {/* --- SECTION 2: THE CAROUSEL --- */}
        <div className="flex overflow-x-auto pb-32 px-6 md:px-20 gap-10 no-scrollbar snap-x snap-mandatory">
          {corePillars.map((tile) => (
            <motion.div 
              key={tile.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative flex-shrink-0 w-[85vw] md:w-[500px] h-[450px] md:h-[600px] rounded-[40px] overflow-hidden snap-center group shadow-2xl border border-white/10"
            >
              <img 
                src={tile.img} 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" 
                alt={tile.text} 
              />
              <div className="absolute inset-0">
                <EvervaultCard text={tile.text} accentColor={tile.color} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- SECTION 3: THE BLUEPRINT ECOSYSTEM --- */}
        <div className="px-6 md:px-20 pb-40 space-y-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <motion.div custom={2} variants={fadeInText} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h3 className="text-cyan-400 font-mono text-sm tracking-[0.3em] uppercase mb-4">The Mission</h3>
              <p className="text-2xl text-white/90 font-medium leading-relaxed">
                To build a sustainable, conscious community that empowers eco-tourism and indigenous livelihoods, creating global action through grassroots participation and digital innovation.
              </p>
            </motion.div>
            <motion.div custom={3} variants={fadeInText} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h3 className="text-cyan-400 font-mono text-sm tracking-[0.3em] uppercase mb-4">The Vision</h3>
              <p className="text-2xl text-white/90 font-medium leading-relaxed">
                Not just a brand—a people-powered movement redefining branding by shifting focus from products to people, enabling members to co-create value for the planet.
              </p>
            </motion.div>
          </div>

          <div className="max-w-5xl space-y-12">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter"
            >
              The Blueprint
            </motion.h2>
            
            <div className="space-y-8 text-xl md:text-2xl text-white/70 leading-relaxed font-light">
              <motion.p custom={4} variants={fadeInText} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                Blupedia is best understood as a living, breathing ecosystem rather than a conventional company. At its heart lies the conviction that sustainable transformation is impossible without active citizen participation.
              </motion.p>
              
              <motion.p custom={5} variants={fadeInText} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                In practical terms, every individual who signs up acts as a micro-node in a much larger network. Each node produces energy in the form of knowledge, storytelling, or direct environmental intervention.
              </motion.p>

              <motion.p custom={6} variants={fadeInText} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-[#7dd3fc] font-medium italic">
                "Blupedia functions similarly to a coral reef: countless organisms interlocking to create a resilient super-structure that neither top-down funding nor isolated activism could replicate."
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}