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

const faqs: Record<string, Array<{ question: string; answer: string }>> = {
  extensoes: [
    {
      question: "Quanto custa colocar extensões em Vila Real?",
      answer:
        "O valor depende do comprimento, volume, técnica e do cabelo escolhido. Na JL e Extensões fazemos uma avaliação gratuita e enviamos um orçamento personalizado pelo WhatsApp.",
    },
    {
      question: "As extensões danificam o meu cabelo natural?",
      answer:
        "Com técnica e manutenção corretas, a aplicação respeita o teu cabelo natural. Explicamos o método mais adequado na avaliação.",
    },
    {
      question: "Quanto tempo duram as extensões de cabelo?",
      answer:
        "Em geral duram vários meses. A duração varia com o tipo de aplicação, o cuidado diário e a manutenção regular.",
    },
    {
      question: "Preciso fazer manutenção?",
      answer:
        "Sim. Revisões periódicas mantêm o resultado natural e confortável. Indicamos o intervalo recomendado na avaliação.",
    },
    {
      question: "Como funciona a primeira marcação?",
      answer:
        "Mensagem no WhatsApp → avaliação → plano e orçamento → marcação da aplicação.",
    },
  ],
  maquilhagem: [
    {
      question: "Quanto tempo antes devo marcar maquilhagem para casamento?",
      answer:
        "Recomendamos marcar com antecedência, especialmente para noivas. Na conversa pelo WhatsApp alinhamos datas e, se fizer sentido, uma prova.",
    },
    {
      question: "Fazem maquilhagem para eventos fora do estúdio?",
      answer:
        "Sim, em Vila Real e arredores, consoante disponibilidade. Contacta-nos pelo WhatsApp para condições.",
    },
    {
      question: "Quanto tempo dura a maquilhagem?",
      answer:
        "Depende do tipo de pele, da ocasião e dos produtos usados. Esclarecemos o que esperar na marcação.",
    },
  ],
  unhas: [
    {
      question: "Quanto tempo duram as unhas de gel?",
      answer:
        "Em geral várias semanas. A manutenção regular ajuda a manter o aspeto limpo e confortável.",
    },
    {
      question: "As unhas de gel estragam a unha natural?",
      answer:
        "Quando aplicadas e removidas corretamente, protegemos a unha natural. Explicamos o cuidado e a remoção segura.",
    },
    {
      question: "Fazem nail art personalizada?",
      answer:
        "Sim. Podes trazer inspiração — adaptamos o design ao teu estilo e à ocasião.",
    },
  ],
};

export const pageSeo: Record<string, PageSeo> = {
  "/": {
    title: "JL e Extensões — Extensões de Cabelo em Vila Real",
    description:
      "Especialista em extensões de cabelo natural em Vila Real. Avaliação gratuita e orçamento personalizado pelo WhatsApp. Boutique de beleza próxima e confiável.",
    path: "/",
    keywords:
      "extensões de cabelo vila real, extensões vila real, cabeleireiro vila real, maquilhagem vila real, unhas vila real, jl e extensões",
    ogImage: "/og-image.jpg",
    schemaType: "home",
    faqs: [...homeFaqs],
  },
  "/extensoes-cabelo-vila-real": {
    title: "Extensões de Cabelo em Vila Real",
    description:
      "Extensões de cabelo natural em Vila Real. Comprimento, volume e densidade com resultado personalizado. Avaliação gratuita no WhatsApp.",
    path: "/extensoes-cabelo-vila-real",
    keywords:
      "extensões de cabelo vila real, colocar extensões vila real, cabelo natural vila real, extensões nó italiano vila real",
    ogImage: "/extensoes-cabelo-antes-depois.jpg",
    schemaType: "service",
    serviceName: "Extensões de Cabelo",
    faqs: faqs.extensoes,
  },
  "/maquilhagem-vila-real": {
    title: "Maquilhagem em Vila Real",
    description:
      "Maquilhagem para casamentos, festas e eventos em Vila Real. Look pensado para ti — marca pelo WhatsApp.",
    path: "/maquilhagem-vila-real",
    keywords:
      "maquilhagem vila real, maquilhadora vila real, maquilhagem noivas vila real, makeup artist vila real",
    ogImage: "/maquilhagem-vila-real.jpg",
    schemaType: "service",
    serviceName: "Maquilhagem",
    faqs: faqs.maquilhagem,
  },
  "/unhas-vila-real": {
    title: "Unhas de Gel e Manicure em Vila Real",
    description:
      "Unhas de gel, manicure e nail art em Vila Real. Acabamento limpo e orçamento pelo WhatsApp.",
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

export function getBeautySalonSchema(seo: PageSeo = pageSeo["/"]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BeautySalon",
        "@id": `${SITE_URL}#beauty-salon`,
        name: business.name,
        description: seo.description,
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
          latitude: business.geo.latitude,
          longitude: business.geo.longitude,
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
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}#local-business`,
        name: business.name,
        description: seo.description,
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
          latitude: business.geo.latitude,
          longitude: business.geo.longitude,
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
      ...(seo.faqs && seo.faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              mainEntity: seo.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ]
        : []),
    ],
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
        name: business.name,
        url: SITE_URL,
        "@id": `${SITE_URL}#beauty-salon`,
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
  return seo.schemaType === "home" ? getBeautySalonSchema(seo) : getServiceSchema(seo);
}
