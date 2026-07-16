import {
  ArrowUpRight,
  Bot,
  Building2,
  Layers3,
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
  Icon: LucideIcon;
};

export default function SelectedWork({ lang }: { lang: Lang }) {
  const es = lang === "es";

  const work: WorkItem[] = [
    {
      name: "ALMA",
      category: es ? "PLATAFORMA DE INTELIGENCIA" : "INTELLIGENCE PLATFORM",
      description: es
        ? "Una plataforma bilingüe diseñada para conectar conversación, creación, planificación y herramientas empresariales."
        : "A bilingual platform designed to connect conversation, creation, planning, and business tools.",
      capability: es ? "Producto de IA" : "AI Product",
      status: es ? "En desarrollo" : "In development",
      Icon: Bot,
    },
    {
      name: "Legacy OS",
      category: es ? "SISTEMA OPERATIVO EMPRESARIAL" : "BUSINESS OPERATING SYSTEM",
      description: es
        ? "Infraestructura interna para organizar solicitudes, documentos, operaciones y comunicación."
        : "Internal infrastructure for organizing requests, documents, operations, and communication.",
      capability: es ? "Sistema interno" : "Internal System",
      status: es ? "Implementación" : "Implementation",
      Icon: Layers3,
    },
    {
      name: "CR Masonry OS",
      category: es ? "OPERACIONES DE CONSTRUCCIÓN" : "CONSTRUCTION OPERATIONS",
      description: es
        ? "Un sistema para convertir estimaciones, oportunidades y operaciones en un flujo empresarial conectado."
        : "A system for turning estimates, opportunities, and operations into a connected business workflow.",
      capability: es ? "Plataforma operativa" : "Operating Platform",
      status: es ? "Construcción" : "Build",
      Icon: Building2,
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
                    <span className="text-blue-700">operaciones reales.</span>
                  </>
                ) : (
                  <>
                    Technology designed for{" "}
                    <span className="text-blue-700">real operations.</span>
                  </>
                )}
              </h2>
            </div>

            <p className="max-w-[520px] text-base leading-8 text-slate-500 md:justify-self-end">
              {es
                ? "Una muestra del ecosistema de productos, plataformas y sistemas operativos desarrollados alrededor de negocios reales."
                : "A look at products, platforms, and operating systems developed around real business requirements."}
            </p>
          </div>

          <div className="grid lg:grid-cols-3">
            {work.map((item, index) => (
              <article
                key={item.name}
                className={`premium-hover group min-h-[390px] p-8 lg:p-11 ${
                  index < work.length - 1
                    ? "border-b border-slate-200/80 lg:border-b-0 lg:border-r"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-700">
                    <item.Icon className="h-5 w-5" />
                  </span>

                  <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-500">
                    {item.status}
                  </span>
                </div>

                <div className="mt-14">
                  <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-blue-700">
                    {item.category}
                  </p>

                  <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-950">
                    {item.name}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>
                </div>

                <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-5">
                  <span className="text-xs font-semibold text-slate-600">
                    {item.capability}
                  </span>

                  <ArrowUpRight className="h-4 w-4 text-slate-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-700" />
                </div>
              </article>
            ))}
          </div>

          <div className="flex flex-col gap-5 border-t border-slate-200/80 px-7 py-9 sm:flex-row sm:items-center sm:justify-between lg:px-16">
            <p className="text-sm text-slate-500">
              {es
                ? "Cada solución comienza con una conversación sobre cómo opera tu empresa."
                : "Every solution begins with a conversation about how your company operates."}
            </p>

            <Link
              href="/consultation"
              className="premium-button inline-flex min-h-12 items-center justify-center rounded-2xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(37,99,235,0.3)] transition hover:-translate-y-0.5"
            >
              {es ? "Hablar sobre un proyecto" : "Discuss a project"}
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
