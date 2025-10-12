import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"

export const metadata: Metadata = {
  title: "Contact Us - Free Wedding Planning Consultation | CeremonyVerse",
  description:
    "Schedule your free consultation for Indian-American fusion wedding planning. Serving USA & Mexico. Call +1-215-341-9990 or book online. Escrow protected services.",
  keywords:
    "wedding planner consultation, Indian wedding planner contact, fusion wedding quote, free wedding consultation, South Asian wedding planner USA Mexico",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-muted/50 via-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
              Let's Start Planning Your Perfect Day
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Schedule your free consultation—no obligation, just honest conversation about your vision
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-muted/50 to-background p-8 md:p-12 rounded-3xl border border-border shadow-lg">
              <h2 className="font-serif text-3xl text-foreground mb-6">Schedule Your Free Consultation</h2>
              <p className="text-muted-foreground mb-8">
                Tell us about your vision and we'll show you how we can bring it to life with our escrow-protected,
                verified supplier network.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name *</label>
                    <Input
                      type="text"
                      required
                      className="w-full border-border focus:border-primary focus:ring-primary"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name *</label>
                    <Input
                      type="text"
                      required
                      className="w-full border-border focus:border-primary focus:ring-primary"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                  <Input
                    type="email"
                    required
                    className="w-full border-border focus:border-primary focus:ring-primary"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                  <Input
                    type="tel"
                    required
                    className="w-full border-border focus:border-primary focus:ring-primary"
                    placeholder="+1-215-341-9990"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Wedding Date (if known)</label>
                  <Input type="date" className="w-full border-border focus:border-primary focus:ring-primary" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Wedding Location</label>
                  <Input
                    type="text"
                    className="w-full border-border focus:border-primary focus:ring-primary"
                    placeholder="City, State/Country"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Estimated Guest Count</label>
                  <Input
                    type="number"
                    className="w-full border-border focus:border-primary focus:ring-primary"
                    placeholder="e.g., 200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Tell Us About Your Vision *</label>
                  <Textarea
                    required
                    rows={5}
                    className="w-full border-border focus:border-primary focus:ring-primary"
                    placeholder="Share your wedding vision, cultural elements you want to include, any specific concerns or questions..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">How did you hear about us?</label>
                  <select className="w-full border border-border rounded-md px-4 py-2 focus:border-primary focus:ring-primary">
                    <option value="">Select an option</option>
                    <option value="google">Google Search</option>
                    <option value="social">Social Media</option>
                    <option value="referral">Friend/Family Referral</option>
                    <option value="wedding-site">Wedding Website/Directory</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Schedule My Free Consultation
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We'll respond within 24 hours. Your information is kept confidential.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-3xl text-foreground mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  We're here to answer your questions and help you start planning your perfect fusion wedding. Reach out
                  via phone, email, or the form—we respond to all inquiries within 24 hours.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-muted/50 to-background p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-foreground mb-2">Phone</h3>
                      <a href="tel:+12153419990" className="text-lg text-primary hover:text-primary/80 font-medium">
                        +1-215-341-9990
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Mon-Fri: 9am-7pm EST</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-muted/50 to-background p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-foreground mb-2">Email</h3>
                      <a
                        href="mailto:hello@ceremonyverse.com"
                        className="text-lg text-secondary hover:text-secondary/80 font-medium"
                      >
                        hello@ceremonyverse.com
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-muted/50 to-background p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-background" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-foreground mb-2">Service Areas</h3>
                      <p className="text-foreground">United States & Mexico</p>
                      <p className="text-sm text-muted-foreground mt-1">Planning fusion weddings nationwide</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-muted/50 to-background p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-foreground mb-2">Business Hours</h3>
                      <div className="space-y-1 text-foreground">
                        <p>Monday - Friday: 9:00 AM - 7:00 PM EST</p>
                        <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                        <p>Sunday: By appointment only</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Reminder */}
              <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-primary-foreground">
                <h3 className="font-serif text-2xl mb-4">Why Choose CeremonyVerse?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-background/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>100% Escrow Payment Protection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-background/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>Three-Tier Verified Suppliers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-background/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>Live Virtual Shopping from India</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-background/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>Transparent Pricing & Contracts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ for SEO */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl text-foreground mb-12 text-center">Common Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "How quickly will you respond to my inquiry?",
                  a: "We respond to all inquiries within 24 hours, typically much sooner. For urgent matters, call us directly at +1-215-341-9990 during business hours.",
                },
                {
                  q: "Is the consultation really free?",
                  a: "Yes! Your initial consultation is completely free with no obligation. We'll discuss your vision, answer questions, and explain how our services work—no pressure, just honest conversation.",
                },
                {
                  q: "Do you plan weddings outside of major cities?",
                  a: "We plan fusion weddings throughout the USA and Mexico, regardless of location. We coordinate with local vendors while sourcing authentic items from India.",
                },
                {
                  q: "What if I'm just starting to plan and don't have all the details yet?",
                  a: "That's perfectly fine! Most couples contact us early in their planning journey. We'll help you figure out timelines, budgets, and priorities during your consultation.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-sm border border-border">
                  <h3 className="font-serif text-xl text-foreground mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
