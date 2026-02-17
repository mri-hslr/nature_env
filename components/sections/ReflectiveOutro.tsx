"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const ReflectiveOutro = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);

  return (
    <div 
      ref={containerRef} 
      className="relative h-[150vh] w-full flex flex-col items-center justify-center overflow-hidden"
      style={{
        // A rich, luminous gradient instead of flat black
        background: "radial-gradient(circle at center, #062d24 0%, #02110e 100%)"
      }}
    >
      
      {/* AMBIENT GENERATIVE BACKGROUND - Enhanced with Glow */}
      <svg
        viewBox="0 0 1000 1000"
        className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
        preserveAspectRatio="xMidYMid slice"
      >
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <motion.path
          d="M100,500 C150,300 350,100 500,100 C650,100 850,300 900,500 C850,700 650,900 500,900 C350,900 150,700 100,500"
          fill="none"
          stroke="#4ade80" // Lighter Mint/Green
          strokeWidth="0.8"
          filter="url(#glow)"
          style={{ pathLength }}
        />
        <motion.circle
          cx="500"
          cy="500"
          r="320"
          fill="none"
          stroke="#2dd4bf"
          strokeWidth="0.3"
          strokeDasharray="15 30"
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {/* FINAL TYPOGRAPHY - Cleaned up JSX */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.span 
          style={{ opacity }}
          className="text-[#4ade80] font-mono text-[10px] tracking-[0.6em] uppercase mb-12 block font-bold"
        >
          System Evolution Complete
        </motion.span>
        
        <motion.h2 
          style={{ 
            opacity,
            y: useTransform(scrollYProgress, [0.7, 1], [30, 0])
          }}
          className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-16"
        >
          Nature does not require our permission to thrive. It requires our 
          <span className="italic font-serif ml-4 text-[#4ade80] drop-shadow-[0_0_15px_rgba(74,222,128,0.3)]">silence.</span>
        </motion.h2>

        <motion.div 
          style={{ opacity }}
          className="flex flex-col items-center gap-8"
        >
          <div className="h-px w-48 bg-gradient-to-r from-transparent via-[#4ade80]/50 to-transparent" />
          <button className="group relative text-white border border-[#4ade80]/30 px-10 py-5 rounded-full overflow-hidden transition-all duration-500 hover:border-[#4ade80]">
            <span className="relative z-10 uppercase text-[11px] tracking-[0.3em] font-bold group-hover:text-black transition-colors duration-500">
              Join the Ecosystem
            </span>
            <div className="absolute inset-0 bg-[#4ade80] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </button>
        </motion.div>
      </div>

      {/* FOOTER - Brightened for readability */}
      <div className="absolute bottom-12 left-0 w-full px-12 flex justify-between items-end opacity-60">
        <div className="text-[9px] font-mono text-[#4ade80] flex flex-col gap-1 tracking-widest">
          <span>COORDINATES // 78.2232 N</span>
          <span>STATION // SVALBARD GLOBAL</span>
        </div>
        <div className="text-[9px] font-mono text-[#4ade80] tracking-widest uppercase">
          © 2026 Nature Intelligence System
        </div>
      </div>
    </div>
  );
};