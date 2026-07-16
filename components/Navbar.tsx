"use client";

import Link from "next/link";
import { Globe2, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
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
    <header className="relative z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-2xl">
      <div className="flex min-h-[92px] items-center justify-between px-4 sm:px-6 lg:px-12">
        <Link
          href="/"
          onClick={closeMenu}
          className="text-[24px] font-semibold leading-none tracking-[-0.055em] text-slate-950 sm:text-[28px]"
        >
          SEAINT Intelligence
        </Link>

        <nav
          aria-label={es ? "Navegación principal" : "Primary navigation"}
          className="hidden items-center gap-9 text-sm font-medium text-slate-700 xl:flex"
        >
          {navigation.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-3 transition ${
                  active
                    ? "text-blue-700"
                    : "hover:text-blue-700"
                }`}
              >
                {item.label}

                {active && (
                  <span className="absolute bottom-0 left-0 h-px w-full bg-blue-600" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setLang(es ? "en" : "es")}
            aria-label={
              es ? "Cambiar idioma a inglés" : "Change language to Spanish"
            }
            className="inline-flex h-12 items-center gap-2 rounded-[16px] border border-blue-100 bg-white/80 px-4 text-sm font-semibold text-[#06145b] shadow-[0_12px_34px_rgba(37,99,235,0.09)] transition hover:-translate-y-0.5 hover:border-blue-200"
          >
            <Globe2 className="h-4 w-4 text-blue-700" />
            {es ? "EN" : "ES"}
          </button>

          <Link
            href="/consultation"
            className="hidden h-12 items-center justify-center rounded-[16px] bg-gradient-to-br from-[#477bff] via-[#2558f4] to-[#173ac6] px-5 text-sm font-semibold text-white shadow-[0_16px_42px_rgba(37,84,244,0.30)] transition hover:-translate-y-0.5 sm:inline-flex"
          >
            {es ? "Reservar consulta" : "Book consultation"}
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={
              menuOpen
                ? es
                  ? "Cerrar menú"
                  : "Close menu"
                : es
                  ? "Abrir menú"
                  : "Open menu"
            }
            className="inline-flex h-12 w-12 items-center justify-center rounded-[16px] border border-slate-200 bg-white text-slate-950 shadow-[0_10px_26px_rgba(15,23,42,0.08)] transition hover:border-blue-200 hover:text-blue-700 xl:hidden"
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
        <div className="absolute left-0 right-0 top-full border-b border-slate-200 bg-white/95 px-5 py-5 shadow-[0_28px_70px_rgba(15,23,42,0.12)] backdrop-blur-2xl xl:hidden">
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
              className="mt-3 inline-flex min-h-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#477bff] via-[#2558f4] to-[#173ac6] px-6 font-semibold text-white"
            >
              {es ? "Reservar consulta" : "Book consultation"}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}


