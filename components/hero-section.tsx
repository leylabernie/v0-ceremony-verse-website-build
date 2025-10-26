"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Check, Sparkles, Calendar } from "@/components/icons"

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[600px]">
      {/* Elegant Solid Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-charcoal/95"></div>

      {/* Centered Content - Simplified */}
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="text-center max-w-4xl space-y-10">
          {/* Large, elegant typography with strong contrast */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extralight leading-[1.1] text-white tracking-tight drop-shadow-2xl">
            Your Heritage,
            <br />
            <span className="text-accent drop-shadow-2xl">Your Harmony</span>
          </h1>

          {/* Minimal subtitle with better contrast */}
          <p className="text-lg sm:text-xl text-white font-light leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
            Where tradition meets modernity in perfect celebration
          </p>

          {/* Single Primary CTA */}
          <div className="pt-4">
            <Button
              size="lg"
              asChild
              className="bg-white text-charcoal hover:bg-white/90 text-lg h-16 px-12 font-medium tracking-wide shadow-2xl"
            >
              <Link href="/contact">
                Begin Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
