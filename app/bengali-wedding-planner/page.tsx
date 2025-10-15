import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Heart, Users, Calendar } from "@/components/icons"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bengali Wedding Planner | Traditional Bengali Marriage Ceremony Services | CeremonyVerse",
  description:
    "Expert Bengali wedding planning services for authentic Biye ceremonies. Specializing in Subho Drishti, Saat Paak, and traditional Bengali wedding rituals. Serving Bengali families across USA.",
  keywords:
    "Bengali wedding planner, Bengali marriage ceremony, Biye planning, Subho Drishti, Saat Paak, Bengali wedding rituals, traditional Bengali wedding, Bengali wedding USA, Kolkata style wedding, Bengali wedding coordinator",
  openGraph: {
    title: "Bengali Wedding Planner | Traditional Biye Ceremony Services",
    description:
      "Authentic Bengali wedding planning with deep understanding of traditional rituals, customs, and cultural significance.",
    type: "website",
  },
}

export default function BengaliWeddingPlanner() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-cream">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-white via-cream to-sage/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  Bengali Wedding Specialists
                </div>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-charcoal mb-6 leading-tight">
                  <span className="text-[#1a4d6d]">Traditional Bengali</span>
                  <br />
                  <span className="text-[#0891b2]">Wedding Planning</span>
                </h1>
                <p className="text-xl text-charcoal/70 mb-8 leading-relaxed">
                  From Subho Drishti to Bou Bhaat, we honor every sacred moment of your Bengali Biye with authentic
                  rituals, traditional attire, and cultural expertise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="/contact">
                    <Button size="lg" className="w-full sm:w-auto bg-[#d4a574] hover:bg-[#c49564] text-white">
                      Schedule Consultation
                    </Button>
                  </Link>
                  <Link href="/quiz">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                      Take Wedding Style Quiz
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-6 text-sm text-charcoal/60">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>50+ Bengali Weddings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary" />
                    <span>Cultural Authenticity</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/bengali-bride-in-white-red-border-saree-with-topor.jpg"
                    alt="Bengali bride in traditional white saree with red border and topor (traditional Bengali wedding crown)"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bengali Wedding Ceremonies */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">Traditional Bengali Ceremonies</h2>
              <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
                Every ritual planned with cultural precision and spiritual significance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Aashirbaad & Aiburo Bhaat",
                  description:
                    "Pre-wedding blessings ceremony where the bride and groom are fed by married women, symbolizing their last meal as unmarried individuals.",
                  rituals: ["Turmeric paste application", "Traditional Bengali feast", "Family blessings"],
                },
                {
                  title: "Dodhi Mangal",
                  description:
                    "Early morning ritual where the bride/groom is bathed with holy Ganges water, turmeric, and curd before the wedding day.",
                  rituals: ["Sacred bath ceremony", "Conch shell blowing", "Traditional songs"],
                },
                {
                  title: "Bor Jatri & Bor Boron",
                  description:
                    "Groom's procession arrival and the bride's mother's welcome ritual with the traditional aarti and offering of sweets.",
                  rituals: ["Groom arrives in palanquin", "Mother's aarti", "Topor ceremony"],
                },
                {
                  title: "Subho Drishti",
                  description:
                    "The sacred first look where bride and groom see each other for the first time, with the bride lifted on a wooden stool.",
                  rituals: ["Bride on piri (wooden stool)", "Betel leaf covering face", "Seven circles around groom"],
                },
                {
                  title: "Mala Badal & Saat Paak",
                  description:
                    "Exchange of garlands followed by seven circles around each other, symbolizing seven lifetimes together.",
                  rituals: ["Garland exchange", "Seven circles", "Sindoor daan"],
                },
                {
                  title: "Bou Bhaat",
                  description:
                    "Post-wedding reception at bride's home where the new bride is formally introduced to her family as a married woman.",
                  rituals: ["Traditional Bengali feast", "Games and rituals", "Gift giving"],
                },
              ].map((ceremony, index) => (
                <div key={index} className="bg-cream rounded-xl p-8 border border-charcoal/10">
                  <h3 className="font-serif text-2xl text-charcoal mb-3">{ceremony.title}</h3>
                  <p className="text-charcoal/70 mb-4 leading-relaxed">{ceremony.description}</p>
                  <ul className="space-y-2">
                    {ceremony.rituals.map((ritual, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-charcoal/60">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{ritual}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us for Bengali Weddings */}
        <section className="py-20 px-6 bg-gradient-to-br from-sage/10 to-cream">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
                Why Bengali Families Trust CeremonyVerse
              </h2>
              <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
                Deep cultural understanding meets modern planning expertise
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-serif text-2xl text-charcoal mb-3">Cultural Authenticity</h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  Our team includes Bengali cultural consultants who understand the nuances of traditional rituals, from
                  the correct way to drape a laal-paar saree to the timing of each ceremony according to the panjika
                  (Bengali calendar).
                </p>
                <ul className="space-y-2">
                  {[
                    "Authentic Bengali priest coordination",
                    "Traditional attire sourcing from Kolkata",
                    "Proper ritual timing and sequence",
                    "Bengali cuisine expertise",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-charcoal/60">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <Calendar className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-serif text-2xl text-charcoal mb-3">Complete Planning Support</h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  From finding the perfect venue that can accommodate traditional Bengali setup to coordinating with
                  specialized vendors, we handle every detail of your multi-day celebration.
                </p>
                <ul className="space-y-2">
                  {[
                    "Panjika consultation for auspicious dates",
                    "Traditional decoration (alpana, flowers)",
                    "Bengali sweet and food catering",
                    "Photography capturing key moments",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-charcoal/60">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-primary/10 to-sage/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">
              Ready to Plan Your Perfect Bengali Biye?
            </h2>
            <p className="text-xl text-charcoal/70 mb-8">
              Let's create a celebration that honors your heritage and creates memories for generations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-[#d4a574] hover:bg-[#c49564] text-white">
                  Schedule Free Consultation
                </Button>
              </Link>
              <Link href="/vendors">
                <Button size="lg" variant="outline">
                  Browse Bengali Vendors
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
