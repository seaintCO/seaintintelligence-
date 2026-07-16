"use client";

import {
  Activity,
  ArrowUpRight,
  Bot,
  Check,
  Globe2,
  Layers3,
  MessageSquareText,
  MousePointerClick,
  PlugZap,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { useMemo, useState } from "react";
import type { Lang } from "@/app/page";

type ProductKey = "ai" | "websites" | "platforms" | "automation";

type ProductMetric = {
  label: string;
  value: string;
  detail: string;
};

type ProductActivity = {
  title: string;
  detail: string;
};

type ProductDefinition = {
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  metrics: ProductMetric[];
  activity: ProductActivity[];
};

export default function Dashboard({ lang }: { lang: Lang }) {
  const es = lang === "es";
  const [activeProduct, setActiveProduct] = useState<ProductKey>("ai");

  const products = useMemo<Record<ProductKey, ProductDefinition>>(
    () => ({
      ai: {
        label: es ? "Empleados de IA" : "AI Employees",
        eyebrow: es ? "FUERZA LABORAL DIGITAL" : "DIGITAL WORKFORCE",
        title: es ? "Operaciones activas 24/7" : "Operations active 24/7",
        description: es
          ? "Agentes que responden, califican prospectos y coordinan citas."
          : "Agents that respond, qualify leads, and coordinate appointments.",
        Icon: Bot,
        metrics: [
          {
            label: es ? "Conversaciones" : "Conversations",
            value: "1,284",
            detail: es ? "+18% este mes" : "+18% this month",
          },
          {
            label: es ? "Citas reservadas" : "Appointments",
            value: "186",
            detail: es ? "Sin intervención" : "Without intervention",
          },
          {
            label: es ? "Tiempo de respuesta" : "Response time",
            value: "4.2s",
            detail: es ? "Promedio" : "Average",
          },
        ],
        activity: [
          {
            title: es ? "Prospecto calificado" : "Lead qualified",
            detail: es ? "Presupuesto y necesidad confirmados" : "Budget and need confirmed",
          },
          {
            title: es ? "Consulta reservada" : "Consultation booked",
            detail: es ? "Sincronizada con calendario" : "Synced with calendar",
          },
          {
            title: es ? "Seguimiento enviado" : "Follow-up delivered",
            detail: es ? "Secuencia personalizada activa" : "Personalized sequence active",
          },
        ],
      },

      websites: {
        label: es ? "Sitios web" : "Websites",
        eyebrow: es ? "PRESENCIA DIGITAL" : "DIGITAL PRESENCE",
        title: es ? "Un sitio diseñado para convertir" : "A website designed to convert",
        description: es
          ? "Experiencias premium conectadas con reservas, formularios y análisis."
          : "Premium experiences connected to bookings, forms, and analytics.",
        Icon: Globe2,
        metrics: [
          {
            label: es ? "Conversión" : "Conversion",
            value: "8.7%",
            detail: es ? "+3.1 puntos" : "+3.1 points",
          },
          {
            label: es ? "Consultas" : "Consultations",
            value: "94",
            detail: es ? "Últimos 30 días" : "Last 30 days",
          },
          {
            label: es ? "Velocidad" : "Performance",
            value: "97",
            detail: "Lighthouse",
          },
        ],
        activity: [
          {
            title: es ? "Nuevo formulario recibido" : "New inquiry received",
            detail: es ? "Proyecto empresarial" : "Enterprise project",
          },
          {
            title: es ? "Consulta enviada a Calendly" : "Visitor sent to Calendly",
            detail: es ? "Alta intención detectada" : "High intent detected",
          },
          {
            title: es ? "Página indexada" : "Page indexed",
            detail: es ? "Visibilidad orgánica mejorada" : "Organic visibility improved",
          },
        ],
      },

      platforms: {
        label: es ? "Plataformas" : "Platforms",
        eyebrow: es ? "SOFTWARE PERSONALIZADO" : "CUSTOM SOFTWARE",
        title: es ? "Infraestructura creada alrededor del negocio" : "Infrastructure built around the business",
        description: es
          ? "Portales, dashboards, CRM y sistemas internos en una plataforma."
          : "Portals, dashboards, CRM, and internal systems in one platform.",
        Icon: Layers3,
        metrics: [
          {
            label: es ? "Usuarios activos" : "Active users",
            value: "842",
            detail: es ? "+12% semanal" : "+12% weekly",
          },
          {
            label: es ? "Procesos centralizados" : "Centralized flows",
            value: "24",
            detail: es ? "En un sistema" : "In one system",
          },
          {
            label: es ? "Disponibilidad" : "Uptime",
            value: "99.9%",
            detail: es ? "Últimos 90 días" : "Last 90 days",
          },
        ],
        activity: [
          {
            title: es ? "Nuevo cliente agregado" : "New client added",
            detail: es ? "Portal configurado" : "Portal configured",
          },
          {
            title: es ? "Documento aprobado" : "Document approved",
            detail: es ? "Flujo completado" : "Workflow completed",
          },
          {
            title: es ? "Dashboard actualizado" : "Dashboard updated",
            detail: es ? "Datos sincronizados" : "Data synchronized",
          },
        ],
      },

      automation: {
        label: es ? "Automatización" : "Automation",
        eyebrow: es ? "OPERACIONES CONECTADAS" : "CONNECTED OPERATIONS",
        title: es ? "Menos tareas manuales. Más ejecución." : "Less manual work. More execution.",
        description: es
          ? "Conectamos herramientas, datos y seguimientos en flujos confiables."
          : "We connect tools, data, and follow-ups into reliable workflows.",
        Icon: PlugZap,
        metrics: [
          {
            label: es ? "Tareas completadas" : "Tasks completed",
            value: "4,892",
            detail: es ? "Automáticamente" : "Automatically",
          },
          {
            label: es ? "Horas ahorradas" : "Hours saved",
            value: "312",
            detail: es ? "Este mes" : "This month",
          },
          {
            label: es ? "Errores reducidos" : "Errors reduced",
            value: "74%",
            detail: es ? "Promedio" : "Average",
          },
        ],
        activity: [
          {
            title: es ? "Lead sincronizado" : "Lead synchronized",
            detail: es ? "Formulario → CRM" : "Form → CRM",
          },
          {
            title: es ? "Propuesta generada" : "Proposal generated",
            detail: es ? "Datos del proyecto aplicados" : "Project data applied",
          },
          {
            title: es ? "Equipo notificado" : "Team notified",
            detail: es ? "Siguiente acción asignada" : "Next action assigned",
          },
        ],
      },
    }),
    [es],
  );

  const current = products[activeProduct];

  return (
    <div className="relative mx-auto w-full max-w-[720px] py-8 lg:py-14">
      <div className="premium-surface overflow-hidden rounded-[30px]">
        <div className="flex flex-col gap-4 border-b border-slate-200/80 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-[0_12px_30px_rgba(37,99,235,0.34)]">
              <Sparkles className="h-4 w-4" />
            </span>

            <div>
              <p className="text-sm font-semibold text-slate-950">
                SEAINT Intelligence
              </p>
              <p className="text-xs text-slate-500">
                {es ? "Sistema empresarial activo" : "Enterprise system active"}
              </p>
            </div>
          </div>

          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            {es ? "Operando" : "Operating"}
          </span>
        </div>

        <div className="grid gap-2 border-b border-slate-200/80 bg-slate-50/60 p-3 sm:grid-cols-4">
          {(Object.keys(products) as ProductKey[]).map((key) => {
            const product = products[key];
            const Icon = product.Icon;
            const active = key === activeProduct;

            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveProduct(key)}
                className={`flex items-center gap-2 rounded-xl border px-3 py-3 text-left text-xs font-semibold transition ${
                  active
                    ? "border-blue-200 bg-white text-blue-700 shadow-[0_12px_30px_rgba(37,99,235,0.12)]"
                    : "border-transparent text-slate-500 hover:border-slate-200 hover:bg-white hover:text-slate-900"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span>{product.label}</span>
              </button>
            );
          })}
        </div>

        <div className="p-5 sm:p-7">
          <div key={activeProduct} className="reveal-soft">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-700">
              {current.eyebrow}
            </p>

            <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="max-w-[430px] text-2xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-3xl">
                  {current.title}
                </h3>

                <p className="mt-3 max-w-[470px] text-sm leading-6 text-slate-500">
                  {current.description}
                </p>
              </div>

              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-700">
                <current.Icon className="h-5 w-5" />
              </span>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {current.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_14px_35px_rgba(15,23,42,0.045)]"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                    {metric.label}
                  </p>

                  <strong className="mt-2 block text-2xl font-semibold tracking-[-0.05em] text-slate-950">
                    {metric.value}
                  </strong>

                  <span className="mt-1 block text-[10px] font-semibold text-blue-700">
                    {metric.detail}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-slate-200/80 bg-white p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-semibold text-slate-950">
                  {es ? "Actividad del sistema" : "System activity"}
                </p>

                <Activity className="h-4 w-4 text-blue-700" />
              </div>

              <div className="space-y-2">
                {current.activity.map((item) => (
                  <div
                    key={item.title}
                    className="group flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-3 transition hover:translate-x-1 hover:bg-blue-50"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                      <Check className="h-4 w-4" />
                    </span>

                    <div className="min-w-0">
                      <p className="truncate text-xs font-semibold text-slate-900">
                        {item.title}
                      </p>

                      <p className="mt-0.5 truncate text-[10px] text-slate-500">
                        {item.detail}
                      </p>
                    </div>

                    <ArrowUpRight className="ml-auto h-3.5 w-3.5 text-slate-300 transition group-hover:text-blue-700" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blue-card anim-float absolute -bottom-3 right-0 hidden w-[285px] rounded-[22px] border border-white/20 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 p-5 text-white sm:block">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/15">
            <MousePointerClick className="h-4 w-4" />
          </span>

          <div>
            <p className="text-xs font-semibold">
              {es ? "Sistema recomendado" : "Recommended system"}
            </p>

            <p className="mt-1 text-[10px] text-blue-100">
              {current.label} + {es ? "infraestructura SEAINT" : "SEAINT infrastructure"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
