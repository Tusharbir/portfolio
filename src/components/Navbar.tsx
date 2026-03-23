"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";

const sections = [
  { id: "hero", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(sections.map((s) => s.id), 80);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed left-0 right-0 top-3 z-50 px-3 sm:px-4 transition-all duration-300"
      >
        <div className="mx-auto max-w-7xl">
          <div
            className={cn(
              "flex h-16 items-center justify-between rounded-2xl border px-4 sm:px-6 lg:px-8 transition-all duration-300",
              scrolled ? "backdrop-blur-xl shadow-lg shadow-cyan-500/8" : "backdrop-blur-md"
            )}
            style={{ background: "var(--nav-bg)", borderColor: "var(--nav-border)" }}
          >
            {isHome ? (
              <button
                type="button"
                onClick={() => scrollTo("hero")}
                className="brand-gradient text-xl font-bold bg-clip-text text-transparent tracking-wide"
              >
                TSM
              </button>
            ) : (
              <Link
                href="/"
                className="brand-gradient text-xl font-bold bg-clip-text text-transparent tracking-wide"
              >
                TSM
              </Link>
            )}

            <div className="hidden md:flex items-center gap-1">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-sm transition-all duration-200",
                    activeId === s.id
                      ? "text-cyan-300 bg-cyan-400/10"
                      : "t-secondary hover:t-primary hover:bg-cyan-400/10"
                  )}
                >
                  {s.label}
                </button>
              ))}
              <div className="ml-3"><ThemeToggle /></div>
            </div>

            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-lg"
                style={{ background: "var(--card-bg)", borderColor: "var(--card-border)", borderWidth: 1 }}
              >
                {mobileOpen ? <X size={20} className="t-primary" /> : <Menu size={20} className="t-primary" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-3 top-[4.75rem] z-40 rounded-2xl border backdrop-blur-xl md:hidden sm:inset-x-4"
            style={{ background: "var(--mobile-menu-bg)", borderColor: "var(--card-border)" }}
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-left text-sm transition-all",
                    activeId === s.id
                      ? "text-cyan-300 bg-cyan-400/10"
                      : "t-secondary hover:t-primary hover:bg-cyan-400/10"
                  )}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
