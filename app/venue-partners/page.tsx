import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, MapPin, Users, Star, ArrowRight } from "@/components/icons"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Venue Partners | CeremonyVerse - Trusted Wedding Venues",
  description:
    "Explore our network of verified wedding venues perfect for Indian-American fusion celebrations. From ballrooms to gardens, find your dream location.",
  keywords:
    "Indian wedding venues, fusion wedding locations, South Asian wedding venues, wedding venue partners, verified wedding venues",
}

export default function VenuePartnersPage() {
  const venues = [
    {
      name: "The Grand Ballroom at Heritage Hall",
      location: "Philadelphia, PA",
      capacity: "300-500 guests",
      features: ["Indoor/Outdoor", "Mandap Setup Available", "In-House Catering", "Parking for 200+"],
      image: "/elegant-ballroom-wedding-venue-with-chandeliers.jpg",
      priceRange: "$$$",
    },
    {
      name: "Riverside Garden Estate",
      location: "Cherry Hill, NJ",
      capacity: "150-300 guests",
      features: ["Outdoor Ceremony Space", "Waterfront Views", "Flexible Vendor Policy", "Bridal Suite"],
      image: "/garden-wedding-venue-with-flowers-and-greenery.jpg",
      priceRange: "$$",
    },
    {
      name: "Metropolitan Arts Center",
      location: "Center City, Philadelphia",
      capacity: "200-400 guests",
      features: ["Modern Architecture", "Rooftop Access", "City Views", "Full Bar Service"],
      image: "/modern-wedding-venue-with-city-views.jpg",
      priceRange: "$$$",
    },
    {
      name: "Lakeside Manor",
      location: "Bucks County, PA",
      capacity: "100-250 guests",
      features: ["Lakefront Ceremony", "Historic Mansion", "Gardens & Gazebo", "On-Site Accommodations"],
      image: "/lakeside-wedding-venue-with-gazebo.jpg",
      priceRange: "$$",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a4d6d]/5 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#0891b2]/10 text-[#0891b2] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="h-4 w-4" />
            Verified Venue Partners
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
            <span className="text-[#1a4d6d]">Venues That</span>
            <br />
            <span className="text-[#0891b2]">Understand Your Vision</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Every venue in our network has been personally vetted and has experience hosting Indian-American fusion
            weddings
          </p>
        </div>
      </section>

      {/* Why Our Venue Partners */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl text-center text-foreground mb-12">
            Why Choose a CeremonyVerse Partner Venue
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="h-12 w-12 rounded-full bg-[#1a4d6d]/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-[#1a4d6d]" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">Cultural Understanding</h3>
              <p className="text-muted-foreground leading-relaxed">
                All partner venues have hosted multiple Indian weddings and understand requirements like mandap setup,
                extended event times, and dietary restrictions.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="h-12 w-12 rounded-full bg-[#0891b2]/10 flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-[#0891b2]" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">Verified Quality</h3>
              <p className="text-muted-foreground leading-relaxed">
                We personally inspect every venue and review contracts to ensure fair pricing, transparent policies, and
                quality service standards.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="h-12 w-12 rounded-full bg-[#d4a574]/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-[#d4a574]" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">Preferred Pricing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our partnership relationships often result in better rates, flexible payment terms, and added value for
                our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Listings */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl text-foreground mb-4">Featured Venue Partners</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore venues that have successfully hosted beautiful Indian-American fusion celebrations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {venues.map((venue, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[16/10] bg-muted relative">
                  <img
                    src={venue.image || "/placeholder.svg"}
                    alt={venue.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    {venue.priceRange}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl text-foreground mb-2">{venue.name}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4" />
                    <span>{venue.location}</span>
                    <span className="mx-2">•</span>
                    <Users className="h-4 w-4" />
                    <span>{venue.capacity}</span>
                  </div>
                  <div className="space-y-2 mb-6">
                    {venue.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-[#0891b2]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-[#1a4d6d] to-[#0891b2] text-white hover:from-[#1a4d6d]/90 hover:to-[#0891b2]/90"
                  >
                    <Link href="/contact">
                      Request Venue Tour
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1a4d6d] via-[#1a4d6d]/95 to-[#0891b2]/90 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl sm:text-5xl mb-6 leading-tight">Ready to Find Your Perfect Venue?</h2>
          <p className="text-lg text-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            Schedule a consultation and we'll help you explore venues that match your vision, guest count, and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#1a4d6d] hover:bg-white/90 px-10 py-6 text-lg shadow-lg"
              asChild
            >
              <Link href="/contact">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/40 hover:bg-white/10 hover:border-white/60 bg-transparent text-white px-10 py-6 text-lg"
              asChild
            >
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
