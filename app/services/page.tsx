"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Features from "@/components/Features";
import BookingSection from "@/components/BookingSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import type { Lang } from "@/app/page";

export default function ServicesPage() {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <>
      <main>
        <section className="mx-auto w-full max-w-[1600px] px-5 sm:px-9 lg:px-16">
          <Navbar lang={lang} setLang={setLang} />
        </section>

        <PageHero
          lang={lang}
          eyebrow={{ en: "OUR SERVICES", es: "NUESTROS SERVICIOS" }}
          title={{ en: "Technology designed to", es: "Tecnología diseñada para" }}
          highlight={{ en: "move business forward.", es: "impulsar tu empresa." }}
          description={{
            en: "From premium websites to custom platforms, automation, AI employees, and complete business operating systems.",
            es: "Desde sitios web premium hasta plataformas personalizadas, automatización, empleados de IA y sistemas operativos empresariales.",
          }}
        />

        <Features lang={lang} />
        <BookingSection lang={lang} />
        <CTA lang={lang} />
      </main>

      <Footer lang={lang} />
    </>
  );
}
