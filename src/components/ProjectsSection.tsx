"use client";

import { motion } from "framer-motion";
import { Github, Layers, Star, Lock } from "lucide-react";
import { resumeData } from "@/data/resume";

const cardSlide = (i: number) => ({
  hidden: { opacity: 0, x: i % 2 === 0 ? -30 : 30, scale: 0.95 },
  visible: {
    opacity: 1, x: 0, scale: 1,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
});

const pillStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.2 } },
};

const pillPop = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 400, damping: 15 } },
};

export default function ProjectsSection() {
  const { projects } = resumeData;

  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] uppercase text-violet-500 mb-4 block"
          >
            What I&apos;ve Built
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-bold t-primary mb-4">Projects</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[2px] w-24 bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto mb-4 rounded-full origin-center"
          />
          <p className="t-muted max-w-2xl mx-auto">
            A collection of projects showcasing skills in software engineering, AI, mobile development, and system design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const isFeatured = "featured" in project && Boolean((project as { featured?: boolean }).featured);
            const stars = "stars" in project ? Number((project as { stars?: number }).stars) || 0 : 0;

            return (
              <motion.div
                key={index}
                variants={cardSlide(index)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                whileTap={{ scale: 0.98 }}
                className={`group p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden ${isFeatured ? "md:col-span-2 border-violet-500/30 bg-violet-500/5" : ""}`}
                style={!isFeatured ? { background: "var(--card-bg)", border: "1px solid var(--card-border)" } : { border: "1px solid rgba(139,92,246,0.3)" }}
              >
                {isFeatured && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/5 to-transparent pointer-events-none"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 2, ease: "linear" }}
                  />
                )}

                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className="flex items-center gap-2">
                    <motion.div
                      initial={{ rotate: -20, scale: 0 }}
                      whileInView={{ rotate: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + index * 0.08, type: "spring", stiffness: 300 }}
                      className="p-2 rounded-xl bg-violet-500/10"
                    >
                      <Layers size={20} className="text-violet-500" />
                    </motion.div>
                    {isFeatured ? (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-violet-500/20 text-violet-500"
                      >
                        Featured
                      </motion.span>
                    ) : null}
                  </div>
                  <div className="flex items-center gap-2">
                    {stars > 0 && (
                      <span className="flex items-center gap-1 text-xs text-yellow-500">
                        <Star size={12} fill="currentColor" />{stars}
                      </span>
                    )}
                    {project.github ? (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileTap={{ scale: 0.85 }}
                        className="p-2 rounded-lg hover:bg-violet-500/10 transition-colors"
                      >
                        <Github size={18} className="t-faint group-hover:t-secondary transition-colors" />
                      </motion.a>
                    ) : (
                      <span className="p-2 rounded-lg" title="Private repository">
                        <Lock size={16} className="t-faint" />
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-semibold t-primary mb-3 group-hover:text-violet-500 transition-colors relative z-10">
                  {project.title}
                </h3>

                <ul className="space-y-2 mb-4 relative z-10">
                  {project.bullets.map((bullet, bi) => (
                    <motion.li
                      key={bi}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: index * 0.04 + bi * 0.06 }}
                      className="flex items-start gap-2 text-sm t-secondary"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-violet-500/60 shrink-0" />
                      {bullet}
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  variants={pillStagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2 pt-3 relative z-10"
                  style={{ borderTop: "1px solid var(--card-border)" }}
                >
                  {project.stack.map((tech, ti) => (
                    <motion.span
                      key={ti}
                      variants={pillPop}
                      whileTap={{ scale: 0.9 }}
                      className="px-2.5 py-1 rounded-md text-xs bg-violet-500/10 text-violet-500 border border-violet-500/20"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
