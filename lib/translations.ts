export type Lang = "en" | "es";

export const translations = {
  en: {
    nav: {
      solutions: "Solutions",
      process: "Process",
      features: "Features",
      company: "Company",
      book: "Book Now",
    },
    features: {
      eyebrow: "Features",
      titleStart: "Everything your business needs, built to",
      titleHighlight: "perform.",
      description:
        "Powerful AI, automation, software, and web systems that work together to help businesses operate smarter.",
      cards: [
        {
          title: "Smart automation",
          text: "AI handles leads, bookings, follow-ups, and repetitive work so teams can move faster.",
          badge: "Auto Flow",
          metric: "94%",
        },
        {
          title: "Secure systems",
          text: "Enterprise-grade systems with controls for websites, automations, agents, and dashboards.",
          badge: "Verified",
          metric: "Secure",
        },
        {
          title: "AI employees",
          text: "Deploy AI receptionists, chat agents, lead qualifiers, and support assistants.",
          badge: "24/7",
          metric: "Live",
        },
        {
          title: "Business platforms",
          text: "Websites, portals, dashboards, CRMs, booking, and analytics built into one system.",
          badge: "Live",
          metric: "+38%",
        },
      ],
    },
  },

  es: {
    nav: {
      solutions: "Soluciones",
      process: "Proceso",
      features: "Funciones",
      company: "Empresa",
      book: "Reservar",
    },
    features: {
      eyebrow: "Funciones",
      titleStart: "Todo lo que tu empresa necesita, creado para",
      titleHighlight: "rendir.",
      description:
        "Inteligencia artificial, automatización, software y sistemas web que trabajan juntos para ayudar a las empresas a operar mejor.",
      cards: [
        {
          title: "Automatización inteligente",
          text: "La IA gestiona prospectos, reservas, seguimiento y tareas repetitivas para que tu equipo avance más rápido.",
          badge: "Flujo automático",
          metric: "94%",
        },
        {
          title: "Sistemas seguros",
          text: "Sistemas empresariales con controles para sitios web, automatizaciones, agentes y paneles.",
          badge: "Verificado",
          metric: "Seguro",
        },
        {
          title: "Empleados de IA",
          text: "Implementa recepcionistas de IA, agentes de chat, calificadores de prospectos y asistentes de soporte.",
          badge: "24/7",
          metric: "Activo",
        },
        {
          title: "Plataformas empresariales",
          text: "Sitios web, portales, paneles, CRM, reservas y análisis integrados en un solo sistema.",
          badge: "Activo",
          metric: "+38%",
        },
      ],
    },
  },
} as const;
