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
    text:"The ADSTR ecosystem powers participation within the Blupedia platform by rewarding environmental engagement through blockchain-based tokens. Users earn ADSTR by supporting conservation projects, contributing knowledge, and participating in eco campaigns. Built on Web3 infrastructure, the system records activities transparently on blockchain, creating an incentive-driven ecosystem where community participation, environmental protection, and digital rewards work together to support sustainable conservation efforts.",
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
    title: " 2.⁠ ⁠Earn ADSTR Tokens  ",
    text: (
      <div>
        <p className="font-bold mb-4 uppercase tracking-wider text-black">ADSTR Points are Blupedia’s reward units.You earn ADSTR points when you:</p>
        
         <p>Blupedia rewards ecological participation through the ADSTR token. Users earn tokens by 
engaging in environmental activities such as supporting conservation projects, participating 
in eco campaigns, contributing knowledge, sharing verified content, and interacting within 
the platform. These blockchain-based rewards create an incentive-driven ecosystem 
promoting sustainability, digital engagement, and environmental awareness. 
</p>
       
      </div>
    ),
    image: "g2.avif"
  },
  {
    id: "05",
    title: "3. Sindugarh Forest Fractional Ownership (NFTs)",
    text: (
      <div>
        <p className="font-bold mb-4 uppercase tracking-wider text-black">Visit the Blupedia Online Store.You’ll find:</p>
​         Blupedia introduces fractional ownership of the Sindugarh Forest through NFTs. Each NFT 
represents a verifiable digital fraction of preserved forest land. Owners gain symbolic 
stewardship rights and participate in conservation funding while supporting forest protection. 
Blockchain ensures transparency, traceability, and global accessibility for environmentally 
conscious investors and contributors. 
      </div>
    ),
    image: "g3.avif",
  },
  {
    id: "06",
    title: "4. Web3 Layer and Blockchain Infrastructure     ",
    text: (
      <div>
        <p className="font-bold mb-4 uppercase tracking-wider text-black">Blupedia runs verified environmental programs such as:</p>
        The Blupedia Web3 layer records every activity on blockchain infrastructure, ensuring 
transparency and decentralization. User actions, environmental contributions, and token 
rewards are securely stored within digital wallets. Smart contracts automate transactions, 
ownership verification, and rewards distribution, creating a trustless ecosystem where 
environmental impact is verifiable and immutable. 

      </div>
    ),
    image: "g4.avif",
  },
  {
  id: "07",
    title: "5.⁠Carbon Credit Marketplace     ",
    text: (
      <div>
        <p className="font-bold mb-4 uppercase tracking-wider text-black">Blupedia rewards meaningful content, not spam.You can post:</p>
        <p>Blupedia integrates carbon credit generation and trading into its platform. Conservation 
projects, reforestation initiatives, and ecosystem preservation generate verified carbon 
credits recorded on blockchain. These credits can be traded, retired, or used by 
organizations to offset emissions, enabling a transparent carbon market supporting climate 
action and sustainable environmental finance. 
</p>
      </div>
    ),
    image: "g5.avif",
  },
  {
    id: "08",
      title: "6. ⁠NFT-Based Environmental Assets       ",
      text: (
        <div>
          <p className="font-bold mb-4 uppercase tracking-wider text-black">Blupedia offers</p>
          Environmental assets such as forests, biodiversity zones, conservation projects, and 
ecological data can be tokenized into NFTs. These NFTs represent digital ecological assets 
that users can collect, trade, or support. Tokenization creates financial incentives for 
conservation while bringing liquidity and global participation into environmental protection 
initiatives. 

        </div>
      ),
      image: "g6.avif",
  },
  {
    id: "09",
      title: "7. Community Participation and Eco-Governance       ",
      text: (
        <div>
          <p className="font-bold mb-4 uppercase tracking-wider text-black">Your Blupedia Dashboard shows:</p>
          Blupedia empowers communities to participate in environmental governance. Token holders 
can vote on conservation proposals, sustainability initiatives, and ecosystem funding 
priorities. This decentralized governance model ensures that environmental decision-making 
becomes participatory, transparent, and community-driven while aligning economic 
incentives with ecological preservation. 

        </div>
      ),
      image: "g7.avif",
  },
  {
    id: "10",
      title: " 8.⁠ ⁠Sustainable Digital Economy       ",
      text: (
        <div>
          <p className="font-bold mb-4 uppercase tracking-wider text-black"> After you own an NFT:</p>

          Blupedia creates a sustainable digital economy where environmental protection becomes 
economically viable. Through tokens, NFTs, and carbon markets, users can support nature 
while receiving digital value. The platform bridges environmental conservation, Web3 
innovation, and community participation to build a scalable economic model for protecting 
natural ecosystems. 

        </div>
      ),
      image: "g8.avif",
  },
  
  {
    id: "11",
      title: " 8.⁠ ⁠Sustainable Digital Economy       ",
      text: (
        <div>
          <p className="font-bold mb-4 uppercase tracking-wider text-black"> We expect you to:</p>

          Blupedia serves as a knowledge repository for environmental research, biodiversity 
documentation, and ecological storytelling. Verified contributors can publish content, share 
field data, and document conservation efforts. This decentralized knowledge system 
encourages awareness, transparency, and education about environmental challenges and 
sustainable solutions.
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

        <section
  className="relative grid min-h-screen"
  style={{
    gridTemplateColumns: "10% 30% 20% 20% 20%",
  }}
>
          {/* LEFT COLUMN */}
          
          <div
    className="flex flex-col justify-between py-32 px-4"
  style={{ borderRight: "1px solid rgba(0,0,0,0.15)" }}
>
<div className="hidden md:flex flex-col space-y-[60vh] pt-32">
    {NARRATIVE_CONTENT.map((item, idx) => (
      <div
        key={item.id}
        className="text-[8rem] font-black text-black leading-none opacity-20"
      >
        {idx + 1}
      </div>
    ))}
  </div>
</div>

<div
  className="py-32 px-8 space-y-[60vh]"
  style={{ borderRight: "1px solid rgba(0,0,0,0.15)" }}
>
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

      <h2 className="text-4xl md:text67xl font-black tracking-tighter text-black uppercase mb-8">
        {item.title}
      </h2>

      {item.id !== "02" && (
        <div className="text-xl md:text-1xl font-medium leading-relaxed text-black/80">
          {item.text}
        </div>
      )}
    </motion.div>
  ))}

  <div className="h-[40vh]" />
</div>

<div style={{ borderRight: "1px solid rgba(0,0,0,0.15)" }} />

<div
  className="hidden md:block sticky top-0 overflow-hidden"
  style={{
    gridColumn: "4 / span 2",
    height: "100vh",
  }}
>
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
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
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