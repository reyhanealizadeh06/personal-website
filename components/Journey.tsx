import Reveal from "./Reveal";

const journey = [
  {
    year: "2023",
    title: "Computer Science",
    description:
      "Started my university journey in Computer Science and began building a foundation in programming, problem solving and software development.",
  },
  {
    year: "2024",
    title: "Web Development",
    description:
      "Started focusing on web development, learning HTML, CSS and JavaScript while building practical websites and responsive interfaces.",
  },
  {
    year: "2025",
    title: "React Development",
    description:
      "Moved deeper into React and component-based development, focusing on reusable UI, responsive design and real-world projects.",
  },
  {
    year: "2026",
    title: "Next.js & Full-Stack Direction",
    description:
      "Expanded into Next.js, TypeScript, Tailwind CSS, backend development, REST APIs, PostgreSQL and Prisma while working on larger applications.",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="border-t border-white/10 bg-black py-28 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        
        <Reveal>
          <div className="mb-16">
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/30">
              04 — Journey
            </p>

            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              The journey so far
            </h2>
          </div>
        </Reveal>

        <div className="relative ml-2 border-l border-white/10">
          {journey.map((item, index) => (
            <Reveal
              key={item.year}
              delay={index * 100}
            >
              <div className="relative pb-14 pl-9 last:pb-0 sm:pl-14 lg:pl-20">
                
                <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-white/50 bg-black" />

                <div className="grid gap-5 lg:grid-cols-[150px_1fr]">
                  <div>
                    <p className="text-sm font-medium text-white/35">
                      {item.year}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-medium tracking-[-0.03em] text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-2xl text-sm leading-8 text-white/35">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}