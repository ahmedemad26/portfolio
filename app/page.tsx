import { Navbar } from "./_components/Navbar";
import { Hero } from "./_components/Hero";
import { ProfileCard } from "./_components/ProfileCard";
import { AboutSection } from "./_components/AboutSection";
import { SkillsSection } from "./_components/SkillsSection";
import { ProjectsSection, type Project } from "./_components/ProjectsSection";
import { ContactSection } from "./_components/ContactSection";
import { ExperienceSection } from "./_components/ExperienceSection";
const projects: Project[] = [
  {
    title: "Rose App — Flower E‑commerce",
    description:
      "A bilingual (EN/AR) flower e‑commerce platform with RTL support, dark mode, secure authentication and a modern shopping experience.",
    tech: ["React", "Next.js", "Tailwind CSS", "React Query"],
    image: "/assets/rose-app.png",
    codeLink: "https://github.com/Aya-Mohammed-Hussien/Rose-App",
    liveLink:
      "https://drive.google.com/file/d/1MemQC1HfZsszkdPkSaWFRSMYA1fI7PLm/view?usp=drive_link",
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
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-zinc-50">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-16 pt-6 sm:px-8 lg:px-12 lg:pt-12">
        <Navbar />

        <main className="mt-10 flex flex-1 flex-col gap-16 md:mt-14">
          {/* Hero + Profile */}
          <section className="grid gap-10 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] md:items-center">
            <Hero />
            <ProfileCard />
          </section>

          {/* About / Skills / Experience / Projects / Contact */}
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection projects={projects} />
          <ContactSection />
        </main>

        <footer className="mt-10 border-t border-zinc-800 pt-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Ahmed Emad. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}