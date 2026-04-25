"use client";

import Link from "next/link";
import { Code2, Brain, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { Typewriter } from "@/components/typewriter";
import type { LucideIcon } from "lucide-react";

interface Service {
  name: string;
  description: string;
}

interface Department {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  services: Service[];
  href: string;
}

const departments: Department[] = [
  {
    id: "business-consulting",
    icon: Briefcase,
    title: "Business Consulting",
    description:
      "Not every problem needs an AI solution, and we'll tell you when it doesn't. We meet you where you are — helping you find the right solution for your business, AI or otherwise, so the door stays open to work on whatever actually moves the needle.",
    services: [
      { name: "Business Assessment", description: "End-to-end review to identify what's working, what's leaking, and where to focus." },
      { name: "Growth Strategy", description: "A prioritized plan for scaling revenue, based on your capacity and market." },
      { name: "Operational Review", description: "We map your processes and find the friction points." },
      { name: "Ongoing Advisory", description: "Retainer-based guidance as your business grows." },
    ],
    href: "/services#business-consulting",
  },
  {
    id: "web-software",
    icon: Code2,
    title: "Web & Software",
    description:
      "We design, build, and maintain custom software and websites that give your business a working digital foundation. From front-end design to ongoing upkeep, we handle the build and keep it running so you don't have to.",
    services: [
      { name: "Custom Software Development", description: "Software tailored to your specific workflows and needs." },
      { name: "Website Design & Development", description: "Full custom sites built around your brand and business goals." },
      { name: "Front-End Design", description: "Clean, modern interfaces designed to convert and retain visitors." },
      { name: "Website Maintenance & Upkeep", description: "Ongoing updates, security patches, and performance monitoring." },
      { name: "SEO & GEO Optimization", description: "Rank in traditional search and generative engines." },
      { name: "Hosting & Infrastructure", description: "We handle the backend so your site stays fast and online." },
    ],
    href: "/services#web-software",
  },
  {
    id: "ai-strategy",
    icon: Brain,
    title: "AI Strategy",
    description:
      "We help you figure out where AI fits in your business, then we build and deploy it. This department covers both the strategic planning and the hands-on implementation of agents, bots, and automated workflows.",
    services: [
      { name: "AI Readiness Audit", description: "Assess where your business stands and where AI can move the needle." },
      { name: "Opportunity Roadmap", description: "A prioritized plan of where to apply AI, in what order, and what it'll cost." },
      { name: "Custom Implementation Plan", description: "A step-by-step blueprint tailored to your tools, team, and timeline." },
      { name: "Tool & Vendor Selection", description: "We match you to the right AI tools for your operation." },
      { name: "AI Agents & Bots", description: "Custom-built agents that handle tasks, answer questions, or run processes." },
      { name: "Phone Call Automation", description: "Voice bots that handle inbound or outbound calls at scale." },
      { name: "Cold Email Automation", description: "Automated outreach systems built to generate leads without manual effort." },
      { name: "Automated Workflows", description: "End-to-end automations that connect your tools and eliminate repetitive work." },
      { name: "Workflow & Process Review", description: "Map your current workflows and identify what's ripe for automation." },
      { name: "Ongoing Advisory", description: "Retainer-based strategic guidance as your business and AI evolve." },
    ],
    href: "/services#ai-strategy",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export function ServicesOverview() {
  return (
    <section className="bg-auxano-darker py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Typewriter intro */}
        <div className="text-center mb-8">
          <div className="text-base sm:text-lg text-slate-400 font-mono">
            <Typewriter
              prefix="We help you "
              phrases={[
                "build your digital foundation.",
                "deploy AI that works.",
                "engineer your growth strategy.",
                "automate your workflows.",
                "turn data into decisions.",
              ]}
            />
          </div>
        </div>

        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What We Do
        </motion.h2>
        <motion.p
          className="text-gray-400 text-center mb-14 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Three departments. Full-stack business growth — from the website to the workflows to the strategy behind it all.
        </motion.p>

        {/* Department cards */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {departments.map((dept) => {
            const Icon = dept.icon;
            return (
              <motion.div key={dept.id} variants={cardVariants}>
                <Link
                  href={dept.href}
                  className="group block h-full bg-auxano-dark-base border border-auxano-border rounded-2xl p-7 hover:border-auxano-primary transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Icon + title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-auxano-primary/10 rounded-xl group-hover:bg-auxano-primary/20 transition-colors duration-300">
                      <Icon className="text-auxano-primary" size={24} />
                    </div>
                    <h3 className="text-white font-bold text-xl">{dept.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {dept.description}
                  </p>

                  {/* Service list */}
                  <ul className="space-y-2">
                    {dept.services.map((svc) => (
                      <li key={svc.name} className="flex items-start gap-2">
                        <span className="text-auxano-primary mt-0.5 text-xs flex-shrink-0">▸</span>
                        <span className="text-gray-300 text-sm">{svc.name}</span>
                      </li>
                    ))}
                  </ul>

                  {/* View details link */}
                  <div className="mt-6 flex items-center gap-1.5 text-auxano-secondary text-sm font-medium group-hover:text-auxano-primary transition-colors duration-300">
                    View details
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
