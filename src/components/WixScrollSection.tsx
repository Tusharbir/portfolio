"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type WixScrollSectionProps = {
  children: ReactNode;
};

export default function WixScrollSection({ children }: WixScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const filter = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(8px)"]);

  if (reducedMotion) {
    return <div className="relative">{children}</div>;
  }

  return (
    <motion.div
      ref={containerRef}
      style={{ scale, opacity, y, filter }}
      className="relative origin-top will-change-transform"
    >
      {children}
    </motion.div>
  );
}
