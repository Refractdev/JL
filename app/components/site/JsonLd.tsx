import { getJsonLd, type PageSeo } from "@/src/lib/seo";

export default function JsonLd({ seo }: { seo: PageSeo }) {
  const data = getJsonLd(seo);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
