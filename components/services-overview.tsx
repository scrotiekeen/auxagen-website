import { Brain, Zap, BarChart3, RefreshCw } from "lucide-react";
import { ServiceCard } from "@/components/service-card";

const services = [
  {
    icon: Brain,
    title: "AI Strategy Consulting",
    description: "Audit your business. Identify AI opportunities. Build a roadmap with clear ROI.",
    href: "/services#strategy",
  },
  {
    icon: Zap,
    title: "Website & App Development",
    description: "AI-powered websites, web apps, and custom tools built for your workflow.",
    href: "/services#builds",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Dashboards",
    description: "Turn messy data into clear insights. Custom dashboards and reporting.",
    href: "/services#analytics",
  },
  {
    icon: RefreshCw,
    title: "Ongoing Support & Retainers",
    description: "Monthly plans to maintain, optimize, and expand your AI systems.",
    href: "/services#support",
  },
];

export function ServicesOverview() {
  return (
    <section className="bg-auxano-darker py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          What We Do
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          From strategy to execution to ongoing support — we help businesses harness AI at every stage.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
