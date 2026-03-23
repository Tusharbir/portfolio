"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import ProjectFlipCard from "@/components/ProjectFlipCard";
import ScrollProgress from "@/components/ScrollProgress";
import { ThemeProvider } from "@/components/ThemeProvider";
import { resumeData } from "@/data/resume";

export default function ProjectsPage() {
  const { projects } = resumeData;

  return (
    <ThemeProvider>
      <AnimatedBackground />
      <ScrollProgress />
      <Navbar />

      <main className="relative z-10 min-h-screen px-4 pb-24 pt-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Link
              href="/#projects"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-violet-400 transition hover:text-violet-300"
            >
              <ArrowLeft size={16} aria-hidden />
              Back to home
            </Link>
            <h1 className="text-3xl font-bold t-primary sm:text-4xl">All projects</h1>
            <p className="mt-3 max-w-2xl text-sm t-muted sm:text-base">
              Hover a card to flip for bullet points and links—or tap on touch devices.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
            aria-label="All projects"
          >
            {projects.map((project, index) => (
              <ProjectFlipCard
                key={project.title}
                project={project}
                index={index}
                className="w-full min-w-0"
              />
            ))}
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
