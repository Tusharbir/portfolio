"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { resumeData } from "@/data/resume";

export default function EducationSection() {
  const { education, certifications } = resumeData;

  return (
    <section id="education" className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-widest uppercase text-violet-400 mb-4 block">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Education & Certifications
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-violet-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-violet-500/10 shrink-0">
                  <GraduationCap size={24} className="text-violet-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-violet-400/80 font-medium mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-white/40 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {edu.dates}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {edu.location}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {edu.details.map((d, di) => (
                      <li
                        key={di}
                        className="flex items-start gap-2 text-sm text-white/50"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-400/60 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <span className="w-8 h-px bg-violet-500/50" />
            Certificates & Training
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all"
            >
              <h4 className="text-base font-semibold text-white mb-1">
                {cert.title}
              </h4>
              <p className="text-sm text-violet-400/70 mb-2">{cert.provider}</p>
              <p className="text-xs text-white/40 mb-3 flex items-center gap-1">
                <Calendar size={12} />
                {cert.dates}
              </p>
              <ul className="space-y-1.5">
                {cert.details.map((d, di) => (
                  <li
                    key={di}
                    className="flex items-start gap-2 text-sm text-white/50"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-violet-400/60 shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
