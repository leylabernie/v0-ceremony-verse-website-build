import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Sustainable & Eco‑Friendly South‑Asian Weddings | CeremonyVerse",
  description: "Eco-friendly ideas for invitations, decor, waste reduction, venues, fashion, gifts and transportation to plan a sustainable South Asian wedding.",
  keywords: ["sustainable weddings", "eco-friendly wedding", "Indian-American wedding", "green wedding planning"],
};

export default function SustainableEcoWeddingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <article className="max-w-3xl mx-auto px-4 py-8">
        <Link href="/blog" className="inline-flex items-center text-sm text-primary hover:underline mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
        <header className="mb-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sustainable & Eco‑Friendly South‑Asian Weddings
          </h1>
          <p className="text-base text-foreground/70 leading-relaxed">
            South‑Asian weddings are known for their grandeur and multi‑day celebrations. With creativity and careful planning, couples can honour cultural traditions and minimise their ecological footprint.
          </p>
        </header>
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">Eco‑Friendly Invitations</h2>
            <p className="mb-4">Reduce paper waste by sending digital invitations or using plantable paper embedded with seeds. If you prefer printed invites, choose recycled paper with soy‑based inks.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">Sustainable Decor</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use locally sourced flowers and potted plants; give potted plants as take‑home gifts.</li>
              <li>Rent or repurpose decorations like linens, lanterns and backdrops to avoid single‑use purchases.</li>
              <li>Choose energy‑efficient lighting such as LED or solar‑powered lights and candles.</li>
              <li>Incorporate natural materials like bamboo, jute and recycled glass to reduce plastic.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">Waste Reduction</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Work with your caterer to plan realistic portions and arrange to donate leftovers to local charities.</li>
              <li>Set up clearly marked composting and recycling stations at your venue.</li>
              <li>Use reusable dinnerware whenever possible; if disposables are needed, opt for biodegradable plates and cutlery.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">Green Venues</h2>
            <p className="mb-4">
              Choose venues that prioritise sustainability, such as botanical gardens, eco‑lodges or event spaces with renewable energy, recycling programmes and water‑saving fixtures. Outdoor venues often require less artificial decor and lighting.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">Sustainable Fashion</h2>
            <p className="mb-4">
              Select garments made from eco‑friendly fabrics like organic cotton, bamboo silk or recycled materials. Consider renting outfits for pre‑wedding events or purchasing versatile pieces you’ll wear again. Mix traditional attire with modern silhouettes for a unique look.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">Mindful Gifts & Favors</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Offer plantable favours such as herb seedlings or succulents.</li>
              <li>Package gifts in reusable jute bags, wooden boxes or baskets.</li>
              <li>Donate to a charity meaningful to you in lieu of physical favours and share the cause with guests.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">Transportation & Carbon Offsets</h2>
            <p className="mb-4">
              Encourage guests to carpool or use shuttles to reduce transportation emissions. You can also invest in carbon offsets or organise a tree‑planting campaign to balance out the environmental impact of travel.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">Conclusion</h2>
            <p>
              By embracing sustainable practices — from invitations and décor to venues and fashion — you can celebrate your South‑Asian wedding in a way that honours both your heritage and the planet. Thoughtful choices not only reduce waste but also inspire guests to adopt eco‑friendly habits.
            </p>
          </div>
        </section>
      </article>
      <Footer />
    </div>
  );
}
