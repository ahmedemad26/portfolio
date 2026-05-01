import { Navbar } from "./_components/Navbar";
import { Hero } from "./_components/Hero";
import { ProfileCard } from "./_components/ProfileCard";
import { AboutSection } from "./_components/AboutSection";
import { SkillsSection } from "./_components/SkillsSection";
import { ProjectsSection } from "./_components/ProjectsSection";
import type { Project } from "@/lib/types";
import { ContactSection } from "./_components/ContactSection";
import { ExperienceSection } from "./_components/ExperienceSection";
const projects: Project[] = [
  {
    title: "Rose App — Flower E‑commerce",
    description:
      "Built a bilingual (EN/AR) e-commerce storefront with admin dashboard and analytics using Next.js App Router, SSG product pages, and dynamic category routing on Vercel.",
    tech: ["React", "Next.js", "Tailwind CSS", "React Query"],
    image: "/assets/rose-app.png",
    codeLink: "https://github.com/ahmedemad26/Rose-App",
    liveLink: "https://rose-app-six.vercel.app/",
  },
  {
    title: "Rafiq App",
    description:
      "A high-performance project management system built to streamline collaboration and workflow efficiency through a clear hierarchy of Projects, Epics, and Tasks.",
    tech: ["Next.js", "Tailwind CSS", "shadcn/ui", "Supabase"],
    image: "/assets/pic.jpg",
    codeLink: "https://github.com/ahmedemad26/Rafiq-App",
    liveLink: "https://taskly-rafiq-app.vercel.app/",
  },
  {
    title: "Exam App",
    description:
      "A full-featured exam platform with role-based access (student/admin/instructor), protected middleware routes, JWT authentication, and validated forms via React Hook Form.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "TanStack Query"],
    image: "/assets/exam-app.png",
    codeLink: "https://github.com/ahmedemad26/Exam-App",
    liveLink: "https://online-exam-app-platform.vercel.app/",
  },
  {
    title: "Exclusive — E‑commerce Platform",
    description:
      "Developed a fully responsive e-commerce experience with dynamic product filtering, cart state management via React Context, and optimized image delivery using Next.js image optimization.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Supabase"],
    image: "/assets/exclusive.png",
    codeLink: "https://github.com/ahmedemad26/e-commerce-exlusive",
    liveLink: "https://e-commerce-exlusive.vercel.app/",
  },
];

export default function Home() {
  return (
    <div className="page-shell text-foreground">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-20 pt-6 sm:px-6 lg:px-10 lg:pt-10">
        <Navbar />

        <main
          id="main"
          className="mt-8 flex flex-1 flex-col gap-20 md:mt-12 md:gap-24 lg:gap-28"
          tabIndex={-1}
        >
          <section className="relative grid items-center gap-12 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:gap-16">
            <div
              className="pointer-events-none absolute -right-24 top-0 hidden h-[min(90vh,640px)] w-[min(70vw,520px)] rounded-full bg-[radial-gradient(ellipse_at_center,var(--violet-orb),transparent_68%)] blur-3xl lg:block"
              aria-hidden
            />
            <Hero />
            <ProfileCard />
          </section>

          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection projects={projects} />
          <ContactSection />
        </main>

        <footer className="mt-16 border-t border-border pt-8 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Ahmed Emad. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
