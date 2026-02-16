"use client";

import { motion, MotionValue } from "framer-motion";
import { ReactNode } from "react";

interface ScrollFadeProps {
  opacity: MotionValue<number>;
  children: ReactNode;
}

export function ScrollFade({ opacity, children }: ScrollFadeProps) {
  return <motion.div style={{ opacity }}>{children}</motion.div>;
}