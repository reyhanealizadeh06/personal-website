import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reyhane Alizadeh | Front-End Developer",
  description:
    "Portfolio of Reyhane Alizadeh, a Computer Science student and Front-End Developer focused on modern web experiences.",
  keywords: [
    "Reyhane Alizadeh",
    "Front-End Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Web Developer",
    "Portfolio",
  ],
  authors: [
    {
      name: "Reyhane Alizadeh",
    },
  ],
  creator: "Reyhane Alizadeh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}