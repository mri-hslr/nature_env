"use client";

import React from "react";
import { motion } from "framer-motion";
import StoreHero from "@/components/estore/StoreHero";
import BrandStory from "@/components/estore/BrandStory";
import OrganicSelection from "@/components/estore/OrganicSelection";
import FeaturedCategories from "@/components/estore/FeaturedCategories";
import FounderQuote from "@/components/estore/FounderQuote";

export default function EstorePage() {
  return (
    <motion.main 
      /* ANIMATED BACKGROUND: Shifts between deep forest greens and soft charcoal */
      animate={{
        background: [
          "radial-gradient(circle at 20% 20%, #020617 0%, #000000 100%)",
          "radial-gradient(circle at 80% 80%, #064e3b 0%, #000000 100%)",
          "radial-gradient(circle at 50% 50%, #022c22 0%, #000000 100%)",
          "radial-gradient(circle at 20% 20%, #020617 0%, #000000 100%)",
        ],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear",
      }}
      className="min-h-screen text-white overflow-hidden relative"
    >
      {/* GRAIN OVERLAY: Adds a premium, tactile texture to the background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}
      />

      <div className="relative z-10">
        <StoreHero />
        <BrandStory />
        <OrganicSelection />
        <FeaturedCategories />
        <FounderQuote />
      </div>
    </motion.main>
  );
}