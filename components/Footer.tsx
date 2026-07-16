import { ArrowUpRight } from "lucide-react";
import type { Lang } from "@/app/page";

const consultationUrl = "https://calendly.com/seaintco/new-meeting";

export default function Footer({ lang }: { lang: Lang }) {
  const es = lang === "es";

  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-12">
      <div className="mx-auto grid max-w-[1400px] gap-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="text-2xl font-semibold tracking-[-0.04em] text-black">
            SEAINT Intelligence
          </p>

          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">
            Build Tomorrow, Today.
          </p>

          <p className="mt-6 max-w-xl text-sm leading-7 text-slate-500">
            {es
              ? "Sitios web inteligentes, plataformas personalizadas, automatización, empleados de IA y sistemas empresariales creados alrededor de tu negocio."
              : "Intelligent websites, custom platforms, automation, AI employees, and business systems built around your company."}
          </p>

          <p className="mt-5 text-sm font-medium text-slate-600">
            Nashville · Miami · New York
          </p>
        </div>

        <div className="md:text-right">
          <p className="mb-4 text-sm font-medium text-slate-500">
            {es
              ? "¿Listo para hablar sobre tu proyecto?"
              : "Ready to discuss your project?"}
          </p>

          <a
            href={consultationUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 px-5 font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-100"
          >
            {es ? "Reservar consulta" : "Book consultation"}
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-[1400px] flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} SEAINT Intelligence.{" "}
          {es ? "Todos los derechos reservados." : "All rights reserved."}
        </p>

        <p>
          {es
            ? "Consultoría y desarrollo tecnológico empresarial."
            : "Enterprise technology consulting and development."}
        </p>
      </div>
    </footer>
  );
}

