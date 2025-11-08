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
  { label: "Direct line", icon: FaEnvelope, href: "mailto:hello@imaginta.com", detail: "hello@imaginta.com" },
  { label: "Signal boost", icon: FaWhatsapp, href: "https://wa.me/32400000000", detail: "+32 400 00 00 00" },
  { label: "Strategic desk", icon: FaLinkedin, href: "https://linkedin.com/company/imaginta", detail: "LinkedIn updates" },
  { label: "Ops bridge", icon: FaPhone, href: "tel:+3220000000", detail: "+32 2 000 00 00" },
  { label: "Pulse feed", icon: FaTwitter, href: "https://twitter.com/imaginta", detail: "@imaginta" },
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
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(236,72,153,0.16),transparent_55%),radial-gradient(circle_at_82%_25%,rgba(14,165,233,0.18),transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-4">
        {status === "success" && (
          <motion.div
            className="mb-12 rounded-[28px] border border-orange-300/40 bg-orange-300/10 p-8 text-center text-white shadow-[0_18px_60px_rgba(236,72,153,0.28)] backdrop-blur-xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <FaCheckCircle className="mx-auto h-12 w-12 text-orange-200" />
            <h3 className="mt-5 text-2xl font-heading font-semibold">Signal received.</h3>
            <p className="mt-2 text-sm text-white/75">
              A producer will respond inside one business day with next steps and available briefing windows.
            </p>
          </motion.div>
        )}

        <div className="grid gap-10 overflow-hidden rounded-[36px] border border-white/12 bg-white/[0.03] p-10 shadow-[0_40px_110px_rgba(6,7,26,0.55)] backdrop-blur-2xl lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
          <div className="relative flex flex-col gap-10 rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.08] via-transparent to-white/[0.04] p-8">
            <div className="absolute -left-12 top-10 hidden h-20 w-20 rounded-full bg-orange-300/25 blur-3xl lg:block" />
            <div className="absolute -bottom-16 right-0 hidden h-24 w-24 rounded-full bg-cyan-400/25 blur-[70px] lg:block" />

            <div className="space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.48em] text-white/55">Partner briefing</p>
              <h2 className="text-3xl font-heading font-bold text-white sm:text-4xl">
                Let&apos;s architect the launch you can&apos;t afford to miss.
              </h2>
              <p className="text-sm leading-relaxed text-white/70">
                Outline your scene. Our strike team syncs strategy, design, engineering, and growth into one motion—
                purpose-built for your outcomes.
              </p>
            </div>

            <div className="space-y-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-white/45">Direct channels</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {CONTACT_CHANNELS.map(({ label, icon: Icon, href, detail }) => (
                  <a
                    key={label}
                    href={href}
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white/75 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/10"
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.08]">
                        <Icon className="h-4 w-4 text-orange-200" />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">{label}</span>
                    </span>
                    <span className="text-xs uppercase tracking-[0.24em] text-white/40">{detail}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/12 bg-white/[0.06] p-6 text-sm text-white/70">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/45">Your mission brief includes</p>
              <ul className="mt-4 space-y-2 text-white/80">
                <li>• Audience ignition matrix & prioritised milestones.</li>
                <li>• Squad composition, ownership map, and collaboration rituals.</li>
                <li>• Investment ranges with acceleration levers and optional retainer paths.</li>
              </ul>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-7" noValidate>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <Label htmlFor="name" className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/40">
                  Name *
                </Label>
                <Input
                  id="name"
                  placeholder="Alex Morgan"
                  className="mt-2 rounded-2xl border border-white/12 bg-white/[0.08] px-4 py-3 text-white"
                  {...register("name", { required: "Please enter your name" })}
                />
                {errors.name && <p className="mt-2 text-xs text-orange-200">{errors.name.message}</p>}
              </div>
              <div>
                <Label htmlFor="email" className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/40">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className="mt-2 rounded-2xl border border-white/12 bg-white/[0.08] px-4 py-3 text-white"
                  {...register("email", {
                    required: "Email is required",
                    validate: (value) => isValidEmail(value) || "Enter a valid email",
                  })}
                />
                {errors.email && <p className="mt-2 text-xs text-orange-200">{errors.email.message}</p>}
              </div>
            </div>

            <div>
              <Label htmlFor="company" className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/40">
                Company
              </Label>
              <Input
                id="company"
                placeholder="Company or team name"
                className="mt-2 rounded-2xl border border-white/12 bg-white/[0.08] px-4 py-3 text-white"
                {...register("company")}
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <Label className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/40">
                  Project type *
                </Label>
                <Controller
                  name="projectType"
                  control={control}
                  rules={{ required: "Select the area of collaboration" }}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="mt-2 rounded-2xl border border-white/12 bg-white/[0.08] px-4 py-3 text-white">
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
                {errors.projectType && <p className="mt-2 text-xs text-orange-200">{errors.projectType.message}</p>}
              </div>
              <div>
                <Label className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/40">
                  Budget range *
                </Label>
                <Controller
                  name="budget"
                  control={control}
                  rules={{ required: "Select a budget range" }}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="mt-2 rounded-2xl border border-white/12 bg-white/[0.08] px-4 py-3 text-white">
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
                {errors.budget && <p className="mt-2 text-xs text-orange-200">{errors.budget.message}</p>}
              </div>
            </div>

            <div>
              <Label htmlFor="message" className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/40">
                Project overview *
              </Label>
              <Textarea
                id="message"
                rows={6}
                maxLength={600}
                placeholder="Share your current mission, key audiences, launch window, and the metric you must move…"
                className="mt-2 rounded-2xl border border-white/12 bg-white/[0.08] px-4 py-3 text-white"
                {...register("message", {
                  required: "Please provide context",
                  minLength: { value: 20, message: "Enter at least 20 characters" },
                })}
              />
              <div className="mt-2 flex justify-between text-xs text-white/45">
                <span>{errors.message && <span className="text-orange-200">{errors.message.message}</span>}</span>
                <span>{message.length}/600</span>
              </div>
            </div>

            <Controller
              name="newsletter"
              control={control}
              render={({ field }) => (
                <label className="flex items-center gap-3 text-sm text-white/70">
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={(checked) => field.onChange(checked === true)}
                    className="border-white/30 data-[state=checked]:border-orange-300 data-[state=checked]:bg-orange-300/80"
                  />
                  Keep me in the loop with Imaginta field notes and launch memos.
                </label>
              )}
            />

            <Button
              type="submit"
              variant="gradient"
              className="w-full gap-2 rounded-full py-4 text-base font-semibold uppercase tracking-[0.35em]"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Transmitting…" : "Transmit briefing"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

