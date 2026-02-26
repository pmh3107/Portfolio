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
        title="Experience timeline & education"
        description="Tập trung vào mobile sản phẩm, telecom realtime và tư duy clean architecture khi triển khai."
      />

      <ol className="relative ml-3 border-l border-white/20 pl-7">
        {portfolioData.experience.map((exp, index) => (
          <motion.li
            key={`${exp.company}-${exp.period}`}
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <span className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full border-2 border-cyan-300 bg-slate-950" />
            <Card>
              <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200">{exp.period}</p>
              <h3 className="mt-1 text-xl font-semibold text-white">{exp.role}</h3>
              <p className="text-sm text-slate-300">{exp.company}</p>
              <ul className="mt-4 space-y-3">
                {exp.projects.map((project) => (
                  <li key={project.name} className="rounded-2xl border border-white/20 bg-white/5 p-3">
                    <p className="font-semibold text-white">{project.name}</p>
                    <p className="mt-1 text-sm text-slate-200">{project.description}</p>
                    <p className="mt-1 text-xs text-cyan-200">{project.technologies.join(" • ")}</p>
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
            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200">Education</p>
            <h3 className="mt-1 text-xl font-semibold text-white">{edu.degree}</h3>
            <p className="text-sm text-slate-300">{edu.institution} · {edu.period}</p>
            <p className="mt-1 text-sm text-slate-200">GPA: {edu.gpa}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
