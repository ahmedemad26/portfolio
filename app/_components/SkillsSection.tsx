import { SkillGroup } from "./SkillGroup";

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-12 sm:py-16">
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10 rounded-2xl bg-linear-to-b from-zinc-900/30 via-transparent to-transparent" />

      <div className="space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            My Skills
          </h2>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-zinc-400">
            Technologies and tools I leverage to build scalable and high-performance applications.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-6 md:grid-cols-2 lg:grid-cols-2">
          <SkillGroup
            title="Frontend Development"
            items={["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"]}
          />
          <SkillGroup
            title="Styling & UI"
            items={["Tailwind CSS", "ShadCN UI", "Bootstrap", "Responsive Design", "Pixel-perfect Design"]}
          />
          <SkillGroup
            title="State, Forms & Real-time"
            items={["Redux", "Context API", "TanStack Query", "React Hook Form", "Zod", "Socket.IO", "WebSocket"]}
          />
          <SkillGroup
            title="Backend & APIs"
            items={["RESTful APIs", "API Integration", "SQL"]}
          />
          <SkillGroup
            title="Data Visualization"
            items={["Recharts"]}
          />
          <SkillGroup
            title="Tools & Workflow"
            items={["Git", "GitHub", "Vercel", "Figma", "VS Code", "Chrome DevTools", "Scrum"]}
          />
          <SkillGroup
            title="Practices"
            items={["Clean Code", "Web Performance Optimization", "SOLID", "KISS", "Design Patterns"]}
          />
          <SkillGroup
            title="Soft Skills"
            items={["Communication", "Problem Solving", "Teamwork", "Attention to Detail"]}
          />
        </div>

        <p className="mt-4 text-center text-xs sm:text-sm text-zinc-500 italic">
          "Focusing on writing maintainable code and optimizing performance."
        </p>
      </div>
    </section>
  );
}