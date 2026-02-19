"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

// Adaptive color mapping based on site routes
const getThemeColor = (path: string) => {
  if (path.includes("/library")) return "#ea580c"; // Orange
  if (path.includes("/blog")) return "#059669";    // Green
  if (path.includes("/events")) return "#2563eb";  // Blue
  if (path.includes("/guide")) return "#eab308";   // Yellow
  return "#84cc16"; // Iceberg Green
};

export const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, role: "assistant", text: "Welcome. How can I assist with your environmental research today?" }
  ]);
  
  const pathname = usePathname();
  const themeColor = getThemeColor(pathname);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to latest message for better UX
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { id: Date.now(), role: "user", text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    // Mock AI response for UI feedback
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        role: "assistant",
        text: "Analyzing local ecosystem data based on your inquiry..."
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        
        {/* THE AI ICON: Neural Brain */}
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setIsOpen(true)}
            className="relative flex items-center justify-center w-16 h-16 rounded-full bg-black border border-white/10 shadow-2xl group overflow-hidden pointer-events-auto"
          >
            <motion.div 
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 blur-xl"
              style={{ backgroundColor: themeColor }}
            />
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="relative z-10">
              <path d="M9.5 14.5C9.5 14.5 10 13 12 13C14 13 14.5 14.5 14.5 14.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              <motion.path 
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z" 
                stroke={themeColor} strokeWidth="0.5"
              />
              <path d="M12 7V8M12 16V17M17 12H16M8 12H7M15.5 8.5L14.8 9.2M9.2 14.8L8.5 15.5M15.5 15.5L14.8 14.8M9.2 9.2L8.5 8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </motion.button>
        )}

        {/* CINEMATIC DRAWER PANEL: Re-proportioned */}
        {isOpen && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            // WIDTH REDUCED to 340px | HEIGHT INCREASED to 580px
            className="w-[340px] h-[580px] bg-black/95 backdrop-blur-3xl border border-white/10 rounded-[2rem] overflow-hidden flex flex-col shadow-2xl pointer-events-auto"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: themeColor }} />
                <span className="text-[9px] font-black tracking-[0.4em] uppercase text-white/50">System Intelligence</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-[9px] font-black tracking-widest uppercase text-white/30 hover:text-white transition-colors">
                Close
              </button>
            </div>

            {/* Conversation Feed */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[90%] px-4 py-3 rounded-2xl text-[12px] leading-relaxed ${
                    msg.role === "user" 
                    ? "bg-white/10 text-white" 
                    : "bg-transparent border border-white/5 text-white/70 italic"
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input Area: Minimalized for narrower width */}
            <form onSubmit={handleSend} className="p-6 pt-0">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Inquire..."
                  className="w-full bg-white/5 border-none rounded-xl px-5 py-3.5 text-xs text-white placeholder:text-white/20 focus:ring-0 outline-none"
                />
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: isFocused ? "100%" : "0%" }}
                  className="absolute bottom-0 left-0 h-[1px] z-10"
                  style={{ backgroundColor: themeColor }}
                />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-[9px] font-black tracking-widest uppercase text-white/40 hover:text-white transition-colors">
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};