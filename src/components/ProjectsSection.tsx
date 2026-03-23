"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProjectFlipCard from "@/components/ProjectFlipCard";
import { resumeData } from "@/data/resume";

export default function ProjectsSection() {
  const { projects } = resumeData;

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 block text-xs tracking-[0.3em] text-violet-500 uppercase"
          >
            What I&apos;ve Built
          </motion.span>
          <h2 className="mb-4 text-3xl font-bold t-primary sm:text-4xl">Projects</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mb-4 h-[2px] w-24 origin-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
          />
          <p className="mx-auto max-w-2xl text-sm t-muted sm:text-base">
            Scroll sideways. Each card shows a short summary and stack on the front; hover (or tap on touch) to flip for full bullet points and GitHub.
          </p>
        </motion.div>
      </div>

      <div
        className="w-full overflow-x-auto overflow-y-visible pb-4 [scrollbar-gutter:stable]"
        style={{ WebkitOverflowScrolling: "touch" }}
        aria-label="Project cards, horizontal scroll"
      >
        <div className="mx-auto flex w-max max-w-none snap-x snap-mandatory gap-6 px-4 sm:px-6 lg:px-8">
          {projects.map((project, index) => (
            <ProjectFlipCard
              key={project.title}
              project={project}
              index={index}
              className="snap-start"
            />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-xl border border-violet-500/40 bg-violet-500/10 px-6 py-3 text-sm font-semibold text-violet-200 transition hover:border-violet-400/50 hover:bg-violet-500/20"
          >
            View all projects
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
