import { GraduationCap } from "lucide-react";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section
      id="education"
      className="border-t border-white/10 bg-[#060606] py-28 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        
        <Reveal>
          <div className="mb-16">
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/30">
              05 — Education
            </p>

            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              Education
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid gap-8 lg:grid-cols-[100px_1fr]">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.025]">
              <GraduationCap
                size={25}
                className="text-white/55"
              />
            </div>

            <div className="border-t border-white/10 pt-8">
              <div className="flex flex-col justify-between gap-6 sm:flex-row">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/25">
                    2023 — Present
                  </p>

                  <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                    Computer Science
                  </h3>

                  <p className="mt-3 text-sm text-white/40 sm:text-base">
                    Islamic Azad University — oloom tahghighat
                  </p>
                </div>

                <div className="h-fit w-fit rounded-full border border-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white/30">
                  Bachelor&apos;s Degree
                </div>
              </div>

              <p className="mt-8 max-w-2xl text-sm leading-8 text-white/35">
                Studying Computer Science while developing practical skills
                in web development, software engineering, databases and
                modern application development.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}