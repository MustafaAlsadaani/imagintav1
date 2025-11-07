"use client";

import dynamic from "next/dynamic";

const JsonLdScript = dynamic(() => import("next-seo").then((mod) => mod.JsonLdScript), {
  ssr: false,
});

type SEOHeadProps = {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  };
};

export default function SEOHead({ title, description, canonical, ogImage }: SEOHeadProps) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Imaginta",
    url: canonical ?? "https://www.imaginta.com",
    description,
    logo: ogImage?.url ?? "https://www.imaginta.com/og-image.jpg",
    sameAs: [
      "https://linkedin.com/company/imaginta",
      "https://instagram.com/imaginta_digital",
      "https://twitter.com/imaginta",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+32 2 XXX XX XX",
        contactType: "customer service",
        areaServed: "Worldwide",
        availableLanguage: ["English", "Dutch", "French"],
      },
    ],
  };

  return (
    <>
      <JsonLdScript scriptKey={`organization-${title}`} data={organizationJsonLd} />
    </>
  );
}

