"use client";

import { motion } from "framer-motion";
import { PageIntro } from "@/components/page/PageIntro";
import { PageSection } from "@/components/page/PageSection";
import { PinnedNarrative } from "@/components/pinned/PinnedNarrative";
import { useNarrativeMotion } from "@/components/pinned/useNarrativeMotion";

export default function EventsPage() {
  return (
    <main className="relative min-h-screen bg-[#120a02] text-[#fef3c7] selection:bg-[#ea580c] selection:text-white overflow-hidden">
      
      {/* LAYER 0: Ember Clearing Atmosphere (Autumn Dusk) */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* Deep Umber Base */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,_#1c1105_0%,_#120a02_100%)]" />
        
        {/* Golden Hour Wash (Top Right) */}
        <div className="absolute -top-[10%] -right-[10%] w-[70%] h-[70%] bg-[#f59e0b] opacity-20 blur-[140px] rounded-full" />
        
        {/* Burnt Orange Glow (Bottom Left) */}
        <div className="absolute -bottom-[20%] -left-[10%] w-[80%] h-[80%] bg-[#9a3412] opacity-30 blur-[160px] rounded-full" />

        {/* Dusk Atmosphere Grain */}
        <div className="absolute inset-0 opacity-[0.05] mix-blend-color-dodge" style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }} />
      </div>

      <div className="relative z-10">
        {/* PAGE INTRO: Forcing Amber and Cream tones */}
        <div className="[&_h1]:text-[#fbbf24] [&_p]:text-[#fde68a]">
          <PageIntro
            title="Events"
            lead="Iceberg hosts and supports events that foster dialogue, collaboration, and shared understanding around environmental systems and action."
          />
        </div>

        <PinnedNarrative
          height={300}
          ambient="events"
          visual={
            <div className="group relative w-full h-full rounded-2xl bg-gradient-to-br from-[#431407] to-[#1c1105] border border-[#f59e0b]/30 shadow-[0_0_60px_rgba(245,158,11,0.15)] flex items-center justify-center overflow-hidden">
              {/* Heat Haze Pulse */}
              <motion.div 
                className="absolute inset-0 bg-[#fbbf24] opacity-[0.03]"
                animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.08, 0.03] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <span className="relative text-[#fbbf24] text-[10px] font-black tracking-[0.5em] uppercase">
                Active Gathering
              </span>
            </div>
          }
          narrative={(progress) => {
            const s1 = useNarrativeMotion(progress, { range: [0.15, 0.3] });
            const s2 = useNarrativeMotion(progress, { range: [0.3, 0.45] });
            const s3 = useNarrativeMotion(progress, { range: [0.45, 0.6] });
            const s4 = useNarrativeMotion(progress, { range: [0.6, 0.75] });

            return (
              <div className="[&_h2]:text-[#f59e0b] [&_h2]:font-bold">
                {/* Ambient SVG: Drifting "Sparks" / Leaves */}
                <motion.svg
                  aria-hidden
                  className="pointer-events-none absolute -right-32 top-0 w-[600px] h-[600px] opacity-40 mix-blend-screen"
                  viewBox="0 0 600 600"
                  fill="none"
                  animate={{
                    y: [0, -30, 0],
                    x: [0, 15, 0],
                  }}
                  transition={{
                    duration: 20,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                >
                  <circle cx="300" cy="300" r="180" fill="url(#amber-spark-grad)" />
                  <defs>
                    <radialGradient id="amber-spark-grad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(300 300) rotate(90) scale(200)">
                      <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.4" />
                      <stop offset="70%" stopColor="#ea580c" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </motion.svg>

                <motion.div style={s1} className="relative mb-32">
                  <PageSection title="Upcoming Events">
                    <p className="text-[#fef3c7] leading-relaxed">Upcoming events include talks, workshops, and community discussions.</p>
                    <p className="mt-4 text-[#fbbf24] font-medium border-l-2 border-[#ea580c] pl-4 italic">
                      Each event provides context, purpose, and participation details.
                    </p>
                  </PageSection>
                </motion.div>

                <motion.div style={s2} className="relative mb-32">
                  <PageSection title="Ongoing Initiatives">
                    <p className="text-[#fef3c7] leading-relaxed">Some events span multiple sessions or long-running collaborations.</p>
                    <p className="mt-4 text-[#fef3c7]">This allows deeper engagement beyond single moments.</p>
                  </PageSection>
                </motion.div>

                <motion.div style={s3} className="relative mb-32">
                  <PageSection title="Past Events & Archives">
                    <p className="text-[#fef3c7] leading-relaxed">Past events are archived with recordings and documentation.</p>
                    <p className="mt-4 text-[#fef3c7]">Insights remain accessible beyond their original schedule.</p>
                  </PageSection>
                </motion.div>

                <motion.div style={s4} className="relative mb-32">
                  <PageSection title="Participation & Access">
                    <p className="text-[#fef3c7] leading-relaxed">Events are designed to be inclusive and accessible.</p>
                    <p className="mt-4 text-[#fef3c7]">Recordings or summaries are provided when possible.</p>
                  </PageSection>
                </motion.div>
              </div>
            );
          }}
        />

        {/* Closing Moment */}
        <section className="py-48 text-center bg-gradient-to-t from-[#7c2d12]/20 to-transparent">
          <p className="text-[#fbbf24] text-xs font-bold tracking-[0.5em] uppercase mb-6">
            Shared Resonance
          </p>
          <h2 className="text-[#fffbeb] text-2xl font-light tracking-tight px-6 max-w-xl mx-auto">
            Action is the spark of understanding.
          </h2>
        </section>
      </div>
    </main>
  );
}