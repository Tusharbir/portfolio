"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { resumeData } from "@/data/resume";

import TechVectors from "@/components/TechVectors";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function HeroSection() {
  const { basics, profile } = resumeData;

  const nameWords = basics.name.split(" ");

  const scrollToExperience = () => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="tech-section relative min-h-screen overflow-hidden px-4 pt-32 pb-16"
    >
      <TechVectors />
      <div className="pointer-events-none absolute inset-0">
        <motion.svg
          viewBox="0 0 1200 720"
          className="absolute inset-0 h-full w-full opacity-50"
          preserveAspectRatio="xMidYMid slice"
        >
          <path d="M -20 220 C 190 120, 390 280, 620 200 S 1030 120, 1230 230" className="vector-line" />
          <path d="M 100 650 C 280 470, 420 430, 700 480 S 1030 570, 1220 430" className="vector-line" />
          <circle cx="236" cy="176" r="3" className="vector-node" />
          <circle cx="620" cy="200" r="3" className="vector-node" style={{ animationDelay: "0.7s" }} />
          <circle cx="930" cy="506" r="3" className="vector-node" style={{ animationDelay: "1.2s" }} />
        </motion.svg>
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl flex-col items-center justify-center text-center"
      >
        <motion.div variants={scaleIn} className="mb-6 inline-block">
          <span className="hero-pill relative flex overflow-hidden rounded-full border border-cyan-400/60 bg-cyan-500/10 px-5 py-2 text-xs uppercase tracking-[0.25em] text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.3)] animate-pulse-glow">
            <span className="absolute inset-0 -translate-x-full animate-[shimmer_2.5s_infinite] bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
            <span className="relative font-bold">Available for Co-op — May/June 2026</span>
          </span>
        </motion.div>

        <motion.h1 variants={fadeUp} className="mb-2 text-4xl font-bold tracking-tight t-primary sm:text-6xl lg:text-7xl">
          Hi, I&apos;m
        </motion.h1>

        <motion.div variants={stagger} className="mb-6">
          {nameWords.map((word, i) => (
            <motion.span
              key={i}
              variants={fadeUp}
              className="hero-name-gradient mr-[0.3em] inline-block bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl lg:text-7xl"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          className="mx-auto mb-8 h-[2px] w-52 origin-center rounded-full bg-gradient-to-r from-cyan-400 to-sky-300"
        />

        <motion.p variants={fadeUp} className="mx-auto mb-4 max-w-3xl text-lg leading-relaxed t-secondary sm:text-xl">
          {profile[0]}
        </motion.p>

        <motion.p variants={fadeUp} className="mx-auto mb-8 max-w-2xl text-base leading-relaxed t-muted">
          {profile[1]}
        </motion.p>

        <motion.div variants={fadeUp} className="mb-10 flex flex-wrap items-center justify-center gap-4">
          <motion.button
            onClick={scrollToExperience}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/25 transition-all hover:from-cyan-400 hover:to-sky-400"
          >
            View Experience
            <ArrowDown size={16} className="transition-transform group-hover:translate-y-1" />
          </motion.button>

          <motion.a
            href="/Resume_Tusharbir_Singh_Mutty.pdf"
            download="Resume_Tusharbir_Singh_Mutty.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-all t-secondary hover:bg-cyan-400/10 hover:t-primary"
            style={{ border: "1px solid var(--card-border)" }}
          >
            <Download size={16} aria-hidden />
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
              className="group rounded-xl p-3 transition-all hover:bg-cyan-400/10"
              style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
              aria-label={item.label}
            >
              <item.icon size={20} className="transition-colors t-muted group-hover:text-cyan-200" />
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
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 p-1.5"
          style={{ borderColor: "var(--card-border)" }}
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1], y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-cyan-300"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
