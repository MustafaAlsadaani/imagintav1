"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import MagneticContainer from "@/components/ui/MagneticContainer";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaStar } from "react-icons/fa";
import GradientOrb from "@/components/ui/GradientOrb";
import DecorativeLine from "@/components/ui/DecorativeLine";
import TestimonialAvatar from "@/components/ui/TestimonialAvatar";
import SocialShare from "@/components/ui/SocialShare";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  industry: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CEO",
    company: "TechVision Inc",
    content:
      "Imaginta transformed our digital presence with creativity and precision. Their holistic approach delivered results beyond our expectations. Our conversion rate increased by 340% in just four months.",
    rating: 5,
    avatar: "/avatars/client1.jpg",
    industry: "Technology",
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Founder",
    company: "GreenLeaf Co",
    content:
      "Working with Imaginta felt like having an extension of our team. They understood our vision and brought it to life with stunning design and flawless execution. Truly world-class service.",
    rating: 5,
    avatar: "/avatars/client2.jpg",
    industry: "Sustainability",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Marketing Director",
    company: "UrbanStyle",
    content:
      "The level of detail and care Imaginta brings is unmatched. They didn't just build a website – they crafted an experience that resonates with our audience. Sales are up 180%.",
    rating: 5,
    avatar: "/avatars/client3.jpg",
    industry: "Fashion",
  },
];

const CARD_VARIANTS = {
  enter: (direction: number) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction > 0 ? -200 : 200,
    opacity: 0,
    scale: 0.9,
  }),
};

export default function Testimonials() {
  const prefersReducedMotion = useReducedMotion();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = TESTIMONIALS[current];

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const stars = useMemo(
    () =>
      Array.from({ length: 5 }, (_, index) => (
        <FaStar
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className={"h-5 w-5"}
          color={index < currentTestimonial.rating ? "#f59e0b" : "rgba(255,255,255,0.2)"}
        />
      )),
    [currentTestimonial.rating],
  );

  return (
    <section className="relative overflow-hidden py-32">
      <GradientOrb color="electric" size="lg" className="left-[-20%] top-[10%]" />
      <GradientOrb color="accent" size="md" className="bottom-[-20%] right-[-10%]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="text-center">
          <motion.h2
            className="text-4xl font-heading font-bold text-foreground md:text-5xl"
            variants={fadeInUp}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Client <span className="text-gradient">Success</span> Stories
          </motion.h2>
          <div className="mt-6 flex justify-center">
            <DecorativeLine gradient="sunset" align="center" />
          </div>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-foreground-secondary"
            variants={fadeInUp}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Real transformations from teams who partnered with Imaginta to build, scale, and secure their digital ecosystems.
          </motion.p>
        </div>

        <div className="relative mx-auto mt-16 flex max-w-4xl flex-col items-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentTestimonial.id}
              custom={direction}
              variants={CARD_VARIANTS}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: "easeOut" }}
              drag={isMobile ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (!isMobile) return;
                if (info.offset.x < -80) handleNext();
                if (info.offset.x > 80) handlePrev();
              }}
              className="glass-card relative w-full rounded-3xl p-10 sm:p-12"
            >
              <FaQuoteLeft className="absolute left-8 top-6 text-6xl text-electric/20" aria-hidden="true" />
              <div className="relative z-10 space-y-6">
                <div className="flex gap-1 text-accent">{stars}</div>
                <p className="text-xl leading-relaxed text-foreground md:text-2xl">“{currentTestimonial.content}”</p>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <TestimonialAvatar
                      src={currentTestimonial.avatar}
                      name={currentTestimonial.name}
                      gradient
                    />
                    <div>
                      <p className="text-lg font-semibold text-gradient">
                        {currentTestimonial.name}
                      </p>
                      <p className="text-sm text-foreground-secondary">
                        {currentTestimonial.role} · {currentTestimonial.company}
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-foreground-secondary">
                    {currentTestimonial.industry}
                  </span>
                </div>
                <SocialShare quote={currentTestimonial.content} author={currentTestimonial.name} className="pt-4" />
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center gap-4">
            <MagneticContainer intensity={8}>
              <motion.button
                type="button"
                onClick={handlePrev}
                className="glass-creative flex h-12 w-12 items-center justify-center rounded-full text-foreground-secondary transition-colors duration-300 hover:text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Previous testimonial"
              >
                <FaChevronLeft className="h-5 w-5" />
              </motion.button>
            </MagneticContainer>
            <MagneticContainer intensity={8}>
              <motion.button
                type="button"
                onClick={handleNext}
                className="glass-creative flex h-12 w-12 items-center justify-center rounded-full text-foreground-secondary transition-colors duration-300 hover:text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Next testimonial"
              >
                <FaChevronRight className="h-5 w-5" />
              </motion.button>
            </MagneticContainer>
          </div>

          <div className="mt-6 flex gap-3">
            {TESTIMONIALS.map((testimonial, index) => (
              <button
                key={testimonial.id}
                type="button"
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                className={cn(
                  "h-3 rounded-full transition-all duration-300",
                  index === current
                    ? "w-10 bg-gradient-aurora"
                    : "w-3 bg-foreground-muted/30 hover:bg-foreground-muted/60",
                )}
                aria-label={`Show testimonial ${testimonial.name}`}
                aria-pressed={index === current}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
