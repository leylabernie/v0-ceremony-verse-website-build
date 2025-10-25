import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Facebook, Instagram, Youtube, Linkedin } from "@/components/icons"

export function Footer() {
  return (
    <footer className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal border-t border-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-4">
            <Link
              href="/"
              className="font-serif text-3xl font-light text-white tracking-tight hover:text-accent transition-colors"
            >
              CeremonyVerse
            </Link>
            <p className="text-white/70 leading-relaxed">
              Expert wedding planning for Indian-American couples seeking authentic fusion celebrations.
            </p>
            <div className="pt-4">
              <Link href="/contact">
                <Button size="sm" className="btn-accent rounded-sm">
                  Book Consultation
                </Button>
              </Link>
            </div>
            <div className="pt-4">
              <p className="text-sm font-medium text-white mb-3">Follow Us</p>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/ceremonyverse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-5 w-5 text-white" />
                </a>
                <a
                  href="https://facebook.com/ceremonyverse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-5 w-5 text-charcoal" />
                </a>
                <a
                  href="https://youtube.com/@ceremonyverse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label="Subscribe on YouTube"
                >
                  <Youtube className="h-5 w-5 text-white" />
                </a>
                <a
                  href="https://linkedin.com/company/ceremonyverse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-sm flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label="Connect on LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-charcoal" />
                </a>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h4 className="font-medium text-white">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-white/70 hover:text-accent transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/heritage-harmony" className="text-white/70 hover:text-accent transition-colors">
                  Heritage & Harmony Plan
                </Link>
              </li>
              <li>
                <Link href="/budget-planner" className="text-white/70 hover:text-accent transition-colors">
                  Budget Planner
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-white/70 hover:text-accent transition-colors">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-4">
            <h4 className="font-medium text-white">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-white/70 hover:text-accent transition-colors">
                  Blog & Guides
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-white/70 hover:text-accent transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/70 hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/guide" className="text-white/70 hover:text-accent transition-colors">
                  Free Wedding Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/marketing-materials"
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  Marketing Materials
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="font-medium text-white">Get in Touch</h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <a href="mailto:hello@ceremonyverse.com" className="hover:text-accent transition-colors">
                  hello@ceremonyverse.com
                </a>
              </li>
              <li>
                <a href="tel:+12153419990" className="hover:text-accent transition-colors">
                  +1-215-341-9990
                </a>
              </li>
              <li className="pt-2">
                <Link href="/our-story" className="text-sm hover:text-accent transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-sm hover:text-accent transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">© 2025 CeremonyVerse. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <Link href="/privacy-policy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
