"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { resumeData } from "@/data/resume";

export default function HeroSection() {
  const { basics, profile } = resumeData;

  const scrollToExperience = () => {
    document
      .getElementById("experience")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pt-16"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-1.5 rounded-full text-xs tracking-widest uppercase bg-violet-500/10 text-violet-400 border border-violet-500/20">
              Available for Co-op — May/June 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="text-white dark:text-white">Hi, I&apos;m </span>
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {basics.name}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto mb-4 leading-relaxed"
          >
            {profile[0]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base text-white/40 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            {profile[1]}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
          >
            <button
              onClick={scrollToExperience}
              className="group px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-medium text-sm hover:from-violet-500 hover:to-purple-500 transition-all shadow-lg shadow-violet-500/25 flex items-center gap-2"
            >
              View Experience
              <ArrowDown
                size={16}
                className="group-hover:translate-y-1 transition-transform"
              />
            </button>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-white/10 text-white/80 font-medium text-sm hover:bg-white/5 hover:border-white/20 transition-all flex items-center gap-2"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex items-center justify-center gap-4"
          >
            <a
              href={basics.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/50 hover:bg-violet-500/10 transition-all group"
            >
              <Linkedin
                size={20}
                className="text-white/50 group-hover:text-violet-400 transition-colors"
              />
            </a>
            <a
              href={basics.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/50 hover:bg-violet-500/10 transition-all group"
            >
              <Github
                size={20}
                className="text-white/50 group-hover:text-violet-400 transition-colors"
              />
            </a>
            <a
              href={`mailto:${basics.email}`}
              className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/50 hover:bg-violet-500/10 transition-all group"
            >
              <Mail
                size={20}
                className="text-white/50 group-hover:text-violet-400 transition-colors"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
