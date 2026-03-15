// components/estore/StoreHero.tsx
"use client";
import { motion } from "framer-motion";

export default function StoreHero() {
  return (
    <section className="relative py-40 px-6 text-center flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl space-y-8"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
          Blupedia turns awareness into everyday impact. 
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-white/90">
          A sustainable future begins with responsible living.
        </h2>
        <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
          Blupedia turns everyday digital activity into meaningful social and economic value. 
          One platform for conscious shopping, social interaction, and future digital ownership.
        </p>
      </motion.div>
    </section>
  );
}