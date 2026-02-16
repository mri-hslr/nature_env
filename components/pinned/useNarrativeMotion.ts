"use client";

import { MotionValue, useTransform } from "framer-motion";

interface NarrativeMotionConfig {
  /**
   * Scroll range where this block is active
   * Example: [0.2, 0.35]
   */
  range: [number, number];

  /**
   * Whether text should fade out after its active range
   */
  fadeOut?: boolean;
}

export function useNarrativeMotion(
  scrollYProgress: MotionValue<number>,
  { range, fadeOut = true }: NarrativeMotionConfig
) {
  const opacity = useTransform(
    scrollYProgress,
    fadeOut
      ? [range[0] - 0.05, range[0], range[1], range[1] + 0.05]
      : [range[0] - 0.05, range[0], range[1]],
    fadeOut ? [0, 1, 1, 0] : [0, 1, 1]
  );

  const y = useTransform(
    scrollYProgress,
    [range[0], range[1]],
    [12, 0]
  );

  const color = useTransform(
    scrollYProgress,
    range,
    ["rgb(120,120,120)", "rgb(20,20,20)"]
  );

  return {
    opacity,
    y,
    color,
  };
}