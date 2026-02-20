"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const HomeScrollSequence = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Text Color Interpolation for Section 2 remains scroll-dependent
  const monoTextColor = useTransform(
    scrollYProgress, 
    [0.6, 0.9], 
    ["#000000", "#ffffff"]
  );

  // Background and Overlap animations
  const imageOpacity = useTransform(scrollYProgress, [0.45, 0.55], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const monoTranslateY = useTransform(scrollYProgress, [0.4, 0.6], ["100%", "0%"]);

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full bg-black">
      
      {/* SECTION 1: IMAGE BACKGROUND SECTION */}
      <section className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-start px-12 md:px-24">
        <motion.div 
          style={{ 
            opacity: imageOpacity,
            scale: imageScale,
          }}
          className="absolute inset-0 z-0 will-change-transform"
        >
          {/* IMAGE SOURCE: Verified Landscape */}
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000" 
            className="h-full w-full object-cover"
            alt="Environmental Landscape"
          />
          {/* REDUCED DIMNESS: Changed from /30 to /15 */}
          <div className="absolute inset-0 bg-black/15" />
        </motion.div>

        {/* IN-VIEW TRIGGERED TEXT: Independent of scroll progress */}
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }} // Triggers when 50% of section is visible
          transition={{ 
            duration: 1.2, 
            ease: [0.22, 1, 0.36, 1], // Smooth cubic-bezier 
            delay: 0.2 
          }}
          className="relative z-10 max-w-3xl"
        >
          <span className="text-white/80 font-mono text-sm mb-4 block tracking-widest">01.</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-[0.9]">
            Iceberg is a transmedia <br /> 
            documentary that uncovers <br /> 
            humanity's capacity.
          </h2>
        </motion.div>
      </section>

      {/* SECTION 2: MONOCHROMATIC OVERLAP SECTION (PRESERVED) */}
      <motion.section 
        style={{ translateY: monoTranslateY }}
        className="sticky top-0 z-30 h-screen w-full flex items-center justify-center bg-[#064e3b] will-change-transform shadow-[0_-20px_50px_rgba(0,0,0,0.3)]"
      >
        <motion.div 
          style={{ color: monoTextColor }}
          className="relative px-6 max-w-5xl text-center"
        >
          <motion.span 
            style={{ opacity: useTransform(scrollYProgress, [0.55, 0.65], [0, 0.4]) }}
            className="font-mono text-sm mb-6 block uppercase tracking-widest"
          >
            Permanent Record
          </motion.span>
          <h2 className="text-6xl md:text-[9vw] font-black tracking-tighter uppercase leading-[0.8] mb-8">
            Decentralized <br /> Stability
          </h2>
          <p className="text-xl md:text-2xl font-bold uppercase tracking-[0.2em] max-w-2xl mx-auto leading-relaxed">
            Establishing a verifiable baseline for global environmental intelligence.
          </p>
        </motion.div>
      </motion.section>

      {/* Spacer for the scroll track length to ensure Section 2 pins correctly */}
      <div className="h-screen w-full bg-[#064e3b]" />
    </div>
  );
};