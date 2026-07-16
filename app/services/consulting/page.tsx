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
            en: "TECHNOLOGY CONSULTING",
            es: "CONSULTORÍA TECNOLÓGICA",
          }}
          title={{
            en: "A clear technology roadmap",
            es: "Una ruta tecnológica clara",
          }}
          highlight={{
            en: "before you build.",
            es: "antes de construir.",
          }}
          description={{
            en: "We assess your current operations, identify technology gaps, and define the right sequence of systems to deploy.",
            es: "Evaluamos tus operaciones, identificamos brechas tecnológicas y definimos la secuencia correcta de sistemas.",
          }}
        />

        <BookingSection lang={lang} />
        <CTA lang={lang} />
      </main>

      <Footer lang={lang} />
    </>
  );
}
