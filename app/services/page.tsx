import type { Metadata } from "next";
import Link from "next/link";
import { Code2, Brain, Briefcase } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Auxano Agency",
  description:
    "Web & software development, AI strategy and implementation, and business consulting — everything your business needs to build, grow, and scale.",
};

interface ServiceItem {
  name: string;
  description: string;
}

interface DepartmentSectionProps {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  services: ServiceItem[];
  ctaLabel: string;
  serviceParam: string;
}

function DepartmentSection({
  id,
  icon: Icon,
  title,
  description,
  services,
  ctaLabel,
  serviceParam,
}: DepartmentSectionProps) {
  return (
    <section id={id} className="py-20 border-b border-auxano-border last:border-b-0 scroll-mt-20">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-auxano-primary/10 rounded-xl">
          <Icon className="text-auxano-primary" size={32} />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
      </div>

      <p className="text-gray-400 text-lg mb-10 max-w-3xl leading-relaxed">{description}</p>

      {/* Services grid */}
      <div className="mb-10">
        <h3 className="text-sm font-semibold text-auxano-secondary uppercase tracking-wider mb-6">
          Services Included
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((svc) => (
            <div
              key={svc.name}
              className="bg-auxano-dark-base border border-auxano-border rounded-xl p-5 hover:border-auxano-primary/50 transition-colors duration-300"
            >
              <div className="flex items-start gap-3">
                <span className="text-auxano-primary mt-0.5 flex-shrink-0">✓</span>
                <div>
                  <div className="text-white font-semibold text-sm mb-1">{svc.name}</div>
                  <div className="text-gray-400 text-xs leading-relaxed">{svc.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-10">
        <h3 className="text-sm font-semibold text-auxano-secondary uppercase tracking-wider mb-6">
          How It Works
        </h3>
        <div className="flex flex-col sm:flex-row gap-0 sm:gap-0 relative">
          {["Discovery Call", "Scoping & Planning", "Delivery", "Handoff & Support"].map((step, i) => (
            <div key={step} className="flex-1 flex items-start gap-3 sm:flex-col sm:items-center sm:text-center relative">
              {/* Connector line */}
              {i < 3 && (
                <div className="hidden sm:block absolute top-4 left-1/2 w-full h-px bg-auxano-border" />
              )}
              <div className="relative z-10 w-8 h-8 rounded-full bg-auxano-primary/20 border border-auxano-primary/40 text-auxano-primary text-sm font-bold flex items-center justify-center flex-shrink-0">
                {i + 1}
              </div>
              <div className="sm:mt-3">
                <div className="text-white font-semibold text-sm">{step}</div>
                <div className="text-gray-500 text-xs mt-0.5">
                  {i === 0 && "We learn about your business and goals"}
                  {i === 1 && "We scope the work, timeline, and deliverables"}
                  {i === 2 && "We build, test, and iterate with your feedback"}
                  {i === 3 && "You get the keys — with docs, training, and ongoing access"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link
        href={`/contact?service=${serviceParam}`}
        className="inline-block bg-auxano-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-emerald-600 transition-colors text-sm"
      >
        {ctaLabel}
      </Link>
    </section>
  );
}

const departmentsData: DepartmentSectionProps[] = [
  {
    id: "web-software",
    icon: Code2,
    title: "Web & Software",
    description:
      "We design, build, and maintain custom software and websites that give your business a working digital foundation. From front-end design to ongoing upkeep, we handle the build and keep it running so you don't have to.",
    services: [
      {
        name: "Custom Software Development",
        description: "We build software tailored to your specific workflows and needs.",
      },
      {
        name: "Website Design & Development",
        description: "Full custom sites built around your brand and business goals.",
      },
      {
        name: "Front-End Design",
        description: "Clean, modern interfaces designed to convert and retain visitors.",
      },
      {
        name: "Website Maintenance & Upkeep",
        description: "Ongoing updates, security patches, and performance monitoring.",
      },
      {
        name: "SEO & GEO Optimization",
        description: "We optimize your site to rank in traditional search and generative engines.",
      },
      {
        name: "Hosting & Infrastructure Management",
        description: "We handle the backend so your site stays fast and online.",
      },
    ],
    ctaLabel: "Start a Web or Software Project",
    serviceParam: "web-software",
  },
  {
    id: "ai-strategy",
    icon: Brain,
    title: "AI Strategy",
    description:
      "We help you figure out where AI fits in your business, then we build and deploy it. This department covers both the strategic planning and the hands-on implementation of agents, bots, and automated workflows.",
    services: [
      {
        name: "AI Readiness Audit",
        description: "We assess where your business stands and where AI can move the needle.",
      },
      {
        name: "Opportunity Roadmap",
        description: "A prioritized plan of where to apply AI, in what order, and what it'll cost.",
      },
      {
        name: "Custom Implementation Plan",
        description: "A step-by-step blueprint tailored to your tools, team, and timeline.",
      },
      {
        name: "Tool & Vendor Selection",
        description: "We cut through the noise and match you to the right AI tools for your operation.",
      },
      {
        name: "Workflow & Process Review",
        description: "We map your current workflows and identify what's ripe for automation or AI assist.",
      },
      {
        name: "AI Agents & Bots",
        description: "Custom-built agents that handle tasks, answer questions, or run processes for you.",
      },
      {
        name: "Phone Call Automation",
        description: "Voice bots that handle inbound or outbound calls at scale.",
      },
      {
        name: "Cold Email Automation",
        description: "Automated outreach systems built to generate leads without manual effort.",
      },
      {
        name: "Automated Workflows",
        description: "End-to-end automations that connect your tools and eliminate repetitive work.",
      },
      {
        name: "Ongoing Advisory",
        description: "Retainer-based strategic guidance as your business and AI evolve.",
      },
    ],
    ctaLabel: "Start with AI Strategy",
    serviceParam: "ai-strategy",
  },
  {
    id: "business-consulting",
    icon: Briefcase,
    title: "Business Consulting",
    description:
      "Not every problem needs an AI solution, and we'll tell you when it doesn't. This department exists to meet you where you are — we'll help you find the right solution for your business, AI or otherwise, so the door stays open to work on whatever actually moves the needle.",
    services: [
      {
        name: "Business Assessment",
        description:
          "End-to-end review of your operation to identify what's working, what's leaking, and where to focus.",
      },
      {
        name: "Growth Strategy",
        description: "A prioritized plan for scaling revenue, based on your capacity and market.",
      },
      {
        name: "Operational Review",
        description: "We map your processes and find the friction points.",
      },
      {
        name: "Ongoing Advisory",
        description: "Retainer-based guidance as your business grows.",
      },
    ],
    ctaLabel: "Book a Business Consulting Call",
    serviceParam: "business-consulting",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-auxano-darker min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
        <p className="text-gray-400 text-lg mb-4 max-w-2xl leading-relaxed">
          Three departments. Everything your business needs to build a digital foundation, deploy AI that works, and grow with a clear strategy.
        </p>

        {/* Department jump links */}
        <div className="flex flex-wrap gap-3 mb-16">
          {departmentsData.map((dept) => {
            const Icon = dept.icon;
            return (
              <a
                key={dept.id}
                href={`#${dept.id}`}
                className="flex items-center gap-2 px-4 py-2 bg-auxano-dark-base border border-auxano-border rounded-lg text-gray-300 text-sm hover:border-auxano-primary hover:text-white transition-all duration-200"
              >
                <Icon size={14} className="text-auxano-primary" />
                {dept.title}
              </a>
            );
          })}
        </div>

        {departmentsData.map((dept) => (
          <DepartmentSection key={dept.id} {...dept} />
        ))}
      </div>
    </div>
  );
}
