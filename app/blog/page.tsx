"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const posts = [
  {
    id: "01",
    title: "When does an app become Web3?",
    author: "Rajat Mukherjee",
    date: "Jan 16",
    readTime: "7 min read",
    desc: "An app becomes Web3 the moment user value is cryptographically owned, not when money is paid. Precise distinctions between Layer Web2 and Web3 Identity.",
    tag: "TECHNOLOGY",
    img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "02",
    title: "Eco-Economics in the Digital Age",
    author: "Iceberg Editorial",
    date: "Feb 02",
    readTime: "12 min read",
    desc: "Exploring how blockchain frameworks can incentivize sustainable resource management and carbon credit transparency.",
    tag: "ECONOMICS",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "03",
    title: "Indigenous Art & Craft Preservation",
    author: "Cultural Division",
    date: "Feb 10",
    readTime: "5 min read",
    desc: "Using NFTs as a provenance layer to protect and monetize traditional artisan craftsmanship globally.",
    tag: "CULTURE",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1200",
  },
];

export default function BlogPage() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // 1. TRACK SCROLL PROGRESS
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // 2. MAP SCROLL TO VIBRANT EMERALD & LIME
  // This creates a "growing" effect as you move down the page
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#059669", "#84cc16"] 
  );

  return (
    <motion.main 
      ref={targetRef}
      style={{ backgroundColor }}
      className="relative min-h-screen text-black selection:bg-black selection:text-white overflow-x-hidden"
    >
      
      {/* ATMOSPHERE: Dynamic Liquid Forest Green */}
      <div className="fixed inset-0 z-0">
        <BackgroundGradientAnimation 
          containerClassName="h-full w-full"
          firstColor="5, 150, 105"    // Emerald
          secondColor="16, 185, 129"  // Medium Green
          thirdColor="20, 184, 166"   // Teal
          fourthColor="132, 204, 22"  // Lime
          fifthColor="6, 78, 59"      // Deep Forest
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
            Editorial Journal
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-7xl md:text-[11vw] font-black tracking-tighter leading-[0.75] mb-12 uppercase"
          >
            Latest <br /> <span className="opacity-40">Journal</span>
          </motion.h1>
          <p className="max-w-2xl text-2xl md:text-3xl font-medium leading-tight">
            Documenting the intersection of technology, climate action, and cultural preservation.
          </p>
        </header>

        <section className="relative">
          {/* Editorial Vertical Spine */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-black/20" />

          {posts.map((post) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              className="group pl-12 mb-64"
            >
              <div className="flex flex-col md:flex-row gap-16">
                {/* Meta Column */}
                <div className="md:w-1/3">
                  <div className="flex items-center gap-2 text-sm font-mono text-black/40 mb-4">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-black/20" />
                    <span>{post.readTime}</span>
                  </div>
                  <p className="text-[12px] font-black tracking-[0.2em] uppercase text-black border-b-2 border-black inline-block pb-1">
                    {post.tag}
                  </p>
                </div>

                {/* Content Column */}
                <div className="md:w-2/3">
                  <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.8] uppercase group-hover:tracking-tight transition-all duration-700">
                    {post.title}
                  </h2>
                  
                  {/* Image with shadow depth */}
                  <div className="aspect-[16/9] w-full overflow-hidden mb-12 rounded-sm bg-black/10 shadow-[20px_20px_0px_rgba(0,0,0,0.1)] transition-all group-hover:shadow-[10px_10px_0px_rgba(0,0,0,0.2)]">
                     <img 
                       src={post.img} 
                       alt={post.title}
                       className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" 
                     />
                  </div>
                  
                  <p className="text-xl md:text-2xl font-medium leading-snug text-black/90 mb-12">
                    {post.desc}
                  </p>
                  
                  <button className="text-sm font-black tracking-[0.4em] uppercase py-4 px-8 border-2 border-black hover:bg-black hover:text-white transition-all">
                    Read Article
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        <footer className="mt-96 pb-32 text-center border-t-2 border-black pt-24">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-black uppercase">
            Shared Wisdom
          </h2>
          <p className="mt-8 text-xl font-bold uppercase tracking-[0.5em]">Growth is the root of truth.</p>
        </footer>
      </div>
    </motion.main>
  );
}