"use client";

import { motion } from "framer-motion";
import { Code2, Database, Settings, BookOpen } from "lucide-react";
import { resumeData } from "@/data/resume";

const categoryIcons: Record<string, typeof Code2> = {
  Languages: Code2,
  "Frameworks & Tools": Settings,
  Databases: Database,
  "Core Concepts": BookOpen,
};

const categoryColors: Record<string, string> = {
  Languages: "from-violet-500 to-purple-500",
  "Frameworks & Tools": "from-cyan-500 to-blue-500",
  Databases: "from-emerald-500 to-green-500",
  "Core Concepts": "from-amber-500 to-orange-500",
};

export default function SkillsSection() {
  const { skills } = resumeData;

  return (
    <section id="skills" className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-widest uppercase text-violet-400 mb-4 block">
            Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((group, index) => {
            const Icon = categoryIcons[group.category] || Code2;
            const gradient = categoryColors[group.category] || "from-violet-500 to-purple-500";
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`p-2 rounded-xl bg-gradient-to-br ${gradient} bg-opacity-20`}
                  >
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, si) => (
                    <motion.span
                      key={si}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1 + si * 0.03,
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1.5 rounded-lg text-sm bg-white/5 text-white/70 border border-white/5 hover:border-white/15 hover:text-white/90 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
