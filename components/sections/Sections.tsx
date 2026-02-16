import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export function Section({ children, className = "" }: SectionProps) {
  return (
    <section
      className={`px-6 md:px-12 py-section md:py-section ${className}`}
    >
      {children}
    </section>
  );
}