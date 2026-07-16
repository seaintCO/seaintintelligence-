"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import type { Lang } from "@/app/page";

const calendlyUrl = "https://calendly.com/seaintco/new-meeting";

export default function ConsultationPage() {
  const [lang, setLang] = useState<Lang>("en");
  const es = lang === "es";

  return (
    <>
      <main>
        <section className="mx-auto w-full max-w-[1600px] px-5 sm:px-9 lg:px-16">
          <Navbar lang={lang} setLang={setLang} />
        </section>

        <PageHero
          lang={lang}
          eyebrow={{ en: "BOOK A CONSULTATION", es: "RESERVAR CONSULTA" }}
          title={{ en: "Let’s discuss what your", es: "Hablemos sobre lo que tu" }}
          highlight={{ en: "business needs next.", es: "empresa necesita." }}
          description={{
            en: "Select a time to discuss your website, platform, automation, AI employee, operating system, or technology strategy.",
            es: "Selecciona un horario para hablar sobre tu sitio web, plataforma, automatización, empleado de IA, sistema operativo o estrategia tecnológica.",
          }}
        />

        <section className="bg-white">
          <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-16">
            <div className="border-x border-b border-slate-200/80 px-4 py-12 sm:px-8 lg:px-14 lg:py-16">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">
                  {es ? "Selecciona un horario" : "Select a time"}
                </h2>

                <p className="mt-3 text-slate-500">
                  {es
                    ? "La mayoría de los proyectos se cotizan después de la consulta."
                    : "Most projects are priced after the consultation."}
                </p>
              </div>

              <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
                <iframe
                  title={es ? "Reservar consulta SEAINT" : "Book SEAINT consultation"}
                  src={calendlyUrl}
                  className="min-h-[760px] w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </>
  );
}
