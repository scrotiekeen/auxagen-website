"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { StepIndicator } from "@/components/step-indicator";
import Link from "next/link";

const serviceOptions = [
  { value: "strategy", label: "AI Strategy", icon: "🧠" },
  { value: "build", label: "Custom Build (Website or App)", icon: "⚡" },
  { value: "analytics", label: "Data & Analytics", icon: "📊" },
  { value: "support", label: "Ongoing Support", icon: "🔄" },
  { value: "unsure", label: "Not sure yet — help me figure it out", icon: "🤔", highlight: true },
];

const teamOptions = [
  { value: "solo", label: "Just me" },
  { value: "small", label: "2-10 people" },
  { value: "medium", label: "11-50 people" },
  { value: "large", label: "50+ people" },
];

export function ContactWizard() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service");

  const [step, setStep] = useState(preselectedService ? 2 : 1);
  const [service, setService] = useState(preselectedService || "");
  const [teamSize, setTeamSize] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ service, teamSize, name, email, message }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">✅</div>
        <h2 className="text-2xl font-bold text-white mb-2">Got it!</h2>
        <p className="text-gray-400 mb-8">
          We&apos;ll be in touch within 24 hours.
        </p>
        <Link
          href="/"
          className="inline-block bg-auxano-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-emerald-600 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto">
      <StepIndicator currentStep={step} totalSteps={3} />

      {/* Step 1: Service Selection */}
      {step === 1 && (
        <div>
          <h2 className="text-xl font-bold text-white text-center mb-2">
            What are you looking for?
          </h2>
          <p className="text-gray-400 text-center text-sm mb-6">
            Pick the option that best describes your needs.
          </p>
          <div className="flex flex-col gap-3">
            {serviceOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => {
                  setService(opt.value);
                  setStep(2);
                }}
                className={cn(
                  "flex items-center gap-3 p-4 rounded-xl text-left transition-all",
                  opt.highlight
                    ? "bg-emerald-900/30 border-2 border-auxano-primary text-auxano-light hover:bg-emerald-900/50"
                    : "bg-auxano-card border border-auxano-border text-gray-300 hover:border-auxano-primary hover:text-white"
                )}
              >
                <span className="text-xl">{opt.icon}</span>
                <span className="font-medium text-sm">{opt.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Team Size */}
      {step === 2 && (
        <div>
          <h2 className="text-xl font-bold text-white text-center mb-2">
            How big is your team?
          </h2>
          <p className="text-gray-400 text-center text-sm mb-6">
            This helps us tailor our approach to your scale.
          </p>
          <div className="flex flex-col gap-3">
            {teamOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => {
                  setTeamSize(opt.value);
                  setStep(3);
                }}
                className="flex items-center gap-3 p-4 rounded-xl text-left bg-auxano-card border border-auxano-border text-gray-300 hover:border-auxano-primary hover:text-white transition-all"
              >
                <span className="font-medium text-sm">{opt.label}</span>
              </button>
            ))}
          </div>
          <button
            onClick={() => setStep(1)}
            className="mt-4 text-sm text-gray-500 hover:text-gray-300 transition-colors"
          >
            ← Back
          </button>
        </div>
      )}

      {/* Step 3: Contact Details */}
      {step === 3 && (
        <form onSubmit={handleSubmit}>
          <h2 className="text-xl font-bold text-white text-center mb-2">
            Tell us about yourself
          </h2>
          <p className="text-gray-400 text-center text-sm mb-6">
            Almost done — just the basics.
          </p>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-auxano-card border border-auxano-border rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-auxano-primary transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-auxano-card border border-auxano-border rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-auxano-primary transition-colors"
            />
            <textarea
              placeholder="What's the biggest challenge in your business right now?"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-auxano-card border border-auxano-border rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-auxano-primary transition-colors resize-none"
            />

            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-auxano-primary text-white font-semibold py-3 rounded-lg hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "Sending..." : "Send It →"}
            </button>
          </div>

          <button
            type="button"
            onClick={() => setStep(2)}
            className="mt-4 text-sm text-gray-500 hover:text-gray-300 transition-colors"
          >
            ← Back
          </button>
        </form>
      )}
    </div>
  );
}
