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
      "A bilingual (EN/AR) flower e‑commerce platform with RTL support, dark mode, secure authentication and a modern shopping experience.",
    tech: ["React", "Next.js", "Tailwind CSS", "React Query"],
    image: "/assets/rose-app.png",
    codeLink: "https://github.com/ahmedemad26/Rose-App",
    liveLink: "https://rose-app-six.vercel.app/",
  },
  {
    title: "Exclusive — E‑commerce Platform",
    description:
      "A full e‑commerce experience built with Next.js 14, featuring secure checkout, authentication, product filtering and a modern responsive UI.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
    image: "/assets/exclusive.png",
    codeLink: "https://github.com/ahmedemad26/e-commerce-exlusive",
    liveLink: "https://e-commerce-exlusive.vercel.app/",
  },
  {
    title: "Exam App",
    description:
      "Online exam and quiz platform with authentication, diplomas, timed exams, results and a modern dashboard experience.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "TanStack Query"],
    image: "/assets/exam-app.png",
    codeLink: "https://github.com/ahmedemad26/Exam-App",
    liveLink: "https://online-exam-app-platform.vercel.app/",
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
