import { SkillGroup } from "./SkillGroup";
import { SectionHeader } from "./ui/SectionHeader";

export function SkillsSection() {
  return (
    <section id="skills" className="relative scroll-mt-28">
      <div
        className="pointer-events-none absolute inset-x-0 -top-8 bottom-0 -z-10 rounded-3xl bg-linear-to-b from-accent/6 via-transparent to-transparent"
        aria-hidden
      />

      <SectionHeader
        eyebrow="Stack"
        title="My Skills"
        description="Technologies and tools I leverage to build scalable and high-performance applications."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2 lg:gap-6">
        <SkillGroup
          title="Languages"
          items={["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"]}
        />
        <SkillGroup
          title="Frameworks & Libraries"
          items={[
            "React.js",
            "Next.js",
            "Tailwind CSS",
            "ShadCN/UI",
            "TanStack Query",
            "React Hook Form",
            "Zod",
            "Next-Intl",
            "Supabase",
          ]}
        />
        <SkillGroup title="Testing" items={["Playwright"]} />
        <SkillGroup
          title="Tools"
          items={["Git", "GitHub", "Postman", "Vercel"]}
        />
        <SkillGroup
          title="Design"
          items={["Figma (design handoff & collaboration)"]}
        />
        <SkillGroup
          title="Concepts"
          items={[
            "RTL/LTR Internationalization",
            "RESTful APIs",
            "WebSockets",
            "Responsive Design",
            "Accessibility (a11y)",
            "SOLID Principles",
            "Design Patterns",
            "Clean Code",
            "Performance Optimization & Caching",
            "Agile/Scrum",
          ]}
        />
      </div>

      <p className="mt-10 text-center text-xs italic text-muted-foreground sm:text-sm">
        &quot;Focusing on writing maintainable code and optimizing performance.&quot;
      </p>
    </section>
  );
}
