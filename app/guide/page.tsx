"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const NARRATIVE_CONTENT = [
  {
    id: "01",
    title: "Welcome to Blupedia",
    text: (
      <div>
        <p className="mb-4">
          Blupedia is a platform where everyday actions—shopping, traveling, and creating content—earn you real rewards while contributing to environmental protection.
        </p>
        <p>
          This guide walks you through how to get started, how you earn <strong>ADSTR Points</strong>, and how your actions create real-world ecological impact through decentralized participation.
        </p>
      </div>
    ),
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "02",
    title: "The ADSTR Ecosystem",
    // These points map to the 2-column grid logic in the JSX below
    points: [
      "Create Your Blupedia Account",
      "Understand ADSTR (Eco-Rewards)",
      "Shop Eco-Friendly Products",
      "Participate in CO₂ Reduction",
      "Create Environmental Content",
      "Eco-Travel & Couch Surfing",
      "Track Real-time Dashboard",
      "Convert to Conservation NFTs",
      "Generate Value Over Time",
      "Lead Your Local Community"
    ],
    image: ""
  },
  {
    id: "03",
    title: "Step 1: Onboarding",
    text: (
      <div>
        <p className="font-bold mb-4 uppercase tracking-wider text-black">Getting started is simple:</p>
        <ul className="space-y-4">
          <li>
            <strong>Access:</strong> Download the Blupedia App or visit <span className="underline">blupedia.org</span>
          </li>
          <li>
            <strong>Sign Up:</strong> Register via Email, Mobile number, or Social login.
          </li>
          <li>
            <strong>Profile:</strong> Complete your profile with your Name and Location to find local restoration projects.
          </li>
          <li>
            <strong>Interests:</strong> Select categories like environment, eco-travel, or indigenous art to personalize your impact.
          </li>
        </ul>
      </div>
    ),
    image: "/g1.jpg",
  },
  {
    id: "04",
    title: "STEP 2: Understand ADSTR Points",
    text: (
      <div>
        <p className="font-bold mb-4 uppercase tracking-wider text-black">ADSTR Points are Blupedia’s reward units.You earn ADSTR points when you:</p>
        <ul className="space-y-4">
          <li>
            <strong>1.</strong> Shop responsibly <span className="underline">blupedia.org</span>
          </li>
          <li>
            <strong>2.</strong> Create useful environmental content
          </li>
          <li>
            <strong>3.</strong> Travel using eco-friendly Blupedia options
          </li>
          <li>
            <strong>4.</strong> Select categories like environment, eco-travel, or indigenous art to personalize your impact.
          </li>
          <li>
            <strong>5.</strong> Track them in your dashboard
          </li>
        </ul>
      </div>
    ),
    image: "g2.avif"
  },
  {
    id: "04",
    title: "STEP-3 Earn ADSTR Points by Shopping Eco-Friendly",
    text: (
      <div>
        <p className="font-bold mb-4 uppercase tracking-wider text-black">Visit the Blupedia Online Store.You’ll find:</p>
​         <ul className="space-y-4">
          <li>
            <strong>1.</strong> Sustainable products 
          </li>
          <li>
            <strong>2.</strong> Indigenous crafts
          </li>
          <li>
            <strong>3.</strong> Bamboo, organic, handmade items
          </li>
          <li>
            <strong>4.</strong> Ethical brands and rural producers
          </li>
          <p className="font-bold mb-4 uppercase tracking-wider text-black">🛍️ When you shop:</p>
          <li>
            <strong>1.</strong> You pay normally (INR / USD)
          </li>
          <li>
            <strong>2.</strong> You earn ADSTR points automatically
          </li>
          <li>
            <strong>3.</strong> Communities and the environment benefit
          </li>
          <p className="font-bold mb-4 uppercase tracking-wider text-black">📌 Important rule:
          Up to 70% of shopping-earned ADSTR points can be used toward NFTs.
          The rest must be matched with USDT (real value).</p>
        </ul>
      </div>
    ),
    image: "g3.avif",
  },
  {
    id: "05",
    title: " STEP 4: Earn ADSTR Points by Participating in CO₂ Reduction Programs",
    text: (
      <div>
        <p className="font-bold mb-4 uppercase tracking-wider text-black">Blupedia runs verified environmental programs such as:</p>
        <ul className="space-y-4">
          <li>
            <strong>1.</strong> Forest protection initiatives 
          </li>
          <li>
            <strong>2.</strong> Carbon reduction challenges
          </li>
          <li>
            <strong>3.</strong> Tree and biodiversity monitoring
          </li>
          <li>
            <strong>4.</strong> Plastic and waste reduction drives
          </li>
          <p className="font-bold mb-4 uppercase tracking-wider text-black">You earn ADSTR points by:</p>
          <li>
            <strong>1.</strong> Participating physically or digitally
          </li>
          <li>
            <strong>1.</strong> Submitting proof (photos, reports, geo-tags)
          </li>
          <li>
            <strong>1.</strong> Completing verified challenges
          </li>
        </ul>
      </div>
    ),
    image: "g4.avif",
  },
  {
  id: "06",
    title: " STEP 5: Earn ADSTR Points by Creating Environmental Content",
    text: (
      <div>
        <p className="font-bold mb-4 uppercase tracking-wider text-black">Blupedia rewards meaningful content, not spam.You can post:</p>
        <ul className="space-y-4">
          <li>
            <strong>1.</strong> Videos or reels on saving nature 
          </li>
          <li>
            <strong>2.</strong> Blogs on sustainability
          </li>
          <li>
            <strong>3.</strong> Travel stories with eco-awareness
          </li>
          <li>
            <strong>4.</strong> Educational posts on climate action
          </li>
          <p className="font-bold mb-4 uppercase tracking-wider text-black"> 📊 Your ADSTR points depend on:</p>
          <li>
            <strong>1.</strong> Likes
          </li>
          <li>
            <strong>2.</strong> Followers
          </li>
          <li>
            <strong>3.</strong> Engagement quality
          </li>
          <li>
            <strong>4.</strong> Community trust
          </li>
          <p className="font-bold mb-4 uppercase tracking-wider text-black">📌 Important rule: Only 40% of content-based ADSTR points can be used for NFTs. This keeps the system fair and genuine. </p>
        </ul>
      </div>
    ),
    image: "g5.avif",
  },
  {
    id: "07",
      title: " STEP 7: Earn ADSTR Points Through Eco-Travel & Couch Surfing",
      text: (
        <div>
          <p className="font-bold mb-4 uppercase tracking-wider text-black">Blupedia offers</p>
          <ul className="space-y-4">
            <li>
              <strong>1.</strong> Eco-friendly homestays
            </li>
            <li>
              <strong>2.</strong> Couch surfing with nature-respecting hosts
            </li>
            <li>
              <strong>3.</strong> Conservation travel experiences
            </li>
           
            <p className="font-bold mb-4 uppercase tracking-wider text-black"> When you</p>
            <li>
              <strong>1.</strong> Book Blupedia eco-travel
            </li>
            <li>
              <strong>2.</strong> Follow responsible travel guidelines
            </li>
            <li>
              <strong>3.</strong>Share feedback or reports
            </li>
            <li>
              <strong>4.</strong> Community trust
            </li>
            <p className="font-bold mb-4 uppercase tracking-wider text-black">You earn ADSTR points while: </p>
            <li>
              <strong>1.</strong> Supporting local communities
            </li>
            <li>
              <strong>2.</strong> Reducing tourism damage
            </li>
            <li>
              <strong>3.</strong> Creating positive impact
            </li>
          </ul>
        </div>
      ),
      image: "g6.avif",
  },
  {
    id: "08",
      title: " STEP 8: Track Your Progress in the Dashboard",
      text: (
        <div>
          <p className="font-bold mb-4 uppercase tracking-wider text-black">Your Blupedia Dashboard shows:</p>
          <ul className="space-y-4">
            <li>
              <strong>1.</strong> Total ADSTR points earned
            </li>
            <li>
              <strong>2.</strong> Points by category (shopping, content, travel, programs)
            </li>
            <li>
              <strong>3.</strong> How much is eligible for NFT conversion
            </li>
            <li>
              <strong>4.</strong> Your impact summary
            </li>
           
            <p className="font-bold mb-4 uppercase tracking-wider text-black"> This helps you plan:</p>
            <li>
              <strong>1.</strong> When to buy an NFT
            </li>
            <li>
              <strong>2.</strong> How much USDT you’ll need
            </li>
            <li>
              <strong>3.</strong>Which activities to focus on
            </li>
          </ul>
        </div>
      ),
      image: "g7.avif",
  },
  {
    id: "09",
      title: " STEP 9:How Your NFT Creates Value Over Time",
      text: (
        <div>
          <p className="font-bold mb-4 uppercase tracking-wider text-black"> After you own an NFT:</p>

          <ul className="space-y-4">
            <li>
              <strong>1.</strong> Forest protection continues
            </li>
            <li>
              <strong>2.</strong> Carbon is sequestered naturally
            </li>
            <li>
              <strong>2.</strong> Carbon credits are verified annually
            </li>
           
           
            <p className="font-bold mb-4 uppercase tracking-wider text-black"> You may later:</p>
            <li>
              <strong>1.</strong> Retire credits for ESG / personal offset
            </li>
            <li>
              <strong>2.</strong> Participate in carbon credit sales
            </li>
            <li>
              <strong>1.</strong>Join NFT liquidity pools
            </li>
            <li>
              <strong>2.</strong> Trade NFTs on approved platforms
            </li>
          </ul>
        </div>
      ),
      image: "g8.avif",
  },
  
  {
    id: "10",
      title: " STEP 10: Your Role in the Blupedia Community",
      text: (
        <div>
          <p className="font-bold mb-4 uppercase tracking-wider text-black"> We expect you to:</p>

          <ul className="space-y-4">
            <li>
              <strong>1.</strong> Share truthful content
            </li>
            <li>
              <strong>2.</strong>Avoid misuse of the system
            </li>
            <li>
              <strong>3.</strong> Think long-term, not quick profit
            </li>
           
           
            <p className="font-bold mb-4 uppercase tracking-wider text-black"> 🌍 When you do this:</p>
            <li>
              <strong>1.</strong> You earn fairly
            </li>
            <li>
              <strong>2.</strong>  Nature benefits
            </li>
            <li>
              <strong>1.</strong>Communities grow
            </li>
            <li>
              <strong>2.</strong> The ecosystem stays strong
            </li>
          </ul>
        </div>
      ),
      image: "g9.avif",
  },
  
];

