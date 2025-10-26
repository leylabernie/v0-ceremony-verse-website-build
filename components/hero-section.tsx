"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Check, Sparkles, Calendar } from "@/components/icons"

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[600px]">
      {/* Background - No video */}
      <div className="absolute inset-0 bg-charcoal">
        {/* Elegant dark overlay - Kalki style */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/30 to-charcoal/60" />
      </div>

      {/* Centered Content - Boho minimalist approach */}
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="text-center max-w-4xl space-y-8">
          {/* Small elegant badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-xs font-sans font-medium text-white tracking-[0.2em] uppercase">
              Indian-American Fusion Weddings
            </span>
          </div>

          {/* Large, elegant typography - Boho style */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extralight leading-[1.1] text-white tracking-tight">
            Your Heritage,
            <br />
            <span className="text-accent">Your Harmony</span>
          </h1>

          {/* Minimal subtitle - Boho approach */}
          <p className="text-lg sm:text-xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto">
            Where tradition meets modernity in perfect celebration
          </p>

          {/* Clean CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              asChild
              className="bg-white text-charcoal hover:bg-white/90 text-base h-14 px-10 font-medium tracking-wide"
            >
              <Link href="/contact">
                Begin Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-white text-white hover:bg-white hover:text-charcoal text-base h-14 px-10 font-medium tracking-wide bg-transparent"
            >
              <Link href="/gallery">Explore Our Work</Link>
            </Button>
          </div>

          {/* Minimal trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-white/80 text-sm">
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
              <span className="font-light">Now Booking 2025-2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
