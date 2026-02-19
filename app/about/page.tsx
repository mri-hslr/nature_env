"use client";

import React from "react";
import { motion } from "framer-motion";
import { NetworkBackground } from "@/components/ui/network-background";
import { EvervaultCard } from "@/components/ui/evervault-card";

// UPDATED: Reliable High-Resolution Image Placeholders
const tiles = [
  { id: 1, text: "Glacial Mass", color: "#7dd3fc", img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1200" },
  { id: 2, text: "Arctic Current", color: "#0ea5e9", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1200" },
  { id: 3, text: "Deep Ice", color: "#0c4a6e", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200" },
  { id: 4, text: "Thermal Flux", color: "#f43f5e", img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=1200" },
  { id: 5, text: "Boreal Depth", color: "#10b981", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200" },
  { id: 6, text: "Permafrost Layer", color: "#ffffff", img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1200" },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      <NetworkBackground />

      <div className="relative z-10 pt-20">
        {/* HOMEPAGE TYPOGRAPHY STYLE (NON-ITALIC) */}
        <div className="px-6 md:px-20 mb-20">
          <h1 className="text-6xl md:text-[10vw] font-black leading-[0.75] tracking-tighter text-white uppercase mb-10">
             ABOUT <br /> <span className="text-[#7dd3fc]">ICEBERG</span>
          </h1>
          <p className="max-w-3xl text-2xl text-[#bae6fd] font-light leading-relaxed border-l-4 border-[#7dd3fc] pl-8">
            Environmental intelligence modeled after glacial stability—permanent, verifiable, and crystalline.
          </p>
        </div>

        {/* RE-IMPLEMENTED HORIZONTAL CAROUSEL (Moderate Scale) */}
        <div className="flex overflow-x-auto pb-32 px-6 md:px-20 gap-10 no-scrollbar snap-x snap-mandatory">
          {tiles.map((tile) => (
            <motion.div 
              key={tile.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative flex-shrink-0 w-[80vw] md:w-[500px] h-[400px] md:h-[600px] rounded-[40px] overflow-hidden snap-center group shadow-2xl border border-white/10"
            >
              <img 
                src={tile.img} 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                alt={tile.text} 
              />
              <div className="absolute inset-0">
                <EvervaultCard text={tile.text} accentColor={tile.color} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}