"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

interface EditorialProps {
  progress: MotionValue<number>;
}

const highlights = [
  "GLOBAL ECOSYSTEM MONITORING —",
  "REAL-TIME SATELLITE ANALYSIS —",
  "CLIMATE RESILIENCE STRATEGY —",
  "BIODIVERSITY DATA AGGREGATION —"
];

export const EditorialHeadlines: React.FC<EditorialProps> = ({ progress }) => {
  // Appearance logic:
  // Starts appearing early (0.05) as Hero slides, solid at 0.12, 
  // fades out by 0.20 before Chapter 1 gets fully pinned.
  const opacity = useTransform(progress, [0.05, 0.12, 0.18, 0.22], [0, 1, 1, 0]);
  const scale = useTransform(progress, [0.05, 0.12], [0.95, 1]);

  return (
    <div className="relative h-screen w-full flex items-center bg-black overflow-hidden z-[60]">
      <motion.div 
        style={{ opacity, scale }}
        className="flex whitespace-nowrap"
      >
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            duration: 45, // Slightly slower for better readability
            ease: "linear",
          }}
          className="flex"
        >
          {[...highlights, ...highlights, ...highlights].map((text, i) => (
            <h2 
              key={i} 
              className="text-[12vw] font-black tracking-tighter text-white uppercase leading-none px-12"
            >
              {text}
            </h2>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};