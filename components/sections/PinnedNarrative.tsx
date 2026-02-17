"use client";

import React, { useRef } from "react";
import { motion, MotionValue, useTransform, useScroll } from "framer-motion";

interface PinnedProps {
  progress: MotionValue<number>;
  imageSrc: string;
  title: string;
  description: string;
  chapterNumber: string;
}

export const PinnedNarrative: React.FC<PinnedProps> = ({ 
  imageSrc, 
  title, 
  description, 
  chapterNumber 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // We track scroll progress relative to this specific 300vh block
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Text goes from bottom to top as we scroll the 300vh
  const textY = useTransform(scrollYProgress, [0, 1], ["60vh", "-60vh"]);
  
  // Image scale and subtle fade
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 0.95]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full" 
      style={{ height: "300vh" }} // This creates the "scrolling room"
    >
      {/* THE STICKY WRAPPER 
        This is the most critical part. It must be 'sticky' and 'top-0'.
        It stays in the viewport while the parent (300vh) scrolls by.
      */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div 
          style={{ opacity: contentOpacity }}
          className="flex h-full w-full items-center px-6 md:px-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto h-full">
            
            {/* LEFT: THE PINNED IMAGE */}
            <div className="relative h-[50vh] md:h-[70vh] w-full">
              <div className="relative h-full w-full overflow-hidden rounded-lg border border-white/5">
                <motion.img
                  src={imageSrc}
                  alt={title}
                  style={{ scale: imageScale }}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>

            {/* RIGHT: THE SCROLLING TEXT TRACK */}
            <div className="relative h-full flex items-center justify-center">
              {/* This container is fixed in height (70vh), 
                but the motion.div inside it moves from bottom to top.
              */}
              <div className="relative h-[70vh] w-full overflow-hidden">
                <motion.div 
                  style={{ y: textY }} 
                  className="flex flex-col pr-8"
                >
                  <span className="text-[#2dd4bf] font-mono text-[10px] tracking-[0.4em] uppercase mb-6 block">
                    {chapterNumber}
                  </span>
                  <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 uppercase tracking-tighter leading-[0.9]">
                    {title}
                  </h3>
                  <p className="text-zinc-400 text-xl leading-relaxed font-light max-w-md">
                    {description}
                  </p>
                  
                  <div className="mt-16 flex items-center gap-6">
                    <div className="h-[1px] w-16 bg-[#2dd4bf]/50" />
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-[0.2em]">
                      Continue scrolling
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};