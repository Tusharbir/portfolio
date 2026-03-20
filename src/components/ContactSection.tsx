"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ArrowUpRight,
} from "lucide-react";
import { resumeData } from "@/data/resume";

export default function ContactSection() {
  const { basics, profile } = resumeData;

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: basics.email,
      href: `mailto:${basics.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: basics.phone,
      href: `tel:${basics.phone}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: basics.location,
      href: null,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/tusharbir",
      href: basics.linkedin,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Tusharbir",
      href: basics.github,
    },
  ];

  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-widest uppercase text-violet-400 mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto">
            {profile[2]}
          </p>
          <p className="text-white/30 max-w-2xl mx-auto mt-2 text-sm">
            {profile[3]}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            const isExternal = link.href?.startsWith("http");
            const Wrapper = link.href ? "a" : "div";
            const wrapperProps = link.href
              ? {
                  href: link.href,
                  ...(isExternal
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {}),
                }
              : {};

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <Wrapper
                  {...wrapperProps}
                  className="block p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-violet-500/30 hover:bg-white/[0.05] transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-xl bg-violet-500/10">
                      <Icon size={18} className="text-violet-400" />
                    </div>
                    {link.href && (
                      <ArrowUpRight
                        size={16}
                        className="text-white/20 group-hover:text-violet-400 transition-colors"
                      />
                    )}
                  </div>
                  <p className="text-xs text-white/40 mb-1">{link.label}</p>
                  <p className="text-sm text-white/80 font-medium truncate">
                    {link.value}
                  </p>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 pt-8 border-t border-white/5 text-center"
        >
          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} {basics.name}. Crafted with
            precision.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
