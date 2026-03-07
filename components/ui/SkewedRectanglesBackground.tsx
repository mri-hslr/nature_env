"use client";

import React from "react";

export const SkewedRectanglesBackground = () => {
  // 24 blocks to ensure the grid covers the entire perspective field
  const blocks = Array.from({ length: 24 }, (_, i) => i);
  
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-black [perspective:1200px]">
      {/* 1. TOP SEPARATOR LINE */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#10b981]/50 to-transparent z-20" />

      {/* 2. THE HIGH-CONTRAST SKEWED GRID */}
      <div 
        className="absolute inset-0 w-full h-[180%] flex flex-wrap justify-center gap-10 opacity-100" // Opacity set to 100%
        style={{ 
          transform: "rotateX(60deg) rotateZ(-25deg) translateY(-25%) scale(1.5)",
          transformStyle: "preserve-3d"
        }}
      >
        {blocks.map((i) => (
          <div
            key={`block-${i}`} // Ensuring unique key for grid blocks
            className="w-64 h-96 border-[2px] border-[#10b981] bg-[#10b981]/[0.05] shadow-[0_0_25px_rgba(16,185,129,0.3)]"
            style={{
              transform: `skewX(${i % 2 === 0 ? "-25deg" : "25deg"})`,
              filter: "blur(0.2px)"
            }}
          />
        ))}
      </div>

      {/* 3. CINEMATIC LIGHTING & DEPTH */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.25)_0%,transparent_70%)] z-10" />
      
      {/* 4. OVERLAY GRADIENT: Darkens the edges to make the center pop */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-20" />
      
      {/* 5. BOTTOM TRANSITION: Soft fade for the next section */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-20" />
    </div>
  );
};