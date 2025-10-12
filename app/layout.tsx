import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import "./globals.css"
import { Suspense } from "react"
import LeadCapturePopup from "@/components/lead-capture-popup"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

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
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'YOUR_PIXEL_ID');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <LeadCapturePopup />
      </body>
    </html>
  )
}
