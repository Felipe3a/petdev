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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
export const metadata: Metadata = {
  title: "ADR System",
  description: "Segurança Eletrônica",
  keywords: ["CFTV", "alarm system", "segurança eletrônica", "proteção"],
  authors: [{ name: "ADR System", url: "https://adrsystem.com.br" }],
  themeColor: "#E84C3D",
  icons: {
    icon: "/favicon.ico",       // favicon padrão
    apple: "/favicon-apple.png" // se tiver favicon para iOS
  },
  openGraph: {
    title: "ADR System - Segurança Eletrônica",
    description: "Proteja seu patrimônio com equipamentos de ponta",
    url: "https://adrsystem.com.br",
    siteName: "ADR System",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ADR System Logo" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADR System - Segurança Eletrônica",
    description: "Proteja seu patrimônio com equipamentos de ponta",
    images: ["/og-image.png"],
    creator: "@adr_system",
  },
};
