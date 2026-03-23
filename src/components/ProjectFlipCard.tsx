"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { motion } from "framer-motion";
import { Github, Eye, Sparkles, Trophy } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

export type PortfolioProjectCard = {
  title: string;
  stack: readonly string[];
  bullets: readonly string[];
  github: string | null;
  description: string;
  liveUrl?: string | null;
  featured?: boolean;
  stars?: number;
  /** Short label shown with a trophy (e.g. demo winner). */
  trophyAward?: string;
};

function gradientForTitle(title: string): string {
  let h = 0;
  for (let i = 0; i < title.length; i++) h = (h + title.charCodeAt(i) * (i + 1)) % 360;
  const h2 = (h + 40) % 360;
  return `linear-gradient(135deg, hsl(${h}, 55%, 22%) 0%, hsl(${h2}, 50%, 14%) 50%, #0f172a 100%)`;
}

/** 3D face: transform + backface on one layer; avoid overflow on this node (breaks backface culling). */
const faceShell =
  "absolute inset-0 flex min-h-[400px] w-full flex-col rounded-2xl border border-white/[0.08] bg-[#1e293b] shadow-lg";

const faceTransform = (rotateY: 0 | 180): React.CSSProperties => ({
  backfaceVisibility: "hidden",
  WebkitBackfaceVisibility: "hidden",
  transform: `rotateY(${rotateY}deg) translateZ(3px)`,
  transformStyle: "preserve-3d" as const,
});

type ProjectFlipCardProps = {
  project: PortfolioProjectCard;
  index: number;
  className?: string;
};

function CardFrontInner({
  project,
  useTouchFlip,
}: {
  project: PortfolioProjectCard;
  useTouchFlip: boolean;
}) {
  return (
    <>
      <div
        className="relative h-36 w-full shrink-0 overflow-hidden rounded-t-2xl sm:h-40"
        style={{ background: gradientForTitle(project.title) }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.12),transparent_50%)]" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <p className="text-center text-[11px] font-bold uppercase leading-tight tracking-[0.2em] text-white/90 sm:text-xs">
            {project.title}
          </p>
        </div>
        {project.trophyAward ? (
          <span className="absolute left-3 top-3 z-10 flex max-w-[min(12rem,70%)] items-center gap-1 rounded-md border border-amber-500/35 bg-amber-950/90 px-2 py-0.5 text-[9px] font-semibold uppercase leading-tight tracking-wide text-amber-100 sm:text-[10px]">
            <Trophy size={11} className="shrink-0 text-amber-400" aria-hidden />
            <span className="line-clamp-2 text-left">{project.trophyAward}</span>
          </span>
        ) : null}
        {project.featured ? (
          <span
            className={cn(
              "absolute top-3 flex items-center gap-1 rounded-md border border-violet-400/30 bg-violet-950/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-violet-200",
              project.trophyAward ? "left-3 mt-9 sm:mt-10" : "left-3"
            )}
          >
            <Sparkles size={10} className="text-violet-300" />
            Featured
          </span>
        ) : null}
      </div>

      <div className="flex min-h-0 flex-1 flex-col rounded-b-2xl p-5">
        <h3 className="mb-3 text-lg font-bold leading-snug text-white">{project.title}</h3>

        <p className="mb-4 line-clamp-4 text-sm leading-relaxed text-slate-300/90">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-slate-100"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="mt-4 text-center text-[11px] font-medium text-slate-500 sm:text-xs">
          {useTouchFlip ? "Tap for details" : "Hover for details"}
        </p>
      </div>
    </>
  );
}

