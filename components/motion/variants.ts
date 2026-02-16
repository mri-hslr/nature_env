import { Variants } from "framer-motion";

// Explicit cubic-bezier tuple type
const editorialEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const EASING = {
  editorial: editorialEase,
};

export const DURATIONS = {
  fast: 0.4,
  base: 0.6,
  slow: 0.8,
};

export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATIONS.base,
      ease: EASING.editorial,
    },
  },
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};