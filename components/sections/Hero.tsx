"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
 import { useMedia } from "@/src/hooks/useMedia";

export function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isDesktop = useMedia("(min-width: 768px)");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Scroll-driven opacity
  const videoOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0.2, 0.45], [0, 1]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-black pointer-events-none"
    >
      {/* VIDEO — DESKTOP ONLY */}
      {isDesktop && (
        <motion.video
          style={{ opacity: videoOpacity }}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero.jpg"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </motion.video>
      )}

      {/* IMAGE — MOBILE OR AFTER VIDEO */}
      {!isDesktop && (
        <img
          src="/hero.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
      )}

      {isDesktop && (
        <motion.img
          src="/hero.jpg"
          alt=""
          style={{ opacity: imageOpacity }}
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />
      )}

      {/* FOREGROUND TEXT */}
      <div className="relative z-10 pointer-events-auto flex min-h-screen items-center px-6 md:px-12">
        <h1 className="heading-xl text-white">NATURE</h1>
      </div>
    </section>
  );
}