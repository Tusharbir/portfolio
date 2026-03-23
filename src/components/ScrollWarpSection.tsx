"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type ScrollWarpSectionProps = {
  children: ReactNode;
};

export default function ScrollWarpSection({ children }: ScrollWarpSectionProps) {
  const reducedMotion = useReducedMotion();
  if (reducedMotion) {
    return <div className="relative overflow-x-hidden">{children}</div>;
  }

  return (
    <motion.div
      className="relative overflow-x-hidden will-change-transform"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
