"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUpVariants } from "./variants";

interface FadeUpProps {
  children: ReactNode;
}

export function FadeUp({ children }: FadeUpProps) {
  return (
    <motion.div variants={fadeUpVariants}>
      {children}
    </motion.div>
  );
}