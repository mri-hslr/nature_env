"use client";

import { motion } from "framer-motion";
import { PageIntro } from "@/components/page/PageIntro";
import { PageSection } from "@/components/page/PageSection";
import { PinnedNarrative } from "@/components/pinned/PinnedNarrative";
import { useNarrativeMotion } from "@/components/pinned/useNarrativeMotion";

export default function BlogPage() {
  return (
    <main className="relative min-h-screen bg-[#09140e] text-[#fdf2f8] selection:bg-[#ec4899] selection:text-white overflow-hidden">
      
      {/* LAYER 0: Wildflower Drift Atmosphere (Seasonal Bloom) */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* Deep Meadow Base */}
        <div className="absolute inset-0 bg-[#09140e]" />
        
        {/* Wild Rose Petal Glow (Top Left) */}
        <div className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] bg-[#ec4899] opacity-15 blur-[140px] rounded-full" />
        
        {/* Poppy Red Bloom (Bottom Right) */}
        <div className="absolute -bottom-[20%] -right-[10%] w-[80%] h-[80%] bg-[#f43f5e] opacity-10 blur-[160px] rounded-full" />
        
        {/* Violet Shadow (Center Right) */}
        <div className="absolute top-[30%] -right-[5%] w-[50%] h-[60%] bg-[#a855f7] opacity-10 blur-[120px] rounded-full" />

        {/* Summer Haze Grain */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-screen" style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }} />
      </div>

      <div className="relative z-10">
        {/* PAGE INTRO: Forcing Rose and Blossom tones */}
        <div className="[&_h1]:text-[#ec4899] [&_p]:text-[#fbcfe8]">
          <PageIntro
            title="Blog & Media"
            lead="Long-form writing and analysis exploring environmental systems, research, and collective action."
          />
        </div>

        <PinnedNarrative
          height={300}
          ambient="library" // Using library logic for structural consistency
          visual={
            <div className="group relative w-full h-full rounded-2xl bg-gradient-to-br from-[#1e0a11] to-[#09140e] border border-[#ec4899]/30 shadow-[0_0_60px_rgba(236,72,153,0.15)] flex items-center justify-center overflow-hidden">
              {/* Drifting Pollen Particles */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-[#ec4899] rounded-full opacity-40"
                  animate={{
                    y: [-20, -100],
                    x: [Math.random() * 100, Math.random() * 120],
                    opacity: [0, 0.4, 0],
                  }}
                  transition={{
                    duration: 5 + Math.random() * 5,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                  }}
                  style={{ left: `${Math.random() * 100}%`, top: "100%" }}
                />
              ))}
              
              <span className="relative text-[#ec4899] text-[10px] font-black tracking-[0.5em] uppercase">
                Living Analysis
              </span>
            </div>
          }
          narrative={(progress) => {
            const s1 = useNarrativeMotion(progress, { range: [0.10, 0.28] });
            const s2 = useNarrativeMotion(progress, { range: [0.28, 0.46] });
            const s3 = useNarrativeMotion(progress, { range: [0.46, 0.66] });
            const s4 = useNarrativeMotion(progress, { range: [0.66, 0.88] });

            return (
              <div className="[&_h2]:text-[#ec4899] [&_h2]:font-bold">
                {/* Ambient SVG: Organic Petal Curves */}
                <motion.svg
                  aria-hidden
                  className="pointer-events-none absolute -left-48 top-0 w-[700px] h-[700px] opacity-20"
                  viewBox="0 0 600 600"
                  fill="none"
                  animate={{
                    rotate: [0, 5, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 20,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                >
                  <path 
                    d="M300 100 C400 100 500 200 500 300 C500 400 400 500 300 500 C200 500 100 400 100 300 C100 200 200 100 300 100 Z" 
                    fill="url(#petal-grad)" 
                  />
                  <defs>
                    <radialGradient id="petal-grad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(300 300) scale(200)">
                      <stop offset="0%" stopColor="#ec4899" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </motion.svg>

                <motion.div style={s1} className="relative mb-32">
                  <PageSection title="Featured Writing">
                    <p className="text-[#fdf2f8] leading-relaxed">
                      In-depth analysis connecting environmental data with social
                      and policy contexts.
                    </p>
                    <p className="mt-4 text-[#ec4899] font-medium border-l-2 border-[#f43f5e] pl-4">
                      Stories that translate complexity into human understanding.
                    </p>
                  </PageSection>
                </motion.div>

                <motion.div style={s2} className="relative mb-32">
                  <PageSection title="Research Commentary">
                    <p className="text-[#fdf2f8] leading-relaxed">
                      Interpretive perspectives on studies and emerging findings.
                    </p>
                    <p className="mt-4 text-[#fdf2f8]">
                      Bridging the gap between peer-reviewed data and everyday action.
                    </p>
                  </PageSection>
                </motion.div>

                <motion.div style={s3} className="relative mb-32">
                  <PageSection title="Platform Updates">
                    <p className="text-[#fdf2f8] leading-relaxed">
                      Documenting the evolution of the Iceberg platform.
                    </p>
                    <p className="mt-4 text-[#fdf2f8]">
                      Following the growth of our environmental intelligence tools.
                    </p>
                  </PageSection>
                </motion.div>

                <motion.div style={s4} className="relative mb-32">
                  <PageSection title="Media & Press">
                    <p className="text-[#fdf2f8] leading-relaxed">
                      Interviews, presentations, and external coverage.
                    </p>
                    <p className="mt-4 text-[#fdf2f8]">
                      Conversations with the broader global community.
                    </p>
                  </PageSection>
                </motion.div>
              </div>
            );
          }}
        />

        {/* Closing Moment */}
        <section className="py-48 text-center bg-gradient-to-t from-[#4c0519]/20 to-transparent">
          <p className="text-[#f43f5e] text-xs font-bold tracking-[0.5em] uppercase mb-6">
            Seasonal Insight
          </p>
          <h2 className="text-[#fdf2f8] text-2xl font-light tracking-tight px-6 max-w-xl mx-auto">
            Ideas bloom where evidence is shared.
          </h2>
        </section>
      </div>
    </main>
  );
}