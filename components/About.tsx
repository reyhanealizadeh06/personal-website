import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-white/10 bg-[#060606] py-28 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
          
          <Reveal>
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/30">
                01 — About
              </p>

              <h2 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                About me
              </h2>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <p className="max-w-4xl text-2xl leading-[1.4] tracking-[-0.03em] text-white/75 sm:text-3xl lg:text-4xl">
                I turn ideas into clean, thoughtful and functional digital
                experiences.
              </p>

              <p className="mt-8 max-w-3xl text-sm leading-8 text-white/40 sm:text-base">
                I&apos;m currently studying Computer Science while developing
                my skills through real-world projects. My main focus is
                Front-End Development, where I work with React, Next.js,
                TypeScript and Tailwind CSS to build responsive and polished
                web experiences.
              </p>

              <p className="mt-5 max-w-3xl text-sm leading-8 text-white/40 sm:text-base">
                Alongside frontend development, I&apos;m expanding my
                knowledge of backend development, APIs, databases and
                full-stack application architecture.
              </p>

              <div className="mt-14 grid grid-cols-2 border-t border-white/10 pt-8 sm:grid-cols-4">
                <div>
                  <p className="text-3xl font-semibold tracking-[-0.05em] text-white">
                    CS
                  </p>

                  <p className="mt-2 text-[11px] text-white/30">
                    Computer Science
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-semibold tracking-[-0.05em] text-white">
                    Web
                  </p>

                  <p className="mt-2 text-[11px] text-white/30">
                    Main Focus
                  </p>
                </div>

                <div className="mt-8 sm:mt-0">
                  <p className="text-3xl font-semibold tracking-[-0.05em] text-white">
                    2026
                  </p>

                  <p className="mt-2 text-[11px] text-white/30">
                    Current Stage
                  </p>
                </div>

                <div className="mt-8 sm:mt-0">
                  <p className="text-3xl font-semibold tracking-[-0.05em] text-white">
                    ∞
                  </p>

                  <p className="mt-2 text-[11px] text-white/30">
                    Always Learning
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}