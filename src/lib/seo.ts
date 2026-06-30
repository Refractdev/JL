import { SITE_URL, business } from "./site";

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

const faqs: Record<string, Array<{ question: string; answer: string }>> = {
  extensoes: [
    {
      question: "Quanto tempo duram as extensões de cabelo?",
      answer: "Com a manutenção correta, as extensões de cabelo natural duram entre 3 a 6 meses. Recomendamos revisões a cada 6-8 semanas para manter o aspeto impecável.",
    },
    {
      question: "As extensões danificam o meu cabelo natural?",
      answer: "Não. A nossa técnica de aplicação protege o teu cabelo natural. Utilizamos métodos seguros como nós italiano e fita adesiva de qualidade premium.",
    },
    {
      question: "Qual o preço das extensões de cabelo em Vila Real?",
      answer: "O valor depende do comprimento, volume e tipo de aplicação. Contacta-nos pelo WhatsApp para uma avaliação personalizada e orçamento gratuito.",
    },
    {
      question: "Posso pintar ou alisar as extensões?",
      answer: "Sim, as extensões de cabelo 100% natural podem ser pintadas, alisadas e modeladas com calor, tal como o teu cabelo natural.",
    },
  ],
  maquilhagem: [
    {
      question: "Quanto tempo antes devo marcar maquilhagem para casamento?",
      answer: "Recomendamos marcação com pelo menos 2 meses de antecedência para noivas. Incluímos uma sessão de prova gratuita para garantir o look perfeito.",
    },
    {
      question: "Fazem maquilhagem para eventos fora do estúdio?",
      answer: "Sim, deslocamo-nos a eventos em Vila Real e arredores.Contacta-nos para mais informações sobre condições e valores.",
    },
    {
      question: "Quanto tempo dura a maquilhagem profissional?",
      answer: "A nossa maquilhagem tem duração de 8 a 12 horas, consoante o tipo de pele e produtos utilizados. Usamos primers e fixadores de longa duração.",
    },
  ],
  unhas: [
    {
      question: "Quanto tempo duram as unhas de gel?",
      answer: "As unhas de gel duram entre 3 a 4 semanas. Recomendamos manutenção a cada 15-20 dias para manter o aspeto impecável.",
    },
    {
      question: "As unhas de gel estragam a unha natural?",
      answer: "Não, quando aplicadas e removidas corretamente. No nosso estúdio seguimos todos os procedimentos de segurança para proteger a tua unha natural.",
    },
    {
      question: "Fazem nail art personalizada?",
      answer: "Sim, fazemos qualquer tipo de nail art: francesinha, desenhos, brilhos, pedras e tendências. Traz a tua inspiração e transformamos em realidade.",
    },
  ],
};

export const pageSeo: Record<string, PageSeo> = {
  "/": {
    title: "JL e Extensões — Extensões de Cabelo e Beleza | Vila Real",
    description:
      "Estúdio premium em Vila Real especialista em extensões de cabelo, cabeleireiro, maquilhagem, cílios, unhas e depilação. Marca pelo WhatsApp.",
    path: "/",
    keywords:
      "extensões de cabelo vila real, cabeleireiro vila real, maquilhagem vila real, unhas vila real, beleza vila real",
    ogImage: "/og-image.jpg",
    schemaType: "home",
  },
  "/extensoes-cabelo-vila-real": {
    title: "Extensões de Cabelo em Vila Real | JL e Extensões",
    description:
      "Especialistas em extensões de cabelo natural em Vila Real. Ganha volume e comprimento com resultados naturais. Marca no WhatsApp!",
    path: "/extensoes-cabelo-vila-real",
    keywords:
      "extensões de cabelo vila real, colocar extensões vila real, cabelo natural vila real, extensões de nó italiano",
    ogImage: "/extensoes-cabelo-antes-depois.jpg",
    schemaType: "service",
    serviceName: "Extensões de Cabelo",
    faqs: faqs.extensoes,
  },
  "/maquilhagem-vila-real": {
    title: "Maquilhagem em Vila Real | JL e Extensões",
    description:
      "Serviços de maquilhagem profissional para casamentos, festas e eventos em Vila Real. Realça a tua beleza natural.",
    path: "/maquilhagem-vila-real",
    keywords:
      "maquilhagem vila real, maquilhadora vila real, maquilhagem noivas vila real, makeup artist vila real",
    ogImage: "/maquilhagem-vila-real.jpg",
    schemaType: "service",
    serviceName: "Maquilhagem",
    faqs: faqs.maquilhagem,
  },
  "/unhas-vila-real": {
    title: "Manicure e Unhas de Gel em Vila Real | JL e Extensões",
    description:
      "Serviços de manicure, pedicure, unhas de gel e nail art em Vila Real. Design impecável e máxima higiene.",
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

export function getBeautySalonSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BeautySalon",
        "@id": `${SITE_URL}#beauty-salon`,
        name: business.name,
        description: pageSeo["/"].description,
        url: SITE_URL,
        telephone: business.phone,
        email: business.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: business.address.street,
          addressLocality: business.address.city,
          postalCode: business.address.postalCode,
          addressCountry: "PT",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 41.2958,
          longitude: -7.7462,
        },
        openingHoursSpecification: [
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
        ],
        image: `${SITE_URL}/og-image.jpg`,
        priceRange: business.priceRange,
        sameAs: [business.social.instagram, business.social.facebook],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}#local-business`,
        name: business.name,
        description: pageSeo["/"].description,
        url: SITE_URL,
        telephone: business.phone,
        email: business.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: business.address.street,
          addressLocality: business.address.city,
          postalCode: business.address.postalCode,
          addressCountry: "PT",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 41.2958,
          longitude: -7.7462,
        },
        openingHoursSpecification: [
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
        ],
        image: `${SITE_URL}/og-image.jpg`,
        priceRange: business.priceRange,
        sameAs: [business.social.instagram, business.social.facebook],
        areaServed: {
          "@type": "City",
          name: "Vila Real",
        },
      },
      {
        "@type": "Review",
        itemReviewed: {
          "@type": "BeautySalon",
          "@id": `${SITE_URL}#beauty-salon`,
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: 4.9,
          bestRating: 5,
        },
        author: {
          "@type": "Organization",
          name: "Google Reviews",
        },
      },
    ],
  };
}

export function getServiceSchema(seo: PageSeo) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: seo.serviceName,
        description: seo.description,
        provider: {
          "@type": "BeautySalon",
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
    ],
  };

  // Add FAQ schema if the page has FAQs
  if (seo.faqs && seo.faqs.length > 0) {
    (schema["@graph"] as Array<Record<string, unknown>>).push({
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

  return schema;
}

export function getJsonLd(seo: PageSeo) {
  return seo.schemaType === "home" ? getBeautySalonSchema() : getServiceSchema(seo);
}