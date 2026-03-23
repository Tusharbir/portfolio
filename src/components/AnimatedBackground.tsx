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

  const getParticleCount = useCallback(() => {
    if (typeof window === "undefined") return 30;
    if (window.innerWidth < 768) return 15;
    if (window.innerWidth < 1280) return 25;
    return 40;
  }, []);

  const initParticles = useCallback((w: number, h: number) => {
    const count = getParticleCount();
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      radius: Math.random() * 1.2 + 0.4,
      opacity: Math.random() * 0.3 + 0.1,
    }));
  }, [getParticleCount]);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles(window.innerWidth, window.innerHeight);
    };

    resize();
    window.addEventListener("resize", resize);

    const isDark = () => document.documentElement.classList.contains("dark") || !document.documentElement.classList.contains("light");

    if (reducedMotion) {
      drawStaticGradient(ctx, window.innerWidth, window.innerHeight, isDark());
      return () => window.removeEventListener("resize", resize);
    }

    const animate = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const dark = isDark();
      const t = performance.now() * 0.00008;
      ctx.clearRect(0, 0, w, h);

      drawGradientMesh(ctx, w, h, dark, t);

      const particles = particlesRef.current;
      const connectionDist = w < 768 ? 85 : 125;
      const particleColor = dark ? "77, 236, 255" : "13, 121, 158";

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleColor}, ${p.opacity})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.06;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(${particleColor}, ${alpha})`;
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
    };
  }, [initParticles]);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true" />
  );
}

function drawGradientMesh(ctx: CanvasRenderingContext2D, w: number, h: number, dark: boolean, t: number) {
  const o = dark ? 0.055 : 0.04;
  const leftX = w * (0.22 + Math.sin(t * 1.2) * 0.06);
  const leftY = h * (0.32 + Math.cos(t * 0.9) * 0.05);
  const rightX = w * (0.78 + Math.cos(t) * 0.06);
  const rightY = h * (0.68 + Math.sin(t * 1.1) * 0.05);

  const g1 = ctx.createRadialGradient(leftX, leftY, 0, leftX, leftY, w * 0.52);
  g1.addColorStop(0, `rgba(22, 166, 235, ${o})`);
  g1.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = g1;
  ctx.fillRect(0, 0, w, h);

  const g2 = ctx.createRadialGradient(rightX, rightY, 0, rightX, rightY, w * 0.55);
  g2.addColorStop(0, `rgba(72, 214, 170, ${o * 0.78})`);
  g2.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = g2;
  ctx.fillRect(0, 0, w, h);
}

function drawStaticGradient(ctx: CanvasRenderingContext2D, w: number, h: number, dark: boolean) {
  const o = dark ? 0.05 : 0.035;
  const gradient = ctx.createLinearGradient(0, 0, w, h);
  gradient.addColorStop(0, `rgba(22, 166, 235, ${o})`);
  gradient.addColorStop(1, `rgba(72, 214, 170, ${o * 0.6})`);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, w, h);
}
