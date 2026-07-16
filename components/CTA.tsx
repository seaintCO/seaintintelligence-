"use client";

import { useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import type { Lang } from "@/lib/translations";

const faqEn = [
  {
    q: "How long does it take to launch a SEAINT system?",
    a: "Most businesses can launch their first website, AI agent, booking flow, or automation system within a few days depending on the scope."
  },
  {
    q: "Can SEAINT Intelligence connect with my current tools?",
    a: "Yes. We can connect forms, CRMs, calendars, Stripe, email, dashboards, AI agents, and other business tools."
  },
  {
    q: "Do you only build websites?",
    a: "No. Websites are one part of the system. We also build AI employees, dashboards, booking systems, client portals, automations, and custom software."
  },
  {
    q: "Can we start small and scale later?",
    a: "Yes. You can start with one system and expand into a full business operating system over time."
  },
  {
    q: "Is this for local businesses or larger companies?",
    a: "Both. SEAINT Intelligence is built for local businesses, startups, professional services, and growing enterprise teams."
  }
];

const faqEs = [
  {
    q: "¿Cuánto tarda lanzar un sistema de SEAINT?",
    a: "La mayoría de negocios pueden lanzar su primer sitio web, agente AI, sistema de reservas o automatización en pocos días dependiendo del alcance."
  },
  {
    q: "¿SEAINT Intelligence puede conectarse con mis herramientas actuales?",
    a: "Sí. Podemos conectar formularios, CRMs, calendarios, Stripe, email, dashboards, agentes AI y otras herramientas empresariales."
  },
  {
    q: "¿Solo construyen páginas web?",
    a: "No. Las páginas web son una parte del sistema. También construimos empleados AI, dashboards, sistemas de reservas, portales, automatizaciones y software personalizado."
  },
  {
    q: "¿Podemos empezar pequeño y escalar después?",
    a: "Sí. Puedes empezar con un sistema y crecer hacia un sistema operativo completo para tu negocio."
  },
  {
    q: "¿Esto es para negocios locales o compañías grandes?",
    a: "Ambos. SEAINT Intelligence está creado para negocios locales, startups, servicios profesionales y equipos empresariales en crecimiento."
  }
];

export default function CTA({ lang }: { lang: Lang }) {
  const es = lang === "es";
  const faq = es ? faqEs : faqEn;
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-[1600px] border border-slate-200/80">
        <div className="grid gap-8 border-b border-slate-200/80 px-6 py-16 sm:px-8 md:grid-cols-[1fr_0.72fr] md:items-end lg:px-16 lg:py-24">
          <div>
            <div className="mb-6 text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">
              FAQ
            </div>
            <h2 className="max-w-[720px] text-4xl font-semibold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {es ? (
                <>Preguntas <span className="text-blue-700">frecuentes.</span></>
              ) : (
                <>Frequently asked <span className="text-blue-700">questions.</span></>
              )}
            </h2>
          </div>

          <p className="max-w-[520px] text-base leading-7 text-slate-500 md:justify-self-end">
            {es
              ? "Respuestas sobre cómo lanzar sistemas AI, automatización, dashboards y software para tu negocio."
              : "Find answers about launching AI systems, automations, dashboards, websites, and business software with SEAINT Intelligence."}
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.75fr_1.25fr]">
          <div className="border-b border-slate-200/80 p-8 lg:border-b-0 lg:border-r lg:p-16">
            <div className="border border-slate-200 bg-white/80 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.04)] backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">
                {es ? "SOPORTE" : "SUPPORT"}
              </p>
              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                {es ? "¿Necesitas una respuesta personalizada?" : "Need a custom answer?"}
              </h3>
              <p className="mt-4 leading-7 text-slate-500">
                {es
                  ? "Habla con nuestro equipo sobre tu negocio, tus herramientas actuales y el sistema que quieres construir."
                  : "Talk to our team about your business, current tools, and the system you want to build."}
              </p>
              <a href="https://calendly.com/seaintco/new-meeting" className="holo-primary mt-8 inline-flex h-14 items-center justify-center rounded-[18px] pl-7 pr-3 font-semibold text-white">
                <span>{es ? "Reservar llamada" : "Book a call"}</span>
                <span className="ml-4 inline-flex h-11 w-11 items-center justify-center rounded-[14px] border border-white/20 bg-white/20">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </a>
            </div>

            <div className="mt-6 grid grid-cols-2 border border-slate-200">
              <div className="border-r border-slate-200 p-6">
                <p className="text-2xl font-semibold">24/7</p>
                <p className="mt-1 text-sm text-slate-500">{es ? "Monitoreo" : "Monitoring"}</p>
              </div>
              <div className="p-6">
                <p className="text-2xl font-semibold">AI</p>
                <p className="mt-1 text-sm text-slate-500">{es ? "Sistemas" : "Systems"}</p>
              </div>
            </div>
          </div>

          <div className="p-8 lg:p-16">
            {faq.map((item, index) => (
              <button
                key={item.q}
                onClick={() => setOpen(open === index ? -1 : index)}
                className="w-full border-b border-slate-200 py-7 text-left"
              >
                <div className="flex items-center justify-between gap-6">
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">
                    {item.q}
                  </h3>
                  <Plus className={`h-5 w-5 shrink-0 text-blue-700 transition ${open === index ? "rotate-45" : ""}`} />
                </div>
                {open === index && (
                  <p className="mt-5 max-w-3xl text-base leading-7 text-slate-500">
                    {item.a}
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


