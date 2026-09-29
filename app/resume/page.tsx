"use client";

import {
  ArrowLeft,
  Download,
  Mail,
} from "lucide-react";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-white text-black">
      
      {/* Controls */}
      <div className="no-print fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-black/10 bg-white/90 px-5 py-4 backdrop-blur sm:px-8">
        <a
          href="/"
          className="flex items-center gap-2 text-sm text-black/60 transition hover:text-black"
        >
          <ArrowLeft size={16} />
          Back to portfolio
        </a>

        <button
          type="button"
          onClick={handlePrint}
          className="flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-xs font-medium text-white transition hover:bg-black/80"
        >
          <Download size={15} />
          Download / Print
        </button>
      </div>

      {/* Resume */}
      <div className="mx-auto max-w-4xl px-7 pb-20 pt-32 sm:px-12 lg:px-20">
        
        <header className="border-b-2 border-black pb-8">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-black/45">
            Front-End Developer
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em]">
            Reyhane Alizadeh
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-black/60">
            Computer Science student and Front-End Developer focused on
            building modern, responsive and meaningful digital experiences.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-black/55">
            <span>Iran</span>
            <span>Computer Science</span>
            <span>React / Next.js</span>
            <span>TypeScript</span>
          </div>
        </header>

        <section className="mt-12">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em]">
            Profile
          </h2>

          <p className="mt-5 text-sm leading-8 text-black/65">
            I am a Computer Science student with a strong focus on modern
            frontend development. I enjoy transforming ideas into polished,
            responsive interfaces and continuously expanding my knowledge
            toward full-stack development.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em]">
            Technical Skills
          </h2>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold">
                Frontend
              </h3>

              <p className="mt-2 text-sm leading-7 text-black/60">
                HTML5, CSS3, JavaScript, TypeScript, React, Next.js
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold">
                Styling
              </h3>

              <p className="mt-2 text-sm leading-7 text-black/60">
                Tailwind CSS, Responsive Design, UI Development
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold">
                Backend
              </h3>

              <p className="mt-2 text-sm leading-7 text-black/60">
                Node.js, Express, REST APIs, Authentication
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold">
                Database
              </h3>

              <p className="mt-2 text-sm leading-7 text-black/60">
                PostgreSQL, Prisma, Database Design, CRUD
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em]">
            Selected Projects
          </h2>

          <div className="mt-6 space-y-7">
            <div>
              <h3 className="text-lg font-semibold">
                Fashion Store
              </h3>

              <p className="mt-2 text-sm leading-7 text-black/60">
                Full-stack Persian fashion e-commerce application built with
                Next.js, React, TypeScript, Node.js, Express, PostgreSQL and
                Prisma.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Personal Portfolio
              </h3>

              <p className="mt-2 text-sm leading-7 text-black/60">
                Modern portfolio website built to present development skills,
                projects, education and professional journey.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Sound Store
              </h3>

              <p className="mt-2 text-sm leading-7 text-black/60">
                Responsive web store interface focused on audio products,
                product presentation and responsive UI development.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em]">
            Education
          </h2>

          <div className="mt-5">
            <h3 className="text-lg font-semibold">
              Computer Science
            </h3>

            <p className="mt-2 text-sm text-black/60">
              Islamic Azad University — Science and Research Branch
            </p>

            <p className="mt-1 text-xs text-black/40">
              2023 — Present
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-black/10 pt-8">
          <div className="flex items-center gap-3 text-sm text-black/55">
            <Mail size={16} />
            <span>your-email@example.com</span>
          </div>
        </section>
      </div>
    </main>
  );
}
