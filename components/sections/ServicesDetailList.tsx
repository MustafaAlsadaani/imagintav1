"use client";

import { FaBullhorn, FaChartLine, FaCode, FaPalette, FaShieldAlt } from "react-icons/fa";
import ServiceShowcase from "@/components/sections/ServiceShowcase";

const services = [
  {
    id: "01",
    icon: FaCode,
    title: "Web Development",
    tagline: "Build. Scale. Dominate.",
    description:
      "Custom websites and applications engineered for speed, accessibility, and effortless content control. From marketing sites to product platforms, we deliver experiences that convert and scale.",
    features: [
      "Custom Architecture",
      "Performance Optimization",
      "Mobile First",
      "SEO Foundation",
      "Scalable Infrastructure",
      "Security Built-in",
    ],
    benefits: ["Headless ready", "CMS training", "Launch support"],
    priceRange: "€2,500 - €25,000+",
    gradient: "from-electric to-cyber",
    align: "left" as const,
  },
  {
    id: "02",
    icon: FaBullhorn,
    title: "Digital Marketing",
    tagline: "Amplify. Engage. Convert.",
    description:
      "Full-funnel growth programs that combine SEO, paid acquisition, lifecycle marketing, and content into one cohesive engine. Data-led strategy with creative that resonates.",
    features: [
      "SEO & Content",
      "Paid Acquisition",
      "Social Strategy",
      "Lifecycle Automation",
      "Analytics & Dashboards",
      "Conversion Optimisation",
    ],
    benefits: ["Weekly insights", "Campaign creative", "ROAS tracking"],
    priceRange: "€1,500/mo+",
    gradient: "from-cyber to-neon",
    align: "right" as const,
  },
  {
    id: "03",
    icon: FaPalette,
    title: "Creative Design",
    tagline: "Design. Inspire. Captivate.",
    description:
      "Brand identities and product interfaces that balance storytelling with usability. We craft style guides, design systems, and immersive visuals built to scale across channels.",
    features: [
      "Brand Identity",
      "UI/UX Design",
      "Design Systems",
      "Motion Graphics",
      "Marketing Collateral",
      "Guidelines & Templates",
    ],
    benefits: ["Workshop series", "Prototype demos", "Asset libraries"],
    priceRange: "€2,500 - €15,000",
    gradient: "from-neon to-accent",
    align: "left" as const,
  },
  {
    id: "04",
    icon: FaChartLine,
    title: "Business Strategy",
    tagline: "Plan. Execute. Grow.",
    description:
      "Strategic leadership on demand. We map opportunity, prioritise investments, and align teams around clear roadmaps that drive sustainable growth and measurable impact.",
    features: [
      "Market Research",
      "Growth Frameworks",
      "Competitive Analysis",
      "Budget Planning",
      "KPI Dashboards",
      "Leadership Advisory",
    ],
    benefits: ["Quarterly reviews", "Hiring support", "Stakeholder alignment"],
    priceRange: "€5,000 - €20,000",
    gradient: "from-accent to-electric",
    align: "right" as const,
  },
  {
    id: "05",
    icon: FaShieldAlt,
    title: "Cyber Security",
    tagline: "Protect. Secure. Comply.",
    description:
      "Enterprise-grade protection and compliance programs that evolve with your threat landscape. Audits, monitoring, and response handled by certified experts.",
    features: [
      "Security Audits",
      "GDPR Compliance",
      "Threat Detection",
      "Penetration Testing",
      "24/7 Monitoring",
      "Incident Response",
    ],
    benefits: ["Compliance support", "Managed monitoring", "Team training"],
    priceRange: "€2,000/mo+",
    gradient: "from-electric to-cyber",
    align: "left" as const,
  },
];

export default function ServicesDetailList() {
  return (
    <div className="space-y-0 bg-background">
      {services.map((service, index) => (
        <ServiceShowcase key={service.id} {...service} align={service.align} />
      ))}
    </div>
  );
}

