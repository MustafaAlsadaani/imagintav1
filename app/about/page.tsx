import AboutPageClient from "@/components/pages/AboutPageClient";

export const metadata = {
  title: "About Imaginta | Creative Digital Agency",
  description:
    "Learn how Imaginta helps businesses grow online with friendly experts in web development, marketing, design, business development, and cyber security.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}

