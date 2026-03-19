import Image from "next/image";
import type { PortfolioViewModel } from "@/domain/portfolio";
import type { Dictionary } from "@/i18n/get-dictionary";
import { SectionTitle } from "@/presentation/components/SectionTitle";

interface PortfolioPageProps {
  dictionary: Dictionary;
  profile: PortfolioViewModel;
}

export function PortfolioPage({ dictionary, profile }: PortfolioPageProps) {
  const topProjects = profile.experience.flatMap((exp) => exp.projects).slice(0, 3);

  return (
    <main id="main-content" className="mx-auto max-w-6xl px-4 md:px-6">
      <section className="grid min-h-[70vh] items-center gap-8 py-16 md:grid-cols-[1.3fr_1fr]">
        <article className="rounded-3xl border border-white/15 bg-slate-900/50 p-8">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">{profile.name}</h1>
          <p className="mt-3 text-xl text-cyan-200">{profile.title}</p>
          <p className="mt-4 max-w-2xl text-slate-200">{profile.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`mailto:${profile.contact.email}`} className="rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-900">
              {dictionary.hero.primaryCta}
            </a>
            <a href="#experience" className="rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-white">
              {dictionary.hero.secondaryCta}
            </a>
          </div>
          <p className="mt-4 text-sm text-slate-300">{profile.location}</p>
        </article>

        <figure className="rounded-3xl border border-white/15 bg-slate-900/40 p-4">
          <Image
            src={profile.avatar.src}
            alt={profile.avatar.alt}
            width={560}
            height={720}
            priority
            sizes="(max-width: 768px) 100vw, 33vw"
            className="h-auto w-full rounded-2xl"
          />
        </figure>
      </section>

      <section id="about" className="scroll-mt-24 py-14" aria-labelledby="about-title">
        <SectionTitle
          id="about-title"
          eyebrow={dictionary.sections.aboutEyebrow}
          title={dictionary.sections.aboutTitle}
          description={profile.about}
        />
        <div className="rounded-3xl border border-white/15 bg-slate-900/40 p-6">
          <h3 className="mb-3 text-lg font-semibold text-white">{dictionary.sections.skillsTitle}</h3>
          <div className="space-y-4">
            {profile.skills.map((group) => (
              <div key={group.category}>
                <p className="mb-2 text-sm font-semibold text-cyan-200">{group.category}</p>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-full border border-white/20 px-3 py-1 text-xs text-slate-200">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-24 py-14" aria-labelledby="projects-title">
        <SectionTitle id="projects-title" eyebrow={dictionary.sections.projectsEyebrow} title={dictionary.sections.projectsTitle} />
        <div className="grid gap-4 md:grid-cols-3">
          {topProjects.map((project) => (
            <article key={project.name} className="rounded-3xl border border-white/15 bg-slate-900/40 p-5">
              <h3 className="text-lg font-semibold text-white">{project.name}</h3>
              <p className="mt-2 text-sm text-slate-200">{project.description}</p>
              <p className="mt-3 text-xs text-cyan-200">{project.technologies.join(" • ")}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="scroll-mt-24 py-14" aria-labelledby="experience-title">
        <SectionTitle id="experience-title" eyebrow={dictionary.sections.experienceEyebrow} title={dictionary.sections.experienceTitle} />
        <ol className="space-y-4">
          {profile.experience.map((exp) => (
            <li key={`${exp.company}-${exp.period}`} className="rounded-3xl border border-white/15 bg-slate-900/40 p-6">
              <p className="text-xs font-semibold uppercase text-cyan-200">{exp.period}</p>
              <h3 className="mt-1 text-xl font-semibold text-white">{exp.role}</h3>
              <p className="text-sm text-slate-300">{exp.company}</p>
              <ul className="mt-4 space-y-3">
                {exp.projects.map((project) => (
                  <li key={project.name}>
                    <h4 className="font-semibold text-white">{project.name}</h4>
                    <p className="text-sm text-slate-200">{project.description}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="mt-6 rounded-3xl border border-white/15 bg-slate-900/40 p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200">{dictionary.sections.education}</p>
          {profile.education.map((edu) => (
            <article key={`${edu.institution}-${edu.period}`} className="mt-3">
              <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
              <p className="text-sm text-slate-300">
                {edu.institution} · {edu.period}
              </p>
              {edu.gpa ? <p className="text-sm text-slate-200">GPA: {edu.gpa}</p> : null}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
