import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { pageSeo } from "@/src/lib/seo";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const homeSeo = pageSeo["/"];

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f7f4f0",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://xn--jlextenses-9bb.com"),
  title: {
    default: homeSeo.title,
    template: "%s | JL e Extensões",
  },
  description: homeSeo.description,
  keywords: homeSeo.keywords.split(", "),
  authors: [{ name: "JL e Extensões" }],
  creator: "JL e Extensões",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: "JL e Extensões",
    title: homeSeo.title,
    description: homeSeo.description,
    images: [
      {
        url: homeSeo.ogImage,
        width: 1200,
        height: 630,
        alt: "JL e Extensões — Extensões de cabelo em Vila Real",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeSeo.title,
    description: homeSeo.description,
    images: [homeSeo.ogImage],
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
    <html lang="pt" className={`${dmSans.variable} ${cormorant.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased pb-mobile-cta">
        {children}
      </body>
    </html>
  );
}
