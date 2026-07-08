import {
  ArrowUpRight,
  Banknote,
  CalendarDays,
  Monitor,
  Shield,
  Tag,
  UserRound,
} from "lucide-react";
import type { Lang } from "@/app/page";

export default function BookingSection({ lang }: { lang: Lang }) {
  const es = lang === "es";

  return (
    <section id="book" className="relative overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-16">
        <div className="relative border-x border-y border-slate-200/80 px-6 py-20 sm:px-8 lg:px-16 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <div className="mb-7 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                <span className="grid h-5 w-5 grid-cols-2 gap-1">
                  <span className="rounded-sm bg-blue-700" />
                  <span className="rounded-sm bg-blue-700" />
                  <span className="rounded-sm bg-blue-700" />
                  <span className="rounded-sm bg-blue-700" />
                </span>
                {es ? "LISTO PARA CRECER" : "READY TO MOVE FASTER"}
              </div>

              <h2 className="max-w-[720px] text-4xl font-semibold leading-[1.04] tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-6xl">
                {es ? (
                  <>
                    Implementa sistemas inteligentes con{" "}
                    <span className="text-blue-700">SEAINT.</span>
                  </>
                ) : (
                  <>
                    Deploy smarter business systems with{" "}
                    <span className="text-blue-700">SEAINT.</span>
                  </>
                )}
              </h2>

              <p className="mt-7 max-w-[610px] text-lg leading-8 text-slate-500 sm:text-xl">
                {es
                  ? "Automatiza reservas, clientes, seguimiento, dashboards y operaciones en una plataforma inteligente."
                  : "Automate booking, leads, follow-up, dashboards, and business operations in one intelligent platform."}
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:gap-5">
                <a
                  href="mailto:hello@seaint.com"
                  className="holo-primary group inline-flex h-14 w-full items-center justify-center overflow-hidden rounded-[18px] pl-7 pr-3 text-[16px] font-semibold tracking-[-0.02em] text-white transition-all duration-300 hover:-translate-y-0.5 sm:w-auto"
                >
                  <span className="relative z-10 whitespace-nowrap">
                    {es ? "Reservar llamada" : "Book strategy call"}
                  </span>
                  <span className="relative z-10 ml-4 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border border-white/20 bg-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.40)] backdrop-blur-md">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </a>

                <a
                  href="#solutions"
                  className="holo-secondary group relative inline-flex h-14 w-full items-center justify-center overflow-hidden rounded-[18px] pl-7 pr-3 text-[16px] font-semibold tracking-[-0.02em] text-[#06145b] transition-all duration-300 hover:-translate-y-0.5 sm:w-auto"
                >
                  <span className="relative z-10 whitespace-nowrap">
                    {es ? "Ver soluciones" : "Explore solutions"}
                  </span>
                  <span className="relative z-10 ml-4 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border border-[#dfe7f7] bg-white/80 shadow-[0_8px_20px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,1)] backdrop-blur-xl">
                    <CalendarDays className="h-5 w-5 text-[#06145b]" />
                  </span>
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {[
                  [Shield, es ? "Sistemas seguros" : "Secure systems"],
                  [Monitor, es ? "Monitoreo 24/7" : "24/7 monitoring"],
                  [Tag, es ? "Sin tarifas ocultas" : "No hidden fees"],
                ].map(([Icon, label]: any) => (
                  <div
                    key={label}
                    className="inline-flex items-center justify-center gap-3 border border-slate-200 bg-white/70 px-5 py-4 text-slate-500 shadow-[0_10px_30px_rgba(15,23,42,0.04)] backdrop-blur-xl"
                  >
                    <Icon className="h-5 w-5 text-blue-700" />
                    <span className="text-sm font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[480px] overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.12),transparent_42%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-70" />
              <div className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-200 to-transparent" />

              <div className="absolute left-1/2 top-1/2 h-[160px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-blue-200/80 bg-blue-100/30 blur-[0.2px]" />
              <div className="absolute left-1/2 top-1/2 h-[110px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-blue-300/80 bg-blue-500/5" />

              <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[28px] border border-white bg-white/80 text-blue-700 shadow-[0_28px_70px_rgba(37,99,235,0.18),inset_0_1px_0_rgba(255,255,255,1)] backdrop-blur-xl">
                <span className="grid grid-cols-2 gap-2">
                  <span className="h-6 w-6 rounded-md bg-blue-700 shadow-[0_0_20px_rgba(37,99,235,0.40)]" />
                  <span className="h-6 w-6 rounded-md bg-blue-700 shadow-[0_0_20px_rgba(37,99,235,0.40)]" />
                  <span className="h-6 w-6 rounded-md bg-blue-700 shadow-[0_0_20px_rgba(37,99,235,0.40)]" />
                  <span className="h-6 w-6 rounded-md bg-blue-700 shadow-[0_0_20px_rgba(37,99,235,0.40)]" />
                </span>
              </div>

              {[
                [Banknote, "top-[15%] left-1/2 -translate-x-1/2"],
                [Shield, "left-[8%] top-1/2 -translate-y-1/2"],
                [CalendarDays, "right-[8%] top-1/2 -translate-y-1/2"],
                [UserRound, "bottom-[13%] left-1/2 -translate-x-1/2"],
              ].map(([Icon, pos]: any, index) => (
                <div
                  key={index}
                  className={`absolute ${pos} anim-float flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white/80 text-blue-700 shadow-[0_18px_46px_rgba(15,23,42,0.09)] backdrop-blur-xl`}
                  style={{ animationDelay: `${index * 0.35}s` }}
                >
                  <Icon className="h-6 w-6" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
