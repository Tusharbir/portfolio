"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import FuturisticOverlay from "@/components/FuturisticOverlay";
import Navbar from "@/components/Navbar";
import ProjectShowcaseCard from "@/components/ProjectShowcaseCard";
import ScrollProgress from "@/components/ScrollProgress";
import { ThemeProvider } from "@/components/ThemeProvider";
import { resumeData } from "@/data/resume";

export default function ProjectsPage() {
  const { projects } = resumeData;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const gridVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { type: "spring" as const, stiffness: 200, damping: 22 } 
    },
  };

  return (
    <ThemeProvider>
      <AnimatedBackground />
      <FuturisticOverlay subtle />
      <ScrollProgress />
      <Navbar />

      <main className="relative z-10 min-h-screen px-4 pb-24 pt-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Link
              href="/#projects"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
            >
              <ArrowLeft size={16} aria-hidden />
              Back to home
            </Link>
            <h1 className="text-3xl font-bold t-primary sm:text-4xl">All projects</h1>
            <p className="mt-3 max-w-2xl text-sm t-muted sm:text-base">
              Each card has the full story: summary, highlights, tech stack, and links—laid out for reading on a larger surface.
            </p>
          </motion.div>

          <motion.div
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10"
            aria-label="All projects"
          >
            {projects.map((project, index) => (
              <motion.div key={project.title} variants={itemVariants}>
                <ProjectShowcaseCard project={project} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </ThemeProvider>
  );
}
