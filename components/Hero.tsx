import { ArrowUpRight, Sparkles } from "lucide-react";
import Dashboard from "./Dashboard";
import type { Lang } from "@/lib/translations";

export default function Hero({ lang }: { lang: Lang }) {
  const es = lang === "es";

  return (
    <div className="grid items-center gap-12 px-2 py-12 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-16 lg:pb-32 lg:pt-24">
      <div className="max-w-3xl">
        <div className="mb-7 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.08em] text-blue-700">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-50">
            <Sparkles className="h-[18px] w-[18px]" />
          </span>
          {es ? "Software AI y Sistemas Empresariales" : "AI Software & Business Systems"}
        </div>

        <h1 className="max-w-[760px] text-[2.55rem] font-semibold leading-[1.03] tracking-[-0.065em] text-black sm:text-6xl lg:text-[4.55rem] xl:text-[5.05rem] headline-shimmer">
          {es ? "Sistemas inteligentes para negocios modernos." : "Systems of Tomorrow"}
        </h1>

        <p className="mt-7 max-w-[590px] text-lg leading-8 text-slate-500 sm:text-xl">
          {es
            ? "SEAINT Intelligence crea empleados de AI, sitios web inteligentes, sistemas de reservas, automatizaciones, dashboards y software personalizado para negocios modernos."
            : "SEAINT Intelligence builds AI employees, intelligent websites, booking systems, automations, dashboards, and custom software  "}
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:gap-5">
          <a href="https://calendly.com/seaintco/new-meeting" className="holo-primary group inline-flex h-14 w-full items-center justify-center overflow-hidden rounded-[18px] pl-7 pr-3 text-[16px] font-semibold tracking-[-0.02em] text-white transition-all duration-300 hover:-translate-y-0.5 sm:w-auto">
            <span className="relative z-10 whitespace-nowrap">{es ? "Reservar" : "Book Now"}</span>
            <span className="relative z-10 ml-4 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border border-white/20 bg-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.40)] backdrop-blur-md">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </a>

          <a href="#solutions" className="holo-secondary group relative inline-flex h-14 w-full items-center justify-center overflow-hidden rounded-[18px] pl-7 pr-3 text-[16px] font-semibold tracking-[-0.02em] text-[#06145b] transition-all duration-300 hover:-translate-y-0.5 sm:w-auto">
            <span className="relative z-10 whitespace-nowrap">{es ? "Explorar Soluciones" : "Explore Solutions"}</span>
            <span className="relative z-10 ml-4 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border border-[#dfe7f7] bg-white/80 shadow-[0_8px_20px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,1)] backdrop-blur-xl">
              <ArrowUpRight className="h-5 w-5 text-[#06145b]" />
            </span>
          </a>
        </div>
      </div>

      <Dashboard lang={lang} />
    </div>
  );
}





