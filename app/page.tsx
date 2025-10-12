import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Shield, Check, Sparkles, Star, Heart, Calendar } from "@/components/icons"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Clean & Visual */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary/10 border border-secondary/20 rounded-full">
                <Sparkles className="h-3.5 w-3.5 text-secondary" />
                <span className="text-xs font-semibold text-secondary tracking-wide uppercase">
                  Luxury Fusion Weddings
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-foreground leading-tight">
                Your Heritage.
                <br />
                <span className="text-secondary">Your Harmony.</span>
                <br />
                <span className="text-primary italic">Your Perfect Day.</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Expert wedding planning for Indian-American couples seeking authentic fusion celebrations.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  size="lg"
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-base h-14 px-8 rounded-full shadow-lg hover:shadow-xl transition-all font-semibold"
                >
                  <Link href="/contact">
                    Book Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-base h-14 px-8 rounded-full border-2 hover:bg-secondary/10 transition-all font-semibold bg-transparent"
                >
                  <Link href="/services">View Services</Link>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-secondary" />
                  <span className="font-medium">Escrow Protected</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary" />
                  <span className="font-medium">Verified Suppliers</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Star className="h-4 w-4 text-accent fill-accent" />
                  <span className="font-medium">5-Star Service</span>
                </div>
              </div>
            </div>

            {/* Right - Hero Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/beach-wedding-couple-mandap.jpg"
                  alt="Beautiful fusion wedding ceremony"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Grid - Visual & Interactive */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground mb-3">
              Everything You Need for Your Perfect Day
            </h2>
            <p className="text-muted-foreground text-lg">One partner. Complete peace of mind.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service Card 1 */}
            <Link href="/services" className="group">
              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 hover:shadow-lg transition-all">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-2">Full Planning</h3>
                <p className="text-sm text-muted-foreground">Complete coordination from start to finish</p>
              </div>
            </Link>

            {/* Service Card 2 */}
            <Link href="/services" className="group">
              <div className="bg-card rounded-xl p-6 border border-border hover:border-secondary/40 hover:shadow-lg transition-all">
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-2">Cultural Fusion</h3>
                <p className="text-sm text-muted-foreground">Authentic traditions meet modern style</p>
              </div>
            </Link>

            {/* Service Card 3 */}
            <Link href="/services" className="group">
              <div className="bg-card rounded-xl p-6 border border-border hover:border-accent/40 hover:shadow-lg transition-all">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-2">Verified Vendors</h3>
                <p className="text-sm text-muted-foreground">Quality-assured suppliers worldwide</p>
              </div>
            </Link>

            {/* Service Card 4 */}
            <Link href="/services" className="group">
              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 hover:shadow-lg transition-all">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-2">Virtual Shopping</h3>
                <p className="text-sm text-muted-foreground">Shop authentic items from anywhere</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Gallery - Large Visual Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-4">
              Real Weddings, Real Joy
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See how we've helped couples create unforgettable fusion celebrations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: "/mehndi-ceremony-bride-green-lehenga.jpg", title: "Mehndi Celebration" },
              { img: "/bride-pastel-mint-pink-lehenga.jpg", title: "Bridal Portrait" },
              { img: "/sangeet-dance-couple-celebration.jpg", title: "Sangeet Night" },
              { img: "/garden-couple-traditional-attire.jpg", title: "Garden Ceremony" },
              { img: "/beach-sunset-wedding-couple.jpg", title: "Beach Wedding" },
              { img: "/rose-garden-pastel-couple.jpg", title: "Reception" },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative aspect-[4/5] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <Image
                  src={item.img || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-serif text-2xl text-white">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild className="rounded-full bg-transparent">
              <Link href="/gallery">
                View Full Gallery
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof - Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-4">
              Loved by Couples Worldwide
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "CeremonyVerse made our dream fusion wedding a reality. The escrow system gave us complete peace of mind.",
                author: "Priya & Michael",
                location: "San Francisco, CA",
              },
              {
                quote: "As busy professionals, we needed someone to handle everything. Our coordinator was incredible!",
                author: "Anjali & Rajesh",
                location: "Austin, TX",
              },
              {
                quote:
                  "The quality of every item exceeded our expectations. Truly a luxury experience from start to finish.",
                author: "Zara & Omar",
                location: "Mexico City",
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-card rounded-xl p-8 border border-border shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strong CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-6">
            Ready to Start Planning Your Perfect Day?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a complimentary consultation to discuss your vision and discover how we can bring it to life.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg h-16 px-12 rounded-full shadow-xl"
          >
            <Link href="/contact">
              Book Your Free Consultation
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground mt-6 italic">
            No obligation. Just honest conversation about your perfect day.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
