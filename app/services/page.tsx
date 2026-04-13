import type { Metadata } from "next";
import Link from "next/link";
import { Brain, Zap, BarChart3, RefreshCw } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Auxano",
  description: "AI strategy consulting, custom builds, data analytics, and ongoing support for businesses ready to grow with AI.",
};

interface ServiceSectionProps {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  includes: string[];
  process: { step: string; label: string }[];
  ctaLabel: string;
  serviceParam: string;
}

function ServiceSection({
  id,
  icon: Icon,
  title,
  description,
  includes,
  process,
  ctaLabel,
  serviceParam,
}: ServiceSectionProps) {
  return (
    <section id={id} className="py-20 border-b border-auxano-border last:border-b-0 scroll-mt-20">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-auxano-primary/10 rounded-xl">
          <Icon className="text-auxano-primary" size={32} />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
      </div>

      <p className="text-gray-400 text-lg mb-8 max-w-3xl">{description}</p>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* What's Included */}
        <div>
          <h3 className="text-sm font-semibold text-auxano-secondary uppercase tracking-wider mb-4">
            What&apos;s Included
          </h3>
          <ul className="space-y-2">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-300 text-sm">
                <span className="text-auxano-primary mt-1">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* How It Works */}
        <div>
          <h3 className="text-sm font-semibold text-auxano-secondary uppercase tracking-wider mb-4">
            How It Works
          </h3>
          <div className="space-y-4">
            {process.map((p, i) => (
              <div key={p.step} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-auxano-primary/20 text-auxano-primary text-sm font-bold flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{p.step}</div>
                  <div className="text-gray-400 text-xs">{p.label}</div>
                </div>
              </div>
            ))}
          </div>
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

const servicesData: ServiceSectionProps[] = [
  {
    id: "strategy",
    icon: Brain,
    title: "AI Strategy Consulting",
    description: "We audit your business operations, identify where AI can save time and money, and deliver a clear implementation roadmap.",
    includes: [
      "Business process audit",
      "AI opportunity analysis",
      "ROI projections",
      "Prioritized implementation roadmap",
      "Technology recommendations",
    ],
    process: [
      { step: "Discovery Call", label: "We learn about your business and goals" },
      { step: "Deep Dive Audit", label: "We analyze your operations and data" },
      { step: "Strategy Delivery", label: "You get a clear, actionable roadmap" },
    ],
    ctaLabel: "Get Started with Strategy",
    serviceParam: "strategy",
  },
  {
    id: "builds",
    icon: Zap,
    title: "Website & App Development",
    description: "We build AI-powered websites, web applications, and custom tools tailored to your business needs.",
    includes: [
      "Custom design",
      "Responsive development",
      "AI feature integration",
      "Performance optimization",
      "Deployment & hosting",
      "Training & documentation",
    ],
    process: [
      { step: "Requirements", label: "We define scope, features, and timeline" },
      { step: "Design & Build", label: "We design and develop your solution" },
      { step: "Launch & Handoff", label: "We deploy, train your team, and hand over" },
    ],
    ctaLabel: "Get Started with a Build",
    serviceParam: "build",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Data Analytics & Dashboards",
    description: "We turn your business data into actionable insights with custom dashboards and automated reporting.",
    includes: [
      "Data audit & cleanup",
      "Custom dashboard design",
      "Interactive visualizations",
      "Automated reports",
      "KPI tracking",
      "Data pipeline setup",
    ],
    process: [
      { step: "Data Assessment", label: "We review your data sources and quality" },
      { step: "Dashboard Build", label: "We design and build your dashboards" },
      { step: "Training & Iteration", label: "We train your team and refine together" },
    ],
    ctaLabel: "Get Started with Analytics",
    serviceParam: "analytics",
  },
  {
    id: "support",
    icon: RefreshCw,
    title: "Ongoing Support & Retainers",
    description: "Monthly partnership to maintain, optimize, and expand your AI systems as your business grows.",
    includes: [
      "Priority support",
      "System monitoring",
      "Performance optimization",
      "Feature updates",
      "Monthly strategy check-ins",
    ],
    process: [
      { step: "Onboarding", label: "We learn your systems and set up monitoring" },
      { step: "Monthly Cycles", label: "Continuous improvements and support" },
      { step: "Quarterly Reviews", label: "Strategic reviews and roadmap updates" },
    ],
    ctaLabel: "Get Started with Support",
    serviceParam: "support",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-auxano-darker min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Our Services
        </h1>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl">
          From strategy to execution to ongoing support — everything your business needs to grow with AI.
        </p>

        {servicesData.map((service) => (
          <ServiceSection key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
}
