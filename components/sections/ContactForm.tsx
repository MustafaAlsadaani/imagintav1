"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { isValidEmail } from "@/lib/formValidation";

const PROJECT_TYPES = [
  "Web Development",
  "Marketing",
  "Graphic Design",
  "Business Development",
  "Cyber Security",
  "Multiple services / Not sure",
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
    <section id="contact-form" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_14%,rgba(0,229,229,0.16),transparent_60%),radial-gradient(circle_at_82%_18%,rgba(230,0,230,0.12),transparent_64%),radial-gradient(circle_at_50%_82%,rgba(50,205,50,0.12),transparent_70%)] opacity-80" />
      <div className="pointer-events-none absolute inset-0 bg-[url('/textures/circuit-grid.svg')] opacity-[0.04]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8 lg:px-10">
        {status === "success" && (
          <motion.div
            className="mb-12 rounded-[32px] border border-[rgba(0,229,229,0.32)] bg-[rgba(12,23,39,0.82)] px-8 py-8 text-center text-white shadow-[0_32px_90px_rgba(5,15,32,0.55)] backdrop-blur-xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <FaCheckCircle className="mx-auto h-12 w-12 text-premium-green" />
            <h3 className="mt-4 text-2xl font-heading font-semibold">Message received.</h3>
            <p className="mt-2 text-sm text-premium-text-secondary">
              A specialist will reply within one business day with next steps and a selection of call times.
            </p>
          </motion.div>
        )}

        <div className="grid gap-12 rounded-[36px] border border-[rgba(0,229,229,0.24)] bg-[rgba(10,20,36,0.86)] p-10 shadow-[0_36px_110px_rgba(5,15,32,0.55)] backdrop-blur-2xl lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
          <div className="flex flex-col gap-8 rounded-[28px] border border-[rgba(0,229,229,0.22)] bg-[rgba(12,23,39,0.78)] p-8 text-sm text-premium-text shadow-[0_24px_60px_rgba(5,15,32,0.48)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-premium-text-secondary">How the process works</p>
            <h2 className="text-2xl font-heading font-semibold text-white sm:text-3xl">
              Tell us about your business and we’ll send a personal action plan.
            </h2>
            <p className="text-premium-text-secondary">
              Use the form to describe your goals, timeline, and any concerns. We follow up with easy next steps and suggest the services
              that fit your budget.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "What you receive",
                  detail: "A short plan covering suggested services, timeline, and cost ranges written in plain language.",
                },
                {
                  title: "Our promise",
                  detail: "One friendly contact, transparent pricing, and ongoing support after launch.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-[rgba(0,229,229,0.18)] bg-[rgba(10,20,36,0.78)] px-5 py-5 text-premium-text-secondary"
                >
                  <p className="text-[11px] uppercase tracking-[0.32em] text-premium-text-secondary/80">{item.title}</p>
                  <p className="mt-2 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-[rgba(230,0,230,0.2)] bg-[rgba(15,24,42,0.82)] px-6 py-6 text-sm text-premium-text-secondary">
              “Imaginta turned our ideas into a clear plan with pricing and next steps in less than a week.”
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-premium-text-secondary/80">
                Founder · Retail brand
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-7 text-premium-text" noValidate>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <Label htmlFor="name" className="text-[11px] font-semibold uppercase tracking-[0.32em] text-premium-text-secondary/80">
                  Name *
                </Label>
                <Input
                  id="name"
                  placeholder="Alex Morgan"
                  className="mt-2 h-12 rounded-2xl px-4"
                  {...register("name", { required: "Please enter your name" })}
                />
                {errors.name && <p className="mt-2 text-xs text-premium-accent">{errors.name.message}</p>}
              </div>
              <div>
                <Label htmlFor="email" className="text-[11px] font-semibold uppercase tracking-[0.32em] text-premium-text-secondary/80">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className="mt-2 h-12 rounded-2xl px-4"
                  {...register("email", {
                    required: "Email is required",
                    validate: (value) => isValidEmail(value) || "Enter a valid email",
                  })}
                />
                {errors.email && <p className="mt-2 text-xs text-premium-accent">{errors.email.message}</p>}
              </div>
            </div>

            <div>
              <Label htmlFor="company" className="text-[11px] font-semibold uppercase tracking-[0.32em] text-premium-text-secondary/80">
                Company / Team
              </Label>
              <Input
                id="company"
                placeholder="Where momentum needs to happen"
                className="mt-2 h-12 rounded-2xl px-4"
                {...register("company")}
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <Label className="text-[11px] font-semibold uppercase tracking-[0.32em] text-premium-text-secondary/80">
                  What service do you need? *
                </Label>
                <Controller
                  name="projectType"
                  control={control}
                  rules={{ required: "Select the focus area" }}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="mt-2 h-12 rounded-2xl px-4">
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
                {errors.projectType && <p className="mt-2 text-xs text-premium-accent">{errors.projectType.message}</p>}
              </div>
              <div>
                <Label className="text-[11px] font-semibold uppercase tracking-[0.32em] text-premium-text-secondary/80">
                  Estimated budget *
                </Label>
                <Controller
                  name="budget"
                  control={control}
                  rules={{ required: "Select a budget range" }}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="mt-2 h-12 rounded-2xl px-4">
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
                {errors.budget && <p className="mt-2 text-xs text-premium-accent">{errors.budget.message}</p>}
              </div>
            </div>

            <div>
              <Label htmlFor="message" className="text-[11px] font-semibold uppercase tracking-[0.32em] text-premium-text-secondary/80">
                Tell us about your business *
              </Label>
              <Textarea
                id="message"
                rows={6}
                maxLength={600}
                placeholder="Describe your business, your customers, what you need help with, and any timelines we should know."
                className="mt-2 rounded-2xl px-4 py-3"
                {...register("message", {
                  required: "Please provide context",
                  minLength: { value: 20, message: "Enter at least 20 characters" },
                })}
              />
              <div className="mt-2 flex justify-between text-xs text-premium-text-secondary/75">
                <span>{errors.message ? <span className="text-premium-accent">{errors.message.message}</span> : null}</span>
                <span className="text-premium-text-secondary/60">{message.length}/600</span>
              </div>
            </div>

            <Controller
              name="newsletter"
              control={control}
              render={({ field }) => (
                <label className="flex items-center gap-3 text-sm text-premium-text-secondary">
                  <Checkbox checked={field.value} onCheckedChange={(checked) => field.onChange(checked === true)} />
                  Keep me updated with monthly tips from Imaginta.
                </label>
              )}
            />

            <Button
              type="submit"
              variant="gradient"
              className="w-full gap-2 rounded-full py-4 text-sm font-semibold uppercase tracking-[0.32em]"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending…" : "Send message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

