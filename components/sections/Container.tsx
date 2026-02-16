import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  type?: "marketing" | "content";
}

export function Container({ children, type = "marketing" }: ContainerProps) {
  const maxWidth =
    type === "content" ? "max-w-content" : "max-w-container";

  return (
    <div className={`${maxWidth} mx-auto`}>
      {children}
    </div>
  );
}