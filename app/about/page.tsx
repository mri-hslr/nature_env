"use client";

import { motion } from "framer-motion";
import { PageIntro } from "@/components/page/PageIntro";
import { PageSection } from "@/components/page/PageSection";
import { PinnedNarrative } from "@/components/pinned/PinnedNarrative";
import { useNarrativeMotion } from "@/components/pinned/useNarrativeMotion";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[#020a12] text-[#bae6fd] selection:bg-[#0ea5e9] selection:text-white overflow-hidden">
      
      {/* LAYER 0: Glacial Atmospheric Depth (Cryosphere) */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* Deep Arctic Base */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_#071927_0%,_#020a12_100%)]" />
        
        {/* Glacial Blue Shaft (Sunlight through ice) */}
        <div className="absolute top-0 right-[10%] w-[40%] h-[100%] bg-gradient-to-b from-[#7dd3fc] to-transparent opacity-10 blur-[120px] -rotate-12" />
        
        {/* Deep Ocean Pool (Bottom Left) */}
        <div className="absolute -bottom-[10%] -left-[5%] w-[60%] h-[70%] bg-[#0c4a6e] opacity-30 blur-[100px] rounded-full" />

        {/* Crystalline Frost Grain */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-screen" style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }} />
      </div>

      <div className="relative z-10">
        {/* PAGE INTRO: Explicitly forcing Glacial Blue and Snow White */}
        <div className="[&_h1]:text-[#ffffff] [&_p]:text-[#7dd3fc]">
          <PageIntro
            title="About Iceberg"
            lead="Iceberg is an environmental intelligence platform focused on evidence, transparency, and long-term environmental accountability."
          />
        </div>

        <PinnedNarrative
          height={300}
          ambient="guide"
          visual={
            <div className="group relative w-full h-full rounded-2xl bg-gradient-to-br from-[#071927] to-[#020a12] border border-[#7dd3fc]/20 shadow-[0_0_80px_rgba(125,211,252,0.1)] flex items-center justify-center overflow-hidden">
              {/* Frozen fracture effect */}
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(125,211,252,0.15)_0%,_transparent_70%)]" />
              
              <span className="relative text-[#f8fafc] text-[10px] font-black tracking-[0.6em] uppercase opacity-80">
                Glacial Core
              </span>
            </div>
          }
          narrative={(progress) => {
            const s1 = useNarrativeMotion(progress, { range: [0.10, 0.28] });
            const s2 = useNarrativeMotion(progress, { range: [0.28, 0.46] });
            const s3 = useNarrativeMotion(progress, { range: [0.46, 0.66] });
            const s4 = useNarrativeMotion(progress, { range: [0.66, 0.88] });

            return (
              <div className="[&_h2]:text-[#ffffff] [&_h2]:font-bold">
                {/* Ambient SVG: Ice Shards & Fractures */}
                <motion.svg
                  aria-hidden
                  className="pointer-events-none absolute -left-64 top-0 w-[800px] h-[800px] opacity-20 mix-blend-screen"
                  viewBox="0 0 600 600"
                  fill="none"
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 2, 0]
                  }}
                  transition={{
                    duration: 25,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                >
                  <path d="M300 50 L550 400 L300 550 L50 400 Z" stroke="#7dd3fc" strokeWidth="1" fill="url(#ice-grad)" />
                  <defs>
                    <linearGradient id="ice-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                </motion.svg>

                <motion.div style={s1} className="relative mb-32">
                  <PageSection title="Our Mission">
                    <p className="text-[#bae6fd] leading-relaxed">
                      Iceberg exists to make environmental systems legible. We work
                      at the intersection of data, science, and public
                      understanding.
                    </p>
                    <p className="mt-4 text-[#7dd3fc] font-medium border-l-2 border-[#0ea5e9] pl-4">
                      Our goal is clarity through evidence, enabling responsible
                      environmental action.
                    </p>
                  </PageSection>
                </motion.div>

                <motion.div style={s2} className="relative mb-32">
                  <PageSection title="How Iceberg Works">
                    <p className="text-[#bae6fd] leading-relaxed">
                      Environmental systems are complex and interconnected.
                      Iceberg provides structured ways to interpret them.
                    </p>
                    <p className="mt-4 text-[#bae6fd] leading-relaxed">
                      Systems thinking reveals relationships and long-term
                      implications.
                    </p>
                  </PageSection>
                </motion.div>

                <motion.div style={s3} className="relative mb-32">
                  <PageSection title="Accountability & Transparency">
                    <p className="text-[#bae6fd] leading-relaxed">
                      Environmental claims require traceable evidence and
                      verification.
                    </p>
                    <p className="mt-4 text-[#bae6fd] leading-relaxed italic">
                      Iceberg prioritizes long-term accountability over offsets.
                    </p>
                  </PageSection>
                </motion.div>

                <motion.div style={s4} className="relative mb-32">
                  <PageSection title="Our Values">
                    <p className="text-[#bae6fd] leading-relaxed">
                      Iceberg is guided by scientific integrity and community
                      participation.
                    </p>
                    <p className="mt-4 text-[#bae6fd] leading-relaxed">
                      Progress depends on shared understanding, not simplification.
                    </p>
                  </PageSection>
                </motion.div>
              </div>
            );
          }}
        />

        {/* Powerful Close */}
        <section className="py-48 text-center bg-gradient-to-t from-[#0ea5e9]/10 to-transparent">
          <p className="text-[#7dd3fc] text-xs font-bold tracking-[0.5em] uppercase mb-6">
            Purity of Evidence
          </p>
          <h2 className="text-[#ffffff] text-2xl font-light tracking-tight px-6 max-w-xl mx-auto">
            Truth is as permanent as the ice.
          </h2>
        </section>
      </div>
    </main>
  );
}