import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Check, Heart, Music, Sparkles } from "@/components/icons"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Punjabi Wedding Planner | Traditional Sikh Wedding Planning Services | CeremonyVerse",
  description:
    "Expert Punjabi wedding planning services. Anand Karaj ceremonies, Bhangra performances, traditional Punjabi customs. Experienced in Sikh wedding traditions. Call +1-215-341-9990",
  keywords:
    "Punjabi wedding planner, Sikh wedding planning, Anand Karaj ceremony, Bhangra wedding, traditional Punjabi wedding, Gurdwara wedding, Punjabi wedding customs",
  openGraph: {
    title: "Punjabi Wedding Planner | CeremonyVerse",
    description: "Authentic Punjabi wedding planning with deep understanding of Sikh traditions and customs",
  },
}

export default function PunjabiWeddingPlannerPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                  <Heart className="h-5 w-5 text-primary" />
                  <span className="text-sm font-semibold text-primary">Punjabi Wedding Specialists</span>
                </div>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-foreground mb-6">
                  Celebrate Your Punjabi Heritage with Authentic Traditions
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  From the sacred Anand Karaj ceremony to the vibrant Bhangra celebrations, we honor every Punjabi
                  wedding tradition with expertise and cultural authenticity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link href="/contact?service=punjabi-wedding">
                      Plan Your Punjabi Wedding
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/gallery">View Punjabi Weddings</Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/punjabi-sikh-wedding-couple-anand-karaj-ceremony.jpg"
                  alt="Beautiful Punjabi Sikh wedding couple during Anand Karaj ceremony at Gurdwara"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Traditional Ceremonies */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground mb-4">
                Traditional Punjabi Wedding Ceremonies
              </h2>
              <p className="text-lg text-muted-foreground">
                We coordinate every sacred ritual with respect and precision
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Roka & Thaka",
                  description: "Official engagement ceremony where families exchange gifts and blessings",
                  icon: Heart,
                },
                {
                  title: "Chunni Ceremony",
                  description: "Groom's family presents the bride with her wedding chunni and jewelry",
                  icon: Sparkles,
                },
                {
                  title: "Sangeet & Mehendi",
                  description: "Musical celebration with Bhangra, Giddha, and henna application",
                  icon: Music,
                },
                {
                  title: "Anand Karaj",
                  description: "Sacred Sikh wedding ceremony with four Lavaan (rounds) around Guru Granth Sahib",
                  icon: Heart,
                },
                {
                  title: "Baraat & Milni",
                  description: "Groom's procession with dhol and meeting of both families",
                  icon: Music,
                },
                {
                  title: "Doli & Vidaai",
                  description: "Emotional farewell as bride leaves her parental home",
                  icon: Heart,
                },
              ].map((ceremony, i) => (
                <div key={i} className="bg-card rounded-xl p-6 border border-border">
                  <ceremony.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-serif text-xl font-medium mb-3">{ceremony.title}</h3>
                  <p className="text-sm text-muted-foreground">{ceremony.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Expertise */}
        <section className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground mb-4">
                Why Choose Us for Your Punjabi Wedding
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                "Fluent in Punjabi and Hindi for seamless family communication",
                "Deep understanding of Sikh religious customs and Gurdwara protocols",
                "Network of authentic Punjabi vendors (dhol players, Bhangra groups, caterers)",
                "Experience coordinating 300-500 guest celebrations",
                "Expertise in traditional Punjabi cuisine and dietary requirements",
                "Coordination with Granthi Ji and Gurdwara management",
                "Authentic decor with phulkari, paranda, and traditional elements",
                "Professional management of Baraat processions and Milni ceremonies",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground mb-6">
              Ready to Plan Your Authentic Punjabi Wedding?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's create a celebration that honors your heritage and creates lasting memories
            </p>
            <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact?service=punjabi-wedding">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
