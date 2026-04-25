"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-auxano-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-center relative">
        {/* Logo — centered */}
        <Link href="/" className="text-xl font-bold text-gray-900 tracking-tight">
          Auxano Agency
        </Link>

        {/* Desktop Links — right side */}
        <div className="hidden md:flex items-center gap-6 absolute right-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm transition-colors",
                pathname === link.href
                  ? "text-auxano-secondary"
                  : "text-gray-500 hover:text-gray-900"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-auxano-primary text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-emerald-600 transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle — right side */}
        <button
          className="md:hidden text-gray-500 hover:text-gray-900 absolute right-6"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-auxano-border">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "text-sm transition-colors",
                  pathname === link.href
                    ? "text-auxano-secondary"
                    : "text-gray-500 hover:text-gray-900"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="bg-auxano-primary text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-emerald-600 transition-colors text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
