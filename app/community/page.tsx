"use client";

import { motion } from "framer-motion";
import { PageIntro } from "@/components/page/PageIntro";
import { PageSection } from "@/components/page/PageSection";
import { PinnedNarrative } from "@/components/pinned/PinnedNarrative";
import { useNarrativeMotion } from "@/components/pinned/useNarrativeMotion";

export default function CommunityPage() {
  return (
    <main className="relative min-h-screen bg-[#061a10] text-[#e0f2e9] selection:bg-[#059669] selection:text-white">
      
      {/* LAYER 0: High-Density Evergreen Atmosphere */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* Dominant Forest Wash - Top Left (Fixes the black corner) */}
        <div className="absolute -top-[10%] -left-[10%] w-[80%] h-[80%] bg-[#064e3b] opacity-60 blur-[140px] rounded-full" />
        
        {/* Intense Mossy Wash - Right Center */}
        <div className="absolute top-[20%] -right-[5%] w-[60%] h-[70%] bg-[#065f46] opacity-40 blur-[120px] rounded-full" />
        
        {/* Bottom Emerald Pool */}
        <div className="absolute -bottom-[20%] left-[20%] w-[70%] h-[60%] bg-[#10b981] opacity-20 blur-[160px] rounded-full" />
        
        {/* Subtle Static Grain for Density */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }} />
      </div>

      <div className="relative z-10">
        {/* PAGE INTRO FIX: Explicitly forcing emerald colors for the title and lead */}
        <div className="[&_h1]:text-[#10b981] [&_p]:text-[#a7f3d0]">
          <PageIntro
            title="Community"
            lead="Iceberg is built as a shared space where researchers, practitioners, and communities can exchange knowledge and collaborate on environmental challenges."
          />
        </div>

        <PinnedNarrative
          height={300}
          ambient="community"
          visual={
            <div className="group relative w-full h-full rounded-2xl bg-gradient-to-br from-[#065f46] to-[#042f21] border border-[#10b981]/40 shadow-[0_0_60px_rgba(16,185,129,0.15)] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(52,211,153,0.2)_0%,_transparent_70%)]" />
              <span className="relative text-[#34d399] text-[10px] font-black tracking-[0.5em] uppercase">
                Core Network
              </span>
            </div>
          }
          narrative={(progress) => {
            const s1 = useNarrativeMotion(progress, { range: [0.15, 0.3] });
            const s2 = useNarrativeMotion(progress, { range: [0.3, 0.45] });
            const s3 = useNarrativeMotion(progress, { range: [0.45, 0.6] });
            const s4 = useNarrativeMotion(progress, { range: [0.6, 0.75] });

            return (
              <div className="[&_h2]:text-[#10b981] [&_h2]:font-bold">
                {/* Ambient SVG layer — High-Contrast Bioluminescent Bloom */}
                <motion.svg
                  aria-hidden
                  className="pointer-events-none absolute -left-48 top-0 w-[700px] h-[700px] opacity-50 mix-blend-screen"
                  viewBox="0 0 600 600"
                  fill="none"
                  animate={{
                    rotate: [0, 8, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 25,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                >
                  <circle
                    cx="300"
                    cy="300"
                    r="250"
                    fill="url(#deep-emerald-grad)"
                  />
                  <defs>
                    <radialGradient id="deep-emerald-grad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(300 300) rotate(90) scale(300)">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
                      <stop offset="60%" stopColor="#064e3b" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </motion.svg>

                <motion.div style={s1} className="relative mb-32">
                  <PageSection title="Discussion & Dialogue">
                    <p className="text-[#a7f3d0] leading-relaxed">
                      Community discussions provide space for thoughtful exchange
                      around environmental data, research findings, and real-world
                      implications.
                    </p>
                    <p className="mt-4 text-[#63e6be] font-medium border-l-2 border-[#10b981] pl-4">
                      Conversations are moderated to prioritize clarity, respect,
                      and evidence-based reasoning.
                    </p>
                  </PageSection>
                </motion.div>

                <motion.div style={s2} className="relative mb-32">
                  <PageSection title="Collaborative Initiatives">
                    <p className="text-[#a7f3d0] leading-relaxed">
                      Iceberg supports community-led projects that bring together
                      diverse perspectives around shared environmental goals.
                    </p>
                    <p className="mt-4 text-[#a7f3d0]">
                      These initiatives may include data collection efforts,
                      analysis collaborations, or policy-focused working groups.
                    </p>
                  </PageSection>
                </motion.div>

                <motion.div style={s3} className="relative mb-32">
                  <PageSection title="Knowledge Sharing">
                    <p className="text-[#a7f3d0] leading-relaxed">
                      Members are encouraged to share insights, methodologies, and
                      lessons learned from practical experience.
                    </p>
                    <p className="mt-4 text-[#a7f3d0]">
                      Contributions are organized to remain accessible and useful
                      over time, rather than optimized for short-term visibility.
                    </p>
                  </PageSection>
                </motion.div>

                <motion.div style={s4} className="relative mb-32">
                  <PageSection title="Participation Guidelines">
                    <p className="text-[#a7f3d0] leading-relaxed">
                      Iceberg’s community is guided by principles of openness,
                      scientific integrity, and constructive engagement.
                    </p>
                    <p className="mt-4 text-[#a7f3d0]">
                      Clear guidelines help ensure discussions remain productive
                      and aligned with the platform’s mission.
                    </p>
                  </PageSection>
                </motion.div>
              </div>
            );
          }}
        />

        {/* Powerful Close */}
        <section className="py-48 text-center bg-gradient-to-t from-[#042f21] to-transparent">
          <p className="text-[#34d399] text-xs font-bold tracking-[0.5em] uppercase mb-6">
            Evolution through Unity
          </p>
          <h2 className="text-[#f0fdf4] text-3xl font-light tracking-tight px-6 max-w-2xl mx-auto">
            Shared growth begins with shared understanding.
          </h2>
        </section>
      </div>
    </main>
  );
}