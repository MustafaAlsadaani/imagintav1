"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const SERVICES = [
  "Web Development",
  "Digital Marketing",
  "Creative Design",
  "Business Strategy",
  "Cyber Security",
];

const BUDGETS = [
  "Under €5,000",
  "€5,000 - €10,000",
  "€10,000 - €25,000",
  "€25,000+",
  "Not sure yet",
];

export default function ServiceInquiryForm({ trigger }: { trigger?: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ?? (
          <Button variant="gradient" size="lg">
            Start Project Inquiry
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="glass-card max-h-[90vh] overflow-y-auto rounded-3xl p-8">
        <DialogHeader>
          <DialogTitle className="text-gradient text-3xl font-heading font-semibold">Start your project</DialogTitle>
        </DialogHeader>
        <form className="mt-6 space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Alex Morgan" required className="mt-2" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@company.com" required className="mt-2" />
            </div>
          </div>
          <div>
            <Label className="mb-3 block">Services Interested In</Label>
            <div className="grid gap-3 md:grid-cols-2">
              {SERVICES.map((service) => (
                <label key={service} className="glass-creative flex items-center gap-3 rounded-xl px-4 py-3">
                  <Checkbox />
                  <span className="text-sm text-foreground">{service}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <Label className="mb-3 block">Budget Range</Label>
            <div className="grid gap-3 sm:grid-cols-2">
              {BUDGETS.map((budget) => (
                <label key={budget} className="glass-creative flex items-center gap-3 rounded-xl px-4 py-3">
                  <Checkbox name="budget" />
                  <span className="text-sm text-foreground">{budget}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <Label htmlFor="message">Project Details</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your goals, timeline, and team..."
              className="mt-2 min-h-[140px]"
            />
          </div>
          <Button type="submit" variant="gradient" size="lg" className="w-full">
            Submit Inquiry
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
