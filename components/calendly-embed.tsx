"use client"

import { useEffect } from "react"

/**
 * CalendlyEmbed Component
 * 
 * Embeds the Calendly scheduling widget for booking consultations.
 * 
 * SETUP INSTRUCTIONS:
 * 1. Create a free Calendly account at https://calendly.com/signup
 * 2. Set up your event type (e.g., "Free Wedding Consultation - 30 min")
 * 3. Get your Calendly URL (e.g., https://calendly.com/yourusername/30min)
 * 4. Replace the calendlyUrl below with your actual Calendly URL
 * 5. Customize your availability in Calendly dashboard
 * 
 * TEMPORARY DEMO:
 * Currently using a demo Calendly link. You MUST replace this with your real account.
 */

export default function CalendlyEmbed() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script)
    }
  }, [])

  // IMPORTANT: Replace this URL with your actual Calendly account URL
  // Example: "https://calendly.com/ceremonyverse/consultation"
  const calendlyUrl = "https://calendly.com/demo-account/30min" // REPLACE THIS!

  return (
    <div className="calendly-inline-widget-container">
      {/* Calendly inline widget */}
      <div
        className="calendly-inline-widget"
        data-url={calendlyUrl}
        style={{ minWidth: "320px", height: "700px" }}
      />

      {/* Setup Notice (Remove this after configuring your Calendly) */}
      <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 m-6 text-sm">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <div>
            <h4 className="font-semibold text-charcoal mb-2">⚙️ Setup Required</h4>
            <p className="text-charcoal/70 mb-3">
              This is using a demo Calendly account. To activate booking:
            </p>
            <ol className="list-decimal list-inside space-y-1 text-charcoal/70 ml-1">
              <li>Create your free account at <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">calendly.com</a></li>
              <li>Set up "Free Wedding Consultation - 30 min" event</li>
              <li>Copy your Calendly URL</li>
              <li>
                Update <code className="bg-charcoal/10 px-1 py-0.5 rounded text-xs">components/calendly-embed.tsx</code>
              </li>
              <li>Replace <code className="bg-charcoal/10 px-1 py-0.5 rounded text-xs">calendlyUrl</code> with your URL</li>
            </ol>
            <p className="text-charcoal/70 mt-3 text-xs italic">
              Alternative: Use Cal.com (open-source), Acuity Scheduling, or Koalendar
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
