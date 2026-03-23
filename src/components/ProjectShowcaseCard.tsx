"use client";

import { motion } from "framer-motion";
import { ExternalLink, Eye, Github, Sparkles, Star, Trophy } from "lucide-react";
import type { PortfolioProjectCard } from "@/components/ProjectFlipCard";
import { cn } from "@/lib/utils";

function gradientForTitle(title: string): string {
  let h = 0;
  for (let i = 0; i < title.length; i++) h = (h + title.charCodeAt(i) * (i + 1)) % 360;
  const h2 = (h + 40) % 360;
  return `linear-gradient(135deg, hsl(${h}, 55%, 22%) 0%, hsl(${h2}, 50%, 14%) 50%, #0f172a 100%)`;
}

type ProjectShowcaseCardProps = {
  project: PortfolioProjectCard;
  index: number;
};

export default function ProjectShowcaseCard({ project, index }: ProjectShowcaseCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="flex h-full min-h-0 flex-col overflow-hidden rounded-3xl border border-white/[0.1] bg-[#1e293b] shadow-xl shadow-black/20"
    >
      <div
        className="relative h-40 w-full shrink-0 overflow-hidden sm:h-44 lg:h-48"
        style={{ background: gradientForTitle(project.title) }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_25%,rgba(255,255,255,0.14),transparent_55%)]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/80 sm:text-xs">
            {project.title}
          </p>
        </div>
        {project.trophyAward ? (
          <span className="absolute left-4 top-4 z-10 flex max-w-[min(14rem,75%)] items-center gap-1.5 rounded-lg border border-amber-500/40 bg-amber-950/95 px-2.5 py-1 text-[10px] font-semibold uppercase leading-tight tracking-wide text-amber-100 sm:text-[11px]">
            <Trophy size={14} className="shrink-0 text-amber-400" aria-hidden />
            <span className="text-left">{project.trophyAward}</span>
          </span>
        ) : null}
        {project.featured ? (
          <span
            className={cn(
              "absolute top-4 z-10 flex items-center gap-1 rounded-lg border border-violet-400/35 bg-violet-950/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-violet-100",
              project.trophyAward ? "left-4 mt-12 sm:mt-14" : "left-4"
            )}
          >
            <Sparkles size={12} className="text-violet-300" />
            Featured
          </span>
        ) : null}
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-5 p-6 sm:p-8">
        <header className="space-y-2">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-[1.65rem]">
              {project.title}
            </h2>
            {project.stars != null && project.stars > 0 ? (
              <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/25 bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-200">
                <Star size={12} className="fill-amber-400/90 text-amber-400/90" aria-hidden />
                {project.stars}
              </span>
            ) : null}
          </div>
          <p className="text-base leading-relaxed text-slate-300/95">{project.description}</p>
        </header>

        <section aria-labelledby={`highlights-${index}`}>
          <h3 id={`highlights-${index}`} className="mb-3 text-xs font-semibold uppercase tracking-widest text-violet-400/90">
            Highlights
          </h3>
          <ul className="space-y-2.5">
            {project.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" aria-hidden />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby={`stack-${index}`} className="mt-1">
          <h3 id={`stack-${index}`} className="mb-3 text-xs font-semibold uppercase tracking-widest text-violet-400/90">
            Tech stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-slate-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <div className="mt-auto flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:flex-wrap">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-500 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-400 sm:min-w-[10rem] sm:flex-initial"
            >
              <Github size={18} strokeWidth={2} />
              View on GitHub
              <ExternalLink size={14} className="opacity-70" aria-hidden />
            </a>
          ) : (
            <span className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3.5 text-sm font-medium text-slate-500 sm:min-w-[10rem]">
              <Github size={18} />
              Private repository
            </span>
          )}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-purple-500 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-purple-400 sm:min-w-[10rem] sm:flex-initial"
            >
              <Eye size={18} strokeWidth={2} />
              Live demo
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
