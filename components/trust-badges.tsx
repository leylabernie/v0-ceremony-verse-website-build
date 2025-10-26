import { Shield, CheckCircle, Lock, Video } from "@/components/icons"

export function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: "Verified Suppliers",
      description: "3-tier verification process",
    },
    {
      icon: Lock,
      title: "Escrow Protection",
      description: "Your payment secured until delivery",
    },
    {
      icon: Video,
      title: "Live Consultations",
      description: "Video calls with suppliers",
    },
    {
      icon: CheckCircle,
      title: "Quality Guaranteed",
      description: "Pre-shipment inspection available",
    },
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="font-sans flex flex-col items-center text-center p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
        >
          <badge.icon className="font-sans h-8 w-8 text-primary mb-3" />
          <h3 className="font-sans font-semibold text-sm mb-1">{badge.title}</h3>
          <p className="font-sans text-xs text-muted-foreground leading-relaxed">{badge.description}</p>
        </div>
      ))}
    </div>
  )
}
