import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://xn--jlextenses-9bb.com"),
  title: {
    default: "JL e Extensões | Extensões de Cabelo em Vila Real",
    template: "%s | JL e Extensões",
  },
  description:
    "Extensões de cabelo natural em Vila Real. Avaliação gratuita e orçamento personalizado pelo WhatsApp. Também maquilhagem, unhas e mais.",
  keywords: [
    "extensões de cabelo vila real",
    "cabeleireiro vila real",
    "maquilhagem vila real",
    "unhas vila real",
    "beleza vila real",
    "jl e extensões",
  ],
  authors: [{ name: "JL e Extensões" }],
  creator: "JL e Extensões",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: "JL e Extensões",
    title: "JL e Extensões | Extensões de Cabelo em Vila Real",
    description:
      "Extensões de cabelo natural em Vila Real. Avaliação gratuita e orçamento personalizado pelo WhatsApp.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JL e Extensões — Extensões de cabelo em Vila Real",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JL e Extensões | Extensões de Cabelo em Vila Real",
    description:
      "Extensões de cabelo natural em Vila Real. Avaliação gratuita e orçamento personalizado pelo WhatsApp.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={`${dmSans.variable} ${cormorant.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
