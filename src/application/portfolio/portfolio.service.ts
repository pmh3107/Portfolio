import { cache } from "react";
import type { Locale, PortfolioProfile, PortfolioViewModel } from "@/domain/portfolio";
import { readPortfolioProfile, writePortfolioProfile } from "@/infrastructure/portfolio/file-portfolio.repository";

function localize(text: { vi: string; en: string }, locale: Locale) {
  return text[locale];
}

function toViewModel(profile: PortfolioProfile, locale: Locale): PortfolioViewModel {
  return {
    name: profile.name,
    title: localize(profile.title, locale),
    tagline: localize(profile.tagline, locale),
    location: localize(profile.location, locale),
    about: localize(profile.about, locale),
    avatar: {
      src: profile.avatar.src,
      alt: localize(profile.avatar.alt, locale),
    },
    contact: profile.contact,
    links: profile.links,
    skills: profile.skills.map((skill) => ({
      category: localize(skill.category, locale),
      items: skill.items,
    })),
    experience: profile.experience.map((exp) => ({
      company: exp.company,
      period: exp.period,
      role: localize(exp.role, locale),
      projects: exp.projects.map((project) => ({
        name: project.name,
        description: localize(project.description, locale),
        technologies: project.technologies,
      })),
    })),
    education: profile.education.map((item) => ({
      institution: item.institution,
      period: item.period,
      degree: localize(item.degree, locale),
      gpa: item.gpa,
    })),
  };
}

export const getPortfolioProfile = cache(async () => readPortfolioProfile());

export async function getLocalizedPortfolio(locale: Locale): Promise<PortfolioViewModel> {
  const profile = await getPortfolioProfile();
  return toViewModel(profile, locale);
}

export async function updatePortfolioProfile(profile: PortfolioProfile): Promise<void> {
  await writePortfolioProfile(profile);
}
