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
            en: "BUSINESS OPERATING SYSTEMS",
            es: "SISTEMAS OPERATIVOS EMPRESARIALES",
          }}
          title={{
            en: "One connected system for",
            es: "Un sistema conectado para",
          }}
          highlight={{
            en: "running the business.",
            es: "operar tu empresa.",
          }}
          description={{
            en: "Internal software combining clients, projects, documents, communication, workflows, and business intelligence.",
            es: "Software interno que combina clientes, proyectos, documentos, comunicación, flujos e inteligencia empresarial.",
          }}
        />

        <BookingSection lang={lang} />
        <CTA lang={lang} />
      </main>

      <Footer lang={lang} />
    </>
  );
}
