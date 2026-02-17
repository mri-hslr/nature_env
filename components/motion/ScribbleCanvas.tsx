// app/components/motion/ScribbleCanvas.tsx
"use client";

import React, { useEffect, useRef } from "react";

export const ScribbleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();

    // INCREASED DENSITY: 150 total elements
    const particles = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      // Randomly assign as horizontal (0), vertical (1), or free-form (2)
      type: Math.floor(Math.random() * 3),
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
      history: [] as { x: number; y: number }[],
      maxLength: Math.floor(Math.random() * 20) + 15,
    }));

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        // Movement Logic
        if (p.type === 0) { // Horizontal focus
            p.x += p.vx * 1.5;
            p.y += Math.sin(Date.now() * 0.005) * 0.2;
        } else if (p.type === 1) { // Vertical focus
            p.y += p.vy * 1.5;
            p.x += Math.cos(Date.now() * 0.005) * 0.2;
        } else { // Chaotic doodle
            p.x += p.vx;
            p.y += p.vy;
        }

        // Screen wrap
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        p.history.push({ x: p.x, y: p.y });
        if (p.history.length > p.maxLength) p.history.shift();

        // DRAWING
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 255, 255, ${Math.random() * 0.2 + 0.1})`;
        ctx.lineWidth = 0.8;
        
        ctx.moveTo(p.history[0].x, p.history[0].y);
        for (let i = 1; i < p.history.length; i++) {
          ctx.lineTo(p.history[i].x, p.history[i].y);
        }
        ctx.stroke();
      });

      // ADD STATIC "TECH" GRID MARKS
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      for(let i = 0; i < canvas.width; i += 100) {
          ctx.beginPath();
          ctx.moveTo(i, 0); ctx.lineTo(i, 20); ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(i, canvas.height); ctx.lineTo(i, canvas.height - 20); ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 pointer-events-none" 
    />
  );
};