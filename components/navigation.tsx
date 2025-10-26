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
          <Link href="/" className="flex items-center group transition-all">
            <div className="flex items-center gap-3">
              {/* Elegant Logo Icon */}
              <div className="relative w-12 h-12">
                {/* Gradient Background Circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full shadow-md group-hover:shadow-lg transition-shadow" />
                
                {/* CV Monogram - Properly Centered */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-serif text-xl font-bold tracking-tight">
                    CV
                  </span>
                </div>
                
                {/* Decorative Ring */}
                <div className="absolute inset-0 border-2 border-accent/20 rounded-full group-hover:border-accent/40 transition-colors" />
              </div>
              
              {/* Text with Better Styling */}
              <div className="flex flex-col">
                {/* Main brand name */}
                <span className="font-serif text-xl font-semibold text-primary tracking-wide">
                  CeremonyVerse
                </span>
                {/* Tagline */}
                <span className="text-[10px] font-sans font-medium text-charcoal/60 tracking-wider uppercase">
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
