import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://auxagen.co";
const SITE_NAME = "Auxano Agency";
const TAGLINE = "Solutions Engineered For Your Business";
const DESCRIPTION =
  "Auxano Agency builds revenue-generating systems for business owners — strategic consulting, custom web & software, and AI strategy. Growing with you, not past you.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${TAGLINE}`,
    template: `%s · ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    "business consulting",
    "AI strategy",
    "web development agency",
    "custom software",
    "marketing automation",
    "revenue operations",
    "small business growth",
    "agency",
    "Auxano",
    "Auxagen",
  ],
  category: "Business Services",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    url: SITE_URL,
    title: `${SITE_NAME} — ${TAGLINE}`,
    description: DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — ${TAGLINE}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${TAGLINE}`,
    description: DESCRIPTION,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0D1117",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  alternateName: "Auxagen",
  url: SITE_URL,
  description: DESCRIPTION,
  slogan: "Growing With You, Not Past You.",
  email: "corbinkuehne@auxagen.co",
  image: `${SITE_URL}/opengraph-image`,
  logo: `${SITE_URL}/opengraph-image`,
  priceRange: "$$",
  areaServed: { "@type": "Country", name: "United States" },
  serviceType: [
    "Business Consulting",
    "Web & Software Development",
    "AI Strategy",
    "Marketing Automation",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Auxano Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Consulting",
          description:
            "Strategic operations, growth planning, and revenue system design for owner-led businesses.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web & Software",
          description:
            "Custom websites, dashboards, and full-stack software built for measurable business outcomes.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Strategy",
          description:
            "AI workflow design, automation, and integration tailored to your team's actual operations.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {/* JSON-LD structured data — static object, no user input, safe by construction */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
