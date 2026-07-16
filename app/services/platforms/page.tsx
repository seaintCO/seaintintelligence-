"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import BookingSection from "@/components/BookingSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import type { Lang } from "@/app/page";

export default function ServiceDetailPage() {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <>
      <main>
        <section className="mx-auto w-full max-w-[1600px] px-5 sm:px-9 lg:px-16">
          <Navbar lang={lang} setLang={setLang} />
        </section>

        <PageHero
          lang={lang}
          eyebrow={{
            en: "CUSTOM PLATFORMS",
            es: "PLATAFORMAS PERSONALIZADAS",
          }}
          title={{
            en: "Software designed around",
            es: "Software diseñado alrededor de",
          }}
          highlight={{
            en: "how your company operates.",
            es: "cómo opera tu empresa.",
          }}
          description={{
            en: "Custom portals, SaaS products, dashboards, marketplaces, booking systems, and internal platforms.",
            es: "Portales, productos SaaS, dashboards, marketplaces, sistemas de reservas y plataformas internas.",
          }}
        />

        <BookingSection lang={lang} />
        <CTA lang={lang} />
      </main>

      <Footer lang={lang} />
    </>
  );
}
