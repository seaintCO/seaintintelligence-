import type { Metadata } from "next";
import "./globals.css";
import "@/styles/aura.css";

export const metadata: Metadata = {
  title: "SEAINT Intelligence | For The Future",
  description: "AI software, intelligent websites, automations, dashboards, and business systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-950 antialiased">
        {children}
      </body>
    </html>
  );
}
