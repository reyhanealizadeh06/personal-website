import { ArrowDown, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

function GithubMark() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.6 9.6 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.698 1.028 1.591 1.028 2.682 0 3.842-2.339 4.687-4.566 4.935.359.31.678.921.678 1.856 0 1.338-.012 2.417-.012 2.746 0 .267.18.579.688.481A10.002 10.002 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
    </svg>
  );
}

function LinkedinMark() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.5 8.5A1.5 1.5 0 1 0 6.5 5.5a1.5 1.5 0 0 0 0 3ZM5.25 9.75h2.5V19h-2.5V9.75ZM9.5 9.75H12v1.264c.348-.61 1.217-1.514 2.875-1.514 2.304 0 3.375 1.503 3.375 4.353V19h-2.5v-4.566c0-1.089-.02-2.488-1.516-2.488-1.519 0-1.75 1.186-1.75 2.41V19H9.984L9.5 9.75Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-black"
    >
      <div className="hero-grid absolute inset-0" />
      <div className="noise" />

      {/* Main glow */}
      <div className="absolute right-[-10%] top-[15%] h-[500px] w-[500px] rounded-full bg-white/[0.035] blur-[120px]" />

      <div className="absolute bottom-[-10%] left-[-10%] h-[400px] w-[400px] rounded-full bg-white/[0.025] blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-32 sm:px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          
          {/* Text */}
          <div>
            <Reveal>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-white/40" />

                <span className="text-[10px] uppercase tracking-[0.35em] text-white/40 sm:text-xs">
                  Front-End Developer
                </span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="max-w-5xl text-[3.5rem] font-semibold leading-[0.92] tracking-[-0.065em] text-white sm:text-6xl md:text-7xl lg:text-[7.3rem]">
                Building
                <br />
                <span className="text-white/90">
                  digital
                </span>
                <br />
                <span className="text-white/25">
                  experiences.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-8 max-w-xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
                I&apos;m Reyhane Alizadeh, a Computer Science student and
                Front-End Developer focused on creating modern, responsive
                and meaningful digital experiences.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="group flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-xs font-semibold text-black transition hover:bg-white/90 sm:text-sm"
                >
                  View My Work

                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-white/15 px-6 py-3.5 text-xs text-white transition hover:border-white/35 hover:bg-white/[0.04] sm:text-sm"
                >
                  Let&apos;s Talk
                </a>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-11 flex items-center gap-5">
                <a
                  href="#"
                  aria-label="GitHub"
                  className="text-white/35 transition hover:text-white"
                >
                  <GithubMark />
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="text-white/35 transition hover:text-white"
                >
                  <LinkedinMark />
                </a>

                <span className="h-4 w-px bg-white/10" />

                <span className="text-[11px] text-white/30">
                  Open to opportunities
                </span>
              </div>
            </Reveal>
          </div>

          {/* Visual */}
          <Reveal delay={250} className="hidden lg:block">
            <div className="relative mx-auto aspect-[4/5] max-w-[430px]">
              
              {/* Outer frame */}
              <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-white/[0.025]" />

              {/* Inner frame */}
              <div className="absolute inset-6 rounded-[1.5rem] border border-white/[0.07]" />

              {/* Circle */}
              <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/[0.02] shadow-[0_0_100px_rgba(255,255,255,0.04)]" />

              <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10">
                <span className="text-4xl font-semibold tracking-[-0.08em] text-white">
                  RA
                </span>
              </div>

              {/* Top label */}
              <div className="absolute left-10 top-10">
                <p className="text-[9px] uppercase tracking-[0.35em] text-white/30">
                  Personal Portfolio
                </p>
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-10 left-10">
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/25">
                  2026
                </p>

                <p className="mt-2 text-sm text-white/60">
                  Design · Code · Create
                </p>
              </div>

              {/* Corner */}
              <div className="absolute right-10 top-10 h-2 w-2 rounded-full bg-white" />

              {/* Vertical text */}
              <div className="absolute bottom-10 right-10 [writing-mode:vertical-rl]">
                <span className="text-[9px] uppercase tracking-[0.35em] text-white/20">
                  Selected Works
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Scroll */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/25 transition hover:text-white/60 md:flex"
        >
          <span className="text-[9px] uppercase tracking-[0.4em]">
            Scroll
          </span>

          <ArrowDown size={15} />
        </a>
      </div>
    </section>
  );
}