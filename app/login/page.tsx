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

  // MAP SCROLL: ROSE RED (#e11d48) TO OBSIDIAN NAVY (#020617)
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#e11d48", "#020617"] 
  );

  return (
    <motion.main 
      ref={targetRef}
      style={{ backgroundColor }}
      className="relative min-h-[150vh] text-black selection:bg-black selection:text-white overflow-x-hidden"
    >
      
      {/* ATMOSPHERE: Dynamic Liquid Infrared Animation */}
      <div className="fixed inset-0 z-0">
        <BackgroundGradientAnimation 
          containerClassName="h-full w-full"
          firstColor="225, 29, 72"   // Rose
          secondColor="190, 18, 60"  // Crimson
          thirdColor="159, 18, 57"   // Deep Red
          fourthColor="2, 6, 23"     // Obsidian
          fifthColor="30, 41, 59"    // Slate
        />
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay" 
             style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-32 flex flex-col md:flex-row items-start gap-24">
        
        {/* LEFT COLUMN: IDENTIFICATION */}
        <header className="md:w-1/2 md:sticky md:top-32">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black tracking-[0.6em] uppercase text-black/60 mb-8"
          >
            Identity Terminal
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-7xl md:text-[9vw] font-black tracking-tighter leading-[0.75] mb-12 uppercase"
          >
            Access <br /> <span className="opacity-40">System</span>
          </motion.h1>
          <p className="max-w-md text-xl font-medium leading-tight opacity-80">
            Sign in to access your environmental intelligence archives and 10x network nodes.
          </p>
        </header>

        {/* RIGHT COLUMN: TERMINAL INTERFACE */}
        <section className="md:w-1/2 relative pl-12">
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-black/20" />
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <div className="group">
                <label className="text-[10px] font-black tracking-[0.4em] uppercase text-black/40 group-focus-within:text-black transition-colors">
                  Node Identifier (Email)
                </label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b-2 border-black/20 focus:border-black outline-none py-4 text-2xl font-bold transition-all"
                  placeholder="name@agency.gov"
                />
              </div>

              <div className="group">
                <label className="text-[10px] font-black tracking-[0.4em] uppercase text-black/40 group-focus-within:text-black transition-colors">
                  Security Protocol (Password)
                </label>
                <input 
                  type="password" 
                  className="w-full bg-transparent border-b-2 border-black/20 focus:border-black outline-none py-4 text-2xl font-bold transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <button className="w-full py-6 bg-black text-white text-sm font-black tracking-[0.5em] uppercase hover:bg-white hover:text-black border-2 border-black transition-all">
                Authorize Access
              </button>
              
              <div className="flex justify-between items-center text-[10px] font-black tracking-widest uppercase text-black/60">
                <button className="hover:text-black">Request Node Access</button>
                <button className="hover:text-black">Protocol Recovery</button>
              </div>
            </div>

            {/* Visual Metadata Segment */}
            <div className="pt-24 opacity-30">
                <div className="text-[10px] font-mono leading-relaxed uppercase">
                    Status: Awaiting credentials... <br />
                    Enc: AES-256 Verified <br />
                    Loc: 10x Devs Network Hub
                </div>
            </div>
          </motion.div>
        </section>
      </div>

      <footer className="mt-48 pb-32 text-center border-t-2 border-black pt-24">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black uppercase opacity-20">
          Identity is the root of truth
        </h2>
      </footer>
    </motion.main>
  );
}