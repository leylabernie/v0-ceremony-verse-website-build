import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Star, Heart, ArrowRight } from "@/components/icons"
import Image from "next/image"
import InstagramFeed from "@/components/instagram-feed"
import GoogleReviewsWidget from "@/components/google-reviews-widget"
import AnimatedStats from "@/components/animated-stats"
import FadeInSection from "@/components/fade-in-section"
import InteractiveProcess from "@/components/interactive-process"

import CustomHero from "@/components/custom-hero"
import RecentCelebrations from "@/components/recent-celebrations"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Now a Client Component */}
<CustomHero />

<RecentCelebrations />
      {/* Services Grid - Kalki Fashion product grid style with large images */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            {/* Boho minimalist heading */}
            <div className="text-center mb-20">
              <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-extralight text-charcoal mb-6 tracking-tight">
                Our Services
              </h2>
              <div className="w-24 h-px bg-accent mx-auto mb-6" />
              <p className="text-charcoal/60 text-lg font-light max-w-2xl mx-auto">
                Curated experiences for your celebration
              </p>
            </div>
          </FadeInSection>

          {/* 3 Main Services - Clean Text Cards */}
          <div className="grid md:grid-cols-3 gap-10">
            {/* Service Card 1 - Full Planning */}
            <Link href="/services" className="group">
              <div className="relative overflow-hidden bg-cream border-2 border-warm-beige/40 hover:border-primary transition-all duration-300 p-12 text-center h-full flex flex-col justify-center min-h-[300px]">
                <h3 className="font-serif text-4xl font-light mb-4 text-charcoal tracking-wide group-hover:text-primary transition-colors">Full Planning</h3>
                <p className="text-lg text-charcoal/70 font-light leading-relaxed">
                  Complete coordination from vision to celebration
                </p>
              </div>
            </Link>

            {/* Service Card 2 - Cultural Fusion */}
            <Link href="/services" className="group">
              <div className="relative overflow-hidden bg-cream border-2 border-warm-beige/40 hover:border-primary transition-all duration-300 p-12 text-center h-full flex flex-col justify-center min-h-[300px]">
                <h3 className="font-serif text-4xl font-light mb-4 text-charcoal tracking-wide group-hover:text-primary transition-colors">Cultural Fusion</h3>
                <p className="text-lg text-charcoal/70 font-light leading-relaxed">
                  Blending traditions with modern elegance
                </p>
              </div>
            </Link>

            {/* Service Card 3 - Virtual Shopping */}
            <Link href="/services" className="group">
              <div className="relative overflow-hidden bg-cream border-2 border-warm-beige/40 hover:border-primary transition-all duration-300 p-12 text-center h-full flex flex-col justify-center min-h-[300px]">
                <h3 className="font-serif text-4xl font-light mb-4 text-charcoal tracking-wide group-hover:text-primary transition-colors">Virtual Shopping</h3>
                <p className="text-lg text-charcoal/70 font-light leading-relaxed">
                  Live shopping from India for outfits & décor
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-extralight text-charcoal mb-6 tracking-tight">
              Our Portfolio
            </h2>
            <div className="w-24 h-px bg-accent mx-auto mb-8" />
            <p className="text-xl text-charcoal/70 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
              Explore our collection of beautiful celebrations, each uniquely crafted to honor heritage and harmony
            </p>
            <Button 
              variant="outline" 
              size="lg" 
              asChild 
              className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white h-14 px-10 font-light tracking-wide bg-transparent"
            >
              <Link href="/gallery">
                View Gallery
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </FadeInSection>
        </div>
      </section>

      {/* Testimonials - Boho minimalist single column layout */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            {/* Minimal heading */}
            <div className="text-center mb-20">
              <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-extralight text-charcoal mb-6 tracking-tight">
                Kind Words
              </h2>
              <div className="w-24 h-px bg-accent mx-auto" />
            </div>
          </FadeInSection>

          {/* Single column testimonials - Boho style - Images already unique, just optimize */}
          <div className="space-y-16">
            {[
              {
                quote:
                  "CeremonyVerse made our dream fusion wedding a reality. The escrow system gave us complete peace of mind when ordering from India.",
                author: "Priya & Michael",
                location: "San Francisco, CA",
                wedding: "Hindu-Christian Fusion, 250 guests",
              },
              {
                quote:
                  "As busy professionals, we needed someone to handle everything. Our coordinator was incredible and understood both our cultures perfectly!",
                author: "Anjali & Rajesh",
                location: "Austin, TX",
                wedding: "Traditional Indian Wedding, 400 guests",
              },
              {
                quote:
                  "The quality of every item exceeded our expectations. The virtual shopping experience from India was seamless. Truly a luxury experience from start to finish.",
                author: "Zara & Omar",
                location: "Mexico City",
                wedding: "Muslim-Hindu Fusion, 300 guests",
              },
            ].map((testimonial, i) => (
              <div key={i} className="text-center space-y-6 pb-16 border-b border-warm-beige/30 last:border-0">
                {/* Quote with elegant typography */}
                <p className="text-2xl sm:text-3xl font-serif font-light text-charcoal leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                
                {/* Small decorative separator */}
                <div className="flex items-center justify-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-1 h-1 rounded-full bg-accent" />
                  ))}
                </div>
                
                {/* Author info - Simplified without images for speed */}
                <div className="flex flex-col items-center justify-center">
                  <p className="font-serif text-lg text-charcoal font-light">{testimonial.author}</p>
                  <p className="text-sm text-charcoal/60 font-light">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Interactive Process */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal mb-4">
                Your Journey to the Perfect Day
              </h2>
              <p className="text-charcoal/70 text-lg font-sans max-w-2xl mx-auto">
                From first call to final celebration, we're with you every step of the way
              </p>
            </div>
          </FadeInSection>
          <FadeInSection delay={200}>
            <InteractiveProcess />
          </FadeInSection>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <InstagramFeed />
        </div>
      </section>

      {/* Google Reviews Widget */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 texture-cream">
        <div className="max-w-7xl mx-auto">
          <GoogleReviewsWidget />
        </div>
      </section>

      {/* CTA Section - Boho minimalist with elegant simplicity */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-extralight text-charcoal leading-tight tracking-tight">
            Let's Create
            <br />
            Something Beautiful
          </h2>
          
          <div className="w-24 h-px bg-accent mx-auto" />
          
          <p className="text-xl text-charcoal/70 font-light leading-relaxed max-w-xl mx-auto">
            Begin your journey with a complimentary consultation
          </p>
          
          <div className="pt-4">
            <Button
              size="lg"
              asChild
              className="bg-charcoal text-white hover:bg-charcoal/90 h-14 px-12 font-light tracking-wide text-base"
            >
              <Link href="/contact">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          <p className="text-sm text-charcoal/50 font-light italic">
            Thoughtful planning, exceptional celebration
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
