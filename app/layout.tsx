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
    "Ahmed Emad is a Front-End Developer specializing in React.js, Next.js, and TypeScript. Building scalable, high-performance web applications with modern UI/UX.",

  metadataBase: new URL("https://ahmedemad-portfolio.vercel.app"),

  verification: {
    google: "google69e185851ed46e51",
  },

  authors: [
    {
      name: "Ahmed Emad",
      url: "https://github.com/ahmedemad26",
    },
  ],

  openGraph: {
    title: "Ahmed Emad | Front-End Developer",
    description:
      "Explore Ahmed Emad's portfolio showcasing modern React.js and Next.js projects including real-world scalable applications.",
    url: "https://ahmedemad-portfolio.vercel.app",
    siteName: "Ahmed Emad Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ahmed Emad Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ahmed Emad | Front-End Developer",
    description:
      "Portfolio of Ahmed Emad — React.js & Next.js Developer building modern web applications.",
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
