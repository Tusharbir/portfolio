"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const duration = 1500;
    const interval = 20;
    const step = 100 / (duration / interval);
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + step;
      });
    }, interval);

    const exit = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 600);
    }, duration);

    return () => {
      clearInterval(timer);
      clearTimeout(exit);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020b13]"
        >
          <div className="pointer-events-none absolute inset-0 opacity-55">
            <div className="absolute inset-x-[8%] top-[28%] h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
            <div className="absolute inset-x-[15%] top-[66%] h-px bg-gradient-to-r from-transparent via-emerald-300/30 to-transparent" />
          </div>

          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-8"
          >
            <div className="relative w-24 h-24 flex items-center justify-center">
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500 via-sky-500 to-emerald-400"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ padding: 2 }}
              >
                <div className="w-full h-full rounded-2xl bg-[#020b13]" />
              </motion.div>
              <span className="relative z-10 text-3xl font-bold bg-gradient-to-r from-cyan-300 via-sky-200 to-emerald-300 bg-clip-text text-transparent tracking-wider">
                TSM
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-sm text-cyan-100/45 tracking-[0.3em] uppercase mb-6"
          >
            Loading Portfolio
          </motion.p>

          <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-300 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
