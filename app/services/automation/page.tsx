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
            en: "AUTOMATION",
            es: "AUTOMATIZACIÓN",
          }}
          title={{
            en: "Connect the work your team",
            es: "Conecta el trabajo que tu equipo",
          }}
          highlight={{
            en: "should not repeat manually.",
            es: "no debería repetir manualmente.",
          }}
          description={{
            en: "Reliable workflows connecting forms, calendars, CRM, documents, communication, and reporting.",
            es: "Flujos confiables que conectan formularios, calendarios, CRM, documentos, comunicación y reportes.",
          }}
        />

        <BookingSection lang={lang} />
        <CTA lang={lang} />
      </main>

      <Footer lang={lang} />
    </>
  );
}
