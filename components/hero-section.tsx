"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Check, Sparkles, Calendar } from "@/components/icons"

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[600px]">
      {/* Elegant Rich Background with Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-charcoal">
        {/* Subtle decorative pattern */}
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(212, 175, 55, 0.2) 0%, transparent 50%)'}}></div>
      </div>

      {/* Centered Content - Enhanced */}
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="text-center max-w-4xl space-y-10">
          {/* Small elegant badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-xs font-sans font-medium text-white tracking-[0.2em] uppercase">
              Indian-American Fusion Weddings
            </span>
          </div>

          {/* Large, elegant typography with strong contrast */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extralight leading-[1.1] text-white tracking-tight drop-shadow-2xl">
            Your Heritage,
            <br />
            <span className="text-accent drop-shadow-2xl">Your Harmony</span>
          </h1>

          {/* Minimal subtitle with better contrast */}
          <p className="text-lg sm:text-xl text-white/95 font-light leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
            Where tradition meets modernity in perfect celebration
          </p>

          {/* Single Primary CTA */}
          <div className="pt-4">
            <Button
              size="lg"
              asChild
              className="bg-white text-charcoal hover:bg-accent hover:text-charcoal text-lg h-16 px-12 font-medium tracking-wide shadow-2xl transition-all duration-300"
            >
              <Link href="/contact">
                Begin Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span className="font-light">Escrow Protected</span>
            </div>
            <div className="w-px h-4 bg-white/30" />
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4" />
              <span className="font-light">Verified Vendors</span>
            </div>
            <div className="w-px h-4 bg-white/30" />
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="font-light">Booking 2025-2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
