"use client";

import { GradientOrb } from "@/components/ui/GradientOrb";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const COLOR_SWATCHES = [
  { name: "Background", className: "bg-background" },
  { name: "Background Secondary", className: "bg-background-secondary" },
  { name: "Electric", className: "bg-electric" },
  { name: "Cyber", className: "bg-cyber" },
  { name: "Neon", className: "bg-neon" },
  { name: "Accent", className: "bg-accent" },
];

export default function TestPage() {
  return (
    <div className="relative overflow-hidden py-24">
      <GradientOrb className="left-1/2 top-[-10%]" size="lg" />
      <GradientOrb className="left-[10%] top-[30%]" color="cyber" size="md" />
      <GradientOrb className="right-[10%] top-[45%]" color="neon" size="sm" />

      <div className="container-custom relative z-10 space-y-16">
        <header className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-foreground-muted">
            Design System Test Bench
          </p>
          <h1 className="text-gradient">Electric Dreams Palette</h1>
          <p className="mx-auto max-w-2xl text-foreground-secondary">
            Use this page to validate the updated color system, glass utilities, button variants, and typography hierarchy before rolling changes across the experience.
          </p>
          <span className="gradient-line block mx-auto w-32" />
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {COLOR_SWATCHES.map((swatch) => (
            <article
              key={swatch.name}
              className="glass-card rounded-3xl p-6 shadow-glow-electric"
            >
              <div className={cn("mb-4 h-24 w-full rounded-2xl", swatch.className)} />
              <h3 className="text-lg font-semibold">{swatch.name}</h3>
              <p className="text-sm text-foreground-muted">
                Tailwind utility: <code className="text-electric">{swatch.className}</code>
              </p>
            </article>
          ))}
        </section>

        <section className="glass-card rounded-3xl p-10">
          <h2 className="text-gradient-sunset mb-6 text-3xl font-semibold">
            Button Variants
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button>Default</Button>
            <Button variant="gradient">Gradient</Button>
            <Button variant="glass">Glass</Button>
            <Button variant="glow">Glow</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">Typography Scale</h2>
          <div className="space-y-6">
            <h1>Heading One</h1>
            <h2>Heading Two</h2>
            <h3>Heading Three</h3>
            <h4 className="text-2xl font-semibold">Heading Four</h4>
            <p>
              Body copy — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-sm text-foreground-muted">
              Caption text with muted foreground tone for secondary information.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

