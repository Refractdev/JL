import { SITE_URL, business, homeFaqs } from "./site";

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords: string;
  ogImage: string;
  schemaType: "home" | "service";
  serviceName?: string;
  faqs?: Array<{ question: string; answer: string }>;
};

export const faqs: Record<string, Array<{ question: string; answer: string }>> = {
  home: [...homeFaqs],
  extensoes: [
    {
      question: "Quanto custa colocar extensões em Vila Real?",
      answer:
        "O valor depende do comprimento, volume, técnica e do cabelo escolhido. Fazemos avaliação gratuita e orçamento personalizado pelo WhatsApp.",
    },
    {
      question: "As extensões danificam o meu cabelo natural?",
      answer:
        "Com a técnica certa e a manutenção adequada, o cabelo natural é protegido. Na avaliação explicamos o método mais seguro para ti e os cuidados a seguir.",
    },
    {
      question: "Quanto tempo duram as extensões de cabelo?",
      answer:
        "Com manutenção regular, as extensões de cabelo natural duram tipicamente vários meses. Recomendamos revisões periódicas conforme a técnica e o crescimento do cabelo.",
    },
    {
      question: "Preciso de manutenção?",
      answer:
        "Sim. A manutenção mantém o resultado natural e a saúde do cabelo. Explicamos intervalos e cuidados no atendimento.",
    },
    {
      question: "Como funciona a primeira marcação?",
      answer:
        "Contactas-nos no WhatsApp, marcamos avaliação gratuita, recebes o orçamento e agendamos a aplicação quando estiveres pronta.",
    },
  ],
  maquilhagem: [
    {
      question: "Quanto tempo antes devo marcar maquilhagem para casamento?",
      answer:
        "Para noivas, recomendamos marcar com antecedência (idealmente algumas semanas) para garantir disponibilidade e, se fizer sentido, uma prova do look.",
    },
    {
      question: "Fazem maquilhagem para eventos fora do estúdio?",
      answer:
        "Sim, em Vila Real e arredores, mediante disponibilidade. Diz-nos a data e o local no WhatsApp para confirmarmos condições.",
    },
    {
      question: "Como peço orçamento de maquilhagem?",
      answer:
        "Envia mensagem no WhatsApp com a ocasião, data e o tipo de look que procuras. Respondemos com disponibilidade e orçamento personalizado.",
    },
  ],
  unhas: [
    {
      question: "Quanto tempo duram as unhas de gel?",
      answer:
        "Em geral, algumas semanas com cuidados simples. Na marcação explicamos a manutenção recomendada para o teu estilo de vida.",
    },
    {
      question: "As unhas de gel estragam a unha natural?",
      answer:
        "Quando aplicadas e removidas corretamente, o foco é proteger a unha natural. Seguimos procedimentos cuidadosos de aplicação e remoção.",
    },
    {
      question: "Fazem nail art personalizada?",
      answer:
        "Sim. Podes trazer referências e adaptamos o design ao comprimento e formato das tuas unhas.",
    },
  ],
};

export const pageSeo: Record<string, PageSeo> = {
  "/": {
    title: "JL e Extensões — Extensões de Cabelo em Vila Real",
    description:
      "Extensões de cabelo natural em Vila Real. Avaliação gratuita e orçamento personalizado pelo WhatsApp. Também maquilhagem, unhas e mais.",
    path: "/",
    keywords:
      "extensões de cabelo vila real, cabeleireiro vila real, maquilhagem vila real, unhas vila real, beleza vila real",
    ogImage: "/og-image.jpg",
    schemaType: "home",
    faqs: faqs.home,
  },
  "/extensoes-cabelo-vila-real": {
    title: "Extensões de Cabelo em Vila Real | JL e Extensões",
    description:
      "Extensões de cabelo natural em Vila Real. Avaliação gratuita, orçamento personalizado e resultado natural. Marca no WhatsApp.",
    path: "/extensoes-cabelo-vila-real",
    keywords:
      "extensões de cabelo vila real, colocar extensões vila real, cabelo natural vila real",
    ogImage: "/extensoes-cabelo-antes-depois.jpg",
    schemaType: "service",
    serviceName: "Extensões de Cabelo",
    faqs: faqs.extensoes,
  },
  "/maquilhagem-vila-real": {
    title: "Maquilhagem em Vila Real | JL e Extensões",
    description:
      "Maquilhagem para casamentos, festas e eventos em Vila Real. Orçamento personalizado pelo WhatsApp.",
    path: "/maquilhagem-vila-real",
    keywords:
      "maquilhagem vila real, maquilhadora vila real, maquilhagem noivas vila real",
    ogImage: "/maquilhagem-vila-real.jpg",
    schemaType: "service",
    serviceName: "Maquilhagem",
    faqs: faqs.maquilhagem,
  },
  "/unhas-vila-real": {
    title: "Manicure e Unhas de Gel em Vila Real | JL e Extensões",
    description:
      "Unhas de gel, manicure e nail art em Vila Real. Marca pelo WhatsApp e recebe orçamento personalizado.",
    path: "/unhas-vila-real",
    keywords: "unhas vila real, manicure vila real, unhas de gel vila real, nail art vila real",
    ogImage: "/unhas-de-gel-vila-real.jpg",
    schemaType: "service",
    serviceName: "Unhas",
    faqs: faqs.unhas,
  },
};

export function getPageSeo(path: string): PageSeo {
  return pageSeo[path] ?? pageSeo["/"];
}

export function getCanonical(path: string) {
  return `${SITE_URL}${path === "/" ? "/" : path}`;
}

function openingHours() {
  return [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ];
}

function addressSchema() {
  return {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    postalCode: business.address.postalCode,
    addressCountry: "PT",
  };
}

export function getBeautySalonSchema() {
  const graph: Array<Record<string, unknown>> = [
    {
      "@type": "BeautySalon",
      "@id": `${SITE_URL}#beauty-salon`,
      name: business.name,
      description: pageSeo["/"].description,
      url: SITE_URL,
      telephone: business.phone,
      email: business.email,
      address: addressSchema(),
      geo: {
        "@type": "GeoCoordinates",
        latitude: business.geo.latitude,
        longitude: business.geo.longitude,
      },
      openingHoursSpecification: openingHours(),
      image: `${SITE_URL}/og-image.jpg`,
      priceRange: business.priceRange,
      sameAs: [business.social.instagram, business.social.facebook],
      areaServed: {
        "@type": "City",
        name: "Vila Real",
      },
    },
  ];

  const homeFaq = pageSeo["/"]?.faqs;
  if (homeFaq && homeFaq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: homeFaq.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function getServiceSchema(seo: PageSeo) {
  const graph: Array<Record<string, unknown>> = [
    {
      "@type": "Service",
      name: seo.serviceName,
      description: seo.description,
      provider: {
        "@type": "BeautySalon",
        "@id": `${SITE_URL}#beauty-salon`,
        name: business.name,
        url: SITE_URL,
      },
      areaServed: {
        "@type": "City",
        name: "Vila Real",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Início",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: seo.serviceName,
          item: getCanonical(seo.path),
        },
      ],
    },
  ];

  if (seo.faqs && seo.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: seo.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function getJsonLd(seo: PageSeo) {
  return seo.schemaType === "home" ? getBeautySalonSchema() : getServiceSchema(seo);
}
