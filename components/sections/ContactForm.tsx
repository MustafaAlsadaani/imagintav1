"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { motion } from "framer-motion";
import { FaCheckCircle, FaEnvelope, FaLinkedin, FaPhone, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { isValidEmail } from "@/lib/formValidation";

const PROJECT_TYPES = [
  "Product Design & Build",
  "Brand & Website Refresh",
  "Growth & Campaigns",
  "Strategy & Advisory",
  "Security & Compliance",
  "Other / Not sure",
];

const BUDGET_RANGES = [
  "Under €5,000",
  "€5,000 - €10,000",
  "€10,000 - €25,000",
  "€25,000 - €50,000",
  "€50,000+",
  "We are exploring",
];

interface FormFields {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget: string;
  message: string;
  newsletter: boolean;
}

const CONTACT_CHANNELS = [
  { label: "Email", icon: FaEnvelope, href: "mailto:hello@imaginta.com" },
  { label: "WhatsApp", icon: FaWhatsapp, href: "https://wa.me/32400000000" },
  { label: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com/company/imaginta" },
  { label: "Call", icon: FaPhone, href: "tel:+3220000000" },
  { label: "Twitter", icon: FaTwitter, href: "https://twitter.com/imaginta" },
];

export default function ContactForm() {
  const {
    control,
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormFields>({
    defaultValues: {
      name: "",
      email: "",
      company: "",
      projectType: "",
      budget: "",
      message: "",
      newsletter: false,
    },
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const message = watch("message") ?? "";

  const onSubmit = (formData: FormFields) => {
    void formData;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 3500);
    }, 1200);
  };

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        {status === "success" && (
          <motion.div
            className="mb-10 rounded-3xl border border-neon/30 bg-neon/10 p-8 text-center shadow-glow-neon"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <FaCheckCircle className="mx-auto h-12 w-12 text-neon" />
            <h3 className="mt-4 text-2xl font-heading font-semibold text-foreground">Message received!</h3>
            <p className="mt-2 text-sm text-foreground-secondary">
              Our producers will reach out within one business day to schedule a discovery session.
            </p>
          </motion.div>
        )}

        <div className="glass-card grid gap-12 overflow-hidden rounded-3xl border border-white/10 bg-background/80 p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative flex flex-col gap-10 rounded-2xl bg-gradient-to-br from-electric/20 via-background/20 to-background/10 p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-electric">Talk to us</p>
              <h2 className="mt-4 text-3xl font-heading font-bold text-foreground">
                We partner with founders, CMOs, and product teams to build what&apos;s next.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground-secondary">
                Let&apos;s align on outcomes first. Share a high-level brief and we&apos;ll curate the right squad for strategy, design,
                engineering, and growth.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground-muted">Quick channels</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {CONTACT_CHANNELS.map(({ label, icon: Icon, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="glass-creative flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-foreground transition-all hover:-translate-y-[2px]"
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <Icon className="h-4 w-4 text-electric" />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-foreground-secondary">
              <p className="font-semibold text-foreground">What happens next</p>
              <ul className="mt-3 space-y-2">
                <li>• Discovery call to align on goals and success metrics.</li>
                <li>• Collaborative scoping session and timeline planning.</li>
                <li>• Proposal with transparent pricing and squad composition.</li>
              </ul>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground-muted">
                  Name *
                </Label>
                <Input
                  id="name"
                  placeholder="Alex Morgan"
                  className="mt-2 bg-white/5 text-foreground"
                  {...register("name", { required: "Please enter your name" })}
                />
                {errors.name && <p className="mt-1 text-xs text-accent">{errors.name.message}</p>}
              </div>
              <div>
                <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground-muted">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className="mt-2 bg-white/5 text-foreground"
                  {...register("email", {
                    required: "Email is required",
                    validate: (value) => isValidEmail(value) || "Enter a valid email",
                  })}
                />
                {errors.email && <p className="mt-1 text-xs text-accent">{errors.email.message}</p>}
              </div>
            </div>

            <div>
              <Label htmlFor="company" className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground-muted">
                Company
              </Label>
              <Input
                id="company"
                placeholder="Company or team name"
                className="mt-2 bg-white/5 text-foreground"
                {...register("company")}
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <Label className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground-muted">
                  Project type *
                </Label>
                <Controller
                  name="projectType"
                  control={control}
                  rules={{ required: "Select the area of collaboration" }}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="mt-2 bg-white/5 text-foreground">
                        <SelectValue placeholder="Select one" />
                      </SelectTrigger>
                      <SelectContent>
                        {PROJECT_TYPES.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.projectType && <p className="mt-1 text-xs text-accent">{errors.projectType.message}</p>}
              </div>
              <div>
                <Label className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground-muted">
                  Budget range *
                </Label>
                <Controller
                  name="budget"
                  control={control}
                  rules={{ required: "Select a budget range" }}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="mt-2 bg-white/5 text-foreground">
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent>
                        {BUDGET_RANGES.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.budget && <p className="mt-1 text-xs text-accent">{errors.budget.message}</p>}
              </div>
            </div>

            <div>
              <Label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground-muted">
                Project overview *
              </Label>
              <Textarea
                id="message"
                rows={6}
                maxLength={600}
                placeholder="Share goals, audiences, timelines, or links to existing materials..."
                className="mt-2 bg-white/5 text-foreground"
                {...register("message", {
                  required: "Please provide context",
                  minLength: { value: 20, message: "Enter at least 20 characters" },
                })}
              />
              <div className="mt-1 flex justify-between text-xs text-foreground-muted">
                <span>{errors.message && <span className="text-accent">{errors.message.message}</span>}</span>
                <span>{message.length}/600</span>
              </div>
            </div>

            <Controller
              name="newsletter"
              control={control}
              render={({ field }) => (
                <label className="flex items-center gap-3 text-sm text-foreground-secondary">
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={(checked) => field.onChange(checked === true)}
                  />
                  Keep me updated with Imaginta insights and launch memos.
                </label>
              )}
            />

            <Button
              type="submit"
              variant="gradient"
              className="w-full gap-2"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

