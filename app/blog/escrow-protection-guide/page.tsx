import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft, Calendar, Clock, Shield, CheckCircle2 } from "lucide-react"
import SocialShare from "@/components/social-share"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Understanding Escrow Protection for Wedding Purchases | Complete Guide",
  description:
    "Learn how escrow payment protection works for high-value wedding purchases. Protect your investment with secure payment systems designed for cross-border transactions.",
  keywords:
    "escrow protection wedding, secure wedding payments, wedding payment protection, escrow for wedding purchases, protect wedding investment, secure cross-border payments, wedding financial security",
}

export default function EscrowProtectionGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <article className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-sm text-foreground/60 hover:text-foreground mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm font-semibold rounded-full">
                Financial Planning
              </span>
              <div className="flex items-center gap-4 text-sm text-foreground/60">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>January 5, 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>5 min read</span>
                </div>
              </div>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Understanding Escrow Protection for Wedding Purchases
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              When spending thousands on wedding items from distant suppliers, escrow protection isn't just nice to
              have—it's essential. Here's everything you need to know about protecting your investment.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground mb-2">Why This Matters</p>
                  <p className="text-sm text-foreground/70 mb-0">
                    The average Indian-American fusion wedding costs $225,000-$300,000, with significant portions spent
                    on items sourced from India. Without proper payment protection, you're risking tens of thousands of
                    dollars on suppliers you've never met in person.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">What Is Escrow Protection?</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Escrow is a financial arrangement where a third party holds and regulates payment of funds required for
              two parties involved in a transaction. Think of it as a neutral referee that ensures both buyer and seller
              fulfill their obligations before money changes hands.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              For wedding purchases, here's how it works: You pay for your items (lehenga, jewelry, decor), but instead
              of the money going directly to the supplier, it's held securely by the escrow service. The supplier ships
              your items. Once you receive and approve them, the escrow service releases payment to the supplier. If
              there's a problem, you have recourse.
            </p>

            <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
              Why Traditional Payment Methods Fall Short
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Many couples make the mistake of using standard payment methods for high-value wedding purchases:
            </p>
            <ul className="list-disc pl-6 mb-6 text-foreground/80 space-y-3">
              <li>
                <strong>Wire Transfers:</strong> Once sent, the money is gone. If the supplier doesn't deliver or sends
                inferior products, you have virtually no recourse. Wire transfer fraud is common in cross-border
                transactions.
              </li>
              <li>
                <strong>Credit Cards:</strong> While they offer some protection, chargebacks for international
                transactions are complex, time-consuming, and often unsuccessful. Plus, many Indian suppliers don't
                accept credit cards or charge high processing fees.
              </li>
              <li>
                <strong>PayPal Friends & Family:</strong> Offers zero buyer protection. Suppliers often request this to
                avoid fees, but it leaves you completely vulnerable.
              </li>
              <li>
                <strong>Cryptocurrency:</strong> Transactions are irreversible and offer no buyer protection whatsoever.
              </li>
            </ul>

            <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
              How Escrow Protection Works: Step-by-Step
            </h2>
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Agreement & Payment</h3>
                  <p className="text-foreground/70 text-sm">
                    You and the supplier agree on items, specifications, timeline, and price. You make payment, which is
                    captured and held securely in the escrow account. The supplier is notified that funds are secured.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Production & Shipping</h3>
                  <p className="text-foreground/70 text-sm">
                    The supplier creates your items and ships them with tracking information. You receive updates
                    throughout the process. For custom items, milestone-based releases can be arranged (30% to start,
                    40% at progress check, 30% upon delivery approval).
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Inspection Window</h3>
                  <p className="text-foreground/70 text-sm">
                    Upon delivery, you have 72 hours to inspect items thoroughly. Check quality, authenticity,
                    specifications, and condition. Document everything with photos and videos. This is your protection
                    window.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Approval & Release</h3>
                  <p className="text-foreground/70 text-sm">
                    If everything meets expectations, you approve the delivery. The escrow service releases payment to
                    the supplier. If there are issues, you open a dispute with evidence, and a mediator helps resolve
                    the situation fairly.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
              Real-World Scenarios: When Escrow Saves the Day
            </h2>
            <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-foreground mb-3">Scenario 1: Quality Mismatch</h3>
              <p className="text-foreground/70 text-sm mb-3">
                Priya ordered a custom bridal lehenga for $8,500. The photos showed intricate zardozi work and pure
                silk. What arrived was machine embroidery on synthetic fabric. Without escrow, she would have lost
                $8,500. With escrow protection, she documented the discrepancy, opened a dispute, and received a full
                refund within 10 days.
              </p>
              <div className="flex items-center gap-2 text-sm text-secondary">
                <CheckCircle2 className="w-4 h-4" />
                <span className="font-semibold">Protected: $8,500</span>
              </div>
            </div>

            <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-foreground mb-3">Scenario 2: Non-Delivery</h3>
              <p className="text-foreground/70 text-sm mb-3">
                Rajesh paid $12,000 for wedding jewelry via wire transfer. The supplier provided tracking information
                that showed delivery, but the package never arrived. The supplier claimed it was delivered and refused a
                refund. Rajesh lost $12,000. With escrow, the funds wouldn't have been released until he confirmed
                receipt.
              </p>
              <div className="flex items-center gap-2 text-sm text-secondary">
                <CheckCircle2 className="w-4 h-4" />
                <span className="font-semibold">Would Have Protected: $12,000</span>
              </div>
            </div>

            <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-foreground mb-3">Scenario 3: Partial Fulfillment</h3>
              <p className="text-foreground/70 text-sm mb-3">
                Amara ordered a complete wedding decor package for $15,000. Only 60% of items arrived, and the supplier
                became unresponsive. With escrow protection, the mediator arranged a partial refund of $6,000 for
                undelivered items, and Amara had time to source replacements without losing her entire investment.
              </p>
              <div className="flex items-center gap-2 text-sm text-secondary">
                <CheckCircle2 className="w-4 h-4" />
                <span className="font-semibold">Protected: $6,000 + Maintained Timeline</span>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
              What to Look for in Escrow Services
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Not all escrow services are created equal. When evaluating protection for your wedding purchases, ensure
              the service offers:
            </p>
            <ul className="list-disc pl-6 mb-6 text-foreground/80 space-y-2">
              <li>
                <strong>International Transaction Experience:</strong> Cross-border payments have unique challenges.
                Choose services familiar with India-US/Mexico transactions.
              </li>
              <li>
                <strong>Clear Dispute Resolution Process:</strong> Understand exactly how disputes are handled, typical
                resolution timeframes (7-10 business days is standard), and what evidence is required.
              </li>
              <li>
                <strong>Milestone Payment Options:</strong> For custom items over $5,000, staged payments provide
                additional security and quality checkpoints.
              </li>
              <li>
                <strong>Reasonable Fees:</strong> Escrow fees typically range from 2-5% of transaction value. This is a
                small price for protecting five-figure purchases.
              </li>
              <li>
                <strong>Supplier Verification:</strong> The best services vet suppliers before allowing them on the
                platform, adding an extra layer of protection.
              </li>
            </ul>

            <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
              Questions to Ask Before Any Large Purchase
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Before committing to any wedding supplier, especially for items over $1,000, ask these critical questions:
            </p>
            <ol className="list-decimal pl-6 mb-6 text-foreground/80 space-y-3">
              <li>
                <strong>Do you offer escrow payment protection?</strong> If the answer is no, ask why. Legitimate
                suppliers understand buyer concerns and should be willing to work with escrow services.
              </li>
              <li>
                <strong>What is your refund and return policy?</strong> Get this in writing. Vague promises aren't
                enforceable.
              </li>
              <li>
                <strong>Can you provide references from US/Mexico customers?</strong> Speak with previous clients about
                their experience, especially regarding delivery and quality.
              </li>
              <li>
                <strong>What quality guarantees do you offer?</strong> Understand exactly what recourse you have if
                items don't meet specifications.
              </li>
              <li>
                <strong>How do you handle disputes?</strong> A supplier's willingness to discuss this openly is a good
                sign of their integrity.
              </li>
            </ol>

            <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">The Bottom Line</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Your wedding is one of the most significant financial investments you'll make. When sourcing items from
              distant suppliers—especially across international borders—escrow protection isn't optional; it's
              essential.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              The small fee for escrow services (typically 2-5% of purchase price) is insignificant compared to the risk
              of losing thousands of dollars to fraud, non-delivery, or quality issues. More importantly, escrow
              protection gives you peace of mind during an already stressful planning process.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-6">
              <strong>Remember:</strong> Any supplier who refuses to work with escrow protection or pressures you to use
              unprotected payment methods is a red flag. Legitimate businesses understand buyer concerns and welcome
              systems that protect both parties.
            </p>
          </div>

          <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-border">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
              All Our Transactions Include Escrow Protection
            </h3>
            <p className="text-foreground/70 mb-6">
              At CeremonyVerse, every purchase is protected by comprehensive escrow systems. We work exclusively with
              verified suppliers who understand and respect the need for buyer protection. Your investment is secure
              from payment to delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link href="/services">Explore Our Services</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Schedule Free Consultation</Link>
              </Button>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/blog/vendor-verification-guide"
                className="p-6 border border-border rounded-xl hover:shadow-lg transition-shadow"
              >
                <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                  How to Choose Verified Wedding Suppliers
                </h4>
                <p className="text-sm text-foreground/70">
                  Learn our three-tier verification process beyond escrow protection.
                </p>
              </Link>
              <Link
                href="/blog/virtual-shopping-india-guide"
                className="p-6 border border-border rounded-xl hover:shadow-lg transition-shadow"
              >
                <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                  Virtual Shopping from India: Complete Guide
                </h4>
                <p className="text-sm text-foreground/70">
                  Shop authentic items remotely with confidence and quality assurance.
                </p>
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <SocialShare
              url="https://ceremonyverse.com/blog/escrow-protection-guide"
              title="Understanding Escrow Protection for Wedding Purchases"
            />
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
