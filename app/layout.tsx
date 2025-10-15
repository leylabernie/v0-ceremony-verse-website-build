import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import LeadCapturePopup from "@/components/lead-capture-popup"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { StickyCTA } from "@/components/sticky-cta"
import ExitIntentPopup from "@/components/exit-intent-popup"
import { MobileBottomNav } from "@/components/mobile-bottom-nav"
import LeadMagnetPopup from "@/components/lead-magnet-popup"
import { CalendlyWidget } from "@/components/calendly-widget"

const geistSans = GeistSans
const geistMono = GeistMono

export const metadata: Metadata = {
  title: "CeremonyVerse | Luxury Indian-American Fusion Wedding Planning Services",
  description:
    "Expert Indian-American fusion wedding planning with verified suppliers, escrow protection, and virtual shopping from India. Plan your perfect heritage wedding with complete peace of mind. Call +1-215-341-9990",
  keywords:
    "Indian wedding planner, fusion wedding planning, South Asian wedding services, Indian American wedding, luxury wedding planner USA, authentic Indian wedding, verified wedding suppliers, escrow protected wedding planning, virtual wedding shopping, heritage harmony wedding",
  authors: [{ name: "CeremonyVerse" }],
  openGraph: {
    title: "CeremonyVerse | Luxury Indian-American Fusion Wedding Planning",
    description:
      "Your Heritage. Your Harmony. Your Perfect Day. Expert wedding planning for fusion celebrations with verified suppliers and complete peace of mind.",
    type: "website",
    locale: "en_US",
    siteName: "CeremonyVerse",
  },
  twitter: {
    card: "summary_large_image",
    title: "CeremonyVerse | Luxury Indian-American Fusion Wedding Planning",
    description:
      "Expert wedding planning for Indian-American fusion celebrations with verified suppliers and escrow protection.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-X4HC7P2Q6C"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-X4HC7P2Q6C');
`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WeddingService",
              name: "CeremonyVerse",
              description:
                "Luxury Indian-American fusion wedding planning with verified suppliers and escrow protection",
              telephone: "+1-215-341-9990",
              email: "hello@ceremonyverse.com",
              priceRange: "$$$",
              areaServed: ["United States", "Mexico"],
              serviceType: ["Wedding Planning", "Event Coordination", "Virtual Shopping Services"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Wedding Planning Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Heritage & Harmony Plan",
                      description: "Comprehensive fusion wedding planning with cultural consultation",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Virtual Shopping Concierge",
                      description: "Curated shopping from India with live video consultations",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased pb-16 md:pb-0">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <LeadCapturePopup />
        <ExitIntentPopup />
        <LeadMagnetPopup />
        <WhatsAppWidget />
        <StickyCTA />
        <MobileBottomNav />
        <CalendlyWidget />
      </body>
    </html>
  )
}
