import HeroLayout from "@/components/layout/HeroLayout";
import SectionLayout from "@/components/layout/SectionLayout";
import MasterLayout from "@/components/layout/MasterLayout";
import AnimatedSection from "@/components/layout/AnimatedSection";
import CardGrid from "@/components/layout/CardGrid";
import ContentLayout from "@/components/layout/ContentLayout";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const GRID_CARDS = [
  {
    title: "Launch direction",
    description: "Narrative positioning, creative direction, and signature storytelling that makes every release feel cinematic.",
  },
  {
    title: "Product acceleration",
    description: "Design, engineering, QA, and production workflows calibrated for lightning-fast iteration without quality loss.",
  },
  {
    title: "Growth ignition",
    description: "Lifecycle architecture, campaign systems, and analytics that compound wins into sustained momentum.",
  },
];

export default function LayoutDemoPage() {
  return (
    <main className="bg-background text-foreground">
      <HeroLayout variant="centered" height="full" className="bg-[radial-gradient(circle_at_top,#16162d,transparent_60%),linear-gradient(180deg,#070716,#030312)]">
        <div className="relative z-10 flex flex-col items-center gap-8 text-center">
          <span className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.48em] text-orange-200/90">
            Layout architecture demo
          </span>

          <h1 className="text-balance">
            Swiss-grid precision meets cinematic storytelling.
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-white/75">
            A preview of the new Imaginta layout system: generous whitespace, modular components,
            and responsive choreography tuned for focus and flow.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button variant="gradient" size="lg" asChild>
              <Link href="/contact">Start your project</Link>
            </Button>
            <Button variant="glass" size="lg" asChild className="text-white/85">
              <Link href="/services">Explore services</Link>
            </Button>
          </div>
        </div>
      </HeroLayout>

      <MasterLayout spacing="spacious">
        <AnimatedSection animation="slide-up">
          <SectionLayout variant="centered" background="none" className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/55">What we orchestrate</p>
            <h2 className="text-balance text-5xl">Cinematic launches built with Swiss-grid precision.</h2>
            <p className="text-balance text-lg text-white/75">
              Every layout, card, and section now adheres to the 8px grid, golden-ratio spacing, and a modular system. The result: clarity,
              focus, and premium breathing room across every page.
            </p>
          </SectionLayout>
        </AnimatedSection>

        <AnimatedSection animation="stagger" delay={0.2} className="space-section">
          <CardGrid columns={3} gap="comfortable">
            {GRID_CARDS.map((card) => (
              <div key={card.title} className="premium-card h-full p-8 md:p-10 lg:p-12">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">{card.title}</p>
                <p className="mt-4 text-base leading-relaxed text-white/75">{card.description}</p>
              </div>
            ))}
          </CardGrid>
        </AnimatedSection>

        <AnimatedSection animation="slide-left">
          <ContentLayout layout="prose" className="space-section">
            <h3 className="text-balance text-3xl md:text-4xl">Breathing room engineered for clarity.</h3>
            <p>
              The new layout system introduces generous whitespace, modular section patterns, and a Swiss-style grid that ensures every
              component snaps into rhythm. Typography has been recalibrated for cinematic emphasis without compromising readability.
            </p>
            <p>
              Cards, forms, hero sections, and content blocks now share a unified spacing cadence. Responsive breakpoints have been tuned
              for 375px, 768px, 1024px, 1440px, and 1920px, ensuring the experience feels intentional at every viewport.
            </p>
          </ContentLayout>
        </AnimatedSection>
      </MasterLayout>
    </main>
  );
}

