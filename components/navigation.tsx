"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Phone, X } from "@/components/icons"
import { useState } from "react"
import Image from "next/image"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/98 backdrop-blur-md border-b border-warm-beige/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center group transition-all hover:scale-105">
            <div className="flex items-center gap-4">
              {/* Stunning Logo Icon with Gradient */}
              <div className="relative w-14 h-14">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent rounded-lg shadow-lg group-hover:shadow-xl transition-shadow" />
                
                {/* Decorative Border */}
                <div className="absolute inset-0 border-2 border-accent/30 rounded-lg" />
                
                {/* CV Monogram */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* C */}
                    <span className="absolute left-0 top-0 text-white font-serif text-2xl font-bold tracking-tighter drop-shadow-md">
                      C
                    </span>
                    {/* V with slight offset for depth */}
                    <span className="absolute left-3 top-0 text-accent font-serif text-2xl font-bold tracking-tighter drop-shadow-md">
                      V
                    </span>
                  </div>
                </div>
                
                {/* Decorative corner elements */}
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-accent/50 rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-accent/50 rounded-bl-lg" />
              </div>
              
              {/* Text with Better Styling */}
              <div className="flex flex-col">
                {/* Main brand name with gradient text */}
                <span className="font-serif text-2xl font-semibold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent tracking-wide group-hover:tracking-wider transition-all">
                  CeremonyVerse
                </span>
                {/* Tagline with better contrast */}
                <span className="text-xs font-sans font-medium text-charcoal/70 tracking-[0.15em] uppercase">
                  Wedding Planning
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/our-story"
              className="px-3 xl:px-4 py-2.5 text-base font-sans font-medium text-charcoal hover:text-primary hover:bg-warm-beige/30 rounded-sm transition-all"
            >
              Our Story
            </Link>
            <Link
              href="/services"
              className="px-3 xl:px-4 py-2.5 text-base font-sans font-medium text-charcoal hover:text-primary hover:bg-warm-beige/30 rounded-sm transition-all"
            >
              Services
            </Link>
            <Link
              href="/heritage-harmony"
              className="px-3 xl:px-4 py-2.5 text-base font-sans font-medium text-charcoal hover:text-primary hover:bg-warm-beige/30 rounded-sm transition-all whitespace-nowrap"
            >
              Heritage & Harmony
            </Link>
            <Link
              href="/budget-planner"
              className="px-3 xl:px-4 py-2.5 text-base font-sans font-medium text-charcoal hover:text-primary hover:bg-warm-beige/30 rounded-sm transition-all"
            >
              Budget Planner
            </Link>
            <Link
              href="/blog"
              className="px-3 xl:px-4 py-2.5 text-base font-sans font-medium text-charcoal hover:text-primary hover:bg-warm-beige/30 rounded-sm transition-all"
            >
              Blog
            </Link>
            <Link
              href="/faq"
              className="px-3 xl:px-4 py-2.5 text-base font-sans font-medium text-charcoal hover:text-primary hover:bg-warm-beige/30 rounded-sm transition-all"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="px-3 xl:px-4 py-2.5 text-base font-sans font-medium text-charcoal hover:text-primary hover:bg-warm-beige/30 rounded-sm transition-all"
            >
              Contact
            </Link>

            {/* Phone and CTA Section */}
            <div className="flex items-center gap-3 ml-3 pl-3 border-l border-warm-beige/40">
              <a
                href="tel:+12153419990"
                className="flex items-center gap-2 px-3 py-2.5 text-base font-sans font-semibold text-primary hover:text-accent transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden xl:inline whitespace-nowrap">+1-215-341-9990</span>
              </a>
              <Button
                size="lg"
                asChild
                className="btn-accent shadow-md text-base font-sans font-semibold px-6 py-2.5 h-auto"
              >
                <Link href="/book-consultation">Book Consultation</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-warm-beige/30 rounded-sm transition-colors text-charcoal"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-warm-beige/40">
            <div className="flex flex-col gap-2">
              <Link
                href="/our-story"
                className="px-4 py-3 text-base font-sans font-medium text-charcoal hover:text-primary hover:bg-warm-beige/30 rounded-sm transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Story
              </Link>
              <Link
                href="/services"
                className="px-4 py-3 text-base font-sans font-medium text-charcoal hover:text-primary hover:bg-warm-beige/30 rounded-sm transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/heritage-harmony"
                className="px-4 py-3 text-base font-sans font-medium text-charcoal hover:text-primary hover:bg-warm-beige/30 rounded-sm transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Heritage & Harmony
              </Link>
              <Link
                href="/budget-planner"
                className="px-4 py-3 text-base font-sans font-medium text-charcoal hover:text-primary hover:bg-warm-beige/30 rounded-sm transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Budget Planner
              </Link>
              <Link
                href="/blog"
                className="px-4 py-3 text-base font-sans font-medium text-charcoal hover:text-primary hover:bg-warm-beige/30 rounded-sm transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/faq"
                className="px-4 py-3 text-base font-sans font-medium text-charcoal hover:text-primary hover:bg-warm-beige/30 rounded-sm transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="px-4 py-3 text-base font-sans font-medium text-charcoal hover:text-primary hover:bg-warm-beige/30 rounded-sm transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="mt-4 pt-4 border-t border-warm-beige/40 space-y-3">
                <a
                  href="tel:+12153419990"
                  className="flex items-center gap-2 px-4 py-3 text-base font-sans font-semibold text-primary hover:text-accent transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>+1-215-341-9990</span>
                </a>
                <Button
                  size="lg"
                  asChild
                  className="w-full btn-accent font-sans font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link href="/book-consultation">Book Consultation</Link>
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
