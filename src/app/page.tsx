import { AboutSkillsSection } from "@/components/sections/AboutSkillsSection";
import { AIAssistantSection } from "@/components/ai/AIAssistantSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";

export default function HomePage() {
  return (
    <main id="main-content" className="mx-auto max-w-6xl px-4 md:px-6">
      <HeroSection />
      <AboutSkillsSection />
      <ExperienceSection />
      <AIAssistantSection />
    </main>
  );
}
