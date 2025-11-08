import PageTransition from "@/components/layout/PageTransition";
import Hero from "@/components/sections/Hero";
import dynamic from "next/dynamic";

const TrustIndicators = dynamic(() => import("@/components/sections/TrustIndicators"), {
  loading: () => <div className="py-16 text-center text-sm text-foreground-muted">Loading trust indicators…</div>,
  ssr: false,
});

const ServicesOverview = dynamic(() => import("@/components/sections/ServicesOverview"), {
  loading: () => <div className="py-20 text-center text-sm text-foreground-muted">Loading services…</div>,
  ssr: false,
});

const HomeMissionVision = dynamic(() => import("@/components/sections/HomeMissionVision"), {
  loading: () => <div className="py-20 text-center text-sm text-foreground-muted">Loading section…</div>,
  ssr: false,
});

const CollaborationPartners = dynamic(() => import("@/components/sections/CollaborationPartners"), {
  loading: () => <div className="py-20 text-center text-sm text-foreground-muted">Preparing partnerships…</div>,
  ssr: false,
});

const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), {
  loading: () => <div className="py-20 text-center text-sm text-foreground-muted">Loading testimonials…</div>,
  ssr: false,
});

const WinningRace = dynamic(() => import("@/components/sections/WinningRace"), {
  loading: () => <div className="py-20 text-center text-sm text-foreground-muted">Loading insights…</div>,
  ssr: false,
});

export default function Home() {
  return (
    <PageTransition>
      <main className="flex flex-col bg-background">
        <Hero />
        <TrustIndicators />
        <ServicesOverview />
        <HomeMissionVision />
        <CollaborationPartners />
        <Testimonials />
        <WinningRace />
      </main>
    </PageTransition>
  );
}
