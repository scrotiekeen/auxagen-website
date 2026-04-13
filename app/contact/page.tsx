import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactWizard } from "@/components/contact-wizard";

export const metadata: Metadata = {
  title: "Contact — Auxano",
  description: "Get started with Auxano. Tell us about your business and we'll show you how AI can help you grow.",
};

export default function ContactPage() {
  return (
    <div className="bg-auxano-darker min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-2">
          Let&apos;s Talk
        </h1>
        <p className="text-gray-400 text-center mb-12">
          Tell us what you need — we&apos;ll take it from there.
        </p>

        <Suspense fallback={<div className="text-center text-gray-500">Loading...</div>}>
          <ContactWizard />
        </Suspense>
      </div>
    </div>
  );
}
