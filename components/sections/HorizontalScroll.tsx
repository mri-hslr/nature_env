"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cards = [
  {
    id: 1,
    title: "Carbon Sequestration",
    metric: "45.2 Gt/yr",
    color: "#0d2d2d",
  },
  {
    id: 2,
    title: "Albedo Preservation",
    metric: "+12.4%",
    color: "#1a1c1e",
  },
  {
    id: 3,
    title: "Benthic Mapping",
    metric: "800k km²",
    color: "#0a1120",
  },
  {
    id: 4,
    title: "Reforestation Index",
    metric: "2.1M Hectares",
    color: "#052c24",
  },
];

export const HorizontalScroll = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // This maps the vertical scroll (0 to 1) to a horizontal shift (-75%)
  // Adjust the percentage based on the number of cards
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 px-20">
          {cards.map((card) => (
            <div
              key={card.id}
              style={{ backgroundColor: card.color }}
              className="group relative h-[60vh] w-[80vw] md:w-[35vw] flex-shrink-0 overflow-hidden rounded-xl border border-white/10 p-12 transition-colors duration-500"
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <span className="text-[#2dd4bf] font-mono text-xs tracking-widest uppercase opacity-50">
                    Metric ID: 0{card.id}
                  </span>
                  <h3 className="mt-4 text-4xl font-bold text-white uppercase tracking-tighter leading-none">
                    {card.title}
                  </h3>
                </div>
                
                <div className="flex items-end justify-between">
                  <span className="text-6xl md:text-8xl font-black text-[#2dd4bf]">
                    {card.metric}
                  </span>
                  <div className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                    →
                  </div>
                </div>
              </div>

              {/* Decorative Background Element */}
              <div className="absolute top-[-10%] right-[-10%] h-64 w-64 rounded-full bg-white/5 blur-3xl" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};