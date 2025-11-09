import PageTransition from "@/components/layout/PageTransition";
import BlogHero from "@/components/blog/BlogHero";
import BlogStream from "@/components/blog/BlogStream";
import BlogCTA from "@/components/blog/BlogCTA";

export const metadata = {
  title: "Imaginta Signals — Cyber-Night Insights & Playbooks",
  description:
    "Dive into Imaginta’s neon signal stream: strategy, design, engineering, and growth telemetry crafted to keep your team racing ahead.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <PageTransition>
      <main className="flex flex-col bg-cyber-bg text-cyber-text">
        <BlogHero />
        <BlogStream />
        <BlogCTA />
      </main>
    </PageTransition>
  );
}
