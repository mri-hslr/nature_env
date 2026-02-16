"use client";

import { motion } from "framer-motion";
import { PageIntro } from "@/components/page/PageIntro";
import { PageSection } from "@/components/page/PageSection";
import { PinnedNarrative } from "@/components/pinned/PinnedNarrative";
import { useNarrativeMotion } from "@/components/pinned/useNarrativeMotion";

export default function UserGuidePage() {
  return (
    <main className="relative min-h-screen bg-[#f5f7f2] text-[#2d3731] selection:bg-[#d1d9cf] selection:text-[#2d3731] overflow-hidden">
      
      {/* LAYER 0: Morning Mist Atmosphere (High-Visibility Organic) */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* Soft Lichen Base */}
        <div className="absolute inset-0 bg-[#f5f7f2]" />
        
        {/* Soft Light Wash (Top Center) */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[90%] h-[70%] bg-white opacity-60 blur-[120px] rounded-full" />
        
        {/* Architectural Grid Layer */}
        <div className="absolute inset-0 opacity-[0.1]" 
             style={{ 
               backgroundImage: `linear-gradient(#6b8c77 0.5px, transparent 0.5px), linear-gradient(90deg, #6b8c77 0.5px, transparent 0.5px)`, 
               backgroundSize: '50px 50px' 
             }} />
        
        {/* Soft Stone Pool (Bottom Right) */}
        <div className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-[#d1d9cf] opacity-40 blur-[140px] rounded-full" />

        {/* Paper Grain Texture */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-multiply" style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }} />
      </div>

      <div className="relative z-10">
        {/* PAGE INTRO: Forcing Lichen and Deep Charcoal tones */}
        <div className="[&_h1]:text-[#4a5d51] [&_p]:text-[#607266]">
          <PageIntro
            title="User Guide"
            lead="This guide introduces the core concepts, workflows, and tools that make up the Iceberg platform."
          />
        </div>

        <PinnedNarrative
          height={300}
          ambient="guide"
          visual={
            <div className="group relative w-full h-full rounded-2xl bg-white/80 backdrop-blur-sm border border-[#6b8c77]/20 shadow-[0_15px_40px_rgba(107,140,119,0.05)] flex items-center justify-center overflow-hidden">
              {/* Internal 4-Quadrant Fine-Line Grid */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[0.5px] h-full bg-[#6b8c77]/20 absolute" />
                <div className="h-[0.5px] w-full bg-[#6b8c77]/20 absolute" />
                
                {/* Concentric Measurement Circles */}
                <div className="w-32 h-32 border border-[#6b8c77]/10 rounded-full absolute" />
                <div className="w-64 h-64 border border-[#6b8c77]/5 rounded-full absolute" />
              </div>
              
              {/* Soft Pulsing Compass */}
              <motion.div 
                className="relative w-40 h-40 border border-[#6b8c77]/30 rounded-full flex items-center justify-center"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Markers */}
                <div className="absolute top-0 w-[1px] h-4 bg-[#6b8c77]" />
                <div className="absolute bottom-0 w-[1px] h-4 bg-[#6b8c77]/40" />
                <div className="absolute left-0 h-[1px] w-4 bg-[#6b8c77]/40" />
                <div className="absolute right-0 h-[1px] w-4 bg-[#6b8c77]/40" />
                
                {/* Needle */}
                <motion.div 
                  className="absolute w-[1px] h-20 bg-gradient-to-t from-transparent via-[#6b8c77] to-transparent origin-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
              
              <span className="absolute bottom-8 text-[#6b8c77] text-[9px] font-bold tracking-[0.6em] uppercase">
                Methodology Map
              </span>
            </div>
          }
          narrative={(progress) => {
            const s1 = useNarrativeMotion(progress, { range: [0.15, 0.3] });
            const s2 = useNarrativeMotion(progress, { range: [0.3, 0.45] });
            const s3 = useNarrativeMotion(progress, { range: [0.45, 0.6] });
            const s4 = useNarrativeMotion(progress, { range: [0.6, 0.75] });
            const s5 = useNarrativeMotion(progress, { range: [0.75, 0.9] });

            return (
              <div className="[&_h2]:text-[#4a5d51] [&_h2]:font-bold [&_h2]:tracking-tight">
                {/* Ambient SVG: 4-Quadrant Structural Trace */}
                <motion.svg
                  aria-hidden
                  className="pointer-events-none absolute -left-32 top-0 w-[500px] h-[500px] opacity-10"
                  viewBox="0 0 500 500"
                  fill="none"
                >
                  <circle cx="250" cy="250" r="220" stroke="#6b8c77" strokeWidth="0.5" />
                  <line x1="250" y1="0" x2="250" y2="500" stroke="#6b8c77" strokeWidth="0.5" />
                  <line x1="0" y1="250" x2="500" y2="250" stroke="#6b8c77" strokeWidth="0.5" />
                </motion.svg>

                <motion.div style={s1} className="relative mb-32">
                  <PageSection title="Getting Started">
                    <p className="text-[#4a5d51] leading-relaxed">Iceberg can be explored without creating an account.</p>
                    <p className="mt-4 text-[#6b8c77] font-medium border-l border-[#6b8c77] pl-4">
                      Every tool is designed for immediate accessibility.
                    </p>
                  </PageSection>
                </motion.div>

                <motion.div style={s2} className="relative mb-32">
                  <PageSection title="Understanding the Platform">
                    <p className="text-[#4a5d51] leading-relaxed">Iceberg is organized around environmental systems.</p>
                    <p className="mt-4 text-[#4a5d51]">Data and analysis are unified within a single coordinate system.</p>
                  </PageSection>
                </motion.div>

                <motion.div style={s3} className="relative mb-32">
                  <PageSection title="Working with Data">
                    <p className="text-[#4a5d51] leading-relaxed">Datasets include metadata, geographic scope, and methodology.</p>
                    <p className="mt-4 text-[#607266] italic">Transparency ensures that evidence remains verifiable.</p>
                  </PageSection>
                </motion.div>

                <motion.div style={s4} className="relative mb-32">
                  <PageSection title="From Insight to Action">
                    <p className="text-[#4a5d51] leading-relaxed">Insights can inform policy and community initiatives.</p>
                    <p className="mt-4 text-[#4a5d51]">Structural clarity leads to more effective environmental stewardship.</p>
                  </PageSection>
                </motion.div>

                <motion.div style={s5} className="relative mb-32">
                  <PageSection title="Next Steps">
                    <p className="text-[#4a5d51] leading-relaxed">Explore advanced features and long-term tracking tools.</p>
                    <p className="mt-4 text-[#6b8c77] tracking-[0.2em] text-[10px] font-bold uppercase">
                      Pathway Clear.
                    </p>
                  </PageSection>
                </motion.div>
              </div>
            );
          }}
        />

        {/* Closing Moment */}
        <section className="py-48 text-center border-t border-[#d1d9cf] bg-white/40">
          <p className="text-[#6b8c77] text-[10px] font-black tracking-[0.5em] uppercase mb-6">
            Guidance Finalized
          </p>
          <h2 className="text-[#2d3731] text-2xl font-light tracking-tight px-6 max-w-xl mx-auto">
            Simplicity is the final layer of complexity.
          </h2>
        </section>
      </div>
    </main>
  );
}