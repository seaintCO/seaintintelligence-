"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import CompanySection from "@/components/CompanySection";
import Stats from "@/components/Stats";
import LogoCloud from "@/components/LogoCloud";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import type { Lang } from "@/app/page";

export default function CompanyPage() {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <>
      <main>
        <section className="mx-auto w-full max-w-[1600px] px-5 sm:px-9 lg:px-16">
          <Navbar lang={lang} setLang={setLang} />
        </section>

        <PageHero
          lang={lang}
          eyebrow={{ en: "SEAINT INTELLIGENCE", es: "SEAINT INTELLIGENCE" }}
          title={{ en: "A technology partner for", es: "Un socio tecnológico para" }}
          highlight={{ en: "ambitious businesses.", es: "empresas ambiciosas." }}
          description={{
            en: "SEAINT Intelligence helps organizations design, build, and deploy the technology required to operate smarter and grow.",
            es: "SEAINT Intelligence ayuda a las organizaciones a diseñar, desarrollar e implementar la tecnología necesaria para operar mejor y crecer.",
          }}
        />

        <section className="mx-auto w-full max-w-[1600px] px-5 sm:px-9 lg:px-16">
          <Stats lang={lang} />
          <LogoCloud lang={lang} />
        </section>

        <CompanySection lang={lang} />
        <CTA lang={lang} />
      </main>

      <Footer lang={lang} />
    </>
  );
}
