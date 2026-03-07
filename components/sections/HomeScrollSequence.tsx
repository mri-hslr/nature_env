"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GreenNoiseGridBackground } from "@/components/ui/GreenNoiseGridBackground";

export const HomeScrollSequence = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Text Color Interpolation for Section 2
  const monoTextColor = useTransform(
    scrollYProgress, 
    [0.6, 0.9], 
    ["#000000", "#ffffff"]
  );

  // Background and Overlap animations (PRESERVED)
  const imageOpacity = useTransform(scrollYProgress, [0.45, 0.55], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const monoTranslateY = useTransform(scrollYProgress, [0.4, 0.6], ["100%", "0%"]);

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full bg-black">
      
      {/* SECTION 1: IMAGE BACKGROUND SECTION (UNTOUCHED) */}
      <section className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-start px-12 md:px-24">
        <motion.div 
          style={{ opacity: imageOpacity, scale: imageScale }}
          className="absolute inset-0 z-0 will-change-transform"
        >
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000" 
            className="h-full w-full object-cover"
            alt="Environmental Landscape"
          />
          <div className="absolute inset-0 bg-black/15" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative z-10 max-w-3xl"
        >
          <span className="text-white/80 font-mono text-sm mb-4 block tracking-widest">01.</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-[0.9]">
          Introduction to Blupedia Ecosystem<br /> 
            
          </h2>
          <h3>
          Blupedia is a Web3-powered environmental platform combining blockchain, NFTs, and carbon finance to protect forests and biodiversity. Users participate through digital ownership, ecological contributions, and token incentives. The ecosystem connects conservation, decentralized finance, and community participation to transform environmental protection into a transparent, scalable, and reward-driven global movement.              </h3><br /> 
        </motion.div>
      </section>

      {/* SECTION 2: THE 3 PILLARS SECTION */}
      <motion.section 
        style={{ translateY: monoTranslateY }}
        className="sticky top-0 z-30 h-screen w-full flex items-center justify-center bg-[#064e3b] will-change-transform shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
      >
        {/* ✅ ADD THIS LINE: Integrated behind the content layer */}
        <div className="absolute inset-0 -z-10">
    <GreenNoiseGridBackground />
  </div>
        <motion.div 
          style={{ color: monoTextColor }}
          className="relative w-full h-full flex flex-col justify-center px-6 md:px-24 max-w-[1400px]"
        >
          {/* TOP MASTER HEADING: 03 PILLARS */}
          <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0.55, 0.65], [0, 1]) }}
            className="mb-16"
          >
             <span className="font-mono text-xs uppercase tracking-[0.8em] opacity-40 mb-4 block">System Core // Architecture</span>
             <h2 className="text-7xl md:text-[8vw] font-black uppercase tracking-tighter leading-none text-white">
              03 <span className="text-white/20 italic">Pillars</span>
            </h2>
          </motion.div>

          {/* MAIN GRID CONTENT */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            
            {/* PILLAR 1: ECOLOGICAL */}
            <div className="space-y-6 group border-t border-current/20 pt-8">
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                Ecological <br/> Integrity
              </h3>
              <p className="text-sm md:text-base font-medium leading-relaxed opacity-80 uppercase tracking-tight">
                Every initiative faces a lifecycle audit. For example, if a community proposes weaving silk scarves dyed with plant pigments, the audit examines water usage, soil impact, and post‑consumer degradation. Projects that fail to meet net‑positive thresholds are either redesigned or rejected—no matter how lucrative.
              </p>
            </div>

            {/* PILLAR 2: SOCIAL */}
            <div className="space-y-6 group border-t border-current/20 pt-8">
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                Social <br/> Equity
              </h3>
              <p className="text-sm md:text-base font-medium leading-relaxed opacity-80 uppercase tracking-tight">
                Unlike traditional supply chains where artisans sit at the bottom of the value pyramid, the platform’s smart contracts embed automatic royalty splits. A Madhubani painter who uploads a design for limited‑edition NFTs retains perpetual IP control; each resale triggers micro‑payments, ensuring artisanship is rewarded across time zones.
              </p>
            </div>

            {/* PILLAR 3: CULTURAL */}
            <div className="space-y-6 group border-t border-current/20 pt-8">
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                Cultural <br/> Continuity
              </h3>
              <p className="text-sm md:text-base font-medium leading-relaxed opacity-80 uppercase tracking-tight">
                Blupedia treats indigenous craft not merely as a commodity but as living knowledge systems. Digital storytelling—short films, oral histories, AR filters—run parallel to product listings, creating cultural context that algorithms rank as highly as price or rating. Tokens unlocked by viewing stories subsidize apprenticeships.
              </p>
            </div>

          </div>
          
          {/* REMOVED: DECORATIVE DECAL "INTELLIGENCE" */}
        </motion.div>
      </motion.section>

      {/* Spacer to maintain pin duration */}
      <div className="h-screen w-full bg-[#064e3b]" />
    </div>
  );
};