"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 py-18 md:py-22" aria-labelledby="experience-title">
      <SectionHeading
        id="experience-title"
        eyebrow="Experience"
        title="Timeline kinh nghiệm & học vấn"
        description="Tập trung vào sản phẩm thực tế: mobile safety, telecom OTT realtime, healthcare."
      />

      <ol className="relative ml-3 border-l border-slate-300 pl-7 dark:border-slate-700">
        {portfolioData.experience.map((exp, index) => (
          <motion.li
            key={`${exp.company}-${exp.period}`}
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <span className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full border-2 border-primary bg-slate-50 dark:bg-slate-950" />
            <Card>
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">{exp.period}</p>
              <h3 className="mt-1 text-xl font-semibold">{exp.role}</h3>
              <p className="text-sm text-slate-500">{exp.company}</p>
              <ul className="mt-4 space-y-3">
                {exp.projects.map((project) => (
                  <li key={project.name} className="rounded-soft border border-slate-200 p-3 dark:border-slate-700">
                    <p className="font-semibold">{project.name}</p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
                    <p className="mt-1 text-xs text-primary">{project.technologies.join(" • ")}</p>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.li>
        ))}
      </ol>

      <div className="mt-8">
        {portfolioData.education.map((edu) => (
          <Card key={edu.institution}>
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">Education</p>
            <h3 className="mt-1 text-xl font-semibold">{edu.degree}</h3>
            <p className="text-sm text-slate-500">{edu.institution} · {edu.period}</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">GPA: {edu.gpa}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
