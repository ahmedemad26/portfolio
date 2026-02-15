import { SkillGroup } from "./SkillGroup";

export function SkillsSection() {
  return (
    <section id="skills" className="py-12 sm:py-16 space-y-10">
      <div className="text-center space-y-3">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
          My Skills
        </h2>
        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-zinc-400">
          Technologies and tools I leverage to build scalable and high-performance applications.
        </p>
      </div>

      <div className="space-y-8">
        {/* Row 1 */}
        <div className="grid gap-8 md:grid-cols-2">
          <SkillGroup
            title="Frontend Development"
            items={["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"]}
          />
          <SkillGroup
            title="Styling & UI"
            items={["Tailwind CSS", "ShadCN UI", "Bootstrap", "Responsive Design", "Pixel-perfect Design"]}
          />
        </div>

        {/* Row 2 */}
        <div className="grid gap-8 md:grid-cols-2">
          <SkillGroup
            title="State & Form Management"
            items={["Redux", "React Query", "Context API", "React Hook Form", "Zod"]}
          />
          <SkillGroup
            title="Tools & Methods"
            items={["Git & GitHub", "Vercel", "Figma", "REST APIs", "Agile/Scrum", "Clean Code"]}
          />
        </div>
      </div>

      <p className="mt-6 text-center text-xs sm:text-sm text-zinc-500 italic">
        "Focusing on writing maintainable code and optimizing performance."
      </p>
    </section>
  );
}