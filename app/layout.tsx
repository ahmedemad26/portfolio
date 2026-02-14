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
  title: "Ahmed Emad Mohamed | Front-End Developer | React & Next.js",

  description:
    "Ahmed Emad Mohamed is a Front-End Developer specialized in React.js, Next.js, and TypeScript, building scalable, high-performance, production-ready web applications with modern UI/UX.",

  metadataBase: new URL("https://ahmedemad-portfolio.vercel.app"),

  verification: {
    google: "google69e185851ed46e51",
  },

  authors: [
    {
      name: "Ahmed Emad Mohamed",
      url: "https://github.com/ahmedemad26",
    },
  ],

  openGraph: {
    title: "Ahmed Emad Mohamed | Front-End Developer | React & Next.js",
    description:
      "Explore Ahmed Emad Mohamed's portfolio showcasing modern React.js and Next.js projects, including real-world scalable applications.",
    url: "https://ahmedemad-portfolio.vercel.app",
    siteName: "Ahmed Emad Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ahmed Emad Mohamed Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ahmed Emad Mohamed | Front-End Developer",
    description:
      "Portfolio of Ahmed Emad Mohamed — React.js & Next.js Developer building modern, scalable web applications.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
