"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { resumeData } from "@/data/resume";

const cardPop = (i: number) => ({
  hidden: { opacity: 0, y: 25, scale: 0.92 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, type: "spring" as const, stiffness: 200 },
  },
});

export default function ContactSection() {
  const { basics, profile } = resumeData;

  const contactLinks = [
    { icon: Mail, label: "Email", value: basics.email, href: `mailto:${basics.email}` },
    { icon: Phone, label: "Phone", value: basics.phone, href: `tel:${basics.phone}` },
    { icon: MapPin, label: "Location", value: basics.location, href: null },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/tusharbir", href: basics.linkedin },
    { icon: Github, label: "GitHub", value: "github.com/Tusharbir", href: basics.github },
  ];

  return (
    <section id="contact" className="relative py-24 px-4">
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
            className="text-xs tracking-[0.3em] uppercase text-violet-500 mb-4 block"
          >
            Get In Touch
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-bold t-primary mb-4">Let&apos;s Connect</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[2px] w-24 bg-gradient-to-r from-violet-500 to-cyan-400 mx-auto mb-6 rounded-full origin-center"
          />
          <p className="t-muted max-w-2xl mx-auto">{profile[2]}</p>
          <p className="t-faint max-w-2xl mx-auto mt-2 text-sm">{profile[3]}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            const isExternal = link.href?.startsWith("http");
            const Wrapper = link.href ? "a" : "div";
            const wrapperProps = link.href
              ? { href: link.href, ...(isExternal ? { target: "_blank" as const, rel: "noopener noreferrer" } : {}) }
              : {};

            return (
              <motion.div
                key={index}
                variants={cardPop(index)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                whileTap={{ scale: 0.96 }}
              >
                <Wrapper
                  {...wrapperProps}
                  className="block p-5 rounded-2xl transition-all duration-300 group h-full hover:-translate-y-1 hover:shadow-lg"
                  style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <motion.div
                      initial={{ rotate: -20, scale: 0 }}
                      whileInView={{ rotate: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.08, type: "spring", stiffness: 300 }}
                      className="p-2 rounded-xl bg-violet-500/10"
                    >
                      <Icon size={18} className="text-violet-500" />
                    </motion.div>
                    {link.href && (
                      <motion.div
                        initial={{ opacity: 0, x: -5 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.08 }}
                      >
                        <ArrowUpRight size={16} className="t-faint group-hover:text-violet-500 transition-all" />
                      </motion.div>
                    )}
                  </div>
                  <p className="text-xs t-muted mb-1">{link.label}</p>
                  <p className="text-sm t-primary font-medium truncate">{link.value}</p>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 pt-8 text-center"
          style={{ borderTop: "1px solid var(--card-border)" }}
        >
          <p className="text-sm t-faint">&copy; {new Date().getFullYear()} {basics.name}. Crafted with precision.</p>
        </motion.div>
      </div>
    </section>
  );
}
