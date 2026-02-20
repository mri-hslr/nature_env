"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function LoginPage() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  /**
   * CLASSY DUALITY:
   * Transitions from Burnished Amber (#b45309) to Deep Graphite (#171717).
   * This provides a warm, cinematic grit that is highly professional.
   */
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#b45309", "#171717"] 
  );

  return (
    <motion.main 
      ref={targetRef}
      style={{ backgroundColor }}
      className="relative min-h-[150vh] text-white selection:bg-white selection:text-amber-900 overflow-x-hidden"
    >
      
      {/* ATMOSPHERE: Liquid Bronze Motion */}
      <div className="fixed inset-0 z-0">
        <BackgroundGradientAnimation 
          containerClassName="h-full w-full"
          firstColor="180, 83, 9"    // Amber 700
          secondColor="146, 64, 14"  // Amber 800
          thirdColor="69, 26, 3"     // Amber 950
          fourthColor="23, 23, 23"   // Graphite
          fifthColor="10, 10, 10"    // Pure Obsidian
        />
        <div className="absolute inset-0 opacity-[0.1] pointer-events-none mix-blend-overlay" 
             style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-32 flex flex-col md:flex-row items-start gap-24">
        
        {/* LEFT COLUMN: IDENTIFICATION */}
        <header className="md:w-1/2 md:sticky md:top-32">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black tracking-[0.6em] uppercase text-white/40 mb-8"
          >
            System Key
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-7xl md:text-[9vw] font-black tracking-tighter leading-[0.75] mb-12 uppercase text-white"
          >
            Access <br /> <span className="opacity-20 italic">Archive</span>
          </motion.h1>
          <p className="max-w-md text-xl font-medium leading-tight text-white/70">
            Secure authentication required to sync with the 10x network nodes.
          </p>
        </header>

        {/* RIGHT COLUMN: TERMINAL INTERFACE */}
        <section className="md:w-1/2 relative pl-12 border-l border-white/10">
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <div className="group">
                <label className="text-[10px] font-black tracking-[0.4em] uppercase text-white/30 group-focus-within:text-white transition-colors">
                  Node Identifier
                </label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-4 text-2xl font-bold transition-all text-white placeholder:text-white/5"
                  placeholder="name@agency.gov"
                />
              </div>

              <div className="group">
                <label className="text-[10px] font-black tracking-[0.4em] uppercase text-white/30 group-focus-within:text-white transition-colors">
                  Security Protocol
                </label>
                <input 
                  type="password" 
                  className="w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-4 text-2xl font-bold transition-all text-white placeholder:text-white/5"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <button className="w-full py-6 bg-white text-black text-sm font-black tracking-[0.5em] uppercase hover:bg-amber-600 hover:text-white transition-all">
                Authorize Access
              </button>
              
              <div className="flex justify-between items-center text-[10px] font-black tracking-widest uppercase text-white/40">
                <button className="hover:text-white">Request Entry</button>
                <button className="hover:text-white">Key Recovery</button>
              </div>
            </div>

            {/* Visual Metadata Segment */}
            <div className="pt-24 opacity-30">
                <div className="text-[10px] font-mono leading-relaxed uppercase text-amber-200">
                    Status: Pinned <br />
                    Enc: Verified AES-256 <br />
                    Loc: 10x Network Core
                </div>
            </div>
          </motion.div>
        </section>
      </div>

      <footer className="mt-48 pb-32 text-center border-t border-white/5 pt-24">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase opacity-10">
          The observed becomes the real
        </h2>
      </footer>
    </motion.main>
  );
}