import { ArrowUpRight } from "lucide-react";
import type { Lang } from "@/app/page";

export default function PageHero({
  lang,
  eyebrow,
  title,
  highlight,
  description,
}: {
  lang: Lang;
  eyebrow: {
    en: string;
    es: string;
  };
  title: {
    en: string;
    es: string;
  };
  highlight: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
}) {
  const es = lang === "es";

  return (
    <section className="relative overflow-hidden border-b border-slate-200/80 bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(37,99,235,0.13),transparent_35%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />

      <div className="relative mx-auto w-full max-w-[1600px] px-6 lg:px-16">
        <div className="border-x border-slate-200/80 px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="max-w-[900px]">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
              {es ? eyebrow.es : eyebrow.en}
            </p>

            <h1 className="mt-7 text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-slate-950 sm:text-6xl lg:text-7xl enterprise-page-headline">
              {es ? title.es : title.en}{" "}
              <span className="text-blue-700">
                {es ? highlight.es : highlight.en}
              </span>
            </h1>

            <p className="mt-8 max-w-[720px] text-base leading-8 text-slate-500 sm:text-lg">
              {es ? description.es : description.en}
            </p>

            <a
              href="/consultation"
              className="seaint-btn seaint-btn-primary page-hero-primary-button"
            >
              <span>{es ? "Reservar consulta" : "Book consultation"}</span>

              <span className="seaint-btn-icon">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

