"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { resumeData } from "@/data/resume";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function HeroSection() {
  const { basics, profile } = resumeData;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const nameWords = basics.name.split(" ");

  const scrollToExperience = () => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden">
      <motion.div
        style={{ y: yParallax, opacity: opacityFade }}
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        <motion.div variants={scaleIn} className="inline-block mb-6">
          <span className="px-4 py-1.5 rounded-full text-xs tracking-widest uppercase bg-violet-500/10 text-violet-500 border border-violet-500/20">
            Available for Co-op — May/June 2026
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-2 t-primary"
        >
          Hi, I&apos;m
        </motion.h1>

        <motion.div variants={stagger} className="mb-6">
          {nameWords.map((word, i) => (
            <motion.span
              key={i}
              variants={fadeUp}
              className="inline-block text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mr-[0.3em]"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          className="h-[2px] w-48 bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto mb-8 rounded-full origin-center"
        />

        <motion.p variants={fadeUp} className="text-lg sm:text-xl t-secondary max-w-3xl mx-auto mb-4 leading-relaxed">
          {profile[0]}
        </motion.p>

        <motion.p variants={fadeUp} className="text-base t-muted max-w-2xl mx-auto mb-8 leading-relaxed">
          {profile[1]}
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <motion.button
            onClick={scrollToExperience}
            whileTap={{ scale: 0.95 }}
            className="group px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-medium text-sm hover:from-violet-500 hover:to-purple-500 transition-all shadow-lg shadow-violet-500/25 flex items-center gap-2 active:shadow-violet-500/40"
          >
            View Experience
            <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
          </motion.button>

          <motion.a
            href="#contact"
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-xl font-medium text-sm transition-all flex items-center gap-2 t-secondary hover:t-primary"
            style={{ border: "1px solid var(--card-border)" }}
          >
            <Download size={16} />
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div variants={stagger} className="flex items-center justify-center gap-4">
          {[
            { icon: Linkedin, href: basics.linkedin, label: "LinkedIn" },
            { icon: Github, href: basics.github, label: "GitHub" },
            { icon: Mail, href: `mailto:${basics.email}`, label: "Email" },
          ].map((item, i) => (
            <motion.a
              key={i}
              variants={scaleIn}
              whileTap={{ scale: 0.9 }}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="p-3 rounded-xl hover:bg-violet-500/10 transition-all group"
              style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
              aria-label={item.label}
            >
              <item.icon size={20} className="t-muted group-hover:text-violet-500 transition-colors" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-1.5"
          style={{ borderColor: "var(--card-border)" }}
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1], y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-violet-500"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
