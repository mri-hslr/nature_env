"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const questions = [
  {
    id: "01",
    title: "What is environmental intelligence?",
    tag: "DEFINITION",
    desc: "It is the synthesis of real-time ecological data, blockchain verification, and AI-driven analysis to create a permanent, verifiable record of ecosystem health.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "02",
    title: "How are carbon credits verified?",
    tag: "TECHNICAL",
    desc: "Verification occurs through decentralized nodes that audit sensor data against the 2026 Transparency Framework, ensuring every credit is backed by physical evidence.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "03",
    title: "Can I contribute to the 10x Network?",
    tag: "COMMUNITY",
    desc: "Yes. We actively seek software architects proficient in the MERN stack and AI/ML integration to build out our decentralized operating system.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
  },
];

export default function FAQPage() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // 1. TRACK SCROLL PROGRESS
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // 2. MAP SCROLL: ELECTRIC CYAN (#06b6d4) TO MIDNIGHT NAVY (#0f172a)
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#06b6d4", "#0f172a"] 
  );

  return (
    <motion.main 
      ref={targetRef}
      style={{ backgroundColor }}
      className="relative min-h-screen text-black selection:bg-black selection:text-white overflow-x-hidden"
    >
      
      {/* ATMOSPHERE: Liquid Cyan/Navy Animation */}
      <div className="fixed inset-0 z-0">
        <BackgroundGradientAnimation 
          containerClassName="h-full w-full"
          firstColor="6, 182, 212"    // Cyan
          secondColor="34, 211, 238"   // Bright Cyan
          thirdColor="15, 23, 42"     // Navy
          fourthColor="2, 132, 199"    // Blue
          fifthColor="8, 51, 68"       // Deep Petrol
        />
        <div className="absolute inset-0 opacity-[0.2] pointer-events-none mix-blend-overlay" 
             style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-32">
        <header className="mb-48">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black tracking-[0.6em] uppercase text-black/60 mb-8"
          >
            Terminal Assistance
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-7xl md:text-[11vw] font-black tracking-tighter leading-[0.75] mb-12 uppercase"
          >
            Core <br /> <span className="opacity-40">Inquiry</span>
          </motion.h1>
          <p className="max-w-2xl text-2xl md:text-3xl font-medium leading-tight">
            Answering the fundamental questions regarding decentralized 
            stability and environmental record-keeping.
          </p>
        </header>

        <section className="relative">
          {/* Editorial Vertical Spine */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-black/20" />

          {questions.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              className="group pl-12 mb-64"
            >
              <div className="flex flex-col md:flex-row gap-16">
                <div className="md:w-1/3">
                  <span className="text-lg font-mono text-black/40 mb-4 block">
                    QUERY {item.id}
                  </span>
                  <p className="text-[12px] font-black tracking-[0.2em] uppercase text-black border-b-2 border-black inline-block pb-1">
                    {item.tag}
                  </p>
                </div>

                <div className="md:w-2/3">
                  <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.8] uppercase group-hover:text-white transition-colors duration-500">
                    {item.title}
                  </h2>
                  
                  <div className="aspect-[16/10] w-full overflow-hidden mb-12 rounded-sm bg-black/10 shadow-[20px_20px_0px_rgba(0,0,0,0.1)] transition-all">
                     <img 
                       src={item.img} 
                       alt={item.title}
                       className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[2s]" 
                     />
                  </div>
                  
                  <p className="text-xl md:text-2xl font-medium leading-snug text-black mb-12">
                    {item.desc}
                  </p>
                  
                  <button className="text-sm font-black tracking-[0.4em] uppercase py-4 px-8 border-2 border-black hover:bg-black hover:text-[#06b6d4] transition-all">
                    Expand Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        <footer className="mt-96 pb-32 text-center border-t-2 border-black pt-24">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-black uppercase">
            Clarity Restored
          </h2>
          <p className="mt-8 text-xl font-bold uppercase tracking-[0.5em]">Truth is the ultimate stablecoin.</p>
        </footer>
      </div>
    </motion.main>
  );
}