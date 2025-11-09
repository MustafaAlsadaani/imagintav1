import PageTransition from "@/components/layout/PageTransition";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesBundles from "@/components/services/ServicesBundles";
import ServicesRaceCTA from "@/components/services/ServicesRaceCTA";

export const metadata = {
  title: "Imaginta Services – Empower Your Business",
  description:
    "Discover Imaginta’s services in web development, marketing, graphic design, business development, and cyber security. We help your business grow online with clear plans and friendly support.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <main className="flex flex-col bg-cyber-bg">
        <ServicesHero />
        <ServicesGrid />
        <ServicesBundles />
        <ServicesRaceCTA />
      </main>
    </PageTransition>
  );
}

