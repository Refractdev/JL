import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://xn--jlextenses-9bb.com"),
  title: {
    default: "JL e Extensões | Extensões de Cabelo e Beleza em Vila Real",
    template: "%s | JL e Extensões",
  },
  description:
    "Estúdio premium em Vila Real especialista em extensões de cabelo, cabeleireiro, maquilhagem, cílios, unhas e depilação. Realça a tua beleza connosco.",
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
    title: "JL e Extensões | Extensões de Cabelo e Beleza em Vila Real",
    description:
      "Estúdio premium em Vila Real especialista em extensões de cabelo, cabeleireiro, maquilhagem, cílios, unhas e depilação.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JL e Extensões",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JL e Extensões | Extensões de Cabelo e Beleza em Vila Real",
    description:
      "Estúdio premium em Vila Real especialista em extensões de cabelo, cabeleireiro, maquilhagem, cílios, unhas e depilação.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
