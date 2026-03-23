"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const vectorPaths = [
  "M -40 180 C 180 110, 380 260, 620 180 S 1120 120, 1480 210",
  "M -20 500 C 220 430, 380 610, 650 520 S 1120 430, 1460 560",
  "M 180 -40 C 260 120, 330 220, 460 360 S 760 660, 860 940",
  "M 990 -40 C 930 120, 980 260, 1090 380 S 1260 650, 1180 940",
];

const vectorNodes = [
  { x: 164, y: 178, delay: 0.2 },
  { x: 414, y: 202, delay: 1.1 },
  { x: 776, y: 170, delay: 0.6 },
  { x: 1148, y: 510, delay: 1.4 },
  { x: 318, y: 568, delay: 0.9 },
  { x: 1022, y: 234, delay: 0.3 },
];

export default function FuturisticOverlay({ subtle = false }: { subtle?: boolean }) {
  const reducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 z-[2] overflow-hidden" aria-hidden="true">
      <div className="futurism-grid-mask absolute inset-0" />

      {!subtle && (
        <motion.div
          className="diag-streak absolute inset-[-10%]"
          animate={reducedMotion ? undefined : { y: ["-2%", "2%", "-2%"] }}
          transition={reducedMotion ? undefined : { duration: 13, repeat: Infinity, ease: "linear" }}
        />
      )}

      <motion.div
        className="scroll-beam absolute inset-x-[10%] top-[-35vh] h-[35vh] rounded-[999px]"
        animate={reducedMotion || subtle ? undefined : { y: ["-6%", "106%"] }}
        transition={reducedMotion || subtle ? undefined : { duration: 14, repeat: Infinity, ease: "linear" }}
      />

      {!subtle && (
        <>
          <div className="absolute bottom-0 left-[8%] top-0">
            <div className="side-rail h-full" />
            <motion.div
              className="rail-orb absolute left-1/2 -translate-x-1/2"
              animate={reducedMotion ? undefined : { top: ["8%", "92%", "8%"] }}
              transition={reducedMotion ? undefined : { duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="absolute bottom-0 right-[8%] top-0">
            <div className="side-rail h-full" />
            <motion.div
              className="rail-orb absolute left-1/2 -translate-x-1/2"
              animate={reducedMotion ? undefined : { top: ["92%", "10%", "92%"] }}
              transition={reducedMotion ? undefined : { duration: 13, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </>
      )}

      <svg
        viewBox="0 0 1440 900"
        className={subtle ? "absolute inset-0 h-full w-full opacity-44" : "absolute inset-0 h-full w-full opacity-60"}
        preserveAspectRatio="xMidYMid slice"
      >
        {vectorPaths.map((d, index) => (
          <path
            key={d}
            d={d}
            className="vector-line"
            style={{ animationDelay: `${index * 1.2}s` }}
          />
        ))}
        {vectorNodes.map((node) => (
          <circle
            key={`${node.x}-${node.y}`}
            cx={node.x}
            cy={node.y}
            r="3"
            className="vector-node"
            style={{ animationDelay: `${node.delay}s` }}
          />
        ))}
      </svg>

      <motion.div
        className={subtle ? "hud-ring absolute -right-12 top-[18vh] h-60 w-60 rounded-full opacity-60" : "hud-ring absolute -right-24 top-[15vh] h-80 w-80 rounded-full"}
        animate={reducedMotion || subtle ? undefined : { rotate: [0, 280] }}
        transition={reducedMotion || subtle ? undefined : { duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-8 rounded-full border border-cyan-300/20" />
        <div className="absolute inset-[3.75rem] rounded-full border border-emerald-300/25" />
      </motion.div>

      <motion.div
        className={subtle ? "hud-ring absolute -left-12 bottom-[8vh] h-44 w-44 rounded-full opacity-45" : "hud-ring absolute -left-20 bottom-[8vh] h-64 w-64 rounded-full opacity-65"}
        animate={reducedMotion || subtle ? undefined : { rotate: [0, -240] }}
        transition={reducedMotion || subtle ? undefined : { duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-7 rounded-full border border-cyan-200/20" />
      </motion.div>
    </div>
  );
}
