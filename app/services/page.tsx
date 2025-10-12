import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Video, ShoppingBag, Sparkles, Music, Utensils, Camera, Flower2, Car, Palette, Gift } from "lucide-react"
import Image from "next/image"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-gradient-to-br from-secondary/10 via-background to-accent/5">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight text-balance">
            Complete Wedding Planning Services
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-pretty">
            From concept to execution, ensuring every detail is perfect for your special day
          </p>
          <div className="mt-10">
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 text-lg"
            >
              <Link href="/contact">Start Planning Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Wedding Planning Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <img
                src="/wedding-planner-consulting-with-couple-in-bright-e.jpg"
                alt="Wedding planning consultation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Wedding Planning</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Complete wedding planning services from concept to execution, ensuring every detail is perfect for your
                special day.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Full-service wedding coordination</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Vendor selection and management</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Timeline and logistics planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Day-of coordination services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Photography Section */}
      <section className="py-20 bg-gradient-to-b from-accent/5 to-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full mb-6">
                <Camera className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Capture Every Moment</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Photography</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Professional wedding photography capturing every precious moment with artistic excellence and timeless
                elegance.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Engagement photo sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Wedding day coverage</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Professional photo editing</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Digital gallery delivery</span>
                </li>
              </ul>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/professional-videographer-filming-bride-at-elegant.jpg"
                alt="Wedding photography and videography"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Entertainment Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <img
                src="/live-band-performing-at-elegant-wedding-reception-.jpg"
                alt="Wedding entertainment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full mb-6">
                <Music className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-secondary">Live Entertainment</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Entertainment</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Premium DJ services, live music, and entertainment options to keep your celebration lively and
                memorable.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Professional DJ services</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Live music performances</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Sound system setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Custom playlist creation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Catering Section */}
      <section className="py-20 bg-gradient-to-b from-accent/5 to-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full mb-6">
                <Utensils className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Culinary Excellence</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Catering</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Exquisite culinary experiences with custom menus crafted by our renowned chefs for your wedding
                celebration.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Custom menu planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Professional catering staff</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Elegant presentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Dietary accommodation</span>
                </li>
              </ul>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/elegant-wedding-catering-display-with-colorful-app.jpg"
                alt="Wedding catering"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Tiers Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-6 text-balance">
              Choose Your Planning Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Each service tier includes our signature verification process, escrow protection, and dedicated support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {/* Essential Coordination */}
            <div className="bg-background border-2 border-secondary/30 rounded-2xl p-10 hover:shadow-2xl transition-all hover:scale-[1.02] hover:border-secondary/50">
              <div className="mb-8">
                <h3 className="font-serif text-3xl text-foreground mb-3">Essential Coordination</h3>
                <p className="text-muted-foreground mb-6 text-lg">Perfect for couples who have a clear vision</p>
                <div className="text-5xl font-serif text-secondary mb-2">$3,500</div>
                <p className="text-sm text-muted-foreground">Starting price</p>
              </div>

              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-base">3 months of planning support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-base">Vendor recommendations & vetting</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-base">Timeline & checklist management</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-base">Day-of coordination (8 hours)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-base">Escrow payment protection</span>
                </li>
              </ul>

              <Button
                variant="outline"
                size="lg"
                className="w-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent text-base"
              >
                Learn More
              </Button>
            </div>

            {/* Heritage & Harmony Plan (Featured) */}
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent rounded-2xl p-10 hover:shadow-2xl transition-all hover:scale-[1.02] relative">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-6 py-2 rounded-full text-base font-semibold shadow-lg">
                Most Popular
              </div>

              <div className="mb-8">
                <h3 className="font-serif text-3xl text-foreground mb-3">Heritage & Harmony Plan</h3>
                <p className="text-muted-foreground mb-6 text-lg">Our signature full-service experience</p>
                <div className="text-5xl font-serif text-accent mb-2">$8,500</div>
                <p className="text-sm text-muted-foreground">Starting price</p>
              </div>

              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-base">6-12 months comprehensive planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-base">Dedicated wedding coordinator</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-base">Curated verified vendor network</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-base">Cultural consultation & ceremony design</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-base">Budget management & contract review</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-base">Full day-of coordination (12+ hours)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-base">Escrow protection + quality guarantee</span>
                </li>
              </ul>

              <Button
                asChild
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-base"
              >
                <Link href="/heritage-harmony">View Full Details</Link>
              </Button>
            </div>

            {/* Luxury Concierge */}
            <div className="bg-background border-2 border-primary/20 rounded-2xl p-10 hover:shadow-2xl transition-all hover:scale-[1.02] hover:border-primary/40">
              <div className="mb-8">
                <h3 className="font-serif text-3xl text-foreground mb-3">Luxury Concierge</h3>
                <p className="text-muted-foreground mb-6 text-lg">White-glove service for elaborate celebrations</p>
                <div className="text-5xl font-serif text-foreground mb-2">$15,000+</div>
                <p className="text-sm text-muted-foreground">Custom pricing</p>
              </div>

              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-base">12+ months unlimited planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-base">Lead planner + assistant team</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-base">Multi-day event coordination</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-base">Destination wedding expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-base">Guest travel & accommodation coordination</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-base">Custom design & decor curation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-base">Premium escrow + insurance coverage</span>
                </li>
              </ul>

              <Button
                variant="outline"
                size="lg"
                className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent text-base"
              >
                Request Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Shopping Service Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-accent/10 via-accent/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(217,158,98,0.15),transparent_50%)]" />

        <div className="container mx-auto px-6 max-w-7xl relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Signature Service
            </div>
            <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-6 leading-tight">
              Virtual Shopping Concierge
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience authentic South Asian wedding shopping from anywhere in the world. We curate, source, and
              coordinate every detail according to your preferences and budget—all through live video consultations with
              verified suppliers.
            </p>
          </div>

          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/luxury-indian-bridal-jewelry-gold-kundan-necklac.jpg"
                  alt="Luxury Indian bridal jewelry"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/elegant-indian-wedding-lehenga-red-and-gold-embr.jpg"
                  alt="Elegant Indian wedding lehenga"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="bg-background rounded-2xl p-10 shadow-lg border-2 border-secondary/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                  <Video className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-serif text-3xl text-foreground">How It Works</h3>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center shrink-0 font-medium text-secondary">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Share Your Vision</h4>
                    <p className="text-muted-foreground text-sm">
                      Tell us your style preferences, budget, and cultural requirements through our detailed
                      questionnaire.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center shrink-0 font-medium text-secondary">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Live Virtual Shopping</h4>
                    <p className="text-muted-foreground text-sm">
                      Join live video sessions with our verified suppliers. See fabrics, try colors, and make decisions
                      in real-time.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center shrink-0 font-medium text-secondary">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Quality Assurance</h4>
                    <p className="text-muted-foreground text-sm">
                      We coordinate measurements, approve samples, and conduct pre-shipment inspections on your behalf.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center shrink-0 font-medium text-secondary">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Secure Delivery</h4>
                    <p className="text-muted-foreground text-sm">
                      All purchases protected by escrow payment system. Funds released only after your approval.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-secondary/10 rounded-lg border-2 border-secondary/30">
                <p className="text-sm text-muted-foreground flex items-start gap-2">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>
                    <strong>Trust Guarantee:</strong> Every supplier is verified through our three-tier process. Your
                    payments are held in escrow until you confirm satisfaction.
                  </span>
                </p>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-10 shadow-lg border-2 border-accent/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-3xl text-foreground">What We Source</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Wedding Attire
                  </h4>
                  <ul className="space-y-2 ml-4 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      Bride & Groom outfits (lehengas, sherwanis, sarees, suits)
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      Bridal party attire coordination
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      Family outfits for all events
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      Pet outfits & accessories
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Jewelry & Accessories
                  </h4>
                  <ul className="space-y-2 ml-4 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      Bridal jewelry sets (gold, kundan, polki, temple jewelry)
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      Accessories (dupattas, clutches, footwear, bindis)
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Wedding Essentials
                  </h4>
                  <ul className="space-y-2 ml-4 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      Custom invitations & save the dates
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      Personalized welcome bags & wedding favors
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      Traditional sweets & mithai boxes
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      Ceremony items (garlands, coconuts, puja supplies)
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Coordination Services
                  </h4>
                  <ul className="space-y-2 ml-4 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      Vendor selection & contract negotiation
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      Travel arrangements & logistics
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground italic">
                    <strong>Also Available:</strong> Baby showers, baby announcements, anniversary celebrations, and
                    birthday parties
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 text-lg shadow-lg"
            >
              <Link href="/contact">Start Your Virtual Shopping Experience</Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Complimentary consultation • Custom packages available • Escrow protected
            </p>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-24 bg-gradient-to-b from-secondary/5 to-muted/20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-6 text-balance">Additional Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Enhance your wedding with these specialized services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all hover:scale-[1.02]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center">
                  <Flower2 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-serif text-3xl text-foreground">Floral Design</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Stunning floral arrangements and decorations that bring your wedding vision to life.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all hover:scale-[1.02]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center">
                  <Car className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-serif text-3xl text-foreground">Transportation</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Luxury transportation services for the wedding party and special guests.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all hover:scale-[1.02]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center">
                  <Palette className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-serif text-3xl text-foreground">Venue Styling</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Complete venue transformation with linens, lighting, and decorative elements.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all hover:scale-[1.02]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center">
                  <Gift className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-serif text-3xl text-foreground">Wedding Favors</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Personalized wedding favors and gifts that guests will treasure forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Wedding Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Our Wedding Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From the first consultation to your perfect day, here's how we make your dream wedding come true
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/70 rounded-full flex items-center justify-center shrink-0 text-secondary-foreground font-semibold text-lg shadow-lg">
                1
              </div>
              <div>
                <h3 className="font-serif text-2xl text-foreground mb-2">Initial Consultation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We meet to discuss your vision, preferences, budget, and timeline. This is where we get to know you
                  and understand what makes your love story unique.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center shrink-0 text-accent-foreground font-semibold text-lg shadow-lg">
                2
              </div>
              <div>
                <h3 className="font-serif text-2xl text-foreground mb-2">Planning & Design</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We create a comprehensive plan including vendor selection, design concepts, timeline, and budget
                  management. Every detail is carefully curated to match your vision.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/70 rounded-full flex items-center justify-center shrink-0 text-secondary-foreground font-semibold text-lg shadow-lg">
                3
              </div>
              <div>
                <h3 className="font-serif text-2xl text-foreground mb-2">Coordination & Execution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We manage all vendor communications, handle logistics, and ensure everything runs smoothly. You can
                  relax and enjoy your engagement while we handle the details.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center shrink-0 text-accent-foreground font-semibold text-lg shadow-lg">
                4
              </div>
              <div>
                <h3 className="font-serif text-2xl text-foreground mb-2">Your Perfect Day</h3>
                <p className="text-muted-foreground leading-relaxed">
                  On your wedding day, our team ensures flawless execution from start to finish. We handle any issues
                  that arise so you can focus on celebrating with your loved ones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add-On Services Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/10 to-muted/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Enhance Your Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Customize your package with specialized services designed to elevate every detail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background rounded-lg p-8 border-2 border-accent/10 hover:border-accent/30 transition-colors">
              <h3 className="font-serif text-2xl text-foreground mb-3">Cultural Ceremony Design</h3>
              <p className="text-muted-foreground mb-4">
                Expert guidance on traditional rituals, customs, and ceremony structure for Hindu, Sikh, Muslim, or
                interfaith weddings. Includes script writing and officiant coordination.
              </p>
              <p className="text-accent font-medium">Starting at $1,200</p>
            </div>

            <div className="bg-background rounded-lg p-8 border-2 border-accent/10 hover:border-accent/30 transition-colors">
              <h3 className="font-serif text-2xl text-foreground mb-3">Vendor Sourcing & Vetting</h3>
              <p className="text-muted-foreground mb-4">
                Access our three-tier verified supplier network. We handle all research, vetting, negotiations, and
                contract reviews to ensure quality and authenticity.
              </p>
              <p className="text-accent font-medium">Starting at $800</p>
            </div>

            <div className="bg-background rounded-lg p-8 border-2 border-accent/10 hover:border-accent/30 transition-colors">
              <h3 className="font-serif text-2xl text-foreground mb-3">Guest Management System</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive RSVP tracking, seating arrangements, dietary accommodations, and communication management
                for weddings of any size.
              </p>
              <p className="text-accent font-medium">Starting at $600</p>
            </div>

            <div className="bg-background rounded-lg p-8 border-2 border-accent/10 hover:border-accent/30 transition-colors">
              <h3 className="font-serif text-2xl text-foreground mb-3">Rehearsal Coordination</h3>
              <p className="text-muted-foreground mb-4">
                Full rehearsal planning and execution to ensure your ceremony flows perfectly. Includes timeline
                creation and participant guidance.
              </p>
              <p className="text-accent font-medium">Starting at $500</p>
            </div>

            <div className="bg-background rounded-lg p-8 border-2 border-accent/10 hover:border-accent/30 transition-colors">
              <h3 className="font-serif text-2xl text-foreground mb-3">Design & Styling Consultation</h3>
              <p className="text-muted-foreground mb-4">
                Professional design guidance for color palettes, decor themes, floral arrangements, and overall
                aesthetic cohesion across all events.
              </p>
              <p className="text-accent font-medium">Starting at $900</p>
            </div>

            <div className="bg-background rounded-lg p-8 border-2 border-accent/10 hover:border-accent/30 transition-colors">
              <h3 className="font-serif text-2xl text-foreground mb-3">Post-Wedding Services</h3>
              <p className="text-muted-foreground mb-4">
                Vendor payment coordination, gift tracking, thank-you card management, and preservation of wedding
                attire and keepsakes.
              </p>
              <p className="text-accent font-medium">Starting at $400</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Process Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              Every Service Includes Our Trust Guarantee
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/70 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Check className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2">Verified Suppliers Only</h3>
              <p className="text-muted-foreground">
                Three-tier verification process ensures quality, authenticity, and reliability.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Check className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2">Escrow Protection</h3>
              <p className="text-muted-foreground">
                Your payments are secured until services are delivered to your satisfaction.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Check className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2">Transparent Process</h3>
              <p className="text-muted-foreground">
                Clear communication, detailed contracts, and milestone-based progress tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-tight text-balance">
            Let's Create Your Perfect Wedding
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12 leading-relaxed max-w-3xl mx-auto text-pretty">
            Every love story is unique, and your wedding should be too. Schedule your complimentary consultation today.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-background text-foreground hover:bg-background/90 px-12 py-7 text-xl shadow-2xl"
          >
            <Link href="/contact">Schedule Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
