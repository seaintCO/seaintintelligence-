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
            en: "AI EMPLOYEES",
            es: "EMPLEADOS DE IA",
          }}
          title={{
            en: "Digital employees that",
            es: "Empleados digitales que",
          }}
          highlight={{
            en: "respond and execute.",
            es: "responden y ejecutan.",
          }}
          description={{
            en: "AI receptionists, lead qualifiers, support assistants, scheduling agents, and operational copilots.",
            es: "Recepcionistas de IA, calificadores de prospectos, asistentes de soporte, agentes de agenda y copilotos operativos.",
          }}
        />

        <BookingSection lang={lang} />
        <CTA lang={lang} />
      </main>

      <Footer lang={lang} />
    </>
  );
}
