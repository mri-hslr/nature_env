"use client";

import { motion } from "framer-motion";
import { PageIntro } from "@/components/page/PageIntro";
import { PageSection } from "@/components/page/PageSection";
import { PinnedNarrative } from "@/components/pinned/PinnedNarrative";
import { useNarrativeMotion } from "@/components/pinned/useNarrativeMotion";

export default function SupportPage() {
  return (
    <main className="relative min-h-screen bg-[#041c1c] text-[#f0fdfa] selection:bg-[#2dd4bf] selection:text-[#041c1c] overflow-hidden">
      
      {/* LAYER 0: Tidal Pool Atmosphere (Filtered Stillness) */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* Deep Teal Base */}
        <div className="absolute inset-0 bg-[#041c1c]" />
        
        {/* Surface Ripple Glow (Top Center) */}
        <div className="absolute -top-[15%] left-[10%] w-[80%] h-[60%] bg-[#2dd4bf] opacity-10 blur-[140px] rounded-full" />
        
        {/* Deep Slate Shadow (Bottom Right) */}
        <div className="absolute -bottom-[10%] -right-[5%] w-[60%] h-[70%] bg-[#0f172a] opacity-40 blur-[120px] rounded-full" />
        
        {/* Caustic Light Lines (Subtle Overlay) */}
        <div className="absolute inset-0 opacity-[0.05] mix-blend-screen" 
             style={{ 
               backgroundImage: `radial-gradient(circle at 50% 50%, #2dd4bf 1px, transparent 1px)`, 
               backgroundSize: '80px 80px' 
             }} />

        {/* Aquatic Grain */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }} />
      </div>

      <div className="relative z-10">
        {/* PAGE INTRO: Forcing Teal and Slate-Mint tones */}
        <div className="[&_h1]:text-[#2dd4bf] [&_p]:text-[#99f6e4]">
          <PageIntro
            title="Support & FAQ"
            lead="Guidance on using Iceberg, understanding data sources, and getting help."
          />
        </div>

        <PinnedNarrative
          height={300}
          ambient="guide" // Using guide logic for navigational clarity
          visual={
            <div className="group relative w-full h-full rounded-2xl bg-gradient-to-br from-[#0d2d2d] to-[#041c1c] border border-[#2dd4bf]/20 shadow-[0_0_50px_rgba(45,212,191,0.1)] flex items-center justify-center overflow-hidden">
              {/* Underwater Caustics Motion */}
              <motion.div 
                className="absolute inset-0 opacity-20"
                animate={{ 
                  backgroundPosition: ["0% 0%", "100% 100%"],
                  opacity: [0.1, 0.2, 0.1] 
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{ 
                  backgroundImage: `url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')`,
                  backgroundSize: '200px'
                }}
              />
              
              <span className="relative text-[#2dd4bf] text-[10px] font-black tracking-[0.6em] uppercase">
                Safety & Clarity
              </span>
            </div>
          }
          narrative={(progress) => {
            const s1 = useNarrativeMotion(progress, { range: [0.10, 0.28] });
            const s2 = useNarrativeMotion(progress, { range: [0.28, 0.46] });
            const s3 = useNarrativeMotion(progress, { range: [0.46, 0.66] });
            const s4 = useNarrativeMotion(progress, { range: [0.66, 0.88] });

            return (
              <div className="[&_h2]:text-[#2dd4bf] [&_h2]:font-bold">
                {/* Ambient SVG: Concentric Water Ripples */}
                <motion.svg
                  aria-hidden
                  className="pointer-events-none absolute -right-32 top-0 w-[600px] h-[600px] opacity-10"
                  viewBox="0 0 600 600"
                  fill="none"
                >
                  <circle cx="300" cy="300" r="100" stroke="#2dd4bf" strokeWidth="0.5" />
                  <circle cx="300" cy="300" r="200" stroke="#2dd4bf" strokeWidth="0.5" />
                  <circle cx="300" cy="300" r="300" stroke="#2dd4bf" strokeWidth="0.5" />
                </motion.svg>

                <motion.div style={s1} className="relative mb-32">
                  <PageSection title="Getting Started">
                    <p className="text-[#ccfbf1] leading-relaxed">
                      Iceberg can be explored without specialized setup.
                    </p>
                    <p className="mt-4 text-[#2dd4bf] font-medium border-l-2 border-[#0f766e] pl-4">
                      Direct access to core environmental intelligence.
                    </p>
                  </PageSection>
                </motion.div>

                <motion.div style={s2} className="relative mb-32">
                  <PageSection title="Accounts & Participation">
                    <p className="text-[#ccfbf1] leading-relaxed">
                      Some features require accounts or initiative membership.
                    </p>
                    <p className="mt-4 text-[#ccfbf1]">
                      Designed to balance open access with secure collaboration.
                    </p>
                  </PageSection>
                </motion.div>

                <motion.div style={s3} className="relative mb-32">
                  <PageSection title="Data Sources & Accuracy">
                    <p className="text-[#ccfbf1] leading-relaxed">
                      All data includes contextual documentation and limitations.
                    </p>
                    <p className="mt-4 text-[#ccfbf1] italic">
                      Verifiability is the surface upon which we build.
                    </p>
                  </PageSection>
                </motion.div>

                <motion.div style={s4} className="relative mb-32">
                  <PageSection title="Technical Issues & Contact">
                    <p className="text-[#ccfbf1] leading-relaxed">
                      Support is available for persistent technical issues.
                    </p>
                    <p className="mt-4 text-[#2dd4bf] text-xs font-bold uppercase tracking-widest">
                      Response system standby.
                    </p>
                  </PageSection>
                </motion.div>
              </div>
            );
          }}
        />

        {/* Closing Moment */}
        <section className="py-48 text-center bg-gradient-to-t from-[#0d2d2d]/30 to-transparent">
          <p className="text-[#2dd4bf] text-xs font-bold tracking-[0.5em] uppercase mb-6">
            Equilibrium
          </p>
          <h2 className="text-[#f0fdfa] text-2xl font-light tracking-tight px-6 max-w-xl mx-auto">
            Find clarity in the stillness of facts.
          </h2>
        </section>
      </div>
    </main>
  );
}