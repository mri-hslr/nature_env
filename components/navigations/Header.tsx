"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      {/* The key={pathname} on the motion div is the secret sauce. 
        It tells Framer Motion that the 'identity' of the navbar has changed 
        slightly, triggering the 'animate' variants on every route change.
      */}
      <motion.nav
        key={pathname}
        initial={{ y: -10, opacity: 0.8 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="flex items-center gap-1 px-3 py-2 bg-white/80 backdrop-blur-md border border-neutral-200 rounded-full shadow-sm"
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
    </header>
  );
}