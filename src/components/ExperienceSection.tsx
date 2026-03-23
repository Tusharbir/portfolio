"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ChevronDown, Sparkles } from "lucide-react";
import { resumeData } from "@/data/resume";
import { cn } from "@/lib/utils";

const cardVariants = (i: number) => ({
  hidden: { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
});

export default function ExperienceSection() {
  const { experience, profile } = resumeData;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const impactHighlights = [
    "Full SDLC & Agile teamwork, from requirements through deployment",
    "IT systems, Clover POS, and delivery platform management",
    "Android development in Agile/Scrum using Kotlin & Android Studio",
  ];

  return (
    <section id="experience" className="tech-section relative py-24 px-4">
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
            className="text-xs tracking-[0.3em] uppercase text-cyan-500 mb-4 block"
          >
            Career Journey
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-bold t-primary mb-4">Experience</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[2px] w-24 bg-gradient-to-r from-cyan-500 to-cyan-400 mx-auto mb-4 rounded-full origin-center"
          />
          <p className="t-muted max-w-2xl mx-auto">{profile[1]}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 p-6 rounded-2xl bg-cyan-500/5 border border-cyan-500/20"
        >
          <div className="flex items-center gap-2 mb-4">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Sparkles size={18} className="text-cyan-500" />
            </motion.div>
            <h3 className="text-sm font-semibold text-cyan-500 tracking-wider uppercase">Impact Highlights</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            {impactHighlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.12 }}
                className="px-4 py-3 rounded-xl text-sm t-secondary"
                style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
              >
                {h}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-sky-500/30 to-transparent hidden sm:block origin-top"
          />

          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={cardVariants(index)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="relative"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.15, type: "spring", stiffness: 300 }}
                  className="hidden sm:block absolute left-[18px] top-8 w-3 h-3 rounded-full bg-cyan-500 border-4 z-10"
                  style={{ borderColor: "var(--background)" }}
                />

                <div className="sm:ml-12">
                  <motion.button
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      "w-full text-left p-6 rounded-2xl border transition-all duration-300",
                      expandedIndex === index
                        ? "bg-cyan-500/5 border-cyan-500/30 shadow-lg shadow-cyan-500/5"
                        : ""
                    )}
                    style={expandedIndex !== index ? { background: "var(--card-bg)", borderColor: "var(--card-border)" } : undefined}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Briefcase size={16} className="text-cyan-500" />
                          <h3 className="text-lg font-semibold t-primary">{exp.role}</h3>
                        </div>
                        <p className="text-cyan-500 font-medium mb-2">{exp.company}</p>
                        <div className="flex flex-wrap items-center gap-3 text-xs t-muted">
                          <span className="flex items-center gap-1"><Calendar size={12} />{exp.dates}</span>
                          <span className="flex items-center gap-1"><MapPin size={12} />{exp.location}</span>
                        </div>
                      </div>
                      <motion.div animate={{ rotate: expandedIndex === index ? 180 : 0 }} transition={{ duration: 0.3, type: "spring", stiffness: 200 }}>
                        <ChevronDown size={20} className="t-faint shrink-0 mt-1" />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={false}
                      animate={{ height: expandedIndex === index ? "auto" : 0, opacity: expandedIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <ul className="mt-4 space-y-3 pt-4" style={{ borderTop: "1px solid var(--card-border)" }}>
                        {exp.bullets.map((bullet, bi) => (
                          <motion.li
                            key={bi}
                            initial={{ opacity: 0, x: -15 }}
                            animate={expandedIndex === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
                            transition={{ duration: 0.3, delay: bi * 0.08 }}
                            className="flex items-start gap-3 text-sm t-secondary"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                            {bullet}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
