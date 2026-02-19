"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "rgb(250, 250, 249)",
  gradientBackgroundEnd = "rgb(245, 245, 244)",
  firstColor = "217, 249, 157", // Soft Lime
  secondColor = "220, 252, 231", // Soft Green
  thirdColor = "254, 252, 232", // Cream
  fourthColor = "240, 253, 244", // Pale Mint
  fifthColor = "187, 247, 208", // Light Emerald
  pointerColor = "132, 204, 22",
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "h-full w-full relative overflow-hidden bg-[slate-50] top-0 left-0",
        containerClassName
      )}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={cn("", className)}>{children}</div>
      <div className="gradients-container h-full w-full blur-3xl opacity-40">
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(${firstColor},_0.8)_0,_rgba(${firstColor},_0)_50%)_no-repeat]`,
            `[mix-blend-mode:${blendingValue}] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `animate-first`
          )}
          style={{ "--size": size } as React.CSSProperties}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(${secondColor},_0.8)_0,_rgba(${secondColor},_0)_50%)_no-repeat]`,
            `[mix-blend-mode:${blendingValue}] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `animate-second`
          )}
          style={{ "--size": size } as React.CSSProperties}
        ></div>
      </div>
    </div>
  );
};