import {
  Code2,
  Database,
  Palette,
  Server,
} from "lucide-react";
import Reveal from "./Reveal";

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    icon: Code2,
    description:
      "Modern frontend development focused on responsive interfaces, reusable components and strong user experiences.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
    ],
  },
  {
    number: "02",
    title: "UI & Styling",
    icon: Palette,
    description:
      "Building clean visual systems with attention to spacing, typography, responsiveness and interaction.",
    skills: [
      "Tailwind CSS",
      "Responsive Design",
      "UI Development",
      "CSS Architecture",
    ],
  },
  {
    number: "03",
    title: "Backend",
    icon: Server,
    description:
      "Developing practical knowledge of backend architecture, APIs, authentication and server-side applications.",
    skills: [
      "Node.js",
      "Express",
      "REST API",
      "Authentication",
    ],
  },
  {
    number: "04",
    title: "Database",
    icon: Database,
    description:
      "Working with structured data, relational databases and application data management.",
    skills: [
      "PostgreSQL",
      "Prisma",
      "Database Design",
      "CRUD",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/10 bg-black py-28 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        
        <Reveal>
          <div className="mb-14">
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/30">
              02 — Skills
            </p>

            <div className="mt-6 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <h2 className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                What I work with
              </h2>

              <p className="max-w-md text-sm leading-7 text-white/30">
                Technologies and tools I use while building modern web
                applications and expanding toward full-stack development.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid border-l border-t border-white/10 sm:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <Reveal
                key={group.title}
                delay={index * 100}
                className="border-b border-r border-white/10"
              >
                <div className="group h-full p-7 transition hover:bg-white/[0.025] sm:p-9 lg:p-11">
                  
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.02]">
                      <Icon
                        size={18}
                        className="text-white/50"
                      />
                    </div>

                    <span className="text-[10px] tracking-[0.2em] text-white/20">
                      {group.number}
                    </span>
                  </div>

                  <h3 className="mt-9 text-2xl font-medium tracking-[-0.03em] text-white">
                    {group.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-white/35">
                    {group.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-white/45 transition group-hover:border-white/15"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}