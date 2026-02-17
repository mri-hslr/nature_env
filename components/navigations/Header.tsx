// app/components/navigations/Header.tsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useIntro } from "@/app/context/IntroContext"; // Added Context Import

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Guide", href: "/guide" },
    { name: "Library", href: "/library" },
    { name: "Blog", href: "/blog" },        
    { name: "Community", href: "/community" },
    { name: "FAQ", href: "/support" },  
  ];

export function Header() {
  const pathname = usePathname();
  const { isComplete } = useIntro(); // Added Intro State

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none">
      <AnimatePresence>
        {/* The Header only renders its motion.nav when isComplete is true.
           This ensures it stays hidden during the cinematic montage and zoom.
        */}
        {isComplete && (
          <motion.nav
            key={pathname}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.1 // Slight delay to let the Hero text lead the motion
            }}
            className="pointer-events-auto flex items-center gap-1 px-3 py-2 bg-white/80 backdrop-blur-md border border-neutral-200 rounded-full shadow-sm"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-1.5 text-sm font-medium transition-colors hover:text-neutral-900"
                  style={{ color: isActive ? "#000" : "#666" }}
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {isActive && (
                    <motion.div
                      layoutId="nav-active-pill"
                      className="absolute inset-0 bg-neutral-100 rounded-full -z-0"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}