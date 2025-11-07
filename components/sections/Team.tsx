"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import GradientOrb from "@/components/ui/GradientOrb";
import DecorativeLine from "@/components/ui/DecorativeLine";
import TeamMemberModal, { TeamMember } from "@/components/ui/TeamMemberModal";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Alexandra Morgan",
    role: "Creative Director",
    bio: "Visionary designer with 12+ years crafting brand identities for Fortune 500 companies and innovative startups. Passionate about design that tells stories and drives emotion.",
    specialty: "Brand Strategy & Design",
    avatar: "/team/alex.jpg",
    gradient: "from-electric to-cyber",
    social: { linkedin: "#", twitter: "#", email: "alex@imaginta.com" },
    highlights: ["Former lead at top creative studios", "Award-winning art director", "Speaker on design ethics"],
  },
  {
    name: "Marcus Chen",
    role: "Lead Developer",
    bio: "Full-stack architect specialising in scalable applications and emerging web technologies. Translates ambitious requirements into resilient, elegant build systems.",
    specialty: "Web Development",
    avatar: "/team/marcus.jpg",
    gradient: "from-cyber to-neon",
    social: { linkedin: "#", twitter: "#", email: "marcus@imaginta.com" },
    highlights: ["Built platforms reaching millions of users", "Contributor to open-source frameworks", "Advocates inclusive tech"],
  },
  {
    name: "Sofia Rodriguez",
    role: "Marketing Strategist",
    bio: "Data-driven marketer who has scaled brands from zero to multi-million revenue. Expert in audience intelligence, lifecycle orchestration, and growth experiments.",
    specialty: "Digital Marketing",
    avatar: "/team/sofia.jpg",
    gradient: "from-neon to-accent",
    social: { linkedin: "#", twitter: "#", email: "sofia@imaginta.com" },
    highlights: ["Former head of growth for unicorn startups", "Hosts weekly marketing podcasts", "Certified in analytics"],
  },
  {
    name: "David Kim",
    role: "Security Expert",
    bio: "Cybersecurity specialist with certifications in ethical hacking and compliance. Keeps our clients protected in an evolving threat landscape and ensures resilience by design.",
    specialty: "Cyber Security",
    avatar: "/team/david.jpg",
    gradient: "from-accent to-electric",
    social: { linkedin: "#", twitter: "#", email: "david@imaginta.com" },
    highlights: ["Former SOC lead at enterprise organisations", "Speaker on zero-trust architectures", "Certified CISSP"],
  },
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [open, setOpen] = useState(false);

  const handleSelect = (member: TeamMember) => {
    setSelectedMember(member);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setTimeout(() => setSelectedMember(null), 200);
  };

  const team = useMemo(() => TEAM_MEMBERS, []);

  return (
    <section id="team" className="relative overflow-hidden bg-gradient-to-b from-background-secondary to-background py-32">
      <GradientOrb color="electric" size="lg" className="left-[-20%] top-[5%]" />
      <GradientOrb color="cyber" size="md" className="right-[-18%] bottom-[10%]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="text-center">
          <motion.h2
            className="text-4xl font-heading font-bold text-foreground md:text-5xl"
            variants={fadeInUp}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Meet The <span className="text-gradient">Team</span>
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
            The creative minds crafting your digital future. Each lead orchestrates multidisciplinary squads tailored to your goals.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.button
              key={member.name}
              type="button"
              onClick={() => handleSelect(member)}
              className="group relative overflow-hidden rounded-2xl text-left"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative h-80 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-t ${member.gradient} opacity-40 transition-opacity duration-500 group-hover:opacity-70`} />
                {member.avatar ? (
                  <Image src={member.avatar} alt={member.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" />
                ) : (
                  <div className={`h-full w-full bg-gradient-to-br ${member.gradient}`} />
                )}

                <div className="absolute inset-0 flex gap-3 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:translate-y-4 md:flex-col md:items-end md:justify-start">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="glass-creative flex h-10 w-10 items-center justify-center rounded-full text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="h-4 w-4" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="glass-creative flex h-10 w-10 items-center justify-center rounded-full text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="h-4 w-4" />
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      className="glass-creative flex h-10 w-10 items-center justify-center rounded-full text-white"
                    >
                      <FaEnvelope className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              <div className="glass-card space-y-3 rounded-2xl p-6">
                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm font-semibold text-gradient">{member.role}</p>
                </div>
                <p className="line-clamp-3 text-sm leading-relaxed text-foreground-secondary">{member.bio}</p>
                <span className="inline-flex w-fit rounded-full bg-electric/10 px-3 py-1 text-xs font-semibold text-electric">
                  {member.specialty}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <TeamMemberModal member={selectedMember} open={open} onClose={closeModal} />
    </section>
  );
}

