import {
  Building2,
  Hammer,
  HeartPulse,
  Landmark,
  Scale,
  Store,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import type { Lang } from "@/app/page";

export default function CompanySection({ lang }: { lang: Lang }) {
  const es = lang === "es";

  const industries: {
    title: string;
    Icon: LucideIcon;
  }[] = [
    {
      title: es ? "Construcción" : "Construction",
      Icon: Hammer,
    },
    {
      title: es ? "Bienes raíces" : "Real Estate",
      Icon: Building2,
    },
    {
      title: es ? "Salud y clínicas" : "Healthcare",
      Icon: HeartPulse,
    },
    {
      title: es ? "Firmas legales" : "Legal Firms",
      Icon: Scale,
    },
    {
      title: es ? "Finanzas" : "Finance",
      Icon: Landmark,
    },
    {
      title: es ? "Negocios locales" : "Local Businesses",
      Icon: Store,
    },
  ];

  return (
    <section id="company" className="relative overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-16">
        <div className="border-x border-b border-slate-200/80">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="border-b border-slate-200/80 p-8 sm:p-12 lg:border-b-0 lg:border-r lg:p-16">
              <div className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">
                {es ? "POR QUÉ SEAINT" : "WHY SEAINT"}
              </div>

              <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-slate-950 sm:text-5xl">
                {es ? (
                  <>
                    Tecnología creada alrededor de{" "}
                    <span className="text-blue-700">tu negocio.</span>
                  </>
                ) : (
                  <>
                    Technology built around{" "}
                    <span className="text-blue-700">your business.</span>
                  </>
                )}
              </h2>

              <p className="mt-7 max-w-[560px] text-base leading-8 text-slate-500">
                {es
                  ? "Primero entendemos cómo opera tu empresa y después construimos la solución correcta."
                  : "We first understand how your company operates, then build the right solution around it."}
              </p>

              <a
                href="/consultation"
                className="holo-primary mt-9 inline-flex h-14 items-center justify-center rounded-[18px] pl-7 pr-3 font-semibold text-white"
              >
                <span>{es ? "Hablar con SEAINT" : "Talk with SEAINT"}</span>

                <span className="ml-4 inline-flex h-11 w-11 items-center justify-center rounded-[14px] border border-white/20 bg-white/20">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </a>
            </div>

            <div>
              <div className="border-b border-slate-200/80 px-8 py-10 sm:px-12 lg:px-16">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                  {es ? "INDUSTRIAS QUE APOYAMOS" : "INDUSTRIES WE SUPPORT"}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3">
                {industries.map(({ title, Icon }, index) => (
                  <div
                    key={title}
                    className={`group min-h-[190px] p-8 transition duration-300 hover:bg-blue-50/50 ${
                      index < industries.length - 3
                        ? "border-b border-slate-200/80"
                        : ""
                    } ${
                      index % 3 !== 2
                        ? "lg:border-r lg:border-slate-200/80"
                        : ""
                    }`}
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-white text-blue-700 shadow-[0_12px_30px_rgba(37,99,235,0.08)]">
                      <Icon className="h-5 w-5" />
                    </span>

                    <h3 className="mt-8 text-lg font-semibold tracking-[-0.03em] text-slate-950">
                      {title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {es
                        ? "Sistemas diseñados alrededor de tus operaciones."
                        : "Systems designed around your operations."}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
