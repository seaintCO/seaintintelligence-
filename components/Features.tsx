"use client";

import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Smart automation",
    text: "AI handles leads, bookings, follow-ups, and repetitive work so teams can move faster.",
    badge: "Auto Flow",
    metric: "94%",
    dark: false,
  },
  {
    title: "Secure systems",
    text: "Enterprise-grade systems with controls for websites, automations, agents, and dashboards.",
    badge: "Verified",
    metric: "Secure",
    dark: true,
  },
  {
    title: "AI employees",
    text: "Deploy AI receptionists, chat agents, lead qualifiers, and support assistants.",
    badge: "24/7",
    metric: "Live",
    dark: false,
  },
  {
    title: "Business platforms",
    text: "Websites, portals, dashboards, CRMs, booking, and analytics built into one system.",
    badge: "Live",
    metric: "+38%",
    dark: true,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-16">
        <div className="relative border-x border-slate-200/80">
          <div className="grid gap-8 border-y border-slate-200/80 px-6 py-16 sm:px-8 md:grid-cols-[1fr_0.72fr] md:items-end lg:px-16 lg:py-24">
            <div>
              <div className="mb-6 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.04em] text-blue-700">
                FEATURES
              </div>

              <h2 className="max-w-[640px] text-4xl font-semibold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Everything your business needs, built to{" "}
                <span className="text-blue-700">perform.</span>
              </h2>
            </div>

            <p className="max-w-[430px] text-base leading-7 text-slate-500 md:justify-self-end">
              Powerful AI, automation, software, and web systems that work together to help businesses operate smarter.
            </p>
          </div>

          <div className="grid border-b border-slate-200/80 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="group relative overflow-hidden border-b border-slate-200/80 p-10 transition-all duration-500 hover:-translate-y-1 hover:bg-slate-50/80 hover:shadow-[0_28px_80px_rgba(37,99,235,0.10)] md:border-r xl:border-b-0"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -right-20 top-10 h-44 w-44 rounded-full bg-blue-200/50 blur-3xl" />
                  <div className="absolute -left-20 bottom-10 h-40 w-40 rounded-full bg-cyan-200/50 blur-3xl" />
                </div>

                <div className="mb-9">
                  <div
                    className={`relative h-[190px] overflow-hidden rounded-[34px] border p-4 transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02] ${
                      feature.dark
                        ? "border-[#06145b]/10 bg-[#06145b] shadow-[0_28px_70px_rgba(6,20,91,0.22)] group-hover:shadow-[0_40px_90px_rgba(6,20,91,0.30)]"
                        : "border-slate-200/80 bg-gradient-to-br from-white via-blue-50/80 to-cyan-50/70 shadow-[0_24px_60px_rgba(15,23,42,0.09)] group-hover:border-blue-200"
                    }`}
                  >
                    <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-300/40 blur-3xl transition-transform duration-700 group-hover:scale-150" />
                    <div className="absolute -bottom-14 left-6 h-28 w-28 rounded-full bg-cyan-200/45 blur-3xl transition-transform duration-700 group-hover:scale-150" />

                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.14)_1px,transparent_1px)] bg-[size:28px_28px] opacity-60 transition-transform duration-700 group-hover:scale-110" />

                    <div
                      className={`absolute right-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[10px] font-medium shadow-sm backdrop-blur anim-float ${
                        feature.dark
                          ? "border-white/15 bg-white/10 text-white/80"
                          : "border-blue-100 bg-white/85 text-blue-700"
                      }`}
                    >
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-600 shadow-[0_0_0_4px_rgba(37,99,235,0.12)]" />
                      {feature.badge}
                    </div>

                    <div
                      className={`relative z-10 flex h-full flex-col justify-between rounded-[26px] border p-4 backdrop-blur-xl ${
                        feature.dark
                          ? "border-white/10 bg-white/[0.08]"
                          : "border-white/80 bg-white/90"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                          <span className={`h-2.5 w-12 rounded-full ${feature.dark ? "bg-white/25" : "bg-slate-200"}`} />
                          <span className={`h-2.5 w-7 rounded-full ${feature.dark ? "bg-white/15" : "bg-slate-100"}`} />
                        </div>
                        <span className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${feature.dark ? "border-white/15 bg-white/10 text-white/70" : "border-blue-100 bg-blue-50 text-blue-700"}`}>
                          {feature.metric}
                        </span>
                      </div>

                      <div className="space-y-3">
                        <div className={`h-3 w-full rounded-full ${feature.dark ? "bg-white/20" : "bg-slate-200"}`} />
                        <div className={`h-3 w-4/5 rounded-full transition-all duration-700 group-hover:w-full ${feature.dark ? "bg-white/10" : "bg-slate-100"}`} />
                        <div className={`h-3 w-2/3 rounded-full transition-all duration-700 group-hover:w-5/6 ${feature.dark ? "bg-cyan-300/40" : "bg-blue-200"}`} />
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        {[45, 70, 55].map((height, i) => (
                          <div key={i} className="flex h-12 items-end rounded-xl bg-black/5 p-1">
                            <span
                              className={`w-full rounded-lg transition-all duration-700 group-hover:h-full ${
                                feature.dark ? "bg-cyan-300/50" : "bg-blue-600/40"
                              }`}
                              style={{ height }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-base font-medium text-[#06145b]">{feature.title}</h3>
                    <p className="mt-3 max-w-[260px] text-sm leading-6 text-slate-500">{feature.text}</p>
                  </div>

                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition duration-300 group-hover:bg-blue-700 group-hover:text-white group-hover:shadow-[0_12px_26px_rgba(37,99,235,0.22)]">
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
