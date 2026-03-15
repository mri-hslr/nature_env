"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useIntro } from "@/app/context/IntroContext";
import { ShoppingCart } from "lucide-react";

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
      className="fixed top-0 left-0 w-full z-[100] px-8 pt-3 pb-2 flex items-start justify-between pointer-events-auto bg-transparent"
    >
      {/* 1. LEFT: BRANDING (Aligned Far Left) */}
      <div className="flex items-start">
        <Link 
          href="/" 
          className="text-white text-base font-bold uppercase tracking-[0.5em] leading-none hover:opacity-70 transition-opacity duration-300"
        >
          Blupedia
        </Link>
      </div>

      {/* 2. CENTER-LEFT: NAVIGATION LINKS (Shifted Left via flex-grow) */}
      <div className="flex-grow flex items-start ml-16 lg:ml-24">
        <ul className="flex items-start gap-8 md:gap-10">
          {navItems.map((link) => {
            const isActive = pathname === link.href;
            
            return (
              <li key={link.name} className="relative flex items-start">
                <Link
                  href={link.href}
                  className={`text-white text-[11px] font-medium uppercase tracking-[0.3em] leading-none transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  {link.name}
                </Link>
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
      </div>

      {/* 3. RIGHT: ACTIONS (Login + Cart) */}
      <div className="flex items-start gap-8 md:gap-10">
        <Link 
          href="/login" 
          className={`text-white text-[11px] font-medium uppercase tracking-[0.3em] leading-none transition-opacity duration-300 ${
            pathname === "/login" ? "opacity-100" : "opacity-60 hover:opacity-100"
          }`}
        >
          Login
        </Link>

        {/* SHOPPING CART ICON */}
        <Link 
  href="/estore" 
  className="relative text-white opacity-60 hover:opacity-100 transition-opacity duration-300 flex items-center leading-none mt-[-2px]"
>
  <ShoppingCart size={16} strokeWidth={2.5} />
  {/* The emerald dot maintains brand consistency */}
  <span className="absolute -top-1 -right-1.5 w-2 h-2 bg-[#10b981] rounded-full shadow-[0_0_8px_#10b981]" />
</Link>
      </div>
    </motion.nav>
  );
};