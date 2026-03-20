"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedBackground from "@/components/AnimatedBackground";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import AchievementsSection from "@/components/AchievementsSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import { ThemeProvider } from "@/components/ThemeProvider";

function SectionDivider() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-2 relative">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-px bg-gradient-to-r from-transparent via-violet-500/25 to-transparent origin-center"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-4 rounded-full bg-violet-500/10 blur-xl pointer-events-none"
      />
    </div>
  );
}

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <ThemeProvider>
      {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}

      <AnimatedBackground />

      {splashDone && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <ScrollProgress />
          <Navbar />

          <main className="relative z-10">
            <HeroSection />
            <SectionDivider />
            <ExperienceSection />
            <SectionDivider />
            <AchievementsSection />
            <SectionDivider />
            <ProjectsSection />
            <SectionDivider />
            <SkillsSection />
            <SectionDivider />
            <EducationSection />
            <SectionDivider />
            <ContactSection />
          </main>
        </motion.div>
      )}
    </ThemeProvider>
  );
}
