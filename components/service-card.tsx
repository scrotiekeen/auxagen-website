import Link from "next/link";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export function ServiceCard({ icon: Icon, title, description, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "block bg-auxano-dark-base border border-auxano-border rounded-xl p-6",
        "hover:border-auxano-primary hover:-translate-y-1 transition-all duration-300"
      )}
    >
      <Icon className="text-auxano-primary mb-4" size={28} />
      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </Link>
  );
}
