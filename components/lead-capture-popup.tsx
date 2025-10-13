"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, Sparkles } from "@/components/icons"

export default function LeadCapturePopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("ceremonyverse_popup_dismissed")
    const hasSubmitted = localStorage.getItem("ceremonyverse_popup_submitted")

    if (hasSeenPopup || hasSubmitted) {
      return // Don't show popup if user has already seen or submitted
    }

    // Show popup after 45 seconds or when user scrolls 60% down the page
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 45000) // Increased from 30s to 45s for less intrusion

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      if (scrollPercent > 60 && !isVisible) {
        // Increased from 50% to 60%
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isVisible])

  const handleClose = () => {
    localStorage.setItem("ceremonyverse_popup_dismissed", "true")
    setIsVisible(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    localStorage.setItem("ceremonyverse_popup_submitted", "true")
    window.location.href = `/thank-you?email=${encodeURIComponent(email)}`
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 relative shadow-2xl animate-in slide-in-from-bottom duration-500">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-charcoal/60 hover:text-charcoal hover:bg-charcoal/5 rounded-full p-1 transition-all"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {!isSubmitted ? (
          <>
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>

            <h3 className="font-serif text-3xl text-charcoal text-center mb-4">Plan Your Dream Wedding</h3>

            <p className="text-charcoal/70 text-center mb-6 leading-relaxed">
              Get our free guide: "10 Essential Steps for Planning an Authentic Indian-American Fusion Wedding"
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-primary/80 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all"
              >
                Get Free Guide
              </button>
            </form>

            <p className="text-xs text-charcoal/50 text-center mt-4">
              Plus, get exclusive wedding planning tips and early access to special offers.
            </p>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-full mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-serif text-2xl text-charcoal mb-4">Thank You!</h3>
            <p className="text-charcoal/70">Check your email for your free wedding planning guide.</p>
          </div>
        )}
      </div>
    </div>
  )
}
