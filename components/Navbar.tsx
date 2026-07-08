"use client";

import Link from "next/link";
import { Globe2, Menu } from "lucide-react";
import type { Lang } from "@/app/page";

export default function Navbar({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (lang: Lang) => void;
}) {
  const es = lang === "es";

  return (
    <header className="flex items-center justify-between border-b border-slate-200/80 px-6 py-7 lg:px-16">
      <Link href="/" className="flex items-center gap-4">
        <span className="relative h-8 w-8 shrink-0">
          <span className="absolute left-0 top-0 h-2.5 w-2.5 rounded bg-blue-700" />
          <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded bg-blue-700" />
          <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded bg-blue-700" />
          <span className="absolute bottom-0 left-0 h-2.5 w-2.5 rounded bg-blue-700" />
          <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded bg-blue-700" />
        </span>
        <span className="text-2xl font-semibold tracking-[-0.04em] text-black sm:text-3xl">
          SEAINT Intelligence
        </span>
      </Link>

      <nav className="hidden items-center gap-10 text-sm font-medium text-slate-950 xl:flex">
        <Link href="#solutions" className="transition hover:text-blue-700">{es ? "Soluciones" : "Solutions"}</Link>
        <Link href="#process" className="transition hover:text-blue-700">{es ? "Proceso" : "Process"}</Link>
        <Link href="#features" className="transition hover:text-blue-700">{es ? "Funciones" : "Features"}</Link>
        <Link href="#company" className="transition hover:text-blue-700">{es ? "Compañía" : "Company"}</Link>
      </nav>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setLang(es ? "en" : "es")}
          className="group inline-flex h-12 items-center gap-2 rounded-[16px] border border-blue-200/70 bg-white/60 px-4 text-sm font-semibold text-[#06145b] shadow-[0_12px_34px_rgba(37,99,235,0.10),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-[0_18px_50px_rgba(37,99,235,0.22)]"
        >
          <Globe2 className="h-4 w-4 text-blue-700" />
          {es ? "EN" : "ES"}
        </button>

        <Link href="#book" className="group hidden h-12 items-center justify-center overflow-hidden rounded-[16px] bg-gradient-to-br from-[#2f6bff] via-[#2454f4] to-[#1237d8] px-5 text-[15px] font-semibold tracking-[-0.02em] text-white shadow-[0_18px_48px_rgba(37,84,244,0.38),0_0_40px_rgba(37,84,244,0.18),inset_0_1px_0_rgba(255,255,255,0.42)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(37,84,244,0.50),0_0_60px_rgba(37,84,244,0.25),inset_0_1px_0_rgba(255,255,255,0.50)] sm:inline-flex">
          {es ? "Reservar" : "Book Now"}
        </Link>

        <button className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm xl:hidden">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
