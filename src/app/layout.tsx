// src/app/layout.tsx

import type { Metadata } from "next";
import { Modak, Poppins } from 'next/font/google';
// import LenisProvider from "@/components/LenisProvider"; // REMOVIDO
import { ParticleProvider } from "@/context/ParticleContext";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-poppins',
  display: 'swap',
});

const modak = Modak({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-modak',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Feliz Aniversário!",
  description: "Uma surpresa especial para você.",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${modak.variable} relative overflow-hidden`}>
      <body className={poppins.className}>
        <ParticleProvider>
          {children}
        </ParticleProvider>
      </body>
    </html>
  );
}