import PageTransition from "@/components/layout/PageTransition";
import ServicesHero from "@/components/sections/ServicesHero";
import ServicesDetailList from "@/components/sections/ServicesDetailList";
import ServicePricing, { PricingTier } from "@/components/sections/ServicePricing";
import ServiceBundles from "@/components/sections/ServiceBundles";
import ServiceComparison from "@/components/sections/ServiceComparison";
import ServiceFAQ from "@/components/sections/ServiceFAQ";
import ServicesCTA from "@/components/sections/ServicesCTA";

export const metadata = {
  title: "Services | Premium Digital Solutions | Imaginta",
  description:
    "Comprehensive web development, marketing, design, strategy, and security services. Custom packages from €2,999 crafted for ambitious brands.",
  alternates: {
    canonical: "/services",
  },
};

const PRICING_TIERS: PricingTier[] = [
  {
    name: "Launch",
    priceRange: "€3,500",
    description: "Perfect for new brands needing a modern, high-performing launchpad with support to go live.",
    timeline: "4-6 weeks",
    features: ["Discovery sprint", "UX/UI design", "Website build", "SEO setup", "Analytics + training"],
    exclusions: ["Ongoing campaigns", "Custom integrations"],
  },
  {
    name: "Scale",
    priceRange: "€6,500",
    description: "Ideal for teams ready to scale acquisition, iterate on product, and align marketing with revenue goals.",
    timeline: "6-10 weeks",
    features: [
      "Growth strategy",
      "Design & development",
      "Marketing automation",
      "Conversion optimisation",
      "Security baseline",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    priceRange: "€12,000",
    description: "Comprehensive partnership covering complex builds, integrations, and continuous optimisation.",
    timeline: "12+ weeks",
    features: [
      "Digital product development",
      "Custom integrations",
      "Growth & campaign ops",
      "Managed security",
      "Dedicated squad",
    ],
  },
];

export default function ServicesPage() {
  return (
    <PageTransition>
      <main className="flex flex-col bg-background">
        <ServicesHero />
        <ServicesDetailList />
        <ServicePricing tiers={PRICING_TIERS} />
        <ServiceBundles />
        <ServiceComparison />
        <ServiceFAQ />
        <ServicesCTA />
      </main>
    </PageTransition>
  );
}

