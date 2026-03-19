import type { PortfolioData } from "@/core/types/portfolio.types";

/**
 * Data Layer: nguồn dữ liệu duy nhất của CV.
 */
export const portfolioData: PortfolioData = {
  name: "Phan Minh Hiển",
  title: "Mobile & Web Software Engineer",
  tagline:
    "Building technology solutions with a product mindset, kindness, and mindfulness.",
  location: "Quy Nhơn, Bình Định / TP. HCM, Vietnam",
  contact: {
    email: "phanminhhien0701@gmail.com",
    phone: "0917 779 407",
  },
  links: [
    { label: "GitHub", url: "https://www.google.com/search?q=github.com/hienphan" },
    { label: "LinkedIn", url: "https://www.google.com/search?q=linkedin.com/in/hienphan" },
  ],
  about:
    "I am a software engineer with cross-domain experience in Mobile, Web applications, and Telecommunications. I approach technology not just as code, but as a tool to spread kindness and mindfulness. I constantly strive to learn new things, focusing on building high-quality, performant products that deliver exceptional user experiences.",
  skills: [
    { category: "Languages", items: ["Kotlin", "Java", "TypeScript", "JavaScript"] },
    {
      category: "Mobile",
      items: [
        "Android SDK",
        "MVVM",
        "Clean Architecture",
        "Coroutines",
        "Jetpack Compose",
        "React Native",
      ],
    },
    {
      category: "Web & Telecom",
      items: ["Next.js", "React", "Tailwind CSS", "WebSockets (Realtime/OTT)"],
    },
    { category: "Tools", items: ["Firebase", "Google Cloud", "Git/GitLab CI", "Figma"] },
  ],
  experience: [
    {
      company: "TMA Solutions",
      period: "03/2025 - Present",
      role: "Mobile Software Engineer",
      projects: [
        {
          name: "Duress",
          description:
            "Safety App - Kotlin, MVVM, Google Maps, Foreground Service.",
          technologies: ["Kotlin", "MVVM", "Google Maps", "Foreground Service"],
        },
        {
          name: "Cirpack",
          description:
            "OTT Telecom Communication - React Native, WebSockets, Android Native Modules.",
          technologies: ["React Native", "WebSockets", "Android Native Modules"],
        },
      ],
    },
    {
      company: "FPT Software",
      period: "10/2024 - 01/2025",
      role: "Mobile Developer Intern",
      projects: [
        {
          name: "FPT Care",
          description: "Healthcare App - React Native, Redux, Agile/Scrum.",
          technologies: ["React Native", "Redux", "Agile/Scrum"],
        },
      ],
    },
  ],
  education: [
    {
      institution: "ĐH GTVT TP.HCM",
      period: "2020 - 2024",
      degree: "Kỹ sư Công nghệ thông tin",
      gpa: "3.27/4.0",
    },
  ],
};
