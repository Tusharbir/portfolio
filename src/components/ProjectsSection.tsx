"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";
import { resumeData } from "@/data/resume";

export default function ProjectsSection() {
  const { projects } = resumeData;

  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-widest uppercase text-violet-400 mb-4 block">
            What I&apos;ve Built
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Projects
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in software
            engineering, system design, and full-stack development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-violet-500/30 hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-xl bg-violet-500/10">
                  <Layers
                    size={20}
                    className="text-violet-400"
                  />
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <Github
                    size={18}
                    className="text-white/30 group-hover:text-white/60 transition-colors"
                  />
                </a>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-violet-300 transition-colors">
                {project.title}
              </h3>

              <ul className="space-y-2 mb-4">
                {project.bullets.map((bullet, bi) => (
                  <li
                    key={bi}
                    className="flex items-start gap-2 text-sm text-white/50"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-violet-400/60 shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                {project.stack.map((tech, ti) => (
                  <span
                    key={ti}
                    className="px-2.5 py-1 rounded-md text-xs bg-violet-500/10 text-violet-300 border border-violet-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
