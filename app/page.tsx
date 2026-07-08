"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import LogoCloud from "@/components/LogoCloud";
import Features from "@/components/Features";
import BookingSection from "@/components/BookingSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export type Lang = "en" | "es";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <>
      <main className="overflow-hidden relative">
        <section className="relative z-10 mx-auto w-full max-w-[1600px] px-5 sm:px-9 lg:px-16">
          <div className="pointer-events-none absolute left-5 top-0 hidden h-full w-px bg-slate-200/80 sm:left-9 md:block lg:left-16"></div>
          <div className="pointer-events-none absolute right-5 top-0 hidden h-full w-px bg-slate-200/80 sm:right-9 md:block lg:right-16"></div>
          <Navbar lang={lang} setLang={setLang} />
          <Hero lang={lang} />
          <Stats />
          <LogoCloud />
        </section>
      </main>
      <Features />
      <BookingSection lang={lang} />
      <CTA lang={lang} />
      <Footer />
    </>
  );
}


