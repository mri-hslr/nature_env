"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

interface HeroCurtainsProps {
  scrollProgress: MotionValue<number>;
}

export const HeroCurtains: React.FC<HeroCurtainsProps> = ({ scrollProgress }) => {
  const panels = [
    { id: 1, color: "#050505", start: 0.0, end: 0.4 },
    { id: 2, color: "#080808", start: 0.15, end: 0.55 },
    { id: 3, color: "#0a0a0a", start: 0.3, end: 0.7 },
    { id: 4, color: "#0c0c0c", start: 0.45, end: 0.85 },
    { id: 5, color: "#000000", start: 0.6, end: 1.0 },
  ];

  return (
    <div className="flex w-full h-full pointer-events-none">
      {panels.map((panel) => {
        const scaleX = useTransform(
          scrollProgress,
          [panel.start, panel.end],
          [0, 1]
        );

        return (
          <motion.div
            key={panel.id}
            style={{
              scaleX,
              originX: 0,
              backgroundColor: panel.color,
            }}
            className="h-full flex-1 border-r border-white/5 last:border-none will-change-transform"
          />
        );
      })}
    </div>
  );
};