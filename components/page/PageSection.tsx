interface PageSectionProps {
  title: string;
  children: React.ReactNode;
}

export function PageSection({ title, children }: PageSectionProps) {
  return (
    <section className="max-w-5xl px-6 py-24 border-t border-neutral-200">
      <h2 className="text-3xl md:text-4xl font-serif mb-6 text-neutral-900">
        {title}
      </h2>
      <div className="text-neutral-700 leading-relaxed space-y-4 max-w-3xl">
        {children}
      </div>
    </section>
  );
}