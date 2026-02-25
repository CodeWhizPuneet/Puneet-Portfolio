import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import CursorGlow from "./components/CursorGlow";
import ParticleField from "./components/ParticleField";
import GradientOrbs from "./components/GradientOrbs";
import LenisProvider from "./components/LenisProvider";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Puneet Shankar | CS Student & Full Stack Explorer",
  description:
    "Computer Science (AI & ML) student building strong foundations in programming and full stack development. Explore projects, skills, and more.",
  keywords: [
    "Puneet Shankar",
    "Portfolio",
    "Computer Science",
    "AI ML",
    "Full Stack",
    "Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Mohali",
    "India",
  ],
  authors: [{ name: "Puneet Shankar" }],
  creator: "Puneet Shankar",
  metadataBase: new URL("https://puneet-portfolio.vercel.app"),
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Puneet Shankar | CS Student & Full Stack Explorer",
    description:
      "CS student passionate about programming, AI & ML, and full stack development. Check out my projects and skills.",
    type: "website",
    url: "https://puneet-portfolio.vercel.app",
    siteName: "Puneet Shankar Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Puneet Shankar | Portfolio",
    description:
      "CS student passionate about programming, AI & ML, and full stack development.",
    creator: "@CodeWhizPuneet",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  other: {
    "theme-color": "#030303",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased bg-background text-primary">
        {/* Skip to content — accessibility */}
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-accent focus:text-background focus:text-sm focus:font-bold"
        >
          Skip to content
        </a>
        <LenisProvider>
          <ParticleField />
          <GradientOrbs />
          {children}
          <CursorGlow />
        </LenisProvider>
      </body>
    </html>
  );
}