import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function RecentCelebrations() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Recent Celebrations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <Image
              src="/beach-mandap-secondary.jpg"
              alt="Priya & Michael's Beach Sunset"
              width={400}
              height={300}
              className="rounded-lg object-cover"
            />
            <p className="mt-2 font-medium">Priya & Michael's Beach Sunset</p>
          </div>
          <div>
            <Image
              src="/garden-gazebo-mint.jpg"
              alt="Anjali & Rajesh's Garden Romance"
              width={400}
              height={300}
              className="rounded-lg object-cover"
            />
            <p className="mt-2 font-medium">Anjali & Rajesh's Garden Romance</p>
          </div>
          <div>
            <Image
              src="/rose-garden-red.jpg"
              alt="Zara & Omar's Cultural Fusion"
              width={400}
              height={300}
              className="rounded-lg object-cover"
            />
            <p className="mt-2 font-medium">Zara & Omar's Cultural Fusion</p>
          </div>
        </div>
        <div className="mt-6">
          <Link href="/gallery">
            <Button size="lg" className="font-sans bg-primary text-primary-foreground hover:bg-primary/90">
              View Full Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
