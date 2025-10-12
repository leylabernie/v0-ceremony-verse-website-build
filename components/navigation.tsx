"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Phone, X } from "@/components/icons"
import { useState } from "react"
import Image from "next/image"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-md border-b border-border/40 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-32">
          <Link href="/" className="flex items-center group">
            <Image
              src="/ceremonyverse-logo.png"
              alt="CeremonyVerse - Your Heritage, Your Harmony, Your Perfect Day"
              width={500}
              height={175}
              priority
              className="h-20 md:h-24 lg:h-28 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/our-story"
              className="px-3 xl:px-4 py-2.5 text-[15px] font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
            >
              Our Story
            </Link>
            <Link
              href="/services"
              className="px-3 xl:px-4 py-2.5 text-[15px] font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
            >
              Services
            </Link>
            <Link
              href="/heritage-harmony"
              className="px-3 xl:px-4 py-2.5 text-[15px] font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-lg transition-all whitespace-nowrap"
            >
              Heritage & Harmony
            </Link>
            <Link
              href="/budget-planner"
              className="px-3 xl:px-4 py-2.5 text-[15px] font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
            >
              Budget Planner
            </Link>
            <Link
              href="/blog"
              className="px-3 xl:px-4 py-2.5 text-[15px] font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
            >
              Blog
            </Link>
            <Link
              href="/faq"
              className="px-3 xl:px-4 py-2.5 text-[15px] font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="px-3 xl:px-4 py-2.5 text-[15px] font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
            >
              Contact
            </Link>

            {/* Phone and CTA Section */}
            <div className="flex items-center gap-3 ml-3 pl-3 border-l border-border/40">
              <a
                href="tel:+12153419990"
                className="flex items-center gap-2 px-3 py-2.5 text-[15px] font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden xl:inline whitespace-nowrap">+1-215-341-9990</span>
              </a>
              <Button
                size="lg"
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-md text-[15px] font-semibold px-6 py-2.5 h-auto rounded-lg"
              >
                <Link href="/contact">Book Consultation</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-muted/50 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border/40">
            <div className="flex flex-col gap-2">
              <Link
                href="/our-story"
                className="px-4 py-3 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Story
              </Link>
              <Link
                href="/services"
                className="px-4 py-3 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/heritage-harmony"
                className="px-4 py-3 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Heritage & Harmony
              </Link>
              <Link
                href="/budget-planner"
                className="px-4 py-3 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Budget Planner
              </Link>
              <Link
                href="/blog"
                className="px-4 py-3 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/faq"
                className="px-4 py-3 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="px-4 py-3 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="mt-4 pt-4 border-t border-border/40 space-y-3">
                <a
                  href="tel:+12153419990"
                  className="flex items-center gap-2 px-4 py-3 text-base font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>+1-215-341-9990</span>
                </a>
                <Button
                  size="lg"
                  asChild
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link href="/contact">Book Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
