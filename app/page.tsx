import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Shield, Check, Sparkles, Star, Heart, Calendar } from "@/components/icons"
import Image from "next/image"
import InstagramFeed from "@/components/instagram-feed"
import GoogleReviewsWidget from "@/components/google-reviews-widget"
import AnimatedStats from "@/components/animated-stats"
import FadeInSection from "@/components/fade-in-section"
import InteractiveProcess from "@/components/interactive-process"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Kalki Fashion Style: Full-width image with centered text overlay */}
      <section className="relative h-[90vh] min-h-[600px]">
        {/* Background Video - Optimized Loading */}
        <div className="absolute inset-0">
          <video
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/edDYlmwPdmgQyNZgdg88F_output-X8anb1c6FUAcekBlxo22B3zxTtG9KH.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
            aria-label="Beautiful Indian-American fusion wedding celebration"
          />
          {/* Elegant dark overlay - Kalki style */}
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/30 to-charcoal/60" />
        </div>

        {/* Centered Content - Boho minimalist approach */}
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center max-w-4xl space-y-8">
            {/* Small elegant badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-xs font-sans font-medium text-white tracking-[0.2em] uppercase">
                Indian-American Fusion Weddings
              </span>
            </div>

            {/* Large, elegant typography - Boho style */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extralight leading-[1.1] text-white tracking-tight">
              Your Heritage,
              <br />
              <span className="text-accent">Your Harmony</span>
            </h1>

            {/* Minimal subtitle - Boho approach */}
            <p className="text-lg sm:text-xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto">
              Where tradition meets modernity in perfect celebration
            </p>

            {/* Clean CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                asChild
                className="bg-white text-charcoal hover:bg-white/90 text-base h-14 px-10 font-medium tracking-wide"
              >
                <Link href="/contact">
                  Begin Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-white text-white hover:bg-white hover:text-charcoal text-base h-14 px-10 font-medium tracking-wide bg-transparent"
              >
                <Link href="/gallery">Explore Our Work</Link>
              </Button>
            </div>

            {/* Minimal trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span className="font-light">Escrow Protected</span>
              </div>
              <div className="w-px h-4 bg-white/30" />
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span className="font-light">Verified Vendors</span>
              </div>
              <div className="w-px h-4 bg-white/30" />
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span className="font-light">Now Booking 2025-2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Animated Numbers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-warm-beige/30">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <AnimatedStats />
          </FadeInSection>
        </div>
      </section>

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

          {/* Kalki-style grid with image-focused cards - NO DUPLICATE IMAGES */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Card 1 - Image based like Kalki products */}
            <Link href="/services" className="group">
              <div className="relative overflow-hidden bg-cream">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src="/mehndi-ceremony-bride-green-lehenga.jpg"
                    alt="Full Wedding Planning"
                    width={400}
                    height={533}
                    loading="lazy"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-2xl font-light mb-2 text-charcoal tracking-wide">Full Planning</h3>
                  <p className="text-sm text-charcoal/60 font-light leading-relaxed">
                    End-to-end coordination
                  </p>
                </div>
              </div>
            </Link>

            {/* Service Card 2 */}
            <Link href="/services" className="group">
              <div className="relative overflow-hidden bg-cream">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src="/garden-couple-traditional-attire.jpg"
                    alt="Cultural Fusion"
                    width={400}
                    height={533}
                    loading="lazy"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-2xl font-light mb-2 text-charcoal tracking-wide">Cultural Fusion</h3>
                  <p className="text-sm text-charcoal/60 font-light leading-relaxed">
                    Tradition meets modernity
                  </p>
                </div>
              </div>
            </Link>

            {/* Service Card 3 */}
            <Link href="/services" className="group">
              <div className="relative overflow-hidden bg-cream">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src="/beach-sunset-wedding-couple.jpg"
                    alt="Verified Vendors"
                    width={400}
                    height={533}
                    loading="lazy"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-2xl font-light mb-2 text-charcoal tracking-wide">Verified Vendors</h3>
                  <p className="text-sm text-charcoal/60 font-light leading-relaxed">
                    Quality-assured partners
                  </p>
                </div>
              </div>
            </Link>

            {/* Service Card 4 */}
            <Link href="/services" className="group">
              <div className="relative overflow-hidden bg-cream">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src="/rose-garden-pastel-couple.jpg"
                    alt="Virtual Shopping"
                    width={400}
                    height={533}
                    loading="lazy"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-2xl font-light mb-2 text-charcoal tracking-wide">Virtual Shopping</h3>
                  <p className="text-sm text-charcoal/60 font-light leading-relaxed">
                    Shop from anywhere
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Gallery - Kalki Fashion masonry-style grid */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            {/* Boho minimalist heading with decorative line */}
            <div className="text-center mb-20">
              <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-extralight text-charcoal mb-6 tracking-tight">
                Celebrations
              </h2>
              <div className="w-24 h-px bg-accent mx-auto mb-6" />
              <p className="text-charcoal/60 text-lg font-light max-w-2xl mx-auto">
                Every moment, beautifully crafted
              </p>
            </div>
          </FadeInSection>

          {/* Kalki-style varied grid layout - UNIQUE IMAGES ONLY */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Large featured image */}
            <Link href="/gallery" className="col-span-2 row-span-2 group relative overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src="/sangeet-dance-couple-celebration.jpg"
                  alt="Sangeet Celebration"
                  width={800}
                  height={800}
                  loading="lazy"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="font-serif text-3xl text-white font-light tracking-wide">Sangeet Celebration</h3>
                  </div>
                </div>
              </div>
            </Link>

            {/* Standard images - ALL UNIQUE */}
            {[
              { img: "/bride-pastel-mint-pink-lehenga.jpg", title: "Bridal Portrait" },
              { img: "/indian-bride-and-groom-portrait.jpg", title: "Couple Portrait" },
              { img: "/south-asian-couple-wedding-photo.jpg", title: "Traditional Ceremony" },
              { img: "/elegant-wedding-couple-portrait.jpg", title: "Reception" },
            ].map((item, i) => (
              <Link
                key={i}
                href="/gallery"
                className="group relative overflow-hidden aspect-square"
              >
                <Image
                  src={item.img || "/placeholder.svg"}
                  alt={item.title}
                  width={400}
                  height={400}
                  loading="lazy"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-serif text-lg text-white font-light">{item.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Minimal CTA button - Boho style */}
          <div className="text-center mt-16">
            <Button 
              variant="outline" 
              size="lg" 
              asChild 
              className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white h-14 px-10 font-light tracking-wide bg-transparent"
            >
              <Link href="/gallery">
                View All Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
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
