"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import TestimonialAvatar from "@/components/ui/TestimonialAvatar";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  specialty: string;
  avatar?: string;
  gradient: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  highlights?: string[];
}

interface TeamMemberModalProps {
  member: TeamMember | null;
  open: boolean;
  onClose: () => void;
}

export default function TeamMemberModal({ member, open, onClose }: TeamMemberModalProps) {
  if (!member) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="glass-card w-full max-w-2xl rounded-3xl border border-white/10 p-0">
        <DialogHeader className="space-y-2 px-8 pt-8">
          <DialogTitle className="text-gradient text-3xl font-heading font-semibold">
            {member.name}
          </DialogTitle>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-foreground-muted">
            {member.role}
          </p>
        </DialogHeader>
        <div className="grid gap-8 px-8 pb-8 pt-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <div className="space-y-6">
            <div className="flex justify-center md:justify-start">
              <div className={`rounded-3xl bg-gradient-to-br ${member.gradient} p-1.5 shadow-lg`}> 
                <TestimonialAvatar src={member.avatar} name={member.name} gradient={false} />
              </div>
            </div>
            <div className="space-y-3 text-sm text-foreground-secondary">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-foreground-muted">Specialty</p>
                <p className="text-sm font-semibold text-foreground">{member.specialty}</p>
              </div>
              {member.highlights && member.highlights.length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.35em] text-foreground-muted">Highlights</p>
                  <ul className="space-y-1">
                    {member.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-electric" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="flex flex-wrap gap-3">
              {member.social.linkedin && (
                <Button asChild variant="glass" size="sm" className="gap-2">
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="h-4 w-4" /> LinkedIn
                  </a>
                </Button>
              )}
              {member.social.twitter && (
                <Button asChild variant="glass" size="sm" className="gap-2">
                  <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="h-4 w-4" /> Twitter
                  </a>
                </Button>
              )}
              {member.social.email && (
                <Button asChild variant="glass" size="sm" className="gap-2">
                  <a href={`mailto:${member.social.email}`}>
                    <FaEnvelope className="h-4 w-4" /> Email
                  </a>
                </Button>
              )}
            </div>
          </div>

          <div className="space-y-5 text-sm leading-relaxed text-foreground-secondary">
            <p>{member.bio}</p>
            <p>
              Our team leaders champion collaboration, clear communication, and courageous experimentation. Their mission is to empower your organisation with the tools, frameworks, and momentum to own the future of your category.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