export default function GuidePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundColor = useTransform(scrollYProgress, [0, 1], ["#38bdf8", "#0c4a6e"]);

  return (
    <motion.main ref={containerRef} style={{ backgroundColor }} className="relative min-h-screen transition-colors duration-500">
      <div className="fixed inset-0 z-0">
        <BackgroundGradientAnimation containerClassName="h-full w-full" firstColor="251, 191, 36" secondColor="217, 119, 6" thirdColor="10, 10, 10" fourthColor="38, 38, 38" fifthColor="245, 158, 11" />
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }} />
      </div>

      <div className="relative z-10">
        <section className="h-[60vh] flex items-center justify-center px-6 md:px-12">
          <h1 className="text-7xl md:text-[12vw] font-black tracking-tighter uppercase text-white leading-[0.8] text-center">
            The <span className="opacity-20 text-black">Guide</span>
          </h1>
        </section>

        <section className="relative flex flex-col md:flex-row w-full">
          {/* LEFT COLUMN */}
          <div className="w-full md:w-1/2 px-6 md:px-12 py-32 space-y-[60vh]">
            {NARRATIVE_CONTENT.map((item, idx) => (
              <motion.div
                key={idx}
                className="max-w-xl"
                onViewportEnter={() => setActiveIndex(idx)}
                viewport={{ amount: 0.5 }}
              >
                <p className="text-[10px] font-black tracking-[0.6em] uppercase text-black/60 mb-8">
                  Protocol // {item.id}
                </p>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-black uppercase mb-8">
                  {item.title}
                </h2>
                
                {item.id !== "02" && (
                  <div className="text-xl md:text-2xl font-medium leading-relaxed text-black/80">
                    {item.text}
                  </div>
                )}
              </motion.div>
            ))}
            <div className="h-[40vh]" />
          </div>

          {/* RIGHT PINNED COLUMN */}
          <div className="hidden md:block w-1/2 h-screen sticky top-0 overflow-hidden">
            <div className="relative w-full h-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                {NARRATIVE_CONTENT[activeIndex].id === "02" ? (
                  <motion.div
                    key="points-grid"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="absolute inset-0 flex items-center justify-center z-50 px-12"
                  >
                    <div className="grid grid-cols-2 gap-x-8 gap-y-10 w-full max-w-6xl"> 
                      {NARRATIVE_CONTENT[1].points?.map((point, i) => (
                        <div key={i} className="flex flex-col space-y-2 border-l border-black/10 pl-9">
                          <span className="text-xs font-bold text-black/40">
                            {i < 9 ? `0${i + 1}` : i + 1}
                          </span>
                          <h3 className="text-xl md:text-1xl lg:text-2xl font-black text-black uppercase leading-tight tracking-tighter">
                            {point}
                          </h3>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.img
                    key={activeIndex}
                    src={NARRATIVE_CONTENT[activeIndex].image as string}
                    initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                    animate={{ opacity: 0.8, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full object-cover"
                    alt="Guide Operational Visual"
                  />
                )}
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40 pointer-events-none" />
            </div>
          </div>
        </section>

        <section className="h-screen flex items-center justify-center border-t border-black/10">
          <h2 className="text-4xl md:text-8xl font-black tracking-tighter uppercase text-black opacity-10">
            Clarity is the foundation
          </h2>
        </section>
      </div>
    </motion.main>
  );
}