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

const categoryGradients: Record<string, string> = {
  Languages: "from-cyan-500 to-sky-500",
  "Frameworks & Tools": "from-cyan-500 to-blue-500",
  Databases: "from-emerald-500 to-green-500",
  "Core Concepts": "from-amber-500 to-orange-500",
};

const cardSlide = (i: number) => ({
  hidden: { opacity: 0, x: i % 2 === 0 ? -35 : 35, scale: 0.95 },
  visible: {
    opacity: 1, x: 0, scale: 1,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
});

const pillStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.15 } },
};

const pillPop = {
  hidden: { opacity: 0, scale: 0.5, y: 8 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { type: "spring" as const, stiffness: 400, damping: 14 },
  },
};

export default function SkillsSection() {
  const { skills } = resumeData;

  return (
    <section id="skills" className="tech-section relative py-24 px-4">
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
            Tech Stack
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-bold t-primary mb-4">Technical Skills</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[2px] w-24 bg-gradient-to-r from-cyan-500 to-cyan-400 mx-auto rounded-full origin-center"
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((group, index) => {
            const Icon = categoryIcons[group.category] || Code2;
            const gradient = categoryGradients[group.category] || "from-cyan-500 to-sky-500";
            return (
              <motion.div
                key={index}
                variants={cardSlide(index)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                whileTap={{ scale: 0.98 }}
                className="p-6 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <motion.div
                    initial={{ rotate: -30, scale: 0 }}
                    whileInView={{ rotate: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1, type: "spring", stiffness: 250 }}
                    className={`p-2 rounded-xl bg-gradient-to-br ${gradient}`}
                  >
                    <Icon size={20} className="text-white" />
                  </motion.div>
                  <h3 className="text-base font-semibold t-primary">{group.category}</h3>
                </div>

                <motion.div
                  variants={pillStagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2"
                >
                  {group.items.map((skill, si) => (
                    <motion.span
                      key={si}
                      variants={pillPop}
                      whileTap={{ scale: 0.9 }}
                      className="px-3 py-1.5 rounded-lg text-sm t-secondary cursor-default transition-all hover:-translate-y-0.5 hover:text-cyan-500"
                      style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
                    >
                      {skill}
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
