"use client";

import Link from "next/link";
import { Code2, Brain, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface ServiceGroup {
  label?: string;
  items: string[];
}

interface Department {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  serviceGroups: ServiceGroup[];
  href: string;
}

const departments: Department[] = [
  {
    id: "business-consulting",
    icon: Briefcase,
    title: "Business Consulting",
    description:
      "Not every problem needs an AI solution, and we'll tell you when it doesn't. We meet you where you are — helping you find the right solution for your business, AI or otherwise, so the door stays open to work on whatever actually moves the needle.",
    serviceGroups: [
      {
        items: [
          "Business Assessment",
          "Growth Strategy",
          "Operational Review",
          "Ongoing Advisory",
        ],
      },
    ],
    href: "/services#business-consulting",
  },
  {
    id: "web-software",
    icon: Code2,
    title: "Web & Software",
    description:
      "We design, build, and maintain custom software and websites that give your business a working digital foundation. From front-end design to ongoing upkeep, we handle the build and keep it running so you don't have to.",
    serviceGroups: [
      {
        items: [
          "Custom Software Development",
          "Website Design & Development",
          "Front-End Design",
          "Website Maintenance & Upkeep",
          "SEO & GEO Optimization",
          "Hosting & Infrastructure",
        ],
      },
    ],
    href: "/services#web-software",
  },
  {
    id: "ai-strategy",
    icon: Brain,
    title: "AI Strategy",
    description:
      "We help you figure out where AI fits in your business, then we build and deploy it. This department covers both the strategic planning and the hands-on implementation of agents, bots, and automated workflows.",
    serviceGroups: [
      {
        label: "Strategy",
        items: [
          "AI Readiness Audit",
          "Opportunity Roadmap",
          "Implementation Planning",
          "Tool & Vendor Selection",
          "Workflow & Process Review",
        ],
      },
      {
        label: "Implementation",
        items: [
          "AI Agents & Bots",
          "Phone & Email Automation",
          "Automated Workflows",
          "Ongoing Advisory",
        ],
      },
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
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-left mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What We Do
        </motion.h2>
        <motion.p
          className="text-gray-400 text-lg md:text-xl text-left mb-14 max-w-2xl"
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
                  className="group flex flex-col h-full bg-auxano-dark-base border border-auxano-border rounded-2xl p-7 hover:border-auxano-primary transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Icon + title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-auxano-primary/10 rounded-xl group-hover:bg-auxano-primary/20 transition-colors duration-300">
                      <Icon className="text-auxano-primary" size={24} />
                    </div>
                    <h3 className="text-white font-bold text-xl">{dept.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                    {dept.description}
                  </p>

                  {/* View details link */}
                  <div className="flex items-center gap-1.5 text-auxano-secondary text-sm font-medium group-hover:text-auxano-primary transition-colors duration-300">
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
