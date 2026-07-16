import {
  ArrowUpRight,
  Bot,
  Building2,
  CheckCircle2,
  HardHat,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import type { Lang } from "@/app/page";

type WorkItem = {
  name: string;
  category: string;
  description: string;
  capability: string;
  status: string;
  details: string[];
  Icon: LucideIcon;
};

export default function SelectedWork({ lang }: { lang: Lang }) {
  const es = lang === "es";

  const work: WorkItem[] = [
    {
      name: "ALMA",
      category: es
        ? "PLATAFORMA DE INTELIGENCIA"
        : "INTELLIGENCE PLATFORM",
      description: es
        ? "Una plataforma bilingüe que conecta conversación, creación, planificación y herramientas empresariales dentro de una sola experiencia."
        : "A bilingual platform connecting conversation, creation, planning, and business tools within one intelligent experience.",
      capability: es ? "Producto de IA" : "AI Product",
      status: es ? "En desarrollo" : "In Development",
      details: es
        ? [
            "Asistente empresarial bilingüe",
            "Creación y planificación",
            "Herramientas conectadas",
          ]
        : [
            "Bilingual business assistant",
            "Creation and planning",
            "Connected business tools",
          ],
      Icon: Bot,
    },
    {
      name: "Real Estate OS",
      category: es
        ? "SISTEMA OPERATIVO DE BIENES RAÍCES"
        : "REAL ESTATE OPERATING SYSTEM",
      description: es
        ? "Una plataforma central para administrar prospectos, propiedades, clientes, documentos, citas, transacciones y seguimiento comercial."
        : "A centralized platform for managing leads, properties, clients, documents, appointments, transactions, and sales follow-up.",
      capability: es ? "Plataforma operativa" : "Operating Platform",
      status: es ? "Implementación" : "Implementation",
      details: es
        ? [
            "CRM de prospectos y clientes",
            "Propiedades y transacciones",
            "Documentos y seguimiento",
          ]
        : [
            "Lead and client CRM",
            "Properties and transactions",
            "Documents and follow-up",
          ],
      Icon: Building2,
    },
    {
      name: "Construction OS",
      category: es
        ? "OPERACIONES DE CONSTRUCCIÓN"
        : "CONSTRUCTION OPERATIONS",
      description: es
        ? "Un sistema conectado para organizar estimaciones, proyectos, clientes, equipos, documentos, propuestas y operaciones de construcción."
        : "A connected system for organizing estimates, projects, clients, crews, documents, proposals, and construction operations.",
      capability: es ? "Sistema de operaciones" : "Operations System",
      status: es ? "Construcción" : "In Build",
      details: es
        ? [
            "Estimaciones y propuestas",
            "Proyectos y equipos",
            "Documentos y operaciones",
          ]
        : [
            "Estimates and proposals",
            "Projects and crews",
            "Documents and operations",
          ],
      Icon: HardHat,
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-16">
        <div className="border-x border-b border-slate-200/80">
          <div className="grid gap-8 border-b border-slate-200/80 px-7 py-16 md:grid-cols-[1fr_0.65fr] md:items-end lg:px-16 lg:py-24">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
                {es ? "SISTEMAS SELECCIONADOS" : "SELECTED SYSTEMS"}
              </p>

              <h2 className="mt-6 max-w-[760px] text-4xl font-medium leading-[1] tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-6xl">
                {es ? (
                  <>
                    Tecnología diseñada para{" "}
                    <span className="text-blue-700">
                      operaciones reales.
                    </span>
                  </>
                ) : (
                  <>
                    Technology designed for{" "}
                    <span className="text-blue-700">
                      real operations.
                    </span>
                  </>
                )}
              </h2>
            </div>

            <p className="max-w-[520px] text-base leading-8 text-slate-500 md:justify-self-end">
              {es
                ? "Productos y sistemas diseñados alrededor de las operaciones, clientes y oportunidades reales de cada empresa."
                : "Products and systems designed around the real operations, customers, and opportunities of each business."}
            </p>
          </div>

          <div className="grid lg:grid-cols-3">
            {work.map((item, index) => (
              <article
                key={item.name}
                className={`group relative min-h-[470px] overflow-hidden p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-white hover:to-blue-50/70 hover:shadow-[0_35px_90px_rgba(37,99,235,0.12)] lg:p-11 ${
                  index < work.length - 1
                    ? "border-b border-slate-200/80 lg:border-b-0 lg:border-r"
                    : ""
                }`}
              >
                <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-200/0 blur-3xl transition duration-700 group-hover:bg-blue-200/45" />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-700 shadow-[0_16px_40px_rgba(37,99,235,0.10)] transition duration-500 group-hover:scale-105 group-hover:border-blue-200 group-hover:bg-blue-600 group-hover:text-white">
                      <item.Icon className="h-6 w-6" />
                    </span>

                    <span className="rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500 shadow-sm backdrop-blur-xl">
                      {item.status}
                    </span>
                  </div>

                  <div className="mt-16">
                    <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-blue-700">
                      {item.category}
                    </p>

                    <h3 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-slate-950">
                      {item.name}
                    </h3>

                    <p className="mt-6 text-sm leading-7 text-slate-500">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-7 grid gap-2 overflow-hidden transition-all duration-500 lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-40 lg:group-hover:opacity-100">
                    {item.details.map((detail) => (
                      <div
                        key={detail}
                        className="flex items-center gap-3 rounded-xl border border-blue-100 bg-white/80 px-3 py-2.5 text-xs font-medium text-slate-600 shadow-sm backdrop-blur-xl"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-6">
                    <span className="text-xs font-semibold text-slate-600">
                      {item.capability}
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-400 transition duration-300 group-hover:border-blue-200 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_12px_30px_rgba(37,99,235,0.28)]">
                      <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="flex flex-col gap-5 border-t border-slate-200/80 px-7 py-9 sm:flex-row sm:items-center sm:justify-between lg:px-16">
            <p className="text-sm text-slate-500">
              {es
                ? "Cada sistema comienza entendiendo exactamente cómo opera tu empresa."
                : "Every system begins by understanding exactly how your company operates."}
            </p>

            <Link
              href="/consultation"
              className="btn-spotlight btn-spotlight-primary inline-flex min-h-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 px-7 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(37,99,235,0.32)] transition hover:-translate-y-1 hover:shadow-[0_28px_65px_rgba(37,99,235,0.42)]"
            >
              {es ? "Hablar sobre un proyecto" : "Discuss a project"}
              <ArrowUpRight className="ml-3 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


