import Link from "next/link";

export function BottomCta() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-auxano-border p-12 md:p-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Ready to Grow?
        </h2>
        <p className="text-emerald-700 text-lg mb-8 max-w-xl mx-auto">
          Let&apos;s talk about what AI can do for your business.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-auxano-primary text-white font-semibold px-10 py-4 rounded-lg hover:bg-emerald-600 transition-colors text-lg"
        >
          Book a Free Consultation
        </Link>
      </div>
    </section>
  );
}
