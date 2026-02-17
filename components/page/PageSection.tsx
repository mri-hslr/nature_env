import React from 'react';

interface PageSectionProps {
  // Changing title from 'string' to 'React.ReactNode' allows JSX as shown in your code
  title: React.ReactNode; 
  children: React.ReactNode;
}

export const PageSection: React.FC<PageSectionProps> = ({ title, children }) => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div>{children}</div>
    </section>
  );
};