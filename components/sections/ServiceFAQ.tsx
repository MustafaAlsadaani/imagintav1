"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import DecorativeLine from "@/components/ui/DecorativeLine";
import { fadeInUp } from "@/lib/animations";

const FAQS = [
  {
    question: "How quickly can we start working together?",
    answer:
      "Most projects begin within 1-2 weeks of the initial consultation. For urgent needs, we offer priority onboarding options to kick off in a matter of days.",
  },
  {
    question: "Do you offer payment plans for larger projects?",
    answer:
      "Yes. For engagements over €5,000 we typically structure payments 40/30/30 across key milestones. Monthly retainers and tailored plans are available on request.",
  },
  {
    question: "Can I purchase individual services or must I choose a bundle?",
    answer:
      "Every service is modular. You can start with a single sprint or combine services into an ongoing partnership. We'll craft a proposal around your goals and budget.",
  },
  {
    question: "What makes Imaginta different from other agencies?",
    answer:
      "We unite strategy, creative, engineering, marketing, and security under one roof—led by senior talent throughout. One partner, cohesive execution, measurable outcomes.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Absolutely. Based in Belgium, we collaborate with teams worldwide. Communication is in English with timezone-flexible check-ins and dedicated project spaces.",
  },
  {
    question: "What happens after project completion?",
    answer:
      "Every package includes post-launch support. We also offer ongoing optimisation, maintenance, and growth programs to keep momentum strong.",
  },
];

export default function ServiceFAQ() {
  return (
    <section id="faq" className="relative overflow-hidden bg-gradient-to-b from-background-secondary to-background py-32">
      <div className="relative z-10 mx-auto max-w-4xl px-4">
        <div className="text-center">
          <motion.h2
            className="text-4xl font-heading font-bold text-foreground md:text-5xl"
            variants={fadeInUp}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h2>
          <div className="mt-6 flex justify-center">
            <DecorativeLine gradient="aurora" align="center" />
          </div>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-foreground-secondary"
            variants={fadeInUp}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Still curious? Drop us a line and we’ll set up a call to walk through your roadmap.
          </motion.p>
        </div>

        <Accordion type="single" collapsible className="glass-card mt-16 rounded-3xl p-4 sm:p-6">
          {FAQS.map((faq, index) => (
            <AccordionItem key={faq.question} value={`faq-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-foreground-secondary">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

