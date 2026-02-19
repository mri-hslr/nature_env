// components/ui/AmbientLamp.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export const AmbientLamp = () => {
  return (
    <div className="fixed inset-0 -z-20 h-screen w-full overflow-hidden bg-black pointer-events-none">
      <div className="relative flex w-full h-full items-start justify-center isolate z-0">
        
        {/* LEFT CONE - Reduced opacity for production */}
        <motion.div
          initial={{ opacity: 0.1, width: "20rem" }}
          whileInView={{ opacity: 0.4, width: "65rem" }}
          transition={{ delay: 0.1, duration: 1.2, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(from 70deg at center top, #84cc16 0deg, transparent 60deg)`,
            mixBlendMode: "screen", // Prevents the flat "layer" look
          }}
          className="absolute top-0 right-1/2 h-96 w-[65rem]"
        >
          <div className="absolute w-full left-0 bg-black h-80 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* RIGHT CONE - Reduced opacity for production */}
        <motion.div
          initial={{ opacity: 0.1, width: "20rem" }}
          whileInView={{ opacity: 0.4, width: "65rem" }}
          transition={{ delay: 0.1, duration: 1.2, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(from 290deg at center top, transparent 300deg, #84cc16 360deg)`,
            mixBlendMode: "screen",
          }}
          className="absolute top-0 left-1/2 h-96 w-[65rem]"
        >
          <div className="absolute w-full right-0 bg-black h-80 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* CORE GLOW - Lowered opacity and increased blur */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50 h-64 w-[50rem] rounded-full bg-[#84cc16] opacity-20 blur-[160px]"></div>
        
        {/* LIGHT BEAM BRIGHTNESS */}
        <motion.div
          initial={{ width: "12rem" }}
          whileInView={{ width: "28rem" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 z-30 h-64 w-96 rounded-full bg-[#d9f99d] blur-3xl opacity-30"
        />
      </div>
    </div>
  );
};