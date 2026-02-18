// app/components/navigations/Header.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useIntro } from "@/app/context/IntroContext";

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

export const Header = () => {
  const pathname = usePathname();
  const { isComplete } = useIntro();

  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: isComplete ? 1 : 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      /* FIX: Reduced pt-6 to pt-3 (12px) to match Iceberg's tight margin.
         Added 'items-start' to anchor everything to the top of the container.
      */
      className="fixed top-0 left-0 w-full z-[100] px-8 pt-3 pb-2 flex items-start justify-between pointer-events-auto bg-transparent"
    >
      {/* LEFT: BRANDING */}
      <div className="flex items-start">
        <Link 
          href="/" 
          /* 'leading-none' is critical here; it removes the invisible 
             box-padding browsers add above uppercase letters. 
          */
          className="text-white text-base font-bold uppercase tracking-[0.5em] leading-none hover:opacity-70 transition-opacity duration-300"
        >
          Nature / Ecosystem
        </Link>
      </div>

      {/* RIGHT: NAVIGATION LINKS */}
      <ul className="flex items-start gap-8 md:gap-10">
        {navItems.map((link) => {
          const isActive = pathname === link.href;
          
          return (
            <li 
              key={link.name} 
              className="relative flex items-start"
            >
              <Link
                href={link.href}
                className={`text-white text-[11px] font-medium uppercase tracking-[0.3em] leading-none transition-opacity duration-300 ${
                  isActive ? "opacity-100" : "opacity-60 hover:opacity-100"
                }`}
              >
                {link.name}
              </Link>

              {/* ACTIVE PAGE UNDERLINE */}
              {isActive && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1.5 left-0 w-full h-[1px] bg-white"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
};