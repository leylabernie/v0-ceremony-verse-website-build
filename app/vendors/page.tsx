import Navigation from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, MapPin, Phone, Mail, Globe, Search } from "@/components/icons"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Verified Wedding Vendors Directory | CeremonyVerse - Trusted Indian Wedding Suppliers",
  description:
    "Browse our curated directory of verified wedding vendors specializing in Indian and fusion weddings. All suppliers pass our three-tier verification process for quality and authenticity.",
  keywords:
    "Indian wedding vendors, verified wedding suppliers, South Asian wedding vendors, fusion wedding vendors, Indian wedding planners, bridal wear suppliers, wedding decorators",
}

export default function VendorsPage() {
  const vendors = [
    {
      name: "Regal Bridal Couture",
      category: "Bridal Wear",
      location: "Mumbai, India",
      rating: 4.9,
      reviews: 127,
      verified: true,
      specialties: ["Lehengas", "Sarees", "Custom Design"],
      description: "Premium bridal wear specializing in traditional and contemporary fusion designs.",
      phone: "+91 22 1234 5678",
      email: "info@regalbridalcouture.com",
      website: "www.regalbridalcouture.com",
      image: "/indian-bridal-lehenga-shop.jpg",
    },
    {
      name: "Mandap Magic Decor",
      category: "Decorations",
      location: "Delhi, India",
      rating: 4.8,
      reviews: 89,
      verified: true,
      specialties: ["Mandap Design", "Floral Arrangements", "Stage Decor"],
      description:
        "Creating stunning mandaps and wedding decor that blend traditional elegance with modern aesthetics.",
      phone: "+91 11 9876 5432",
      email: "contact@mandapmagic.com",
      website: "www.mandapmagic.com",
      image: "/indian-wedding-mandap-decoration.jpg",
    },
    {
      name: "Heritage Jewels",
      category: "Jewelry",
      location: "Jaipur, India",
      rating: 5.0,
      reviews: 156,
      verified: true,
      specialties: ["Kundan", "Polki", "Temple Jewelry"],
      description:
        "Authentic handcrafted jewelry from Rajasthan's master artisans. Each piece tells a story of tradition.",
      phone: "+91 141 2345 6789",
      email: "sales@heritagejewels.com",
      website: "www.heritagejewels.com",
      image: "/indian-bridal-jewelry-kundan.jpg",
    },
    {
      name: "Bollywood Beats DJ",
      category: "Entertainment",
      location: "New York, USA",
      rating: 4.9,
      reviews: 94,
      verified: true,
      specialties: ["Bollywood Music", "Western Hits", "Live Dhol"],
      description:
        "Professional DJ service specializing in Indian-American fusion weddings. Seamless blend of cultures.",
      phone: "+1 212 555 0123",
      email: "bookings@bollywoodbeats.com",
      website: "www.bollywoodbeats.com",
      image: "/indian-wedding-dj-setup.jpg",
    },
    {
      name: "Spice Route Catering",
      category: "Catering",
      location: "San Francisco, USA",
      rating: 4.8,
      reviews: 112,
      verified: true,
      specialties: ["North Indian", "South Indian", "Fusion Cuisine"],
      description: "Authentic Indian cuisine with modern presentation. Customizable menus for all dietary preferences.",
      phone: "+1 415 555 0456",
      email: "events@spiceroutecatering.com",
      website: "www.spiceroutecatering.com",
      image: "/indian-wedding-catering-buffet.jpg",
    },
    {
      name: "Mehndi Masters",
      category: "Mehndi Artists",
      location: "Chicago, USA",
      rating: 5.0,
      reviews: 203,
      verified: true,
      specialties: ["Bridal Mehndi", "Arabic Designs", "Contemporary Patterns"],
      description:
        "Expert mehndi artists creating intricate designs. Available for intimate ceremonies or large events.",
      phone: "+1 312 555 0789",
      email: "book@mehndimasters.com",
      website: "www.mehndimasters.com",
      image: "/indian-bridal-mehndi-henna-design.jpg",
    },
  ]

  const categories = ["All", "Bridal Wear", "Decorations", "Jewelry", "Entertainment", "Catering", "Mehndi Artists"]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-foreground mb-6 leading-tight">
              Verified Wedding <span className="text-primary italic">Vendors</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Every vendor in our directory has passed our rigorous three-tier verification process. Shop with
              confidence knowing quality and authenticity are guaranteed.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search vendors by name, location, or specialty..."
                  className="pl-12 h-14 text-lg"
                />
              </div>
              <Button size="lg" className="h-14 px-8">
                Search
              </Button>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Verification Badge Info */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Quality Verified</h3>
                <p className="text-sm text-muted-foreground">
                  All vendors undergo quality checks including portfolio review and past client verification.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Authenticity Guaranteed</h3>
                <p className="text-sm text-muted-foreground">
                  We verify business credentials, certifications, and authenticity of products and services.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Escrow Protected</h3>
                <p className="text-sm text-muted-foreground">
                  All transactions over $5,000 are protected through our secure escrow payment system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vendors Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vendors.map((vendor, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 bg-muted">
                  <img
                    src={vendor.image || "/placeholder.svg"}
                    alt={`${vendor.name} - ${vendor.category}`}
                    className="w-full h-full object-cover"
                  />
                  {vendor.verified && (
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <CheckCircle className="h-3 w-3" />
                      Verified
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-1">{vendor.name}</h3>
                    <p className="text-sm text-primary font-medium">{vendor.category}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="font-semibold">{vendor.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({vendor.reviews} reviews)</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {vendor.location}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">{vendor.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {vendor.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      {vendor.phone}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      {vendor.email}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <Globe className="h-4 w-4" />
                      <a
                        href={`https://${vendor.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {vendor.website}
                      </a>
                    </div>
                  </div>

                  <Button className="w-full bg-transparent" variant="outline">
                    View Full Profile
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-foreground leading-tight">
            Need Help Finding the <span className="text-primary italic">Perfect Vendors?</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our wedding coordinators can match you with verified vendors that fit your style, budget, and vision.
          </p>
          <div className="pt-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 text-lg h-14 px-10 rounded-full"
              >
                Get Personalized Vendor Recommendations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