function CardBackInner({ project, backId }: { project: PortfolioProjectCard; backId: string }) {
  return (
    <div id={backId} className="flex min-h-0 flex-1 flex-col rounded-2xl">
      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-5 pt-5">
        <h3 className="mb-3 text-base font-bold text-white">{project.title}</h3>
        {project.trophyAward ? (
          <p className="mb-4 flex items-center gap-1.5 text-xs font-medium text-amber-200/95">
            <Trophy size={14} className="shrink-0 text-amber-400" aria-hidden />
            {project.trophyAward}
          </p>
        ) : null}
        <ul className="mb-6 space-y-2.5">
          {project.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2 text-sm text-slate-300/95">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-400/80" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-2 border-t border-white/10 pt-4">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-indigo-500 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={18} />
              View on GitHub
            </a>
          ) : (
            <p className="text-center text-sm text-slate-500">Repository is private.</p>
          )}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-purple-500 py-3 text-sm font-semibold text-white transition hover:bg-purple-400"
              onClick={(e) => e.stopPropagation()}
            >
              <Eye size={18} />
              Live demo
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function CardFrontStandalone({
  project,
  useTouchFlip,
}: {
  project: PortfolioProjectCard;
  useTouchFlip: boolean;
}) {
  return (
    <div
      className={cn(
        "flex min-h-[400px] w-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#1e293b] shadow-lg"
      )}
    >
      <CardFrontInner project={project} useTouchFlip={useTouchFlip} />
    </div>
  );
}

function CardBackStandalone({ project, backId }: { project: PortfolioProjectCard; backId: string }) {
  return (
    <div
      id={backId}
      className={cn(
        "flex min-h-[400px] w-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#1e293b] shadow-lg"
      )}
    >
      <CardBackInner project={project} backId={backId} />
    </div>
  );
}

export default function ProjectFlipCard({
  project,
  index,
  className,
}: ProjectFlipCardProps) {
  const reduced = useReducedMotion();
  const uid = useId();
  const backId = `${uid}-back`;
  const [hoverBack, setHoverBack] = useState(false);
  const [touchFlipped, setTouchFlipped] = useState(false);
  const [reducedExpanded, setReducedExpanded] = useState(false);
  const [useTouchFlip, setUseTouchFlip] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: none)");
    const sync = () => setUseTouchFlip(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const showBack = reduced
    ? reducedExpanded
    : useTouchFlip
      ? touchFlipped
      : hoverBack;

  const handleMouseEnter = () => {
    if (!reduced && !useTouchFlip) setHoverBack(true);
  };
  const handleMouseLeave = () => {
    setHoverBack(false);
  };

  const handleCardClick = useCallback(() => {
    if (!reduced && useTouchFlip) {
      setTouchFlipped((v) => !v);
    }
  }, [reduced, useTouchFlip]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (reduced || !useTouchFlip) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setTouchFlipped((v) => !v);
      }
    },
    [reduced, useTouchFlip]
  );

  if (reduced) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, delay: index * 0.06 }}
        className={cn("w-full shrink-0", className)}
      >
        {!reducedExpanded ? (
          <div>
            <CardFrontStandalone project={project} useTouchFlip={false} />
            <button
              type="button"
              onClick={() => setReducedExpanded(true)}
              className="mt-2 w-full rounded-lg border border-violet-500/30 py-2 text-sm text-violet-300"
            >
              Show full details
            </button>
          </div>
        ) : (
          <div>
            <CardBackStandalone project={project} backId={backId} />
            <button
              type="button"
              onClick={() => setReducedExpanded(false)}
              className="mt-2 w-full rounded-lg border border-white/10 py-2 text-sm text-slate-300"
            >
              Show summary
            </button>
          </div>
        )}
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className={cn(
        "w-[min(85vw,320px)] shrink-0 sm:w-[340px]",
        useTouchFlip && "cursor-pointer",
        className
      )}
      style={{ perspective: 1100 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      role={useTouchFlip ? "button" : undefined}
      tabIndex={useTouchFlip ? 0 : undefined}
      aria-label={`${project.title}. ${useTouchFlip ? "Tap to flip for details." : "Hover to see details."}`}
    >
      <div className="relative min-h-[400px] w-full" style={{ perspective: "inherit" }}>
        <motion.div
          className="relative h-full min-h-[400px] w-full"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: showBack ? 180 : 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={faceShell} style={faceTransform(0)}>
            <CardFrontInner project={project} useTouchFlip={useTouchFlip} />
          </div>
          <div className={faceShell} style={faceTransform(180)}>
            <CardBackInner project={project} backId={backId} />
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}
