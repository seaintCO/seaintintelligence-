import { ArrowRight, Landmark, Wallet, Workflow } from "lucide-react";
import type { Lang } from "@/app/page";

export default function Stats({ lang }: { lang: Lang }) {
  const es = lang === "es";
  const stats = es
    ? [
        { icon: Workflow, title: "Sistemas empresariales con IA", text: "La IA gestiona prospectos, llamadas, reservas, seguimiento y flujos de clientes." },
        { icon: Wallet, title: "Implementación rápida", text: "Lanza sitios web, dashboards, agentes y automatizaciones sin procesos lentos de agencia." },
        { icon: Landmark, title: "Inteligencia de ingresos", text: "Controla prospectos, reservas, analítica y actividad del cliente desde un solo sistema." },
      ]
    : [
        { icon: Workflow, title: "AI business systems", text: "AI handles leads, calls, booking, follow-up, and customer workflows." },
        { icon: Wallet, title: "Rapid deployment", text: "Launch websites, dashboards, agents, and automations without slow agency timelines." },
        { icon: Landmark, title: "Revenue intelligence", text: "Track leads, bookings, analytics, and customer activity from one intelligent system." },
      ];

  return (
    <div id="solutions" className="grid gap-5 px-6 pb-20 pt-16 md:grid-cols-3 lg:px-16">
      {stats.map((item) => {
        const Icon = item.icon;
        return (
          <a key={item.title} href="https://calendly.com/seaintco/new-meeting" className="group flex items-center justify-between gap-6 rounded-[18px] border border-slate-200 bg-white/78 p-6 shadow-[0_12px_34px_rgba(15,23,42,0.035)] backdrop-blur transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_18px_42px_rgba(15,23,42,0.06)]">
            <div className="flex min-w-0 items-center gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#06145b]">{item.title}</h3>
                <p className="mt-2 max-w-[280px] text-sm leading-5 text-slate-500">{item.text}</p>
              </div>
            </div>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition group-hover:bg-blue-700 group-hover:text-white">
              <ArrowRight className="h-[18px] w-[18px]" />
            </span>
          </a>
        );
      })}
    </div>
  );
}
