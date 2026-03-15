// components/estore/BrandStory.tsx
"use client";
import { motion } from "framer-motion";

export default function BrandStory() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-20 items-center"
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          <img 
            src="https://plus.unsplash.com/premium_photo-1661632739714-4b25476dbc17?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b3JnYW5pYyUyMGNvc21ldGljfGVufDB8fDB8fHww" 
            alt="Sustainability Lifestyle" 
            className="object-cover w-full h-full"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">Our Brand Story </h2>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light">
            At Blupedia, sustainability is not a category — it is the foundation of every choice we make. 
          </p>
          <p className="text-lg text-white/60 leading-relaxed">
            From plant-based skincare to artisan-crafted décor and responsible fashion, we create a marketplace where conscious living becomes elegant, accessible, and rewarding. 
          </p>
        </div>
      </motion.div>
    </section>
  );
}