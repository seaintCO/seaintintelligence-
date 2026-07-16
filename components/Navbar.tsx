"use client";

import Link from "next/link";
import { Globe2, Menu, X } from "lucide-react";
import { useState } from "react";
import type { Lang } from "@/app/page";

export default function Navbar({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (lang: Lang) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const es = lang === "es";

  const navigation = [
    {
      href: "/services",
      label: es ? "Servicios" : "Services",
    },
    {
      href: "/process",
      label: es ? "Proceso" : "Process",
    },
    {
      href: "/industries",
      label: es ? "Industrias" : "Industries",
    },
    {
      href: "/company",
      label: es ? "Compañía" : "Company",
    },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="relative z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div className="flex items-center justify-between px-4 py-5 sm:px-6 lg:px-16">
        <Link href="/" className="flex items-center gap-4" onClick={closeMenu}>
          <span className="relative h-8 w-8 shrink-0">
            <span className="absolute left-0 top-0 h-2.5 w-2.5 rounded bg-blue-700" />
            <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded bg-blue-700" />
            <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded bg-blue-700" />
            <span className="absolute bottom-0 left-0 h-2.5 w-2.5 rounded bg-blue-700" />
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded bg-blue-700" />
          </span>

          <span className="text-lg font-semibold tracking-[-0.04em] text-black sm:text-3xl">
            SEAINT Intelligence
          </span>
        </Link>

        <nav className="hidden items-center gap-10 text-sm font-medium text-slate-950 xl:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-blue-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setLang(es ? "en" : "es")}
            className="inline-flex h-12 items-center gap-2 rounded-[16px] border border-blue-200/70 bg-white/60 px-4 text-sm font-semibold text-[#06145b] shadow-[0_12px_34px_rgba(37,99,235,0.10)] backdrop-blur-xl transition hover:-translate-y-0.5"
          >
            <Globe2 className="h-4 w-4 text-blue-700" />
            {es ? "EN" : "ES"}
          </button>

          <Link
            href="/consultation"
            className="hidden h-12 items-center justify-center rounded-[16px] bg-gradient-to-br from-[#2f6bff] via-[#2454f4] to-[#1237d8] px-5 text-[15px] font-semibold text-white shadow-[0_18px_48px_rgba(37,84,244,0.38)] transition hover:-translate-y-0.5 sm:inline-flex"
          >
            {es ? "Reservar consulta" : "Book consultation"}
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-950 shadow-sm xl:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute left-0 right-0 top-full border-b border-slate-200 bg-white/95 px-5 py-5 shadow-[0_24px_60px_rgba(15,23,42,0.12)] backdrop-blur-2xl xl:hidden">
          <nav className="mx-auto flex max-w-[1500px] flex-col gap-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-2xl px-5 py-4 text-base font-semibold text-slate-800 transition hover:bg-blue-50 hover:text-blue-700"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/consultation"
              onClick={closeMenu}
              className="mt-3 inline-flex min-h-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2f6bff] via-[#2454f4] to-[#1237d8] px-6 font-semibold text-white"
            >
              {es ? "Reservar consulta" : "Book consultation"}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
