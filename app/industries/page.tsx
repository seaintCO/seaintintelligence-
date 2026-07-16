"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import CompanySection from "@/components/CompanySection";
import BookingSection from "@/components/BookingSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import type { Lang } from "@/app/page";

export default function IndustriesPage() {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <>
      <main>
        <section className="mx-auto w-full max-w-[1600px] px-5 sm:px-9 lg:px-16">
          <Navbar lang={lang} setLang={setLang} />
        </section>

        <PageHero
          lang={lang}
          eyebrow={{ en: "INDUSTRIES", es: "INDUSTRIAS" }}
          title={{ en: "Systems shaped around", es: "Sistemas creados alrededor de" }}
          highlight={{ en: "real operations.", es: "operaciones reales." }}
          description={{
            en: "We support companies across construction, real estate, healthcare, legal services, finance, hospitality, and local business.",
            es: "Apoyamos empresas de construcción, bienes raíces, salud, servicios legales, finanzas, hospitalidad y negocios locales.",
          }}
        />

        <CompanySection lang={lang} />
        <BookingSection lang={lang} />
        <CTA lang={lang} />
      </main>

      <Footer lang={lang} />
    </>
  );
}
