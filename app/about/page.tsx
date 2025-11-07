import AboutPageClient from "@/components/pages/AboutPageClient";

export const metadata = {
  title: "About Imaginta | Creative Digital Studio",
  description:
    "Meet the Imaginta studio. Discover our story, mission, culture, and the team crafting immersive digital experiences for ambitious brands.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}

