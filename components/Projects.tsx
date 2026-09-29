import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Fashion Store",
    category: "Full-Stack E-Commerce",
    description:
      "A Persian women's fashion e-commerce platform built with a modern frontend and backend architecture, including product management, categories, variants, authentication and database integration.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Prisma",
      "PostgreSQL",
    ],
    image: "/images/project-1.jpg",
    href: "#",
  },
  {
    number: "02",
    title: "Personal Portfolio",
    category: "Frontend Development",
    description:
      "A modern personal portfolio designed to showcase my development journey, technical skills, selected projects, education and professional experience.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    image: "/images/project-2.jpg",
    href: "#",
  },
  {
    number: "03",
    title: "Sound Store",
    category: "Frontend Development",
    description:
      "A responsive RTL e-commerce interface for audio products, created to practice modern HTML, CSS and JavaScript development with a focus on clean user experience.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
    ],
    image: "/images/project-3.jpg",
    href: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-white/10 bg-black py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <span className="section-label">
              Selected Work
            </span>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Projects that reflect
              <span className="gradient-text"> how I build.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-white/45 sm:text-base">
              A selection of projects I have built while developing my
              skills across frontend development, modern web technologies
              and full-stack application architecture.
            </p>
          </div>
        </div>

        {/* Projects */}
        <div className="mt-16 space-y-10 lg:mt-24">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div className="grid lg:grid-cols-[1.15fr_0.85fr]">

                {/* Project Image */}
                <div className="project-image relative aspect-[16/10] overflow-hidden bg-white/5 lg:aspect-auto lg:min-h-[520px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Project Number */}
                  <div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-xs text-white/70 backdrop-blur-md">
                    {project.number}
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-12">

                  <div>
                    {/* Category */}
                    <span className="text-xs uppercase tracking-[0.18em] text-white/35">
                      {project.category}
                    </span>

                    {/* Title */}
                    <h3 className="mt-5 text-3xl font-medium tracking-tight text-white sm:text-4xl">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-7 text-sm leading-8 text-white/40">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-8 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] text-white/50 transition-colors duration-300 group-hover:border-white/15 group-hover:text-white/65"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Link */}
                  <div className="mt-12">
                    <a
                      href={project.href}
                      className="group/link inline-flex items-center gap-3 text-sm text-white/70 transition-colors duration-300 hover:text-white"
                    >
                      View Project

                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover/link:border-white/30 group-hover/link:bg-white group-hover/link:text-black">
                        <ArrowUpRight
                          size={16}
                          className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                        />
                      </span>
                    </a>
                  </div>

                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-14 flex items-center gap-4 text-xs text-white/30">
          <span className="h-px w-10 bg-white/20" />
          <span>
            More projects will be added as my journey continues.
          </span>
        </div>
      </div>
    </section>
  );
}