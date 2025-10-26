"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Check, Sparkles, Calendar } from "@/components/icons"

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[600px]">
      {/* Elegant Background - Subtle Gradient with Gold Accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-background to-primary/5">
        {/* Decorative gold pattern overlay */}
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(212, 175, 55, 0.4) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(212, 175, 55, 0.3) 0%, transparent 40%)'}}></div>
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%238B1538\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
      </div>

      {/* Centered Content - Enhanced */}
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="text-center max-w-4xl space-y-10">
          {/* Small elegant badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-primary/20 rounded-full shadow-lg">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-xs font-sans font-medium text-primary tracking-[0.2em] uppercase">
              Indian-American Fusion Weddings
            </span>
          </div>

          {/* Large, elegant typography with strong contrast */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extralight leading-[1.1] text-charcoal tracking-tight">
            Your Heritage,
            <br />
            <span className="text-primary">Your Harmony</span>
          </h1>

          {/* Minimal subtitle with better contrast */}
          <p className="text-lg sm:text-xl text-charcoal/80 font-light leading-relaxed max-w-2xl mx-auto">
            Where tradition meets modernity in perfect celebration
          </p>

          {/* Single Primary CTA */}
          <div className="pt-4">
            <Button
              size="lg"
              asChild
              className="bg-primary text-white hover:bg-accent hover:text-charcoal text-lg h-16 px-12 font-medium tracking-wide shadow-2xl transition-all duration-300"
            >
              <Link href="/contact">
                Begin Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-charcoal/70 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span className="font-light">Escrow Protected</span>
            </div>
            <div className="w-px h-4 bg-charcoal/20" />
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span className="font-light">Verified Vendors</span>
            </div>
            <div className="w-px h-4 bg-charcoal/20" />
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              <span className="font-light">Booking 2025-2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
