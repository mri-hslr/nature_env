// components/estore/FounderQuote.tsx
"use client";
import { motion } from "framer-motion";

export default function FounderQuote() {
  return (
    <section className="py-40 px-6 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center space-y-8"
      >
        <blockquote className="text-2xl md:text-4xl italic font-light leading-relaxed text-white/90">
          "Every product is chosen through careful evaluation of ingredients, craftsmanship, sustainability standards, and ethical production values." 
        </blockquote>
        <div className="space-y-1">
          <p className="text-xl font-bold uppercase tracking-widest">— Mittal Maurya </p>
          <p className="text-sm text-emerald-500 font-mono">FOUNDER </p>
        </div>
      </motion.div>
    </section>
  );
}