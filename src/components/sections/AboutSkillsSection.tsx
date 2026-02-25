"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSkillsSection() {
  return (
    <section id="about" className="scroll-mt-24 py-18 md:py-22" aria-labelledby="about-title">
      <SectionHeading
        id="about-title"
        eyebrow="About"
        title="Kỹ sư phần mềm với tư duy sản phẩm"
        description="Kết hợp engineering discipline với sự tử tế và mindfulness để tạo sản phẩm bền vững."
      />

      <div className="grid gap-6 md:grid-cols-[1.25fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Card className="h-full">
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-200">{portfolioData.about}</p>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <Card>
            <h3 className="mb-4 text-lg font-semibold">Skills</h3>
            <div className="space-y-4">
              {portfolioData.skills.map((group) => (
                <div key={group.category}>
                  <p className="mb-2 text-sm font-semibold text-primary">{group.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item} text={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
