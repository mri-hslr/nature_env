"use client";
import { cn } from "@/lib/utils";
import React, { useMemo } from "react";

export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize,
  showGradient = true,
}: {
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
}) => {
  return (
    <div className={cn("h-full w-full relative bg-transparent", containerClassName)}>
      <div className="h-full w-full">
        <DotMatrix
          colors={colors}
          dotSize={dotSize ?? 3}
          opacities={opacities}
          animationSpeed={animationSpeed}
        />
      </div>
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-[#12100e] to-transparent" />
      )}
    </div>
  );
};

const DotMatrix = ({ colors, opacities, dotSize, animationSpeed }: any) => {
  return (
    <div className="absolute inset-0 h-full w-full [mask-image:radial-gradient(450px_at_center,white,transparent)]">
      <div 
        className="h-full w-full opacity-30"
        style={{
          backgroundImage: `radial-gradient(#84cc16 1px, transparent 0)`,
          backgroundSize: `${dotSize * 10}px ${dotSize * 10}px`,
        }}
      />
    </div>
  );
};