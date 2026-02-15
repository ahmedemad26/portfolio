
export function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16">
      {/* Title */}
      <div className="text-center mb-10 space-y-2">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
          About Me
        </h2>
        <div className="mx-auto h-[2px] w-16 rounded-full bg-emerald-400" />
      </div>

      {/* Content */}
      <div className="grid gap-10 md:grid-cols-2">
        {/* Who I Am */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300">
            Who I Am
          </h3>
          <p className="text-sm leading-relaxed text-zinc-300">
            {/* Job title updated here */}
            I am a Front-End Developer specializing in building scalable,
            high-performance web applications using React.js and Next.js[cite: 8]. With a
            strong focus on clean code, performance optimization, and modern UI practices, I
            enjoy turning complex ideas into responsive, user-friendly interfaces.
          </p>
          <p className="text-sm leading-relaxed text-zinc-300">
            My experience includes working with TypeScript, Tailwind CSS, and API integration
            to ship reliable features in real-world projects. I am committed
            to delivering production-ready user experiences within Agile environments.
          </p>
        </div>

        {/* Education & Certifications */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300">
            Education & Courses
          </h3>

          <div className="space-y-4 text-sm">
            {/* University */}
            <div>
              <p className="font-medium text-zinc-100">
                B.Sc. in Computer Science – Egyptian E‑Learning University 
              </p>
              <p className="text-zinc-400 text-xs">Sept 2022 – Jul 2026 </p>
            </div>

            {/* Route Academy */}
            <div>
              <p className="font-medium text-zinc-100">
                Front End Diploma – Route Academy [cite: 46]
              </p>
              <p className="text-zinc-400 text-xs">Mar 2024 – Sep 2024 </p>
            </div>

            {/* NTI - added from CV */}
            <div>
              <p className="font-medium text-zinc-100">
                Web Design Track – National Telecommunication Institute (NTI)
              </p>
              <p className="text-zinc-400 text-xs">Oct 2024 – Dec 2024 </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}