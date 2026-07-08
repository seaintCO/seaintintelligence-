import {
  BrainCircuit,
  CalendarDays,
  Check,
  FileSearch,
  PlugZap,
  Radar,
  Wallet,
} from "lucide-react";
import type { Lang } from "@/app/page";

export default function Dashboard({ lang }: { lang: Lang }) {
  const es = lang === "es";

  const sidebar = es
    ? [
        ["Agentes AI", BrainCircuit],
        ["Reservas", Wallet],
        ["Analítica", Radar],
        ["Automatización", PlugZap],
      ]
    : [
        ["AI Agents", BrainCircuit],
        ["Booking", Wallet],
        ["Analytics", Radar],
        ["Automation", PlugZap],
      ];

  const metrics = es
    ? [
        ["Clientes", "1,248", "+18.4%", "text-emerald-600"],
        ["Automatizado", "82%", "Saludable", "text-blue-700"],
        ["Estado", "Bajo", "Estable", "text-slate-500"],
      ]
    : [
        ["Leads", "1,248", "+18.4%", "text-emerald-600"],
        ["Automated", "82%", "Healthy", "text-blue-700"],
        ["System health", "Low", "Stable", "text-slate-500"],
      ];

  return (
    <div className="relative mx-auto h-[620px] w-full max-w-[760px]">
      <div className="absolute right-[2%] top-[17%] h-[360px] w-[360px] rounded-full bg-blue-600/10 blur-3xl" />

      <div className="hyperglass absolute left-0 top-[8%] w-[88%] overflow-hidden rounded-[22px] border border-white/70 bg-white/60 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_110px_rgba(37,99,235,0.18)]">
        <div className="flex items-center justify-between border-b border-white/60 bg-white/35 px-5 py-4 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-100 bg-white/70 text-blue-700 shadow-[0_12px_30px_rgba(37,99,235,0.14)]">
              <BrainCircuit className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-[#06145b]">
                {es ? "Consola de inteligencia empresarial" : "Business intelligence console"}
              </p>
              <p className="text-xs font-medium text-slate-400">
                {es ? "Pipeline de sistemas AI" : "AI systems pipeline"}
              </p>
            </div>
          </div>
          <span className="rounded-full border border-emerald-100 bg-emerald-50/80 px-3 py-1 text-xs font-semibold text-emerald-600 backdrop-blur-xl">
            {es ? "Activo" : "Live"}
          </span>
        </div>

        <div className="grid lg:grid-cols-[180px_1fr]">
          <aside className="hidden border-r border-white/60 bg-white/25 p-4 backdrop-blur-xl lg:block">
            <div className="space-y-2 text-xs font-semibold text-slate-500">
              {sidebar.map(([label, Icon]: any, index) => (
                <button
                  key={label}
                  className={`flex w-full items-center gap-2 rounded-xl border px-3 py-2 transition hover:-translate-y-0.5 hover:bg-white/70 hover:shadow-[0_12px_28px_rgba(37,99,235,0.10)] ${
                    index === 0 ? "border-blue-200 bg-white/60" : "border-transparent"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </button>
              ))}
            </div>
          </aside>

          <div className="p-5 sm:p-7">
            <div className="grid gap-4 sm:grid-cols-3">
              {metrics.map(([label, value, meta, color]) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/70 bg-white/55 p-4 shadow-[0_16px_40px_rgba(15,23,42,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-2xl transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(37,99,235,0.12)]"
                >
                  <p className="text-xs font-medium text-slate-400">{label}</p>
                  <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">{value}</p>
                  <p className={`mt-1 text-xs font-semibold ${color}`}>{meta}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-white/70 bg-white/55 p-4 shadow-[0_16px_40px_rgba(15,23,42,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-2xl">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-semibold text-[#06145b]">
                  {es ? "Automatización empresarial" : "Business automation"}
                </p>
                <span className="text-xs font-semibold text-blue-700">
                  {es ? "4 reglas activas" : "4 rules active"}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 rounded-xl bg-blue-50/70 px-3 py-3 transition hover:translate-x-1">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-700 text-white">
                    <Check className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-slate-800">
                      {es ? "Recepcionista AI" : "AI Receptionist"}
                    </p>
                    <p className="text-xs font-medium text-slate-500">
                      {es ? "Llamadas enviadas a reservas" : "Live calls routed to booking"}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-slate-950">24/7</p>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-white/60 px-3 py-3 transition hover:translate-x-1">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-100 text-blue-700">
                    <FileSearch className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-slate-800">
                      {es ? "Pipeline CRM" : "CRM Pipeline"}
                    </p>
                    <p className="text-xs font-medium text-slate-500">
                      {es ? "Nuevo cliente capturado" : "New lead captured"}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-slate-950">
                    {es ? "Activo" : "Live"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blue-card absolute bottom-[11%] right-0 w-[360px] max-w-[72%] rounded-[20px] border border-blue-300/30 bg-[radial-gradient(circle_at_90%_20%,rgba(96,165,250,0.85),transparent_16%),linear-gradient(135deg,#0b2da8_0%,#071855_56%,#0c37c8_100%)] p-6 text-white backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_45px_100px_rgba(37,99,235,0.35)]">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-50">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white text-blue-700">
              <Check className="h-3 w-3" />
            </span>
            {es ? "Listo para lanzar" : "Ready to launch"}
          </span>
          <PlugZap className="h-8 w-8" />
        </div>
        <p className="mt-6 text-4xl font-semibold tracking-[-0.04em]">
          {es ? "SISTEMA AI" : "AI SYSTEM"}
        </p>
        <p className="mt-3 text-sm leading-6 text-blue-50">
          {es
            ? "Sistema activado después de configurar AI, reservas, CRM y automatización."
            : "System activated after AI setup, booking flow, CRM connection, and automation testing."}
        </p>
      </div>

      <div className="hyperglass absolute bottom-[4%] left-[8%] w-[250px] rounded-[18px] border border-white/70 bg-white/60 p-5 backdrop-blur-2xl transition hover:-translate-y-2 hover:shadow-[0_32px_80px_rgba(37,99,235,0.14)]">
        <div className="flex items-center gap-2">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white">
            <Check className="h-3 w-3" />
          </span>
          <p className="text-sm font-semibold text-[#06145b]">
            {es ? "Sistemas activos" : "Systems online"}
          </p>
        </div>
        <div className="mt-5 flex items-end gap-2">
          {[42, 58, 36, 76, 48, 64].map((height, i) => (
            <span
              key={i}
              className={`w-5 rounded-t transition-all duration-500 hover:scale-y-110 ${
                i === 3 ? "bg-blue-700" : i === 4 ? "bg-cyan-200" : "bg-blue-100"
              }`}
              style={{ height }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
