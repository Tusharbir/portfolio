"use client";

import { useState } from "react";
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

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <ThemeProvider>
      {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}

      <AnimatedBackground />

      {splashDone && (
        <>
          <ScrollProgress />
          <Navbar />

          <main className="relative z-10">
            <HeroSection />

            <div className="max-w-7xl mx-auto">
              <div className="h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
            </div>

            <ExperienceSection />

            <div className="max-w-7xl mx-auto">
              <div className="h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
            </div>

            <AchievementsSection />

            <div className="max-w-7xl mx-auto">
              <div className="h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
            </div>

            <ProjectsSection />

            <div className="max-w-7xl mx-auto">
              <div className="h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
            </div>

            <SkillsSection />

            <div className="max-w-7xl mx-auto">
              <div className="h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
            </div>

            <EducationSection />

            <div className="max-w-7xl mx-auto">
              <div className="h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
            </div>

            <ContactSection />
          </main>
        </>
      )}
    </ThemeProvider>
  );
}
