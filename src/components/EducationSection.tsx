"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, ShieldCheck } from "lucide-react";
import { resumeData } from "@/data/resume";

const cardSlide = (i: number) => ({
  hidden: { opacity: 0, x: i % 2 === 0 ? -30 : 30, scale: 0.95 },
  visible: {
    opacity: 1, x: 0, scale: 1,
    transition: { duration: 0.55, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
});

const listStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const listItem = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

export default function EducationSection() {
  const { education, certifications } = resumeData;

  return (
    <section id="education" className="tech-section relative py-24 px-4">
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
            Academic Background
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-bold t-primary mb-4">Education & Certifications</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[2px] w-24 bg-gradient-to-r from-cyan-500 to-cyan-400 mx-auto rounded-full origin-center"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardSlide(index)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileTap={{ scale: 0.98 }}
              className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
              style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  initial={{ rotate: -20, scale: 0 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15, type: "spring", stiffness: 250 }}
                  className="p-3 rounded-xl bg-cyan-500/10 shrink-0"
                >
                  <GraduationCap size={24} className="text-cyan-500" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold t-primary mb-1 group-hover:text-cyan-500 transition-colors">{edu.degree}</h3>
                  <p className="text-cyan-500 font-medium mb-2">{edu.institution}</p>
                  <div className="flex flex-wrap items-center gap-3 text-xs t-muted mb-3">
                    <span className="flex items-center gap-1"><Calendar size={12} />{edu.dates}</span>
                    <span className="flex items-center gap-1"><MapPin size={12} />{edu.location}</span>
                  </div>
                  <motion.ul
                    variants={listStagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-1.5"
                  >
                    {edu.details.map((d, di) => (
                      <motion.li key={di} variants={listItem} className="flex items-start gap-2 text-sm t-secondary">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500/60 shrink-0" />{d}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h3 className="text-xl font-semibold t-primary mb-6 flex items-center gap-2">
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="block w-8 h-px bg-cyan-500/50 origin-left"
            />
            Certificates & Training
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardSlide(index)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileTap={{ scale: 0.98 }}
              className="p-5 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-lg relative overflow-hidden"
              style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
            >
              <div className="flex items-center gap-3 mb-3 relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                  className="p-1.5 rounded-lg bg-emerald-500/10"
                >
                  <ShieldCheck size={16} className="text-emerald-500" />
                </motion.div>
                <div>
                  <h4 className="text-base font-semibold t-primary">{cert.title}</h4>
                  <p className="text-sm text-cyan-500">{cert.provider}</p>
                </div>
              </div>
              <p className="text-xs t-muted mb-3 flex items-center gap-1 relative z-10"><Calendar size={12} />{cert.dates}</p>
              <motion.ul
                variants={listStagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-1.5 relative z-10"
              >
                {cert.details.map((d, di) => (
                  <motion.li key={di} variants={listItem} className="flex items-start gap-2 text-sm t-secondary">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-cyan-500/60 shrink-0" />{d}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
