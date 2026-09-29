import { ArrowUpRight, Mail } from "lucide-react";
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

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-black py-28 sm:py-32 lg:py-40"
    >
      <div className="absolute right-[-15%] top-[10%] h-[450px] w-[450px] rounded-full bg-white/[0.025] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.65fr]">
          
          <Reveal>
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/30">
                06 — Contact
              </p>

              <h2 className="mt-7 max-w-4xl text-[3.5rem] font-semibold leading-[0.95] tracking-[-0.065em] text-white sm:text-6xl lg:text-[7rem]">
                Have an idea?
                <br />
                <span className="text-white/25">
                  Let&apos;s build it.
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-sm leading-8 text-white/40 sm:text-base">
                I&apos;m open to interesting projects, collaborations and
                opportunities where I can create useful and meaningful digital
                experiences.
              </p>

              <a
                href="mailto:your-email@example.com"
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-xs font-semibold text-black transition hover:bg-white/90 sm:text-sm"
              >
                Send me an email

                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="flex flex-col justify-end">
              <div className="border-t border-white/10">
                
                {/* Email */}
                <a
                  href="mailto:your-email@example.com"
                  className="group flex items-center justify-between border-b border-white/10 py-6 text-white/40 transition hover:text-white"
                >
                  <div className="flex items-center gap-4">
                    <Mail size={18} />

                    <span className="text-sm">
                      Email
                    </span>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                {/* GitHub */}
                <a
                  href="#"
                  className="group flex items-center justify-between border-b border-white/10 py-6 text-white/40 transition hover:text-white"
                >
                  <div className="flex items-center gap-4">
                    <GithubMark />

                    <span className="text-sm">
                      GitHub
                    </span>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  className="group flex items-center justify-between border-b border-white/10 py-6 text-white/40 transition hover:text-white"
                >
                  <div className="flex items-center gap-4">
                    <LinkedinMark />

                    <span className="text-sm">
                      LinkedIn
                    </span>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}