"use client";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Organic Cosmetics",
    details: "Natural formulations inspired by botanicals, herbs, and pure ingredients.",
    img: "https://plus.unsplash.com/premium_photo-1661458436994-5a1d36c28756?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3JnYW5pYyUyMGNvc21ldGljfGVufDB8fDB8fHww"
  },
  {
    name: "Handcrafted Products",
    details: "Tradition meets contemporary design through handmade objects created by skilled artisans.",
    img: "https://images.unsplash.com/photo-1759234119876-42e71955ae81?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGFuZGNyYWZ0ZWQlMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "Eco-Friendly Clothing",
    details: "Sustainable fabrics, breathable textures, and ethical production.",
    img: "https://images.unsplash.com/photo-1560506840-ec148e82a604?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b3JnYW5pYyUyMGNsb3RoaW5nfGVufDB8fDB8fHww"
  }
];

export default function FeaturedCategories() {
  return (
    /* REMOVED: bg-black and border-t to allow the soothing background to flow through */
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-transparent text-white">
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
              {/* Image with subtle shadow for depth on the animated bg */}
              <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-white/5 mb-8 relative shadow-2xl">
                <img 
                  src={cat.img} 
                  alt={cat.name} 
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                {/* Softened overlay to match the soothing theme */}
                <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="border-l border-white/10 pl-6 space-y-3 flex-grow">
                <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors uppercase leading-tight tracking-tight">
                  {cat.name}
                </h3>
                <p className="text-white/50 text-base font-light leading-relaxed">
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