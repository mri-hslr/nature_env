"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { staggerContainerVariants } from "./variants";

interface StaggerProps {
  children: ReactNode;
}

export function Stagger({ children }: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainerVariants}
    >
      {children}
    </motion.div>
  );
}