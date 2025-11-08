import PageTransition from "@/components/layout/PageTransition";
import ServicesHero from "@/components/sections/ServicesHero";
import ServicesDetailList from "@/components/sections/ServicesDetailList";
import ServicesCTA from "@/components/sections/ServicesCTA";
import ServicesSinglePlan from "@/components/sections/ServicesSinglePlan";
import ServicesProcess from "@/components/sections/ServicesProcess";

export const metadata = {
  title: "Services | Imaginta One Partnership Plan",
  description:
    "Imaginta offers a single yearly partnership plan at €1,999. Strategy, design, development and marketing packed into one clear engagement for ambitious teams.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <main className="flex flex-col bg-background">
        <ServicesHero />
        <ServicesDetailList />
        <ServicesSinglePlan />
        <ServicesProcess />
        <ServicesCTA />
      </main>
    </PageTransition>
  );
}

