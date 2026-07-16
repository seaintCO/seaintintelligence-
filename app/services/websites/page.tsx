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
            en: "INTELLIGENT WEBSITES",
            es: "SITIOS WEB INTELIGENTES",
          }}
          title={{
            en: "Digital experiences built to",
            es: "Experiencias digitales creadas para",
          }}
          highlight={{
            en: "earn trust and convert.",
            es: "generar confianza y convertir.",
          }}
          description={{
            en: "Premium websites connected to booking, lead capture, analytics, SEO, and the systems your business already uses.",
            es: "Sitios web premium conectados con reservas, captura de prospectos, análisis, SEO y los sistemas que tu empresa ya utiliza.",
          }}
        />

        <BookingSection lang={lang} />
        <CTA lang={lang} />
      </main>

      <Footer lang={lang} />
    </>
  );
}
