"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Code, Award, ShieldCheck } from "lucide-react";
import { resumeData } from "@/data/resume";

const typeConfig: Record<string, { icon: typeof Trophy; accent: string; glow: string }> = {
  award: { icon: Trophy, accent: "text-yellow-500", glow: "shadow-yellow-500/20" },
  engineering: { icon: Code, accent: "text-cyan-500", glow: "shadow-cyan-500/20" },
  leadership: { icon: Star, accent: "text-cyan-500", glow: "shadow-cyan-500/20" },
  certification: { icon: ShieldCheck, accent: "text-emerald-500", glow: "shadow-emerald-500/20" },
};

const cardSlide = (i: number) => ({
  hidden: { opacity: 0, x: i % 2 === 0 ? -30 : 30, scale: 0.95 },
  visible: {
    opacity: 1, x: 0, scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
});

export default function AchievementsSection() {
  const { achievements, awards } = resumeData;
  const topImpact = achievements.slice(0, 3);

  return (
    <section id="achievements" className="tech-section relative py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] uppercase text-cyan-500 mb-4 block"
          >
            Highlights
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-bold t-primary mb-4">Achievements</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[2px] w-24 bg-gradient-to-r from-yellow-500 to-amber-400 mx-auto rounded-full origin-center"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 p-6 rounded-2xl bg-yellow-500/5 border border-yellow-500/20"
        >
          <div className="flex items-center gap-2 mb-4">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Award size={18} className="text-yellow-500" />
            </motion.div>
            <h3 className="text-sm font-semibold text-yellow-500 tracking-wider uppercase">Top 3 Impact</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            {topImpact.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.12, type: "spring", stiffness: 200 }}
                whileTap={{ scale: 0.97 }}
                className="px-4 py-3 rounded-xl"
                style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
              >
                <p className="text-sm font-medium t-primary mb-1">{item.title}</p>
                <p className="text-xs t-muted">{item.context}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((ach, index) => {
            const config = typeConfig[ach.type] || typeConfig.engineering;
            const Icon = config.icon;
            return (
              <motion.div
                key={index}
                variants={cardSlide(index)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                whileTap={{ scale: 0.97 }}
                className={`group p-6 rounded-2xl cursor-default transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
              >
                <div className="flex items-start gap-3">
                  <motion.div
                    initial={{ rotate: -20, scale: 0 }}
                    whileInView={{ rotate: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.08, type: "spring", stiffness: 300 }}
                    className="p-2 rounded-xl bg-cyan-500/10 shrink-0"
                  >
                    <Icon size={20} className={config.accent} />
                  </motion.div>
                  <div>
                    <h4 className="text-sm font-semibold t-primary mb-1">{ach.title}</h4>
                    <p className="text-xs t-muted">{ach.context}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {awards.length > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 150 }}
            className="mt-8 p-6 rounded-2xl bg-yellow-500/5 border border-yellow-500/20 text-center overflow-hidden relative"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "linear" }}
            />
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
            >
              <Trophy size={28} className="text-yellow-500 mx-auto mb-3" />
            </motion.div>
            <h4 className="text-lg font-bold t-primary mb-1 relative z-10">{awards[0].title}</h4>
            <p className="text-sm t-muted relative z-10">{awards[0].event} — {awards[0].project}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
