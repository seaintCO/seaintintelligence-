import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import "@/styles/aura.css";
import SpotlightEffects from "@/components/SpotlightEffects";

const siteUrl = "https://seaintintelligence.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "SEAINT Intelligence | Enterprise Technology Solutions",
    template: "%s | SEAINT Intelligence",
  },

  description:
    "SEAINT Intelligence builds intelligent websites, custom platforms, AI employees, automations, and business operating systems.",

  keywords: [
    "SEAINT Intelligence",
    "enterprise technology",
    "intelligent websites",
    "custom software",
    "business automation",
    "AI employees",
    "AI receptionist",
    "custom platforms",
    "business operating systems",
    "technology consulting",
    "Nashville technology company",
  ],

  authors: [
    {
      name: "SEAINT Intelligence",
    },
  ],

  creator: "SEAINT Intelligence",
  publisher: "SEAINT Intelligence",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "es_US",
    url: siteUrl,
    siteName: "SEAINT Intelligence",
    title: "SEAINT Intelligence | Enterprise Technology Solutions",
    description:
      "Intelligent websites, custom platforms, AI employees, automations, and business systems built around your company.",
  },

  twitter: {
    card: "summary_large_image",
    title: "SEAINT Intelligence | Enterprise Technology Solutions",
    description:
      "Technology built around your business. Book a consultation with SEAINT Intelligence.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-950 antialiased">
        <LanguageProvider>{children}</LanguageProvider>
              <SpotlightEffects />
      </body>
    </html>
  );
}



