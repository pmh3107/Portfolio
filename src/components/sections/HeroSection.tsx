"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, FileDown } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Card } from "@/components/ui/Card";

export function HeroSection() {
  const github = portfolioData.links.find((link) => link.label === "GitHub")?.url ?? "#";
  const linkedin = portfolioData.links.find((link) => link.label === "LinkedIn")?.url ?? "#";

  return (
    <section id="hero" className="grid min-h-[85vh] items-center gap-8 py-18 md:grid-cols-[1.3fr_1fr] md:py-22">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Mobile · Web · Telecom</p>
        <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-6xl">{portfolioData.name}</h1>
        <p className="mt-3 text-xl text-primary">{portfolioData.title}</p>
        <p className="mt-5 max-w-2xl text-lg text-slate-600 dark:text-slate-300">{portfolioData.tagline}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a aria-label="GitHub" href={github} className="inline-flex items-center gap-2 rounded-soft bg-primary px-4 py-2 text-sm font-semibold text-white">
            <Github size={16} /> GitHub
          </a>
          <a aria-label="LinkedIn" href={linkedin} className="inline-flex items-center gap-2 rounded-soft border border-slate-300 px-4 py-2 text-sm font-semibold dark:border-slate-700">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a aria-label="Resume" href="#experience" className="inline-flex items-center gap-2 rounded-soft border border-slate-300 px-4 py-2 text-sm font-semibold dark:border-slate-700">
            <FileDown size={16} /> Resume
          </a>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
        <Card>
          <Image
            src="/headshot-placeholder.svg"
            alt="Phan Minh Hien avatar placeholder"
            width={420}
            height={500}
            priority
            className="h-auto w-full rounded-strong"
          />
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{portfolioData.location}</p>
        </Card>
      </motion.div>
    </section>
  );
}
