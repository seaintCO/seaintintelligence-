"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ProcessSection from "@/components/ProcessSection";
import BookingSection from "@/components/BookingSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import type { Lang } from "@/app/page";

export default function ProcessPage() {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <>
      <main>
        <section className="mx-auto w-full max-w-[1600px] px-5 sm:px-9 lg:px-16">
          <Navbar lang={lang} setLang={setLang} />
        </section>

        <PageHero
          lang={lang}
          eyebrow={{ en: "OUR PROCESS", es: "NUESTRO PROCESO" }}
          title={{ en: "A clear path from", es: "Un camino claro desde la" }}
          highlight={{ en: "strategy to launch.", es: "estrategia al lanzamiento." }}
          description={{
            en: "We begin with the business problem, define the correct solution, build it, test it, and prepare your team for launch.",
            es: "Comenzamos con el problema empresarial, definimos la solución correcta, la desarrollamos, la probamos y preparamos a tu equipo.",
          }}
        />

        <ProcessSection lang={lang} />
        <BookingSection lang={lang} />
        <CTA lang={lang} />
      </main>

      <Footer lang={lang} />
    </>
  );
}
