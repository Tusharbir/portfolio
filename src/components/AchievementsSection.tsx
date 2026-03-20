"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Code, Award, ShieldCheck } from "lucide-react";
import { resumeData } from "@/data/resume";

const typeConfig: Record<
  string,
  { icon: typeof Trophy; gradient: string; borderColor: string }
> = {
  award: {
    icon: Trophy,
    gradient: "from-yellow-500/20 to-amber-500/10",
    borderColor: "border-yellow-500/30",
  },
  engineering: {
    icon: Code,
    gradient: "from-violet-500/20 to-purple-500/10",
    borderColor: "border-violet-500/30",
  },
  leadership: {
    icon: Star,
    gradient: "from-cyan-500/20 to-blue-500/10",
    borderColor: "border-cyan-500/30",
  },
  certification: {
    icon: ShieldCheck,
    gradient: "from-emerald-500/20 to-green-500/10",
    borderColor: "border-emerald-500/30",
  },
};

export default function AchievementsSection() {
  const { achievements, awards } = resumeData;

  const topImpact = achievements.slice(0, 3);

  return (
    <section id="achievements" className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs tracking-widest uppercase text-violet-400 mb-4 block">
            Highlights
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Achievements
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-yellow-500/5 via-violet-500/5 to-cyan-500/5 border border-yellow-500/20"
        >
          <div className="flex items-center gap-2 mb-4">
            <Award size={18} className="text-yellow-400" />
            <h3 className="text-sm font-semibold text-yellow-400 tracking-wider uppercase">
              Top 3 Impact
            </h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            {topImpact.map((item, i) => (
              <div
                key={i}
                className="px-4 py-3 rounded-xl bg-white/5 border border-white/5"
              >
                <p className="text-sm font-medium text-white/80 mb-1">
                  {item.title}
                </p>
                <p className="text-xs text-white/40">{item.context}</p>
              </div>
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`group p-6 rounded-2xl bg-gradient-to-br ${config.gradient} border ${config.borderColor} hover:shadow-lg transition-all duration-300 cursor-default`}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white/5 shrink-0">
                    <Icon
                      size={20}
                      className="text-white/70 group-hover:text-white transition-colors"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">
                      {ach.title}
                    </h4>
                    <p className="text-xs text-white/40">{ach.context}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {awards.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-yellow-500/10 to-amber-500/5 border border-yellow-500/20 text-center"
          >
            <Trophy size={28} className="text-yellow-400 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-white mb-1">
              {awards[0].title}
            </h4>
            <p className="text-sm text-white/50">
              {awards[0].event} — {awards[0].project}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
