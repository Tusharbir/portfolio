"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  const getParticleCount = useCallback(() => {
    if (typeof window === "undefined") return 40;
    if (window.innerWidth < 768) return 25;
    if (window.innerWidth < 1280) return 40;
    return 60;
  }, []);

  const initParticles = useCallback(
    (w: number, h: number) => {
      const count = getParticleCount();
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      }));
    },
    [getParticleCount]
  );

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      initParticles(window.innerWidth, window.innerHeight);
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouse);

    if (reducedMotion) {
      drawStaticGradient(ctx, canvas.width, canvas.height);
      return () => {
        window.removeEventListener("resize", resize);
        window.removeEventListener("mousemove", handleMouse);
      };
    }

    const animate = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      drawGradientMesh(ctx, w, h);

      const particles = particlesRef.current;
      const connectionDist = w < 768 ? 100 : 150;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${p.opacity})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.08;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}

function drawGradientMesh(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number
) {
  const g1 = ctx.createRadialGradient(
    w * 0.2,
    h * 0.3,
    0,
    w * 0.2,
    h * 0.3,
    w * 0.5
  );
  g1.addColorStop(0, "rgba(99, 39, 120, 0.08)");
  g1.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = g1;
  ctx.fillRect(0, 0, w, h);

  const g2 = ctx.createRadialGradient(
    w * 0.8,
    h * 0.7,
    0,
    w * 0.8,
    h * 0.7,
    w * 0.5
  );
  g2.addColorStop(0, "rgba(30, 58, 138, 0.06)");
  g2.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = g2;
  ctx.fillRect(0, 0, w, h);

  const g3 = ctx.createRadialGradient(
    w * 0.5,
    h * 0.5,
    0,
    w * 0.5,
    h * 0.5,
    w * 0.4
  );
  g3.addColorStop(0, "rgba(6, 182, 212, 0.04)");
  g3.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = g3;
  ctx.fillRect(0, 0, w, h);
}

function drawStaticGradient(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number
) {
  const dpr = window.devicePixelRatio || 1;
  const rw = w / dpr;
  const rh = h / dpr;
  const gradient = ctx.createLinearGradient(0, 0, rw, rh);
  gradient.addColorStop(0, "rgba(99, 39, 120, 0.05)");
  gradient.addColorStop(0.5, "rgba(30, 58, 138, 0.03)");
  gradient.addColorStop(1, "rgba(6, 182, 212, 0.02)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, rw, rh);
}
