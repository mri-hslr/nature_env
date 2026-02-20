"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const NARRATIVE_CONTENT = [
  {
    id: "intro",
    title: "The Genesis",
    text: "Our journey began with a simple observation of the shifting tides in the Pacific. We realized that environmental intelligence wasn't just about data; it was about narrative flow.",
    image: "https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=2000"
  },
  {
    id: "system",
    title: "10x Architecture",
    text: "The infrastructure we've built allows for real-time satellite analysis. By bridging the gap between AI and raw ecological data, we've created a lens into the planet's pulse.",
    image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=2000"
  },
  {
    id: "future",
    title: "Cyan Horizons",
    text: "Looking forward, the horizon is clear. We are expanding the node network to Dehradun and beyond, ensuring that every shift in the climate is documented and understood.",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2000"
  }
];

export default function BlogPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ CORRECT: pass the ref object, not the element
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#059669", "#84cc16"]
  );

  return (
    <motion.main
      ref={containerRef}
      style={{ backgroundColor }}
      className="relative min-h-screen transition-colors duration-500"
    >
      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0">
        <BackgroundGradientAnimation
          containerClassName="h-full w-full"
          firstColor="5, 150, 105"
          secondColor="16, 185, 129"
          thirdColor="20, 184, 166"
          fourthColor="132, 204, 22"
          fifthColor="6, 78, 59"
        />
        <div
          className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,
          }}
        />
      </div>

      <div className="relative z-10">
        <section className="h-[60vh] flex items-end px-6 md:px-12 pb-24">
          <h1 className="text-7xl md:text-[12vw] font-black tracking-tighter uppercase text-white leading-[0.8]">
            The <br /> <span className="opacity-20 text-black">Project</span>
          </h1>
        </section>

        <section className="relative flex flex-col md:flex-row w-full">
          <div className="w-full md:w-1/2 px-6 md:px-12 py-32 space-y-[60vh]">
            {NARRATIVE_CONTENT.map((item, idx) => (
              <motion.div
                key={item.id}
                className="max-w-xl"
                onViewportEnter={() => setActiveIndex(idx)}
                viewport={{ amount: 0.5 }}
              >
                <p className="text-[10px] font-black tracking-[0.6em] uppercase text-black/60 mb-8">
                  Section // {item.id}
                </p>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-black uppercase mb-8">
                  {item.title}
                </h2>
                <p className="text-xl md:text-2xl font-medium leading-relaxed text-black/80">
                  {item.text}
                </p>
              </motion.div>
            ))}
            <div className="h-[40vh]" />
          </div>

          <div className="hidden md:block w-1/2 h-screen sticky top-0 overflow-hidden bg-black/10 border-l border-black/5">
            <div className="relative w-full h-full flex items-center justify-center p-12">
              <div className="relative w-full h-full overflow-hidden rounded-sm shadow-2xl bg-zinc-900">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeIndex}
                    src={NARRATIVE_CONTENT[activeIndex].image}
                    initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                    animate={{ opacity: 0.8, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                    transition={{
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="w-full h-full object-cover"
                    alt="Narrative Visual"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        <section className="h-screen flex items-center justify-center border-t border-black/10">
          <h2 className="text-4xl md:text-8xl font-black tracking-tighter uppercase text-black opacity-10">
            Observation is the catalyst
          </h2>
        </section>
      </div>
    </motion.main>
  );
}