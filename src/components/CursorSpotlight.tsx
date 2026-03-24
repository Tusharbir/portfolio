"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function CursorSpotlight() {
  const [isVisible, setIsVisible] = useState(false);
  const reduced = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 400, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 400, damping: 28 });

  useEffect(() => {
    // Disable on mobile where hover makes no sense
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      // 300 is half the width/height to center the orb
      mouseX.set(e.clientX - 300);
      mouseY.set(e.clientY - 300);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, isVisible]);

  if (reduced) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-20 h-[600px] w-[600px] rounded-full mix-blend-screen opacity-0 transition-opacity duration-1000 will-change-transform"
      style={{
        x: springX,
        y: springY,
        opacity: isVisible ? 1 : 0,
        background: "radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, rgba(59, 130, 246, 0.03) 40%, transparent 60%)",
        filter: "blur(20px)",
      }}
    />
  );
}
