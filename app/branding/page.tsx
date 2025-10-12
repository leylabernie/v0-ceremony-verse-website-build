import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Brand Guidelines | CeremonyVerse",
  description:
    "Official brand guidelines, logo usage, and visual identity for CeremonyVerse luxury Indian-American fusion wedding planning.",
}

export default function BrandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl mb-6 text-balance">CeremonyVerse Brand Guidelines</h1>
          <p className="text-xl text-muted-foreground text-balance">
            Our visual identity reflects the elegance and cultural richness of Indian-American fusion weddings
          </p>
        </div>
      </section>

      {/* Logo Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl mb-8 text-center">Our Logo</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-8 bg-white">
                <div className="aspect-video flex items-center justify-center">
                  <Image
                    src="/ceremonyverse-logo.png"
                    alt="CeremonyVerse Logo"
                    width={400}
                    height={200}
                    className="object-contain"
                  />
                </div>
                <p className="text-center mt-4 text-sm text-muted-foreground">Primary Logo - Light Background</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 bg-slate-900">
                <div className="aspect-video flex items-center justify-center">
                  <Image
                    src="/ceremonyverse-logo.png"
                    alt="CeremonyVerse Logo on dark background"
                    width={400}
                    height={200}
                    className="object-contain"
                  />
                </div>
                <p className="text-center mt-4 text-sm text-white/70">Primary Logo - Dark Background</p>
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="font-serif text-2xl mb-4">Logo Usage Guidelines</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Always maintain clear space around the logo equal to the height of the peacock feather</li>
              <li>Never stretch, distort, or rotate the logo</li>
              <li>The logo features a peacock feather symbolizing beauty, grace, and Indian cultural heritage</li>
              <li>Minimum size: 150px wide for digital, 1.5 inches wide for print</li>
              <li>Do not place the logo on busy backgrounds or low-contrast surfaces</li>
              <li>The CV initials are integrated with the peacock feather design</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl mb-8 text-center">Color Palette</h2>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="w-full h-32 rounded-lg mb-4" style={{ backgroundColor: "#36454f" }}></div>
                <h3 className="font-semibold mb-2">Primary - Charcoal</h3>
                <p className="text-sm text-muted-foreground">#36454f</p>
                <p className="text-sm text-muted-foreground">RGB: 54, 69, 79</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-full h-32 rounded-lg mb-4" style={{ backgroundColor: "#9caf88" }}></div>
                <h3 className="font-semibold mb-2">Accent - Sage Green</h3>
                <p className="text-sm text-muted-foreground">#9caf88</p>
                <p className="text-sm text-muted-foreground">RGB: 156, 175, 136</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-full h-32 rounded-lg mb-4" style={{ backgroundColor: "#e8b4b8" }}></div>
                <h3 className="font-semibold mb-2">Accent - Blush Pink</h3>
                <p className="text-sm text-muted-foreground">#e8b4b8</p>
                <p className="text-sm text-muted-foreground">RGB: 232, 180, 184</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-full h-32 rounded-lg mb-4" style={{ backgroundColor: "#D4AF37" }}></div>
                <h3 className="font-semibold mb-2">Accent - Gold</h3>
                <p className="text-sm text-muted-foreground">#D4AF37</p>
                <p className="text-sm text-muted-foreground">RGB: 212, 175, 55</p>
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="font-serif text-2xl mb-4">Color Usage</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong>Charcoal Gray:</strong> Primary brand color for text, CV initials, and key elements
              </li>
              <li>
                <strong>Sage Green:</strong> Peacock feather color, used for natural elements and accents
              </li>
              <li>
                <strong>Blush Pink:</strong> Peacock eye color, used for romantic elements and highlights
              </li>
              <li>
                <strong>Gold:</strong> Premium accent for luxury touches and special features
              </li>
              <li>
                <strong>Neutrals:</strong> Use warm creams (#faf7f2) and whites for backgrounds
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl mb-8 text-center">Typography</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="font-serif text-3xl mb-4">Playfair Display</h3>
                <p className="text-muted-foreground mb-4">Primary Typeface - Headings</p>
                <div className="space-y-2">
                  <p className="font-serif text-4xl">Aa Bb Cc</p>
                  <p className="font-serif text-2xl">1234567890</p>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Elegant serif font for headlines, page titles, and section headers
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="font-sans text-3xl mb-4">Inter</h3>
                <p className="text-muted-foreground mb-4">Secondary Typeface - Body</p>
                <div className="space-y-2">
                  <p className="font-sans text-4xl">Aa Bb Cc</p>
                  <p className="font-sans text-2xl">1234567890</p>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Clean sans-serif font for body text, navigation, and UI elements
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Photography Style */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl mb-8 text-center">Photography Style</h2>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-muted-foreground text-center text-balance">
              Our photography reflects the luxury, elegance, and cultural richness of Indian-American fusion weddings
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Lighting</h3>
                <p className="text-sm text-muted-foreground">
                  Warm, natural lighting with soft shadows. Avoid harsh flash or overly bright images.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Composition</h3>
                <p className="text-sm text-muted-foreground">
                  Focus on details, textures, and intimate moments. Show both grand celebrations and personal touches.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Color Grading</h3>
                <p className="text-sm text-muted-foreground">
                  Rich, saturated colors with warm tones. Enhance golds, reds, and jewel tones while maintaining natural
                  skin tones.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Assets */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl mb-6">Download Brand Assets</h2>
          <p className="text-muted-foreground mb-8">
            Access our complete brand package including logos, color palettes, and usage guidelines
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/marketing-materials">View Marketing Materials</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Request Custom Assets</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
