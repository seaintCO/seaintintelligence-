"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Dashboard from "@/components/Dashboard";
import type { Lang } from "@/app/page";

export default function Hero({ lang }: { lang: Lang }) {
  const es = lang === "es";

  return (
    <section className="relative overflow-hidden border-b border-slate-200/80 bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(37,99,235,0.10),transparent_36%)]" />

      <div className="relative grid min-h-[760px] items-center gap-12 px-4 py-16 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:px-14 lg:py-24">
        <div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="systems-tomorrow-headline headline-shimmer">
            {es ? "Sistemas del Mañana" : "Systems of Tomorrow"}
          </h1>

          <div className="hero-action-row mt-8 flex w-full flex-col gap-3 sm:flex-row">
            <Link
              href="/consultation"
              className="premium-button inline-flex min-h-16 flex-1 items-center justify-center rounded-[20px] bg-gradient-to-br from-[#477bff] via-[#2558f4] to-[#173ac6] px-6 text-lg font-semibold text-white shadow-[0_22px_55px_rgba(37,84,244,0.36),inset_0_1px_0_rgba(255,255,255,0.42)] transition duration-300 hover:-translate-y-1"
            >
              <span>{es ? "Reservar ahora" : "Book Now"}</span>

              <span className="seaint-btn-icon hero-cta-icon">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </Link>

            <Link
              href="/services"
              className="inline-flex min-h-16 flex-1 items-center justify-center rounded-[20px] border border-blue-100 bg-white/85 px-6 text-lg font-semibold text-[#06145b] shadow-[0_18px_48px_rgba(37,99,235,0.12),inset_0_1px_0_rgba(255,255,255,1)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-200"
            >
              <span>{es ? "Explorar soluciones" : "Explore Solutions"}</span>

              <span className="seaint-btn-icon hero-cta-icon">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </Link>
          </div>
        </div>

        <div className="relative z-10">
          <Dashboard lang={lang} />
        </div>
      </div>
    </section>
  );
}






