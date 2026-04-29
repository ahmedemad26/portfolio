import { SkillGroup } from "./SkillGroup";
import { SectionHeader } from "./ui/SectionHeader";

export function SkillsSection() {
  return (
    <section id="skills" className="relative scroll-mt-28">
      <div
        className="pointer-events-none absolute inset-x-0 -top-8 bottom-0 -z-10 rounded-3xl bg-gradient-to-b from-accent/[0.06] via-transparent to-transparent"
        aria-hidden
      />

      <SectionHeader
        eyebrow="Stack"
        title="My Skills"
        description="Technologies and tools I leverage to build scalable and high-performance applications."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2 lg:gap-6">
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
        <SkillGroup title="Data Visualization" items={["Recharts"]} />
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

      <p className="mt-10 text-center text-xs italic text-muted-foreground sm:text-sm">
        &quot;Focusing on writing maintainable code and optimizing performance.&quot;
      </p>
    </section>
  );
}
