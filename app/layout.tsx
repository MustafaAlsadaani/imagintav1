import type { Metadata } from "next";
import Script from "next/script";
import { Suspense } from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SkipToContent from "@/components/ui/SkipToContent";
import GridOverlay from "@/components/ui/GridOverlay";
import InteractiveGlow from "@/components/ui/InteractiveGlow";
import AnalyticsProvider from "@/components/providers/AnalyticsProvider";
import InitialLoadingOverlay from "@/components/providers/InitialLoadingOverlay";
import { GA_TRACKING_ID } from "@/lib/analytics";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.imaginta.com";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const ORGANIZATION_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Imaginta",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  sameAs: [
    "https://www.linkedin.com",
    "https://www.instagram.com",
    "https://www.twitter.com",
    "https://www.facebook.com",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+32-2-000-0000",
    contactType: "customer service",
    areaServed: "Worldwide",
    availableLanguage: ["en", "fr", "nl"],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brussels",
    addressCountry: "BE",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Imaginta | Creative Digital Studio",
  description:
    "Imaginta is a creative digital studio crafting immersive web experiences, brand systems, and strategic digital products for ambitious teams worldwide.",
  keywords:
    "creative digital studio, dark mode web design, modern web development, Belgian digital agency, immersive brand experiences",
  openGraph: {
    title: "Imaginta | Creative Digital Studio",
    description:
      "Imaginta elevates brands through modern design systems, high-performance web builds, and future-facing digital strategy.",
    url: SITE_URL,
    siteName: "Imaginta",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Imaginta - Digital Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Imaginta | Creative Digital Studio",
    description:
      "A dark, electric creative studio building immersive digital products, experiences, and strategies for ambitious brands.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "GOOGLE_SITE_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        {GA_TRACKING_ID && GA_TRACKING_ID !== "GA-XXXXXX" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-setup" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
        <GridOverlay />
        <InteractiveGlow />
        <InitialLoadingOverlay />
        <SkipToContent />
        <Navbar />
        <main id="main-content" className="pt-24 md:pt-28">
          {children}
        </main>
        <Footer />
        <Suspense fallback={null}>
          <AnalyticsProvider />
        </Suspense>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSONLD) }}
        />
      </body>
    </html>
  );
}
