"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const TECH_NODES = [
  { label: "Java", x: "12%", y: "15%", delay: 0, duration: 6, size: "scale-100" },
  { label: "Kotlin", x: "78%", y: "20%", delay: 1.2, duration: 5, size: "scale-110" },
  { label: "Python", x: "8%", y: "60%", delay: 0.8, duration: 7, size: "scale-90" },
  { label: "Next.js", x: "85%", y: "55%", delay: 2.1, duration: 6.5, size: "scale-105" },
  { label: "C++", x: "28%", y: "78%", delay: 0.5, duration: 5.5, size: "scale-95" },
  { label: "Supabase", x: "72%", y: "82%", delay: 1.5, duration: 7.5, size: "scale-100" },
];

export default function TechVectors() {
  const reduced = useReducedMotion();

  if (reduced) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden hidden md:block">
      {TECH_NODES.map((node, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.45, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 + node.delay }}
          className="absolute"
          style={{ left: node.x, top: node.y }}
        >
          <motion.div
            animate={{
              y: [0, -25, 0],
              x: [0, 10, -10, 0],
              rotate: [0, 8, -8, 0],
            }}
            transition={{
              duration: node.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: node.delay,
            }}
            className={`flex items-center justify-center rounded-2xl border border-cyan-400/20 bg-card px-4 py-2 backdrop-blur-xl shadow-[0_0_20px_rgba(34,211,238,0.15)] ${node.size}`}
          >
            <span className="text-sm font-bold tracking-widest text-cyan-200/80">{node.label}</span>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
