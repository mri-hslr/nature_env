// app/page.tsx
"use client";

import { useScroll } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { DraggableGallery } from "@/components/sections/DraggableGallery"; // New Import
import { ReflectiveOutro } from "@/components/sections/ReflectiveOutro";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-black">
      <Hero scrollProgress={scrollYProgress} />
      
      {/* REPLACED: HorizontalScroll & PinnedNarrative 
          WITH: DraggableGallery 
      */}
      <DraggableGallery />

      <ReflectiveOutro />
    </div>
  );
}