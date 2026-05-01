import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ahmed Emad Mohamed | Front-End Developer | React & Next.js",

  icons: {
    icon: [{ url: "/assets/favicon.ico", type: "image/ico" }],
    apple: [{ url: "/assets/favicon.ico", type: "image/ico" }],
  },

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
    <html lang="en" className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(!t){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}document.documentElement.classList.remove("light","dark");document.documentElement.classList.add(t);}catch(e){document.documentElement.classList.add("dark");}})();`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${plusJakarta.variable} antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:rounded-xl focus:bg-accent focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
