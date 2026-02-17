// app/components/sections/DraggableGallery.tsx
"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const GALLERY_IMAGES = [
  { id: 1, src: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8", title: "Ancient Forest" },
  { id: 2, src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e", title: "Golden Woods" },
  { id: 3, src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e", title: "Alpine Valley" },
  { id: 4, src: "https://images.unsplash.com/photo-1439405326854-015177fe7821", title: "Ocean Swell" },
  { id: 5, src: "https://images.unsplash.com/photo-1500627760312-ad3016a401c1", title: "River Flow" },
  { id: 6, src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b", title: "Cloudy Peaks" },
  { id: 7, src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05", title: "Foggy Heights" },
  { id: 8, src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d", title: "Deep Woodland" },
  { id: 9, src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff", title: "Waterfall Mist" },
  { id: 10, src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e", title: "Mountain Trail" },
  { id: 11, src: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad", title: "Autumn Bloom" },
  { id: 12, src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e", title: "Green Meadow" },
  { id: 13, src: "https://images.unsplash.com/photo-1433086566085-c7031622975b", title: "Lush Tropics" },
];

export const DraggableGallery = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [topZ, setTopZ] = useState(15);
  
    return (
      <section 
        ref={containerRef}
        className="draggable-container relative h-screen w-full bg-black overflow-hidden flex items-center justify-center border-y border-white/5"
      >
        {/* Background radial remains same */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-transparent to-transparent" />
        </div>
  
        {GALLERY_IMAGES.map((img, i) => (
          <motion.div
            key={img.id}
            drag
            dragConstraints={containerRef}
            dragElastic={0.15} // Lower elasticity for better control
            dragMomentum={true} // Enables smooth "gliding" after release
            dragTransition={{ 
              power: 0.3, // How far it slides after release
              timeConstant: 200, // Speed of the decay
              modifyTarget: (target) => Math.round(target / 10) * 10 // Snaps to grid for performance
            }}
            onDragStart={() => setTopZ(prev => prev + 1)}
            initial={{ 
              x: (Math.random() - 0.5) * 400, 
              y: (Math.random() - 0.5) * 200,
              rotate: (Math.random() - 0.5) * 15
            }}
            style={{ 
              zIndex: i,
              position: "absolute",
              willChange: "transform" // Critical for GPU acceleration
            }}
            whileDrag={{ 
              scale: 1.05, 
              zIndex: topZ + 100,
              cursor: "grabbing"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-48 h-64 md:w-64 md:h-80 cursor-grab touch-none"
          >
            <div className="h-full w-full rounded-xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl p-1.5 pointer-events-none">
              <img 
                src={`${img.src}?q=75&w=500&auto=format&fit=crop`} // Slightly lower res for better FPS
                alt={img.title}
                className="h-full w-full object-cover rounded-lg"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm p-2 rounded-md">
                 <p className="text-white text-[9px] font-mono tracking-widest uppercase">
                    {img.title}
                 </p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    );
  };