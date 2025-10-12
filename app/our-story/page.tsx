import Link from "next/link"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
            Our Story: From Overwhelmed Brides to Your Trusted Partners
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We understand the unique challenges of planning a fusion wedding because we've lived them.
          </p>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
                It Started With My Own Wedding
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  When I began planning my wedding, I quickly realized I was caught between two worlds. I wanted to
                  honor my Indian heritage with traditional ceremonies and authentic elements, but I also wanted to
                  create something that felt true to my American upbringing.
                </p>
                <p>
                  The challenge wasn't just cultural—it was logistical. Coordinating vendors across continents, ensuring
                  quality without being able to see items in person, navigating time zones for consultations, and
                  worrying constantly about whether everything would arrive on time and meet expectations.
                </p>
                <p>
                  I spent countless hours researching suppliers in India, reading reviews, sending messages that went
                  unanswered, and feeling overwhelmed by the sheer complexity of it all. There were moments when I
                  considered giving up on the traditional elements entirely.
                </p>
                <p>
                  But I didn't. And when my wedding day arrived, it was everything I'd dreamed of—a beautiful blend of
                  heritage and harmony. That experience taught me something invaluable: fusion weddings shouldn't
                  require brides to become international logistics experts.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generated%20Image%20October%2011%2C%202025%20-%202_14PM-NU012Ayyzyj7XcPBV7XgVpFlvvFJEi.png"
                alt="CeremonyVerse Founder - Professional portrait"
                className="w-full h-full object-cover object-[center_20%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-6 bg-gradient-to-b from-card via-secondary/5 to-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8">Our Mission</h2>
          <p className="text-2xl text-muted-foreground leading-relaxed mb-12">
            To make authentic, beautiful fusion weddings accessible to every couple—without the stress, uncertainty, or
            compromise.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent/30 to-accent/10 rounded-full flex items-center justify-center shadow-sm">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-foreground">Authenticity</h3>
              <p className="text-muted-foreground leading-relaxed">
                We source only from verified suppliers who understand and respect cultural traditions.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-full flex items-center justify-center shadow-sm">
                <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-foreground">Security</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every transaction is protected by escrow, giving you complete peace of mind.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent/30 via-secondary/20 to-accent/10 rounded-full flex items-center justify-center shadow-sm">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-foreground">Partnership</h3>
              <p className="text-muted-foreground leading-relaxed">
                We're not just a service—we're your advocate, advisor, and ally throughout the journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Principles */}
      <section className="py-20 px-6 bg-gradient-to-b from-background via-secondary/5 to-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-center mb-16">Our Guiding Principles</h2>
          <div className="space-y-12">
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
                1
              </div>
              <div>
                <h3 className="font-serif text-2xl text-foreground mb-3">Radical Transparency</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We show you exactly how suppliers are verified, what you're paying for, and what to expect at every
                  stage. No hidden fees, no surprises, no fine print.
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
                2
              </div>
              <div>
                <h3 className="font-serif text-2xl text-foreground mb-3">Quality Over Quantity</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We work with a carefully curated network of suppliers who meet our rigorous standards. We'd rather say
                  no than compromise on quality.
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
                3
              </div>
              <div>
                <h3 className="font-serif text-2xl text-foreground mb-3">Cultural Respect</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We understand that wedding traditions carry deep meaning. We approach every ceremony, ritual, and
                  custom with the reverence it deserves.
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-secondary to-accent/80 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
                4
              </div>
              <div>
                <h3 className="font-serif text-2xl text-foreground mb-3">Your Advocate, Always</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When issues arise, we don't just facilitate—we advocate. Your satisfaction is our success, and we'll
                  work tirelessly to make things right.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-accent/15 via-background to-secondary/15">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Let's Plan Your Perfect Day Together</h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Schedule a free consultation to discuss your vision and learn how we can bring it to life.
          </p>
          <Button
            asChild
            className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white px-12 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <Link href="/contact">Schedule Your Free Consultation</Link>
          </Button>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  )
}
