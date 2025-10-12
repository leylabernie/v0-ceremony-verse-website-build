import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "Wedding Gallery | CeremonyVerse - Real Fusion Weddings",
  description:
    "Explore stunning Indian-American fusion weddings planned by CeremonyVerse. See real celebrations blending heritage and harmony with pastel and vibrant color palettes.",
  keywords:
    "Indian wedding gallery, fusion wedding photos, South Asian wedding inspiration, pastel wedding outfits, Indian bridal fashion, wedding decor ideas",
}

export default function GalleryPage() {
  const weddings = [
    {
      image: "/beach-wedding-couple-mandap.jpg",
      title: "Beach Wedding with Floral Mandap",
    },
    {
      image: "/mehndi-ceremony-bride-green-lehenga.jpg",
      title: "Mehndi Ceremony Celebration",
    },
    {
      image: "/bride-pastel-mint-pink-lehenga.jpg",
      title: "Pastel Bridal Lehenga",
    },
    {
      image: "/sangeet-dance-couple-celebration.jpg",
      title: "Sangeet Dance Performance",
    },
    {
      image: "/garden-couple-traditional-attire.jpg",
      title: "Garden Wedding Portrait",
    },
    {
      image: "/beach-sunset-wedding-couple.jpg",
      title: "Beach Sunset Ceremony",
    },
    {
      image: "/rose-garden-pastel-couple.jpg",
      title: "Rose Garden Romance",
    },
    {
      image: "/groom-traditional-sherwani-portrait.jpg",
      title: "Rahul's Traditional Sherwani",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/5 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
            Real Weddings
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
            Celebrations We've Created
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Every wedding tells a unique story of heritage, harmony, and love
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {weddings.map((wedding, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 shadow-lg bg-muted">
                  <img
                    src={wedding.image || "/placeholder.svg"}
                    alt={wedding.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `/placeholder.svg?height=800&width=600&query=${encodeURIComponent(wedding.title)}`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="font-serif text-xl mb-2">{wedding.title}</h3>
                    <p className="text-sm text-white/80">View Details →</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl sm:text-5xl mb-6 leading-tight">Let's Create Your Story</h2>
          <p className="text-lg text-primary-foreground/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            Every celebration you see here started with a conversation. Schedule your complimentary consultation and
            let's begin planning your perfect day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 px-10 py-6 text-lg shadow-lg"
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
              className="border-2 border-primary-foreground/40 hover:bg-primary-foreground/10 hover:border-primary-foreground/60 bg-transparent text-primary-foreground px-10 py-6 text-lg"
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
