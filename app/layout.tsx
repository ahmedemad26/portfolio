import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahmed Emad | Front-End Developer",
  description:
    "Portfolio of Ahmed Emad, Front-End Developer specializing in React.js, Next.js, and TypeScript. Building scalable, production-ready web applications.",
  metadataBase: new URL("https://ahmed-emad-portfolio.com"), // Change to your real domain after deploy
  keywords: ["Ahmed Emad", "Front-End Developer", "React developer", "Next.js developer", "TypeScript", "Tailwind CSS"],
  authors: [{ name: "Ahmed Emad", url: "https://github.com/ahmedemad26" }],
  openGraph: {
    title: "Ahmed Emad | Front-End Developer",
    description: "Showcasing high-performance projects like Rose App and Exam App built with React.js & Next.js.",
    url: "https://ahmed-emad-portfolio.com",
    siteName: "Ahmed Emad Portfolio",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.png" }], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

<html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-50`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}