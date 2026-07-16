import {
  CalendarCheck,
  Compass,
  Code2,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import type { Lang } from "@/app/page";

export default function ProcessSection({ lang }: { lang: Lang }) {
  const es = lang === "es";

  const steps: {
    number: string;
    title: string;
    description: string;
    Icon: LucideIcon;
  }[] = [
    {
      number: "01",
      title: es ? "Consulta" : "Consultation",
      description: es
        ? "Conocemos tu empresa, tus metas y los problemas que quieres resolver."
        : "We learn about your company, goals, and the problems you want to solve.",
      Icon: CalendarCheck,
    },
    {
      number: "02",
      title: es ? "Estrategia" : "Strategy",
      description: es
        ? "Diseñamos una solución clara con alcance, prioridades y próximos pasos."
        : "We design a clear solution with scope, priorities, and next steps.",
      Icon: Compass,
    },
    {
      number: "03",
      title: es ? "Desarrollo" : "Development",
      description: es
        ? "Construimos el sitio, plataforma, automatización o sistema aprobado."
        : "We build the approved website, platform, automation, or business system.",
      Icon: Code2,
    },
    {
      number: "04",
      title: es ? "Lanzamiento" : "Launch",
      description: es
        ? "Probamos, lanzamos y mostramos a tu equipo cómo utilizar el sistema."
        : "We test, launch, and show your team how to use the finished system.",
      Icon: Rocket,
    },
  ];

  return (
    <section id="process" className="relative overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-16">
        <div className="border-x border-b border-slate-200/80">
          <div className="grid gap-8 border-b border-slate-200/80 px-6 py-16 sm:px-8 md:grid-cols-[1fr_0.7fr] md:items-end lg:px-16 lg:py-24">
            <div>
              <div className="mb-6 text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">
                {es ? "NUESTRO PROCESO" : "OUR PROCESS"}
              </div>

              <h2 className="max-w-[720px] text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl">
                {es ? (
                  <>
                    De la idea al{" "}
                    <span className="text-blue-700">lanzamiento.</span>
                  </>
                ) : (
                  <>
                    From idea to{" "}
                    <span className="text-blue-700">launch.</span>
                  </>
                )}
              </h2>
            </div>

            <p className="max-w-[500px] text-base leading-7 text-slate-500 md:justify-self-end">
              {es
                ? "Un proceso claro para convertir las necesidades de tu empresa en tecnología útil."
                : "A clear process for turning your business needs into technology your company can use."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4">
            {steps.map(({ number, title, description, Icon }, index) => (
              <article
                key={number}
                className={`group relative min-h-[320px] overflow-hidden p-8 transition duration-500 hover:bg-blue-50/40 lg:p-10 ${
                  index < steps.length - 1
                    ? "border-b border-slate-200/80 md:border-r xl:border-b-0"
                    : ""
                }`}
              >
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-blue-700">
                      {number}
                    </span>

                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-white text-blue-700 shadow-[0_14px_36px_rgba(37,99,235,0.10)]">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>

                  <div className="mt-auto pt-16">
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                      {title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-500">
                      {description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

