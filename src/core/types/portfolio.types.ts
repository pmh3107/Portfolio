/**
 * Domain Layer (Core)
 * ------------------------------------------------------------------
 * Chứa các mô hình nghiệp vụ cốt lõi (entities/value objects).
 * Mọi tầng khác (Data, Services, Presentation) đều nên phụ thuộc vào đây
 * để đảm bảo nhất quán, dễ test và mở rộng.
 */

export interface SocialLink {
  label: string;
  url: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ExperienceProject {
  name: string;
  description: string;
  technologies: string[];
}

export interface ExperienceItem {
  company: string;
  period: string;
  role: string;
  projects: ExperienceProject[];
}

export interface EducationItem {
  institution: string;
  period: string;
  degree: string;
  gpa?: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  tagline: string;
  location: string;
  contact: ContactInfo;
  links: SocialLink[];
  about: string;
  skills: SkillGroup[];
  experience: ExperienceItem[];
  education: EducationItem[];
}
