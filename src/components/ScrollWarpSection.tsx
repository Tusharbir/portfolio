"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type ScrollWarpSectionProps = {
  children: ReactNode;
};

export default function ScrollWarpSection({ children }: ScrollWarpSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.35,
  });

  const y = useTransform(smooth, [0, 0.5, 1], [44, 0, -44]);
  const scale = useTransform(smooth, [0, 0.5, 1], [0.982, 1, 0.982]);
  const rotateX = useTransform(smooth, [0, 0.5, 1], [4.5, 0, -4.5]);
  const opacity = useTransform(smooth, [0, 0.12, 0.88, 1], [0.25, 1, 1, 0.25]);

  return (
    <motion.div
      ref={ref}
      className="relative overflow-x-hidden will-change-transform"
      style={
        reducedMotion
          ? undefined
          : {
              y,
              scale,
              rotateX,
              opacity,
              transformPerspective: 1300,
              transformOrigin: "50% 50%",
            }
      }
    >
      {children}
    </motion.div>
  );
}
