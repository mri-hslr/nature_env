// components/estore/OrganicSelection.tsx
"use client";
import { motion } from "framer-motion";

const products = [
  {
    title: "Essential Oils ",
    desc: "Relax and unwind with our wide variety of essential oils. ",
    img: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1887"
  },
  {
    title: "Organic Soaps",
    desc: "Keep your skin clean and healthy. Hypoallergenic & vegan.",
    img: "https://images.unsplash.com/photo-1605264964528-06403738d6dc?q=80&w=1996"
  },
  {
    title: "Soy Candles ",
    desc: "Let our line of scented soy candles improve your mood. ",
    img: "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1887"
  }
];

export default function OrganicSelection() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl font-bold mb-12 uppercase tracking-widest text-center"
      >
        Organic Selection 
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-10">
        {products.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="aspect-square overflow-hidden rounded-xl mb-6 bg-zinc-900">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">{item.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}