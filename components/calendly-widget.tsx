"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, X } from "@/components/icons"

export function CalendlyWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating Calendly Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="font-sans fixed bottom-24 right-6 z-40 bg-gradient-to-r from-primary via-primary to-accent text-white hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] shadow-2xl rounded-full h-14 px-6 flex items-center gap-2 transition-all duration-300 hover:scale-105 ring-2 ring-accent/20 hover:ring-accent/40"
      >
        <Calendar className="h-5 w-5" />
        <span className="hidden sm:inline font-semibold">Book Consultation</span>
      </Button>

      {/* Calendly Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="h-[80vh]">
              <iframe
                src="https://calendly.com/your-calendly-link/30min"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Schedule a consultation with CeremonyVerse"
              />
              {/* Placeholder message until user adds their Calendly link */}
              <div className="flex items-center justify-center h-full bg-gradient-to-br from-primary/5 to-accent/5 p-8">
                <div className="font-sans text-center max-w-md">
                  <Calendar className="font-sans h-16 w-16 mx-auto mb-4 text-primary" />
                  <h3 className="font-sans text-2xl font-serif text-primary mb-3">Book Your Free Consultation</h3>
                  <p className="font-sans text-gray-600 mb-6">
                    Connect your Calendly account to enable instant booking. Replace the iframe src with your Calendly
                    link in components/calendly-widget.tsx
                  </p>
                  <p className="font-sans text-sm text-gray-500">
                    Or call us directly at <strong>(555) 123-4567</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
