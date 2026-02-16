"use client";

import { motion } from "framer-motion";

export function HomeEcosystemDiagram() {
  return (
    <svg
      viewBox="0 0 640 360"
      className="w-full h-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* CONNECTIONS */}
      {[
        "M320 60 C320 140, 160 140, 160 200",
        "M320 60 C320 140, 480 140, 480 200",
        "M160 200 C320 260, 320 260, 320 300",
        "M480 200 C320 260, 320 260, 320 300",
      ].map((path, i) => (
        <motion.path
          key={i}
          d={path}
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="2"
          strokeDasharray="600"
          strokeDashoffset="600"
          initial={{ strokeDashoffset: 600 }}
          whileInView={{ strokeDashoffset: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 1.2,
            delay: i * 0.08,
            ease: "easeOut",
          }}
        />
      ))}

      {/* NODES */}
      {[
        { x: 320, y: 60, label: "Environmental Data", labelPosition: "above" },
        { x: 160, y: 200, label: "Scientific Analysis", labelPosition: "below" },
        { x: 480, y: 200, label: "Community Action", labelPosition: "below" },
        { x: 320, y: 300, label: "Policy & Impact", labelPosition: "below" },
      ].map((node, i) => (
        <g key={node.label}>
          <motion.circle
            cx={node.x}
            cy={node.y}
            r="28"
            fill="black"
            stroke="white"
            strokeWidth="2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
          />
         <text
            x={node.x}
            y={node.labelPosition === "above" ? node.y - 42 : node.y + 50}
            textAnchor="middle"
            fill="white"
            fontSize="14"
            >
            {node.label}
        </text>
        </g>
      ))}
    </svg>
  );
}