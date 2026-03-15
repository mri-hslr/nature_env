"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BrandStory() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center"
      >
        {/* LEFT: IMAGE WITH CINEMATIC GLOW */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] group">
          <img 
            src="https://plus.unsplash.com/premium_photo-1661632739714-4b25476dbc17?w=900&auto=format&fit=crop&q=60" 
            alt="Sustainability Lifestyle" 
            className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
        </div>

        {/* RIGHT: HIGH-IMPACT CONTENT */}
        <div className="space-y-10">
          <div className="space-y-4">
            <p className="text-cyan-400 font-mono text-xs tracking-[0.5em] uppercase font-bold">
              Est. 2026 // Our Foundation
            </p>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-white">
              Our Brand <br /> 
              <span className="text-transparent" style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.3)" }}>Story</span>
            </h2>
          </div>

          <p className="text-3xl md:text-4xl text-white font-medium leading-tight tracking-tight">
            At Blupedia, sustainability is not a category. It is the <span className="text-cyan-400">foundation</span> of every choice we make. 
          </p>

          <h4 className="text-lg md:text-xl text-white/60 leading-relaxed font-light max-w-xl">
            From plant-based skincare to artisan-crafted décor and responsible fashion, we create a marketplace where conscious living becomes elegant, accessible, and rewarding. 
          </h4>

          {/* NEW: SHOP NOW BUTTON (Magnetic Ghost Style) */}
          <motion.div 
            className="pt-6"
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/estore/shop">
              <button className="group relative flex items-center gap-6 overflow-hidden border border-white/20 px-10 py-5 transition-all duration-500 hover:border-cyan-400/50">
                {/* Background Slide Effect */}
                <div className="absolute inset-0 z-0 translate-y-full bg-white transition-transform duration-500 group-hover:translate-y-0" />
                
                {/* Button Text */}
                <span className="relative z-10 text-[11px] font-black uppercase tracking-[0.4em] text-white transition-colors duration-500 group-hover:text-black">
                  Shop Now
                </span>

                {/* Arrow Icon */}
                <svg 
                  className="relative z-10 h-4 w-4 -rotate-45 transition-all duration-500 group-hover:rotate-0 group-hover:text-black text-white" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}