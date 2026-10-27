import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samim Uzzaman Sunny | Full Stack Web Developer",
  description:
    "Portfolio of Samim Uzzaman Sunny — Full Stack Web Developer building fast, responsive, and scalable web applications with React, Next.js, TypeScript, and Node.js.",
  keywords: [
    "Samim Uzzaman Sunny",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer Bangladesh",
    "Frontend Engineer",
  ],
  authors: [{ name: "Samim Uzzaman Sunny" }],
  openGraph: {
    title: "Samim Uzzaman Sunny | Full Stack Web Developer",
    description:
      "Full Stack Web Developer building fast, responsive, and scalable web applications with React, Next.js, TypeScript, and Node.js.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="min-h-screen bg-[#070a12] text-slate-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
