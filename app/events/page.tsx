"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const events = [
  {
    id: "01",
    title: "Intelligence Summit 2026",
    location: "Arctic Research Hub",
    date: "MAR 12 - 14",
    desc: "A summit focused on cryosphere data integrity and the role of blockchain in climate transparency.",
    tag: "CONFERENCE",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "02",
    title: "Global Methane Monitoring",
    location: "Geneva / Virtual",
    date: "APR 05",
    desc: "A collaborative workshop on real-time atmospheric shifts and methane tracking using the Iceberg Data Stack.",
    tag: "WORKSHOP",
    img: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "03",
    title: "Transparency Framework",
    location: "New York City",
    date: "MAY 22",
    desc: "Launch of the 2026 Evidence-Based Intelligence Framework for carbon accounting standards.",
    tag: "INITIATIVE",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200",
  },
];

export default function EventsPage() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // 1. TRACK SCROLL PROGRESS
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // 2. MAP SCROLL TO VIBRANT BLUE & MAGENTA
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#2563eb", "#db2777"] 
  );

  return (
    <motion.main 
      ref={targetRef}
      style={{ backgroundColor }}
      className="relative min-h-screen text-black selection:bg-black selection:text-white overflow-x-hidden"
    >
      
      {/* ATMOSPHERE: Dynamic Liquid Pigment */}
      <div className="fixed inset-0 z-0">
        <BackgroundGradientAnimation 
          containerClassName="h-full w-full"
          firstColor="37, 99, 235"    // Royal Blue
          secondColor="139, 92, 246"   // Violet
          thirdColor="219, 39, 119"   // Magenta
          fourthColor="244, 63, 94"    // Rose
          fifthColor="30, 58, 138"     // Navy
        />
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay" 
             style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-32">
        <header className="mb-48">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black tracking-[0.6em] uppercase text-black/60 mb-8"
          >
            Institutional Calendar
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-7xl md:text-[11vw] font-black tracking-tighter leading-[0.75] mb-12 uppercase"
          >
            Events <br /> <span className="opacity-40">Archive</span>
          </motion.h1>
          <p className="max-w-2xl text-2xl md:text-3xl font-medium leading-tight">
            Coordinating global action through evidence-based gatherings and 
            chronological transparency.
          </p>
        </header>

        <section className="relative">
          {/* Editorial Vertical Spine */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-black/20" />

          {events.map((event) => (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              className="group pl-12 mb-64"
            >
              <div className="flex flex-col md:flex-row gap-16">
                {/* Meta Column */}
                <div className="md:w-1/3">
                  <div className="flex flex-col gap-1 text-sm font-mono text-black/60 mb-4 uppercase">
                    <span className="text-black font-bold">{event.date}</span>
                    <span>{event.location}</span>
                  </div>
                  <p className="text-[12px] font-black tracking-[0.2em] uppercase text-black border-b-2 border-black inline-block pb-1">
                    {event.tag}
                  </p>
                </div>

                {/* Content Column */}
                <div className="md:w-2/3">
                  <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.8] uppercase">
                    {event.title}
                  </h2>
                  
                  <div className="aspect-[16/10] w-full overflow-hidden mb-12 rounded-sm bg-black/10 shadow-[20px_20px_0px_rgba(0,0,0,0.1)] transition-all group-hover:shadow-[10px_10px_0px_rgba(0,0,0,0.2)]">
                     <img 
                       src={event.img} 
                       alt={event.title}
                       className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[2s]" 
                     />
                  </div>
                  
                  <p className="text-xl md:text-2xl font-medium leading-snug text-black mb-12">
                    {event.desc}
                  </p>
                  
                  <button className="text-sm font-black tracking-[0.4em] uppercase py-4 px-8 border-2 border-black hover:bg-black hover:text-[#db2777] transition-all">
                    Register Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        <footer className="mt-96 pb-32 text-center border-t-2 border-black pt-24">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-black uppercase">
            Shared Resonance
          </h2>
          <p className="mt-8 text-xl font-bold uppercase tracking-[0.5em]">Action is the spark of truth.</p>
        </footer>
      </div>
    </motion.main>
  );
}