import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Facebook, Instagram, Youtube, Linkedin } from "@/components/icons"

export function Footer() {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-4">
            <Link
              href="/"
              className="font-serif text-3xl font-semibold text-foreground tracking-tight hover:text-primary transition-colors"
            >
              CeremonyVerse
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Expert wedding planning for Indian-American couples seeking authentic fusion celebrations.
            </p>
            <div className="pt-4">
              <Link href="/contact">
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                  Book Consultation
                </Button>
              </Link>
            </div>
            <div className="pt-4">
              <p className="text-sm font-medium text-foreground mb-3">Follow Us</p>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/ceremonyverse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-5 w-5 text-primary-foreground" />
                </a>
                <a
                  href="https://facebook.com/ceremonyverse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-5 w-5 text-accent-foreground" />
                </a>
                <a
                  href="https://youtube.com/@ceremonyverse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Subscribe on YouTube"
                >
                  <Youtube className="h-5 w-5 text-primary-foreground" />
                </a>
                <a
                  href="https://linkedin.com/company/ceremonyverse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Connect on LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-background" />
                </a>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/heritage-harmony" className="text-muted-foreground hover:text-primary transition-colors">
                  Heritage & Harmony Plan
                </Link>
              </li>
              <li>
                <Link href="/budget-planner" className="text-muted-foreground hover:text-primary transition-colors">
                  Budget Planner
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog & Guides
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/guide" className="text-muted-foreground hover:text-primary transition-colors">
                  Free Wedding Guide
                </Link>
              </li>
              <li>
                <Link href="/branding" className="text-muted-foreground hover:text-primary transition-colors">
                  Brand Guidelines
                </Link>
              </li>
              <li>
                <Link
                  href="/marketing-materials"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Marketing Materials
                </Link>
              </li>
              <li>
                <Link href="/launch-guide" className="text-muted-foreground hover:text-primary transition-colors">
                  Launch Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Get in Touch</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="mailto:hello@ceremonyverse.com" className="hover:text-primary transition-colors">
                  hello@ceremonyverse.com
                </a>
              </li>
              <li>
                <a href="tel:+12153419990" className="hover:text-primary transition-colors">
                  +1-215-341-9990
                </a>
              </li>
              <li className="pt-2">
                <Link href="/our-story" className="text-sm hover:text-primary transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-sm hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 CeremonyVerse. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
