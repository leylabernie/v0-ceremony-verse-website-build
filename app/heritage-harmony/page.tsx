import type { Metadata } from "next"
import { Check, Shield, Video, Calendar, Users, Star, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"

export const metadata: Metadata = {
  title: "Heritage & Harmony Plan - Luxury Indian-American Fusion Wedding Planning | CeremonyVerse",
  description:
    "Complete fusion wedding planning with escrow protection, verified Indian suppliers, and virtual shopping. Multi-day celebrations including Mehendi, Sangeet, Baraat. Serving USA & Mexico.",
  keywords:
    "Indian American fusion wedding planner, South Asian wedding planning, luxury Indian wedding coordinator, fusion wedding packages, Mehendi Sangeet planning, verified Indian suppliers, escrow protected wedding services",
  openGraph: {
    title: "Heritage & Harmony Plan - Complete Fusion Wedding Planning",
    description: "Your heritage. Your harmony. One trusted partner for your perfect Indian-American fusion wedding.",
    type: "website",
  },
}

export default function HeritageHarmonyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#FFF8F0] via-white to-[#F5F9F5] py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-gradient-to-r from-[#E8B4B8] to-[#9CAF88] text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              Our Flagship Service
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#36454F] mb-6 leading-tight">
              The Heritage & Harmony Plan
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Complete fusion wedding planning with escrow protection, verified suppliers, and seamless coordination for
              your multi-day celebration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-[#E8B4B8] hover:bg-[#d9a5a9] text-white px-8 py-6 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                Call +1-215-341-9990
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#36454F] text-[#36454F] hover:bg-[#36454F] hover:text-white px-8 py-6 text-lg bg-transparent"
              >
                Schedule Free Consultation
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Shield className="h-5 w-5 text-[#9CAF88]" />
                <span className="text-sm font-medium">100% Escrow Protected</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Check className="h-5 w-5 text-[#9CAF88]" />
                <span className="text-sm font-medium">Verified Suppliers</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Video className="h-5 w-5 text-[#9CAF88]" />
                <span className="text-sm font-medium">Live Virtual Shopping</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-[#36454F] mb-4">
                Everything You Need for Your Perfect Day
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From initial planning to day-of coordination, we handle every detail of your multi-day fusion
                celebration
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Multi-Day Event Planning */}
              <div className="bg-gradient-to-br from-[#FFF8F0] to-white p-8 rounded-2xl border border-[#E8B4B8]/20">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E8B4B8] to-[#d9a5a9] rounded-full flex items-center justify-center mb-6">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl text-[#36454F] mb-4">Multi-Day Event Planning</h3>
                <ul className="space-y-3">
                  {[
                    "Mehendi Ceremony coordination",
                    "Haldi celebration planning",
                    "Sangeet night entertainment",
                    "Baraat procession logistics",
                    "Traditional ceremony under custom Mandap",
                    "Western-style reception coordination",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#9CAF88] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dedicated Wedding Coordinator */}
              <div className="bg-gradient-to-br from-[#F5F9F5] to-white p-8 rounded-2xl border border-[#9CAF88]/20">
                <div className="w-16 h-16 bg-gradient-to-br from-[#9CAF88] to-[#8a9e7a] rounded-full flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl text-[#36454F] mb-4">Dedicated Wedding Coordinator</h3>
                <ul className="space-y-3">
                  {[
                    "Single point of contact throughout",
                    "Unlimited consultations (phone, video, email)",
                    "Cultural consultation and guidance",
                    "Timeline and budget management",
                    "Vendor contract negotiation",
                    "Day-of coordination for all events",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#E8B4B8] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Virtual Shopping Concierge */}
              <div className="bg-gradient-to-br from-[#FFF8F0] to-white p-8 rounded-2xl border border-[#E8B4B8]/20">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E8B4B8] to-[#d9a5a9] rounded-full flex items-center justify-center mb-6">
                  <Video className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl text-[#36454F] mb-4">Virtual Shopping Concierge</h3>
                <ul className="space-y-3">
                  {[
                    "Live video consultations with Indian suppliers",
                    "Bride & groom outfit sourcing",
                    "Bridal party and family attire",
                    "Jewelry and accessories",
                    "Wedding favors and welcome bags",
                    "Invitations and save-the-dates",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#9CAF88] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Curated Vendor Network */}
              <div className="bg-gradient-to-br from-[#F5F9F5] to-white p-8 rounded-2xl border border-[#9CAF88]/20">
                <div className="w-16 h-16 bg-gradient-to-br from-[#9CAF88] to-[#8a9e7a] rounded-full flex items-center justify-center mb-6">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl text-[#36454F] mb-4">Curated Vendor Network</h3>
                <ul className="space-y-3">
                  {[
                    "Verified photographers and videographers",
                    "Fusion catering with dietary accommodations",
                    "Bilingual entertainment and DJs",
                    "Mandap and decor specialists",
                    "Mehndi artists and beauty professionals",
                    "Transportation and logistics coordination",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#E8B4B8] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Value Propositions */}
      <section className="py-20 bg-gradient-to-br from-[#FFF8F0] via-white to-[#F5F9F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-[#36454F] mb-4">Why We're Different</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Unique features you won't find with other wedding planners
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#E8B4B8]">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E8B4B8] to-[#d9a5a9] rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-serif text-xl text-[#36454F] mb-3">Escrow Payment Protection</h3>
                <p className="text-gray-600 mb-4">
                  Your payments are held securely until services are delivered to your satisfaction. No other wedding
                  planner offers this level of financial protection.
                </p>
                <div className="text-sm text-[#9CAF88] font-medium">100% Risk-Free</div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#9CAF88]">
                <div className="w-12 h-12 bg-gradient-to-br from-[#9CAF88] to-[#8a9e7a] rounded-full flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-serif text-xl text-[#36454F] mb-3">Three-Tier Supplier Verification</h3>
                <p className="text-gray-600 mb-4">
                  Every supplier undergoes legal verification, quality assessment, and reference checks. We personally
                  inspect workshops via video before recommending them.
                </p>
                <div className="text-sm text-[#E8B4B8] font-medium">Verified Quality</div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#36454F]">
                <div className="w-12 h-12 bg-gradient-to-br from-[#36454F] to-[#2a353d] rounded-full flex items-center justify-center mb-4">
                  <Video className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-serif text-xl text-[#36454F] mb-3">Live Virtual Shopping from India</h3>
                <p className="text-gray-600 mb-4">
                  Shop authentic Indian wedding items via live video with our verified suppliers. See fabrics, try
                  jewelry virtually, and make confident decisions from home.
                </p>
                <div className="text-sm text-[#9CAF88] font-medium">Authentic & Convenient</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl text-[#36454F] mb-4">Investment</h2>
              <p className="text-xl text-gray-600">Transparent pricing for your complete fusion wedding</p>
            </div>

            <div className="bg-gradient-to-br from-[#FFF8F0] to-white p-12 rounded-3xl border-2 border-[#E8B4B8] shadow-xl">
              <div className="text-center mb-8">
                <div className="text-5xl font-serif text-[#36454F] mb-2">Starting at $15,000</div>
                <p className="text-gray-600">For complete multi-day wedding coordination</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-700">Planning & Coordination (all events)</span>
                  <span className="font-medium text-[#36454F]">Included</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-700">Virtual Shopping Concierge</span>
                  <span className="font-medium text-[#36454F]">Included</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-700">Vendor Sourcing & Management</span>
                  <span className="font-medium text-[#36454F]">Included</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-700">Day-of Coordination Team</span>
                  <span className="font-medium text-[#36454F]">Included</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-gray-700">Escrow Payment Protection</span>
                  <span className="font-medium text-[#9CAF88]">Always Free</span>
                </div>
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#E8B4B8] to-[#9CAF88] hover:opacity-90 text-white px-12 py-6 text-lg"
                >
                  Schedule Your Free Consultation
                </Button>
                <p className="text-sm text-gray-500 mt-4">No obligation. Just honest conversation about your vision.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section for SEO */}
      <section className="py-20 bg-gradient-to-br from-[#F5F9F5] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-[#36454F] mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "What makes the Heritage & Harmony Plan different from other wedding planning packages?",
                  a: "We're the only wedding planner offering escrow payment protection, three-tier supplier verification, and live virtual shopping from India. Your payments are secured until you're satisfied, all suppliers are personally vetted, and you can shop authentic Indian items via video consultation.",
                },
                {
                  q: "Do you plan weddings in both the USA and Mexico?",
                  a: "Yes! We specialize in planning Indian-American fusion weddings throughout the USA and Mexico. Our team coordinates with local vendors while sourcing authentic items from India, giving you the best of both worlds.",
                },
                {
                  q: "How does the virtual shopping from India work?",
                  a: "We schedule live video consultations with our verified suppliers in India. You'll see fabrics, jewelry, and other items in real-time, ask questions, and make selections from the comfort of your home. We handle all shipping, customs, and quality checks.",
                },
                {
                  q: "What events are included in multi-day planning?",
                  a: "We coordinate all traditional events including Mehendi, Haldi, Sangeet, Baraat, the main ceremony under a custom Mandap, and Western-style reception. We can also plan additional events like engagement parties or post-wedding brunches.",
                },
                {
                  q: "How does escrow payment protection work?",
                  a: "Your payments are held in a secure escrow account and only released to vendors after services are delivered to your satisfaction. This protects you from fraud, non-delivery, or substandard work—something no other wedding planner offers.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="font-serif text-xl text-[#36454F] mb-3">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[#E8B4B8] to-[#9CAF88] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Ready to Start Planning?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Schedule your free consultation today and discover how we make fusion wedding planning stress-free
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#36454F] hover:bg-gray-100 px-8 py-6 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Call +1-215-341-9990
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#36454F] px-8 py-6 text-lg bg-transparent"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
