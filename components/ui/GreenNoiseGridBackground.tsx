// components/ui/GreenNoiseGridBackground.tsx
"use client";

import React from "react";

export const GreenNoiseGridBackground = () => {
  return (
    <div className="absolute inset-0 h-full w-full bg-[#020617] overflow-hidden pointer-events-none">
      {/* LAYER 1: BASE DARK BACKGROUND */}
      <div className="absolute inset-0 bg-[#020617]" />

      {/* LAYER 2: ALTERNATING VERTICAL PANELS - Brightness synchronized */}
      <div 
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `repeating-linear-gradient(
            to right,
            #020617 0px,
            #020617 80px,
            #041e16 80px,
            #041e16 160px
          )`
        }}
      />

      {/* LAYER 3: SUBTLE VERTICAL DIVIDER LINES */}
      <div 
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `repeating-linear-gradient(
            to right,
            transparent 0px,
            transparent 79px,
            rgba(34, 197, 94, 0.2) 79px,
            rgba(34, 197, 94, 0.2) 80px
          )`
        }}
      />

      {/* LAYER 4: EMERALD RADIAL GLOW - Boosted to 0.5 for vibrant appearance */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: `radial-gradient(
            circle at 50% 30%,
            rgba(34, 197, 94, 0.5) 0%,
            rgba(34, 197, 94, 0.1) 50%,
            transparent 80%
          )`
        }}
      />

      {/* LAYER 5: NOISE OVERLAY */}
      <div 
        className="absolute inset-0 z-20 opacity-[0.15] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* LAYER 6: VIGNETTE FALLOFF - Subtle depth */}
      <div className="absolute inset-0 z-30 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(2,6,23,0.5)_100%)]" />
    </div>
  );
};