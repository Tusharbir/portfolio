"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
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
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.25,
  });

  const beamY = useTransform(smoothProgress, [0, 1], subtle ? ["-8%", "106%"] : ["-20%", "115%"]);
  const gridY = useTransform(smoothProgress, [0, 1], subtle ? ["-3%", "4%"] : ["-5%", "8%"]);
  const streakY = useTransform(smoothProgress, [0, 1], subtle ? ["-4%", "4%"] : ["-10%", "10%"]);
  const rightRingRotate = useTransform(smoothProgress, [0, 1], subtle ? [0, 160] : [0, 320]);
  const leftRingRotate = useTransform(smoothProgress, [0, 1], subtle ? [0, -130] : [0, -280]);
  const ringScale = useTransform(smoothProgress, [0, 1], subtle ? [0.94, 1.07] : [0.86, 1.2]);
  const leftOrbY = useTransform(smoothProgress, [0, 1], ["4%", "94%"]);
  const rightOrbY = useTransform(smoothProgress, [0, 1], ["96%", "8%"]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[2] overflow-hidden" aria-hidden="true">
      <motion.div
        className="futurism-grid-mask absolute inset-0"
        style={reducedMotion ? undefined : { y: gridY }}
      />

      {!subtle && (
        <motion.div
          className="diag-streak absolute inset-[-10%]"
          style={reducedMotion ? undefined : { y: streakY }}
        />
      )}

      <motion.div
        className="scroll-beam absolute inset-x-[10%] top-[-35vh] h-[35vh] rounded-[999px]"
        style={reducedMotion ? undefined : { y: beamY }}
      />

      {!subtle && (
        <>
          <div className="absolute bottom-0 left-[8%] top-0">
            <div className="side-rail h-full" />
            <motion.div
              className="rail-orb absolute left-1/2 -translate-x-1/2"
              style={reducedMotion ? { top: "30%" } : { top: leftOrbY }}
            />
          </div>

          <div className="absolute bottom-0 right-[8%] top-0">
            <div className="side-rail h-full" />
            <motion.div
              className="rail-orb absolute left-1/2 -translate-x-1/2"
              style={reducedMotion ? { top: "70%" } : { top: rightOrbY }}
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
        style={reducedMotion ? undefined : { rotate: rightRingRotate, scale: ringScale }}
      >
        <div className="absolute inset-8 rounded-full border border-cyan-300/20" />
        <div className="absolute inset-[3.75rem] rounded-full border border-emerald-300/25" />
      </motion.div>

      <motion.div
        className={subtle ? "hud-ring absolute -left-12 bottom-[8vh] h-44 w-44 rounded-full opacity-45" : "hud-ring absolute -left-20 bottom-[8vh] h-64 w-64 rounded-full opacity-65"}
        style={reducedMotion ? undefined : { rotate: leftRingRotate }}
      >
        <div className="absolute inset-7 rounded-full border border-cyan-200/20" />
      </motion.div>
    </div>
  );
}
