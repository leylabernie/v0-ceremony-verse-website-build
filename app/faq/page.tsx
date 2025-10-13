import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Phone } from "@/components/icons"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | CeremonyVerse Wedding Planning",
  description:
    "Get answers to common questions about our Indian-American fusion wedding planning services, pricing, timelines, and our unique escrow protection system.",
  keywords:
    "wedding planning FAQ, Indian wedding questions, fusion wedding planning, escrow protection, verified suppliers",
}

export default function FAQPage() {
  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "How far in advance should I book your services?",
          a: "We recommend booking 12-18 months before your wedding date for full-service planning. However, we can accommodate shorter timelines depending on availability and your specific needs.",
        },
        {
          q: "Do you work with couples outside of your local area?",
          a: "We specialize in destination weddings and work with couples across the USA and Mexico. Our virtual shopping service and live video consultations make distance planning seamless.",
        },
        {
          q: "What makes CeremonyVerse different from other wedding planners?",
          a: "We're the only wedding planning service offering escrow payment protection, three-tier supplier verification, and direct sourcing from India with quality guarantees. Your payments are protected until you're completely satisfied.",
        },
      ],
    },
    {
      category: "Pricing & Payments",
      questions: [
        {
          q: "How does your escrow payment system work?",
          a: "Your payments are held securely in escrow and only released to suppliers after you confirm satisfaction with delivered services or products. This protects you from fraud and ensures quality standards are met.",
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards, bank transfers, and offer milestone-based payment plans for custom orders. All transactions are secured through our escrow system.",
        },
        {
          q: "Are there any hidden fees?",
          a: "Never. We believe in complete transparency. All costs are outlined in your contract upfront, including our service fees, vendor costs, and any applicable taxes or shipping fees.",
        },
        {
          q: "Can I get a refund if I'm not satisfied?",
          a: "Yes. Our escrow system ensures you can dispute any service or product that doesn't meet agreed-upon standards. We offer full refunds for misrepresentation and partial refunds for minor issues.",
        },
      ],
    },
    {
      category: "Services & Planning",
      questions: [
        {
          q: "What's included in the Heritage & Harmony Plan?",
          a: "Our flagship package includes a dedicated coordinator, curated vendor network, cultural consultation, timeline and budget management, day-of coordination, and unlimited communication. View the full details on our Heritage & Harmony page.",
        },
        {
          q: "Can I customize my service package?",
          a: "We offer three base tiers plus numerous add-on services. During your free consultation, we'll create a custom package that fits your specific needs and budget.",
        },
        {
          q: "Do you help with traditional Indian ceremonies like Mehendi and Sangeet?",
          a: "Yes! We specialize in multi-day Indian-American fusion celebrations including Mehendi, Haldi, Sangeet, Baraat, and the main ceremony. We ensure authentic cultural elements are honored throughout.",
        },
        {
          q: "How does your virtual shopping service work?",
          a: "We connect you via live video with verified suppliers in India. You can see products in real-time, ask questions, and make informed decisions. We handle all logistics, quality checks, and shipping with full escrow protection.",
        },
      ],
    },
    {
      category: "Suppliers & Quality",
      questions: [
        {
          q: "How do you verify your suppliers?",
          a: "We use a three-tier verification process: (1) Legal and financial validation, (2) Virtual site inspections and sample reviews, (3) Optional third-party on-site audits for premium items. Only verified suppliers join our network.",
        },
        {
          q: "What if I'm not happy with a product or service?",
          a: "We act as your advocate. Our dedicated case managers facilitate resolution within 7-10 business days. Options include full refunds, partial refunds, returns, or local alteration reimbursement for minor fit issues.",
        },
        {
          q: "Can I request a third-party inspection before items ship?",
          a: "Yes! For high-value items, we offer optional third-party quality inspections before shipment. This service includes material certification for silk, gold purity, and gemstone authenticity.",
        },
        {
          q: "What happens if there are shipping delays or customs issues?",
          a: "We partner with experienced international couriers and set realistic timelines with buffers. We handle all customs documentation and keep you updated throughout. Your payments remain in escrow until delivery is confirmed.",
        },
      ],
    },
    {
      category: "Cultural Authenticity",
      questions: [
        {
          q: "How do you ensure cultural authenticity?",
          a: "Our team includes cultural consultants who understand both Indian traditions and American customs. We work closely with you to honor your heritage while creating a celebration that feels authentically yours.",
        },
        {
          q: "Can you help if I'm disconnected from my cultural roots?",
          a: "Absolutely. Many of our clients are second or third-generation Indian-Americans rediscovering their heritage. We provide cultural education, explain traditions, and help you incorporate meaningful elements that resonate with you.",
        },
        {
          q: "Do you work with interfaith or intercultural couples?",
          a: "Yes! We specialize in fusion weddings that beautifully blend different cultures and traditions. We create ceremonies that honor both families and tell your unique love story.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Everything you need to know about planning your perfect fusion wedding with CeremonyVerse
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="pb-24 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {faqs.map((category, idx) => (
            <div key={idx}>
              <h2 className="font-serif text-3xl text-foreground mb-8 pb-4 border-b-2 border-primary/20">
                {category.category}
              </h2>
              <div className="space-y-8">
                {category.questions.map((faq, qIdx) => (
                  <div
                    key={qIdx}
                    className="bg-card rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-border"
                  >
                    <h3 className="font-serif text-xl text-foreground mb-4">{faq.q}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl text-foreground mb-6">Still Have Questions?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            We're here to help. Schedule a free consultation or give us a call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-full font-medium hover:shadow-lg transition-all"
            >
              Schedule Free Consultation
            </Link>
            <a
              href="tel:+12153419990"
              className="inline-flex items-center justify-center px-8 py-4 bg-card text-foreground rounded-full font-medium hover:shadow-lg transition-all border-2 border-primary/20"
            >
              <Phone className="w-5 h-5 mr-2" />
              +1-215-341-9990
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
