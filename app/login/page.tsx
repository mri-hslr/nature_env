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
   * Transitions from Stone/Alabaster (#f5f5f4) to Architectural Slate (#0f172a).
   * This provides a timeless, premium look with maximum visual appeal.
   */
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#f5f5f4", "#0f172a"] 
  );

  // Smoothly transition text color as background gets darker
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    ["#000000", "#000000", "#ffffff", "#ffffff"]
  );

  return (
    <motion.main 
      ref={targetRef}
      style={{ backgroundColor }}
      className="relative min-h-[150vh] selection:bg-black selection:text-white overflow-x-hidden"
    >
      
      {/* ATMOSPHERE: Subtle Architectural Glows */}
      <div className="fixed inset-0 z-0">
        <BackgroundGradientAnimation 
          containerClassName="h-full w-full"
          firstColor="214, 211, 209"  // Stone 300
          secondColor="120, 113, 108" // Stone 500
          thirdColor="15, 23, 42"    // Slate 900
          fourthColor="2, 6, 23"      // Obsidian
          fifthColor="245, 245, 244"  // Stone 50
        />
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-multiply" 
             style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-32 flex flex-col md:row items-start gap-24">
        
        {/* LEFT COLUMN: IDENTIFICATION */}
        <header className="md:w-1/2 md:sticky md:top-32">
          <motion.p 
            style={{ color: textColor }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black tracking-[0.6em] uppercase opacity-40 mb-8"
          >
            Access Terminal
          </motion.p>
          <motion.h1 
            style={{ color: textColor }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-7xl md:text-[9vw] font-black tracking-tighter leading-[0.75] mb-12 uppercase"
          >
            Node <br /> <span className="opacity-10 italic font-serif">Secure</span>
          </motion.h1>
          <motion.p 
            style={{ color: textColor }}
            className="max-w-md text-xl font-medium leading-tight opacity-70"
          >
            Authenticate credentials to synchronize with the environmental data nodes.
          </motion.p>
        </header>

        {/* RIGHT COLUMN: TERMINAL INTERFACE */}
        <section className="md:w-1/2 relative pl-12">
          <motion.div 
            style={{ backgroundColor: textColor }} 
            className="absolute left-0 top-0 bottom-0 w-[1px] opacity-10" 
          />
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <div className="group">
                <motion.label 
                  style={{ color: textColor }}
                  className="text-[10px] font-black tracking-[0.4em] uppercase opacity-40 group-focus-within:opacity-100 transition-opacity"
                >
                  Global ID
                </motion.label>
                <motion.input 
                  style={{ color: textColor, borderBottomColor: textColor }}
                  type="email" 
                  className="w-full bg-transparent border-b outline-none py-4 text-2xl font-bold transition-all placeholder:opacity-10"
                  placeholder="node@network.com"
                />
              </div>

              <div className="group">
                <motion.label 
                  style={{ color: textColor }}
                  className="text-[10px] font-black tracking-[0.4em] uppercase opacity-40 group-focus-within:opacity-100 transition-opacity"
                >
                  Key Protocol
                </motion.label>
                <motion.input 
                  style={{ color: textColor, borderBottomColor: textColor }}
                  type="password" 
                  className="w-full bg-transparent border-b outline-none py-4 text-2xl font-bold transition-all placeholder:opacity-10"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <motion.button 
                whileHover={{ scale: 0.98 }}
                style={{ backgroundColor: textColor, color: backgroundColor }}
                className="w-full py-6 text-sm font-black tracking-[0.5em] uppercase transition-all"
              >
                Authorize
              </motion.button>
              
              <motion.div 
                style={{ color: textColor }}
                className="flex justify-between items-center text-[10px] font-black tracking-widest uppercase opacity-40"
              >
                <button className="hover:opacity-100">Enroll Node</button>
                <button className="hover:opacity-100">Lost Key</button>
              </motion.div>
            </div>

            {/* Visual Metadata Segment */}
            <div className="pt-24 opacity-20">
                <motion.div style={{ color: textColor }} className="text-[10px] font-mono leading-relaxed uppercase">
                    Status: Pinned <br />
                    System: 10x Core <br />
                    Region: Dehradun Hub
                </motion.div>
            </div>
          </motion.div>
        </section>
      </div>

      <footer className="mt-48 pb-32 text-center pt-24 border-t border-black/5">
        <motion.h2 
          style={{ color: textColor }}
          className="text-4xl md:text-6xl font-black tracking-tighter uppercase opacity-10"
        >
          Observation is the catalyst
        </motion.h2>
      </footer>
    </motion.main>
  );
}