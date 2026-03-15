"use client";
import { motion } from "framer-motion";

// Updated data structure with image links for each category
const categories = [
  {
    name: "Organic Cosmetics",
    details: "Natural formulations inspired by botanicals, herbs, and pure ingredients.",
    img: "https://images.unsplash.com/photo-1582615908486-aa0a3958e60e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b3JnYW5pYyUyMGNvc21ldGljfGVufDB8fDB8fHww"
  },
  {
    name: "Handcrafted Products",
    details: "Tradition meets contemporary design through handmade objects created by skilled artisans.",
    img: "https://images.unsplash.com/photo-1759234119876-42e71955ae81?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGFuZGNyYWZ0ZWQlMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "Eco-Friendly Clothing",
    details: "Sustainable fabrics, breathable textures, and ethical production.",
    img: "https://images.unsplash.com/photo-1560859259-fcf2b952aed8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export default function FeaturedCategories() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-center">
          Featured Categories
        </h2>
        
        {/* RESPONSIVE GRID LAYOUT: STACKS IMAGES AND TEXT */}
        <div className="grid md:grid-cols-3 gap-12">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group cursor-pointer flex flex-col"
            >
              {/* IMAGE CONTAINER with Cinematic Scale Effect */}
              <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-zinc-900 mb-8 relative">
                <img 
                  src={cat.img} 
                  alt={cat.name} 
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* TEXT AREA aligned to Iceberg Doc style */}
              <div className="border-l border-white/20 pl-6 space-y-3 flex-grow">
                <h3 className="text-2xl font-bold group-hover:text-emerald-500 transition-colors uppercase leading-tight tracking-tight">
                  {cat.name}
                </h3>
                <p className="text-white/60 text-base font-light leading-relaxed">
                  {cat.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}