import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { FileText, Shield, AlertCircle, CheckCircle } from "lucide-react"

export const metadata = {
  title: "Terms of Service | CeremonyVerse - Service Agreement",
  description:
    "Review CeremonyVerse's terms of service, including escrow protection, payment terms, and service guarantees for luxury fusion wedding planning.",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full mb-6">
              <FileText className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Legal Agreement</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl font-light text-foreground mb-6">Terms of Service</h1>
            <p className="text-lg text-muted-foreground">Last Updated: January 2025</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-12">
            {/* Introduction */}
            <section className="bg-card/50 border border-border/50 rounded-2xl p-8">
              <h2 className="font-serif text-3xl font-light text-foreground mb-4">Agreement Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service ("Terms") govern your use of CeremonyVerse's wedding planning services and
                website. By engaging our services, you agree to these Terms. Please read them carefully before
                proceeding.
              </p>
            </section>

            {/* Services Provided */}
            <section>
              <h2 className="font-serif text-3xl font-light text-foreground mb-6">Services Provided</h2>

              <div className="space-y-6">
                <div className="bg-card/30 border border-border/50 rounded-xl p-6">
                  <h3 className="font-semibold text-xl text-foreground mb-4">Wedding Planning Services</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    CeremonyVerse provides comprehensive wedding planning services for Indian-American fusion weddings,
                    including:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Dedicated wedding coordination and consultation</li>
                    <li>• Vendor sourcing, verification, and management</li>
                    <li>• Virtual shopping services for wedding items from India</li>
                    <li>• Cultural consultation and tradition guidance</li>
                    <li>• Budget management and timeline coordination</li>
                    <li>• Day-of wedding coordination services</li>
                  </ul>
                </div>

                <div className="bg-card/30 border border-border/50 rounded-xl p-6">
                  <h3 className="font-semibold text-xl text-foreground mb-4">Escrow Protection System</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All payments are processed through our secure escrow system. Funds are held until services are
                    delivered to your satisfaction, providing complete financial protection for your investment.
                  </p>
                </div>
              </div>
            </section>

            {/* Payment Terms */}
            <section>
              <h2 className="font-serif text-3xl font-light text-foreground mb-6">Payment Terms</h2>

              <div className="space-y-6">
                <div className="border-l-4 border-primary/30 pl-6">
                  <h3 className="font-semibold text-lg text-foreground mb-3">Service Fees</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Service fees are outlined in your service agreement and vary based on the package selected. All fees
                    are clearly disclosed before any commitment is required.
                  </p>
                </div>

                <div className="border-l-4 border-secondary/30 pl-6">
                  <h3 className="font-semibold text-lg text-foreground mb-3">Escrow Payment Process</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">For standard orders:</p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>1. Payment is captured and held in secure escrow account</li>
                    <li>2. Supplier ships order with tracking information</li>
                    <li>3. 72-hour inspection window begins upon delivery</li>
                    <li>4. Funds released to supplier after confirmation or window expiration</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary/30 pl-6">
                  <h3 className="font-semibold text-lg text-foreground mb-3">
                    Milestone-Based Payments (Custom Orders)
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">For high-value custom items:</p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Milestone 1 (30-40%): Initial deposit to begin work</li>
                    <li>• Milestone 2: Progress payment upon photo/video proof</li>
                    <li>• Milestone 3: Final payment after pre-shipment QA approval</li>
                  </ul>
                </div>

                <div className="border-l-4 border-secondary/30 pl-6">
                  <h3 className="font-semibold text-lg text-foreground mb-3">Refund Policy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Full refunds are provided for misrepresented items or services not delivered. Partial refunds may be
                    issued for minor quality issues. Consultation fees are non-refundable after services have been
                    rendered.
                  </p>
                </div>
              </div>
            </section>

            {/* Client Responsibilities */}
            <section className="bg-gradient-to-br from-secondary/5 to-primary/5 border border-border/50 rounded-2xl p-8">
              <h2 className="font-serif text-3xl font-light text-foreground mb-6">Client Responsibilities</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Accurate Information:</strong> Provide accurate and complete
                    information about your wedding requirements, budget, and preferences.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Timely Communication:</strong> Respond to requests for
                    information, approvals, and decisions within agreed timeframes.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Payment Obligations:</strong> Make payments according to the
                    agreed schedule and payment terms outlined in your service agreement.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Inspection Period:</strong> Inspect delivered items within the
                    72-hour window and report any issues promptly.
                  </p>
                </div>
              </div>
            </section>

            {/* Dispute Resolution */}
            <section>
              <h2 className="font-serif text-3xl font-light text-foreground mb-6">Dispute Resolution</h2>

              <div className="bg-card/30 border border-border/50 rounded-xl p-8 space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-3">Mediation Process</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    CeremonyVerse acts as an impartial mediator in disputes between clients and suppliers. We commit to:
                  </p>
                  <ul className="mt-3 space-y-2 text-muted-foreground">
                    <li>• 24-hour initial response to dispute claims</li>
                    <li>• 7-10 business day resolution target</li>
                    <li>• Fair assessment based on evidence provided</li>
                    <li>• Clear communication throughout the process</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-3">Resolution Options</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Full refund for misrepresentation or non-delivery</li>
                    <li>• Partial refund for minor quality issues</li>
                    <li>• Return facilitation for incorrect items</li>
                    <li>• Local alteration reimbursement (up to predefined limits)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Supplier Verification */}
            <section>
              <h2 className="font-serif text-3xl font-light text-foreground mb-6">Supplier Verification Standards</h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card/30 border border-border/50 rounded-xl p-6">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">Tier 1: Foundation</h3>
                  <p className="text-sm text-muted-foreground">
                    Legal verification, digital footprint analysis, and policy compliance review.
                  </p>
                </div>

                <div className="bg-card/30 border border-border/50 rounded-xl p-6">
                  <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">Tier 2: Quality</h3>
                  <p className="text-sm text-muted-foreground">
                    Virtual site inspection, sample review, and reference verification.
                  </p>
                </div>

                <div className="bg-card/30 border border-border/50 rounded-xl p-6">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">Tier 3: Premium</h3>
                  <p className="text-sm text-muted-foreground">
                    Third-party on-site audit and material certification for high-value items.
                  </p>
                </div>
              </div>
            </section>

            {/* Limitations */}
            <section className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
                <h2 className="font-serif text-3xl font-light text-foreground">Limitations of Liability</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  While we maintain rigorous verification standards, CeremonyVerse acts as a facilitator and mediator.
                  We are not liable for supplier actions beyond our reasonable control.
                </p>
                <p className="leading-relaxed">
                  Our liability is limited to the amount paid for services. We are not responsible for consequential
                  damages, including but not limited to wedding delays or emotional distress.
                </p>
                <p className="leading-relaxed">
                  Force majeure events (natural disasters, political instability, pandemics) may affect service
                  delivery. We will work diligently to find alternative solutions but cannot guarantee outcomes in such
                  circumstances.
                </p>
              </div>
            </section>

            {/* Termination */}
            <section>
              <h2 className="font-serif text-3xl font-light text-foreground mb-6">Service Termination</h2>

              <div className="space-y-4">
                <div className="border-l-4 border-primary/30 pl-6">
                  <h3 className="font-semibold text-lg text-foreground mb-2">By Client</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Clients may terminate services with 30 days written notice. Refunds for unused services will be
                    provided minus any non-recoverable costs already incurred.
                  </p>
                </div>

                <div className="border-l-4 border-secondary/30 pl-6">
                  <h3 className="font-semibold text-lg text-foreground mb-2">By CeremonyVerse</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to terminate services for non-payment, breach of terms, or abusive behavior.
                    Full refund of unused services will be provided in such cases.
                  </p>
                </div>
              </div>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="font-serif text-3xl font-light text-foreground mb-6">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update these Terms periodically. Significant changes will be communicated via email at least 30
                days before taking effect. Continued use of services after changes constitutes acceptance of updated
                Terms.
              </p>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8 text-center">
              <h2 className="font-serif text-3xl font-light text-foreground mb-4">Questions About These Terms?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you have questions about these Terms of Service, please contact our legal team:
              </p>
              <div className="space-y-2 text-foreground mb-6">
                <p>Email: legal@ceremonyverse.com</p>
                <p>Phone: +1-215-341-9990</p>
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                Contact Legal Team
              </Button>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
