"use client";

import React from "react";
import { motion } from "framer-motion";

export const AmbientLamp = () => {
  return (
    /* Z-20 ensures it sits between the bg-color (z-30) and the noise (z-10) */
    <div className="absolute inset-0 z-20 h-screen w-full overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex w-full h-full items-start justify-center isolate">
        
        {/* LEFT CONE OF LIGHT */}
        <div
          style={{
            backgroundImage: `conic-gradient(from 70deg at center top, #84cc16 0deg, transparent 60deg)`,
          }}
          className="absolute top-0 right-1/2 h-96 w-[65rem] opacity-60"
        >
          <div className="absolute w-full left-0 bg-[#12100e] h-80 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-80 h-full left-0 bg-[#12100e] bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </div>

        {/* RIGHT CONE OF LIGHT */}
        <div
          style={{
            backgroundImage: `conic-gradient(from 290deg at center top, transparent 300deg, #84cc16 360deg)`,
          }}
          className="absolute top-0 left-1/2 h-96 w-[65rem] opacity-60"
        >
          <div className="absolute w-80 h-full right-0 bg-[#12100e] bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-full right-0 bg-[#12100e] h-80 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </div>

        {/* ATMOSPHERIC GLOW CORE */}
        <div className="absolute top-0 h-96 w-full scale-x-150 bg-[#12100e] blur-3xl opacity-60"></div>
        <div className="absolute top-0 z-50 h-96 w-full bg-transparent opacity-20 backdrop-blur-md"></div>
        
        {/* MAIN LIGHT SOURCE */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50 h-64 w-[50rem] rounded-full bg-[#84cc16] opacity-50 blur-[120px]"></div>
        
        {/* LIGHT BEAM BRIGHTNESS */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 h-64 w-96 rounded-full bg-[#d9f99d] blur-3xl opacity-60" />
        
        {/* THE HORIZONTAL ACCENT LINE */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-40 h-[2px] w-[70rem] bg-gradient-to-r from-transparent via-[#84cc16] to-transparent shadow-[0_0_35px_#84cc16]"></div>
      </div>
    </div>
  );
};