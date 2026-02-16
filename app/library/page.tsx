"use client";

import { motion } from "framer-motion";
import { PageIntro } from "@/components/page/PageIntro";
import { PageSection } from "@/components/page/PageSection";
import { PinnedNarrative } from "@/components/pinned/PinnedNarrative";
import { useNarrativeMotion } from "@/components/pinned/useNarrativeMotion";

export default function LibraryPage() {
  return (
    <main className="relative min-h-screen bg-[#12100e] text-[#fefce8] selection:bg-[#3f6212] selection:text-white overflow-hidden">
      
      {/* LAYER 0: Shadowed Grove Atmosphere (Deep Archive) */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* Deep Umber Base */}
        <div className="absolute inset-0 bg-[#12100e]" />
        
        {/* Archive Light Shaft (Top Right) */}
        <div className="absolute top-0 right-[15%] w-[1px] h-[100%] bg-gradient-to-b from-[#84cc16] to-transparent opacity-30" />
        
        {/* Mossy Depth Wash (Bottom Left) */}
        <div className="absolute -bottom-[10%] -left-[5%] w-[70%] h-[70%] bg-[#3f6212] opacity-20 blur-[120px] rounded-full" />
        
        {/* Cedar Root Shadows (Right) */}
        <div className="absolute top-[20%] -right-[10%] w-[50%] h-[80%] bg-[#451a03] opacity-20 blur-[100px] rounded-full" />

        {/* Archive Dust Grain */}
        <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay" style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }} />
      </div>

      <div className="relative z-10">
        {/* PAGE INTRO: Forcing Lime and Parchment tones */}
        <div className="[&_h1]:text-[#84cc16] [&_p]:text-[#d9f99d]">
          <PageIntro
            title="Library"
            lead="A curated collection of research, datasets, and resources supporting evidence-based environmental understanding."
          />
        </div>

        <PinnedNarrative
          height={300}
          ambient="library"
          visual={
            <div className="group relative w-full h-full rounded-2xl bg-gradient-to-br from-[#1c1917] to-[#12100e] border border-[#84cc16]/20 shadow-[0_0_50px_rgba(132,204,22,0.05)] flex items-center justify-center overflow-hidden">
              {/* Vertical "Shelving" Structure */}
              <div className="absolute inset-0 flex justify-around opacity-10">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-px h-full bg-[#84cc16]" />
                ))}
              </div>
              
              {/* Central Growth Ring */}
              <motion.div 
                className="relative w-32 h-32 border-2 border-[#84cc16]/30 rounded-full"
                animate={{ scale: [1, 1.05, 1], rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              
              <span className="absolute bottom-8 text-[#84cc16] text-[9px] font-black tracking-[0.5em] uppercase">
                Resource Index
              </span>
            </div>
          }
          narrative={(progress) => {
            const s1 = useNarrativeMotion(progress, { range: [0.15, 0.3] });
            const s2 = useNarrativeMotion(progress, { range: [0.3, 0.45] });
            const s3 = useNarrativeMotion(progress, { range: [0.45, 0.6] });
            const s4 = useNarrativeMotion(progress, { range: [0.6, 0.75] });

            return (
              <div className="[&_h2]:text-[#84cc16] [&_h2]:font-bold">
                {/* Ambient SVG: Growth Rings / Records */}
                <motion.svg
                  aria-hidden
                  className="pointer-events-none absolute -left-48 top-0 w-[600px] h-[600px] opacity-10"
                  viewBox="0 0 600 600"
                  fill="none"
                >
                  <circle cx="300" cy="300" r="100" stroke="#84cc16" strokeWidth="1" />
                  <circle cx="300" cy="300" r="200" stroke="#84cc16" strokeWidth="1" strokeDasharray="10 20" />
                  <circle cx="300" cy="300" r="280" stroke="#84cc16" strokeWidth="0.5" />
                </motion.svg>

                <motion.div style={s1} className="relative mb-32">
                  <PageSection title="Research & Publications">
                    <p className="text-[#fefce8] leading-relaxed">Peer-reviewed studies and analytical reports.</p>
                    <p className="mt-4 text-[#84cc16] font-medium border-l-2 border-[#3f6212] pl-4 italic">
                      Contextual information accompanies each resource for deep analysis.
                    </p>
                  </PageSection>
                </motion.div>

                <motion.div style={s2} className="relative mb-32">
                  <PageSection title="Environmental Datasets">
                    <p className="text-[#fefce8] leading-relaxed">Datasets are organized by region and domain.</p>
                    <p className="mt-4 text-[#fefce8]">Metadata ensures transparency and long-term storage integrity.</p>
                  </PageSection>
                </motion.div>

                <motion.div style={s3} className="relative mb-32">
                  <PageSection title="Methodologies & Frameworks">
                    <p className="text-[#fefce8] leading-relaxed">Documented analytical approaches.</p>
                    <p className="mt-4 text-[#fefce8]">Supports reproducibility and cross-platform interpretation.</p>
                  </PageSection>
                </motion.div>

                <motion.div style={s4} className="relative mb-32">
                  <PageSection title="External Resources">
                    <p className="text-[#fefce8] leading-relaxed">Connections to trusted institutions.</p>
                    <p className="mt-4 text-[#fefce8]">Complementary materials are preserved within this digital grove.</p>
                  </PageSection>
                </motion.div>
              </div>
            );
          }}
        />

        {/* Closing Moment */}
        <section className="py-48 text-center bg-gradient-to-t from-[#1c1917] to-transparent">
          <p className="text-[#84cc16] text-[10px] font-black tracking-[0.6em] uppercase mb-6">
            Permanent Record
          </p>
          <h2 className="text-[#fefce8] text-2xl font-light tracking-tight px-6 max-w-xl mx-auto">
            Knowledge grows where truth is stored.
          </h2>
        </section>
      </div>
    </main>
  );
}