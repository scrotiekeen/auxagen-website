import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-auxano-dark-base border-t border-auxano-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-xl font-bold text-white mb-2">Auxano</div>
            <p className="text-sm text-gray-400">
              Solutions Engineered For Your Business — Growing With You, Not Past You.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <div className="text-sm font-semibold text-auxano-secondary uppercase tracking-wider mb-1">
              Navigation
            </div>
            <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">Home</Link>
            <Link href="/services" className="text-sm text-gray-400 hover:text-white transition-colors">Services</Link>
            <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2">
            <div className="text-sm font-semibold text-auxano-secondary uppercase tracking-wider mb-1">
              Get In Touch
            </div>
            <a
              href="mailto:corcolt2114@gmail.com"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              corcolt2114@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-auxano-border text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Auxano. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
