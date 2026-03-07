"use client";



import React, { useRef, useState } from "react";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

import Image from "next/image";

const NARRATIVE_CONTENT = [

{

id: "01",

title: "01 Carbon Credits Guide Book",

text: "Potential to Generate Carbon Credits through EV",

image: "l1.avif",

},

{

id: "02",

title: "02 Types of Carbon Credits",

text: "Primary Markets to generate Carbon Credits From",

image: "l2.png",

},

{

id: "03",

title: "03 Carbon Credit Framework",

text: "United Nations Frame work Convention on Climate Change & Carbon Framework",

image: "l3.avif",

},
{

  id: "04",
  
  title: "04 World Bank Report on Carbon Credit Market",
  
  text: "A Guide by World Bank on Developing Domestic Carbon Credit Mechanism",
  
  image: "l4.avif",
  
  },

];



export default function LibraryPage() {

const containerRef = useRef<HTMLDivElement>(null);

const [activeIndex, setActiveIndex] = useState(0);



// ✅ EXACT SAME SCROLL LOGIC

const { scrollYProgress } = useScroll({

target: containerRef,

offset: ["start start", "end end"],

});



// ✅ COLOR DUALITY: DEEP SLATE (#0f172a) TO PAPER WHITE (#f8fafc)

const backgroundColor = useTransform(

scrollYProgress,

[0, 1],

["#ef4444", "#0a0a0a"]

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

firstColor="15, 23, 42" // Slate 900

secondColor="30, 41, 59" // Slate 800

thirdColor="248, 250, 252" // Slate 50

fourthColor="203, 213, 225" // Slate 300

fifthColor="2, 6, 23" // Blackest Blue

/>

<div

className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay"

style={{

backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,

}}

/>

</div>



<div className="relative z-10">

{/* HEADER SECTION */}

<section className="h-[60vh] flex items-center justify-center px-6 md:px-12">
  <h1 className="text-7xl md:text-[12vw] font-black tracking-tighter uppercase text-white leading-[0.8] text-center">
    The  <span className="opacity-20 text-black">Library</span>
  </h1>
</section>



{/* SPLIT NARRATIVE SECTION */}

{/* SPLIT NARRATIVE SECTION */}
<section
  className="relative grid min-h-screen"
  style={{
    gridTemplateColumns: "10% 40% 10% 40%", // Simplified grid
  }}
>
  {/* LEFT CONTENT COLUMN (Numbers + Text) */}
  <div
    className="col-span-2 py-32 px-8 space-y-[60vh]"
    style={{ borderRight: "1px solid rgba(0,0,0,0.15)" }}
  >
    {NARRATIVE_CONTENT.map((item, idx) => (
      <motion.div
        key={`${item.id}-${idx}`}
        className="grid grid-cols-[80px_1fr] gap-8" // This aligns number and text side-by-side
        onViewportEnter={() => setActiveIndex(idx)}
        viewport={{ amount: 0.5 }}
      >
        {/* THE NUMBER */}
        <div className="text-7xl md:text-8xl font-black text-black opacity-20 sticky top-32 h-fit">
          {item.id}
        </div>

        {/* THE TEXT */}
        <div className="max-w-xl">
          <p className="text-[10px] font-black tracking-[0.6em] uppercase text-black/60 mb-8">
            Intelligence // {item.id}
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black uppercase mb-8">
            {item.title}
          </h2>
          <p className="text-xl md:text-xl font-medium leading-relaxed text-black/80">
            {item.text}
          </p>
        </div>
      </motion.div>
    ))}
    <div className="h-[40vh]" />
  </div>
<div style={{ borderRight: "1px solid rgba(0,0,0,0.15)" }} />
<div
  className="hidden md:block sticky top-0 h-screen col-span-2 overflow-hidden"
  style={{
    gridColumn: "4 / span 2",
    height: "100vh",
  }}
>
  <div className="relative w-full h-full flex items-center justify-center">
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
          className={`w-full h-full ${
            NARRATIVE_CONTENT[activeIndex].id === "02"
              ? "object-contain p-8"
              : "object-cover"
          }`}
          alt="Library Resource Visual"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40 pointer-events-none" />

    </div>
  </div>
</div>

</section>



{/* FOOTER SECTION */}

<section className="h-screen flex items-center justify-center border-t border-black/10">

<h2 className="text-4xl md:text-8xl font-black tracking-tighter uppercase text-black opacity-10">

Information is the fuel

</h2>

</section>

</div>

</motion.main>

);

}

