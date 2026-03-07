"use client";

import React from "react";
import { motion } from "framer-motion";

const oceanFacts = [
  { title: "The air we breathe", desc: "The ocean produces over half of the world's oxygen and absorbs 50 times more carbon dioxide than our atmosphere." },
  { title: "Climate regulation", desc: "Covering 70 percent of the Earth's surface, the ocean transports heat from the equator to the poles, regulating our climate and weather patterns." },
  { title: "Transportation", desc: "Seventy-six percent of all trade involves some form of marine transportation." },
  { title: "Recreation", desc: "From fishing to boating to kayaking and whale watching, the ocean provides us with many unique activities." },
  { title: "Economic benefits", desc: "The U.S. ocean economy produces $282 billion in goods and services and ocean-dependent businesses employ almost three million people." },
  { title: "Food", desc: "The ocean provides more than just seafood; ingredients from the sea are found in surprising foods such as peanut butter and soymilk." },
  { title: "Medicine", desc: "Many medicinal products come from the ocean, including ingredients that help fight cancer, arthritis, Alzheimer's disease, and heart disease." }
];

export const OceanMissionSection = () => {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-black border-t border-white/5">
      {/* CINEMATIC BACKGROUND GLOW */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#10b981]/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-20">
        {/* CENTERED HEADER AREA */}
        <div className="mb-24 flex flex-col items-center text-center space-y-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#10b981] font-mono text-xs uppercase tracking-[1em] block font-bold"
          >
            System Core // Foundation
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-[8vw] font-black text-white uppercase tracking-tighter leading-none"
          >
            BLUPEDIA'S <span className="text-transparent" style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.3)" }}>MISSION</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl pt-8 space-y-6"
          >
            <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">
              Our world ocean provides many benefits. Browse through our pool of more than <span className="text-[#10b981] font-bold">300 ocean facts</span>. 
            </p>
            <div className="h-px w-24 bg-[#10b981] mx-auto opacity-50" />
          </motion.div>
        </div>

        {/* CARD GRID WITH HOVER EFFECTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {oceanFacts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
              className="group relative p-10 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.05] hover:border-[#10b981]/50 transition-all duration-500 shadow-2xl overflow-hidden"
            >
              {/* Internal Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-[#10b981] font-mono text-xs opacity-50">FACT // 0{index + 1}</span>
                  <div className="h-px flex-grow bg-white/10 group-hover:bg-[#10b981]/40 transition-all duration-500" />
                </div>
                <h4 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter leading-[0.9] group-hover:text-[#10b981] transition-colors duration-300">
                  {fact.title}
                </h4>
                <p className="text-base text-white/50 leading-relaxed font-medium uppercase tracking-tight">
                  {fact.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
    </section>
  );
};