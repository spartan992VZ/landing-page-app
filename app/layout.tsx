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
  title: "Airsoft Operations - Conecta. Coordina. Conquista.",
  description: "La plataforma definitiva para la comunidad de Airsoft. Organiza operaciones, encuentra jugadores, administra equipos y lleva tus partidas al siguiente nivel.",
  keywords: ["airsoft", "partidas airsoft", "organizar partidas", "comunidad airsoft", "operaciones tácticas", "equipos airsoft", "campos de juego"],
  authors: [{ name: "Airsoft Operations" }],
  creator: "Airsoft Operations",
  publisher: "Airsoft Operations",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://airsoftoperations.com'),
  openGraph: {
    title: "Airsoft Operations - Conecta. Coordina. Conquista.",
    description: "La plataforma definitiva para la comunidad de Airsoft. Organiza operaciones, encuentra jugadores y administra equipos.",
    url: 'https://airsoftoperations.com',
    siteName: 'Airsoft Operations',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Airsoft Operations - Conecta. Coordina. Conquista.',
    description: 'La plataforma definitiva para la comunidad de Airsoft.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
