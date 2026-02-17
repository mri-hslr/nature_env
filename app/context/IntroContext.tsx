// app/context/IntroContext.tsx
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface IntroContextType {
  isIntroActive: boolean;
  isComplete: boolean;
  setIntroComplete: () => void;
}

const IntroContext = createContext<IntroContextType | undefined>(undefined);

export const IntroProvider = ({ children }: { children: React.ReactNode }) => {
  const [isIntroActive, setIsIntroActive] = useState(true); // Always active on mount
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Lock scroll on every refresh
    document.body.classList.add("no-scroll");
  }, []);

  const setIntroComplete = () => {
    setIsIntroActive(false);
    setIsComplete(true);
    document.body.classList.remove("no-scroll");
  };

  return (
    <IntroContext.Provider value={{ isIntroActive, isComplete, setIntroComplete }}>
      {children}
    </IntroContext.Provider>
  );
};

export const useIntro = () => {
  const context = useContext(IntroContext);
  if (!context) throw new Error("useIntro must be used within IntroProvider");
  return context;
};