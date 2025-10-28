import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CustomHero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center">
      <Image
        src="/beach-sunset-primary.jpg"
        alt="Beach sunset wedding ceremony"
        fill
        className="object-cover"
        priority
      />
      {/* overlay to darken image for text readability */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Where Traditional Vows Meet Golden Hour Magic
        </h1>
        <Link href="/gallery">
          <Button size="lg" className="font-sans bg-primary text-primary-foreground hover:bg-primary/90">
            See Our Celebrations
          </Button>
        </Link>
      </div>
    </section>
  );
}
