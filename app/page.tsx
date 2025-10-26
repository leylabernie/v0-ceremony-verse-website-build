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
import HeroSection from "@/components/hero-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Now a Client Component */}
      <HeroSection />

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
