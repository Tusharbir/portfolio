"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Calendar,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { resumeData } from "@/data/resume";
import { cn } from "@/lib/utils";

export default function ExperienceSection() {
  const { experience, profile } = resumeData;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const impactHighlights = [
    "Full SDLC & Agile teamwork, from requirements through deployment",
    "Monitored IT systems and ERP workflows for continuous operations",
    "Developed Android components in an Agile/Scrum team using Kotlin",
  ];

  return (
    <section id="experience" className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-widest uppercase text-violet-400 mb-4 block">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Experience
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto">
            {profile[1]}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-violet-500/10 via-purple-500/5 to-cyan-500/10 border border-violet-500/20"
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={18} className="text-violet-400" />
            <h3 className="text-sm font-semibold text-violet-400 tracking-wider uppercase">
              Impact Highlights
            </h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            {impactHighlights.map((h, i) => (
              <div
                key={i}
                className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-sm text-white/70"
              >
                {h}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-purple-500/30 to-transparent hidden sm:block" />

          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="hidden sm:block absolute left-[18px] top-8 w-3 h-3 rounded-full bg-violet-500 border-4 border-[#0a0a12] z-10" />

                <div className="sm:ml-12">
                  <button
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? null : index)
                    }
                    className={cn(
                      "w-full text-left p-6 rounded-2xl border transition-all duration-300",
                      expandedIndex === index
                        ? "bg-white/[0.04] border-violet-500/30 shadow-lg shadow-violet-500/5"
                        : "bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.03]"
                    )}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Briefcase size={16} className="text-violet-400" />
                          <h3 className="text-lg font-semibold text-white">
                            {exp.role}
                          </h3>
                        </div>
                        <p className="text-violet-400/80 font-medium mb-2">
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-white/40">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {exp.dates}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={12} />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <ChevronDown
                        size={20}
                        className={cn(
                          "text-white/30 transition-transform duration-300 shrink-0 mt-1",
                          expandedIndex === index && "rotate-180"
                        )}
                      />
                    </div>

                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedIndex === index ? "auto" : 0,
                        opacity: expandedIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <ul className="mt-4 space-y-3 border-t border-white/5 pt-4">
                        {exp.bullets.map((bullet, bi) => (
                          <li
                            key={bi}
                            className="flex items-start gap-3 text-sm text-white/60"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
