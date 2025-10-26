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
              {/* Beautiful Indian-Inspired Logo */}
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="CeremonyVerse - Your Heritage Your Harmony"
                  width={64}
                  height={64}
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
              
              {/* Brand Text - Hidden on Mobile, Shown on Tablet+ */}
              <div className="hidden sm:flex flex-col">
                {/* Main brand name */}
                <span className="font-serif text-xl font-semibold text-primary tracking-wide">
                  CeremonyVerse
                </span>
                {/* Tagline from logo */}
                <span className="text-[9px] font-sans font-medium text-charcoal/70 tracking-[0.08em] uppercase">
                  Your Heritage Your Harmony
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/our-story"
              className="font-sans px-3 xl:px-4 py-2.5 text-[15px] font-medium text-charcoal hover:text-primary hover:bg-warm-beige/30 rounded-sm transition-all"
            >
              Our Story
            </Link>
            <Link
              href="/services"
              className="font-sans px-3 xl:px-4 py-2.5 text-[15px] font-medium text-charcoal hover:text-primary hover:bg-warm-beige/30 rounded-sm transition-all"
            >
              Services
            </Link>
            <Link
              href="/heritage-harmony"
              className="font-sans px-3 xl:px-4 py-2.5 text-[15px] font-medium text-charcoal hover:text-primary hover:bg-warm-beige/30 rounded-sm transition-all whitespace-nowrap"
            >
              Heritage & Harmony
            </Link>
            <Link
              href="/budget-planner"
              className="font-sans px-3 xl:px-4 py-2.5 text-[15px] font-medium text-charcoal hover:text-primary hover:bg-warm-beige/30 rounded-sm transition-all"
            >
              Budget Planner
            </Link>
            <Link
              href="/blog"
              className="font-sans px-3 xl:px-4 py-2.5 text-[15px] font-medium text-charcoal hover:text-primary hover:bg-warm-beige/30 rounded-sm transition-all"
            >
              Blog
            </Link>
            <Link
              href="/faq"
              className="font-sans px-3 xl:px-4 py-2.5 text-[15px] font-medium text-charcoal hover:text-primary hover:bg-warm-beige/30 rounded-sm transition-all"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="font-sans px-3 xl:px-4 py-2.5 text-[15px] font-medium text-charcoal hover:text-primary hover:bg-warm-beige/30 rounded-sm transition-all"
            >
              Contact
            </Link>

            {/* Phone and CTA Section */}
            <div className="flex items-center gap-3 ml-3 pl-3 border-l border-warm-beige/40">
              <a
                href="tel:+12153419990"
                className="font-sans flex items-center gap-2 px-3 py-2.5 text-[15px] font-semibold text-primary hover:text-accent transition-colors"
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
                className="font-sans px-4 py-3 text-[15px] font-medium text-charcoal hover:text-primary hover:bg-warm-beige/30 rounded-sm transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Story
              </Link>
              <Link
                href="/services"
                className="font-sans px-4 py-3 text-[15px] font-medium text-charcoal hover:text-primary hover:bg-warm-beige/30 rounded-sm transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/heritage-harmony"
                className="font-sans px-4 py-3 text-[15px] font-medium text-charcoal hover:text-primary hover:bg-warm-beige/30 rounded-sm transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Heritage & Harmony
              </Link>
              <Link
                href="/budget-planner"
                className="font-sans px-4 py-3 text-[15px] font-medium text-charcoal hover:text-primary hover:bg-warm-beige/30 rounded-sm transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Budget Planner
              </Link>
              <Link
                href="/blog"
                className="font-sans px-4 py-3 text-[15px] font-medium text-charcoal hover:text-primary hover:bg-warm-beige/30 rounded-sm transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/faq"
                className="font-sans px-4 py-3 text-[15px] font-medium text-charcoal hover:text-primary hover:bg-warm-beige/30 rounded-sm transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="font-sans px-4 py-3 text-[15px] font-medium text-charcoal hover:text-primary hover:bg-warm-beige/30 rounded-sm transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="mt-4 pt-4 border-t border-warm-beige/40 space-y-3">
                <a
                  href="tel:+12153419990"
                  className="font-sans flex items-center gap-2 px-4 py-3 text-[15px] font-semibold text-primary hover:text-accent transition-colors"
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
