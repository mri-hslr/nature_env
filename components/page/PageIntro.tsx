interface PageIntroProps {
  title: string;
  lead: string;
}

export function PageIntro({ title, lead }: PageIntroProps) {
  return (
    <section className="max-w-5xl px-6 pt-32 pb-24">
      <h1 className="text-6xl md:text-7xl font-serif tracking-tight mb-8 text-neutral-900">
        {title}
      </h1>
      <p className="text-lg md:text-xl text-neutral-600 max-w-3xl leading-relaxed">
        {lead}
      </p>
    </section>
  );
}