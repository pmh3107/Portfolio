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
        title="Calm engineering, practical product mindset"
        description="Kết hợp kỹ thuật bền vững, trải nghiệm tinh gọn và giao tiếp rõ ràng để tạo sản phẩm đáng tin cậy."
      />

      <div className="grid gap-6 md:grid-cols-[1.25fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Card className="h-full">
            <p className="text-lg leading-relaxed text-slate-200">{portfolioData.about}</p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <h3 className="mb-4 text-lg font-semibold text-white">Core skills</h3>
            <div className="space-y-4">
              {portfolioData.skills.map((group) => (
                <div key={group.category}>
                  <p className="mb-2 text-sm font-semibold text-violet-200">{group.category}</p>
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
