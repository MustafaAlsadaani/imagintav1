import PageTransition from "@/components/layout/PageTransition";
import ContactHero from "@/components/sections/ContactHero";
import ContactForm from "@/components/sections/ContactForm";
import ContactHighlights from "@/components/sections/ContactHighlights";
import ContactMap from "@/components/sections/ContactMap";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: "Contact Us | Get Your Free Consultation | Imaginta",
  description:
    "Start your digital transformation with Imaginta. Contact us for web development, marketing, design, strategy, and cyber security services. Free consultation available.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="flex flex-col bg-background">
        <ContactHero />
        <ContactForm />
        <ContactHighlights />
        <ContactMap />
        <CTASection />
      </div>
    </PageTransition>
  );
}

