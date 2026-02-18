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

  export const Header = () => {
    return (
      <nav className="absolute top-0 left-0 w-full z-[100] px-8 py-10 flex items-baseline justify-between pointer-events-auto">
        {/* LEFT: BRANDING */}
        <div className="flex items-center gap-2">
          <Link 
            href="/" 
            className="text-white text-xs font-medium uppercase tracking-[0.4em] hover:opacity-70 transition-opacity duration-300"
          >
            Nature / Ecosystem
          </Link>
        </div>
  
        {/* CENTER: EMPTY (ICEBERG LOGIC) */}
        <div className="hidden md:block" />
  
        {/* RIGHT: NAVIGATION LINKS */}
        <ul className="flex items-center gap-8">
          {navItems.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-white text-[10px] font-light uppercase tracking-[0.3em] hover:opacity-50 transition-opacity duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  };  