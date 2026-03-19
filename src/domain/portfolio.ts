export const locales = ["vi", "en"] as const;

export type Locale = (typeof locales)[number];

export interface LocalizedString {
  vi: string;
  en: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
}

export interface SkillGroup {
  category: LocalizedString;
  items: string[];
}

export interface ExperienceProject {
  name: string;
  description: LocalizedString;
  technologies: string[];
}

export interface ExperienceItem {
  company: string;
  period: string;
  role: LocalizedString;
  projects: ExperienceProject[];
}

export interface EducationItem {
  institution: string;
  period: string;
  degree: LocalizedString;
  gpa?: string;
}

export interface PortfolioProfile {
  name: string;
  title: LocalizedString;
  tagline: LocalizedString;
  location: LocalizedString;
  about: LocalizedString;
  avatar: {
    src: string;
    alt: LocalizedString;
  };
  contact: ContactInfo;
  links: SocialLink[];
  skills: SkillGroup[];
  experience: ExperienceItem[];
  education: EducationItem[];
}

export interface PortfolioViewModel {
  name: string;
  title: string;
  tagline: string;
  location: string;
  about: string;
  avatar: {
    src: string;
    alt: string;
  };
  contact: ContactInfo;
  links: SocialLink[];
  skills: Array<{ category: string; items: string[] }>;
  experience: Array<{
    company: string;
    period: string;
    role: string;
    projects: Array<{
      name: string;
      description: string;
      technologies: string[];
    }>;
  }>;
  education: Array<{
    institution: string;
    period: string;
    degree: string;
    gpa?: string;
  }>;
}
