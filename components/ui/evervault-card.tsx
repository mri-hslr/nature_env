"use client";
import { useMotionValue, useMotionTemplate, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const EvervaultCard = ({
  text,
  className,
  accentColor = "#7dd3fc",
}: {
  text?: string;
  className?: string;
  accentColor?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    setRandomString(generateRandomString(3000));
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
    setRandomString(generateRandomString(3000));
  }

  return (
    <div 
      className={cn("relative group/card w-full h-full overflow-hidden rounded-3xl", className)} 
      onMouseMove={onMouseMove}
    >
      <CardPattern mouseX={mouseX} mouseY={mouseY} randomString={randomString} accentColor={accentColor} />
      <div className="relative z-10 flex items-center justify-center h-full pointer-events-none">
        <div className="relative p-4 rounded-full flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40 blur-md rounded-full" />
          <span className="z-20 text-white text-[10px] font-black tracking-[0.4em] uppercase text-center px-4">
            {text}
          </span>
        </div>
      </div>
    </div>
  );
};

function CardPattern({ mouseX, mouseY, randomString, accentColor }: any) {
  let maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`;
  
  return (
    <div className="pointer-events-none absolute inset-0">
      {/* Reduced overlay opacity to ensure background image is always visible */}
      <div className="absolute inset-0 rounded-3xl group-hover/card:bg-black/20 transition-colors duration-500" />
      
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover/card:opacity-100 transition duration-500"
        style={{ maskImage, WebkitMaskImage: maskImage, backgroundColor: accentColor }}
      />
      
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 mix-blend-overlay group-hover/card:opacity-100 transition duration-500"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <p className="text-[10px] h-full break-words whitespace-pre-wrap text-white font-mono font-bold leading-none p-4">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};