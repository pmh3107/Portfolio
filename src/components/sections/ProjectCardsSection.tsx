import { portfolioData } from "@/data/portfolio";

const featuredProjects = portfolioData.experience.flatMap((item) => item.projects).slice(0, 3);

export function ProjectCardsSection() {
  return (
    <section id="projects" className="scroll-mt-24 py-18 md:py-22">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Featured Work</p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Liquid Glass Project Cards</h2>
        <p className="mt-3 max-w-2xl text-slate-300">
          Một vài dự án tiêu biểu với UI kính mờ, tương phản cao và tương tác hover tinh tế.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {featuredProjects.map((project) => (
          <article
            key={project.name}
            className="group rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur-lg transition duration-300 hover:-translate-y-1 hover:border-white/40"
          >
            <p className="text-lg font-semibold text-white">{project.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-200">{project.description}</p>
            <p className="mt-4 text-xs text-cyan-100/90">{project.technologies.join(" • ")}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
