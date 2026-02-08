import { ArrowDown, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBooks from "@/assets/hero-books.jpg";

interface HeroSectionProps {
  onShareClick: () => void;
}

const HeroSection = ({ onShareClick }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-badge px-4 py-1.5 text-sm font-medium text-badge-foreground">
              <span>🎁</span>
              <span>100% Free • No Catch</span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Give Your Books a{" "}
              <span className="italic text-primary">Second Life</span>
            </h1>

            <p className="max-w-md text-lg text-muted-foreground">
              Share your old textbooks with students who need them. Upload a photo, and someone who needs it will claim it — completely free.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="px-8 text-base" onClick={onShareClick}>
                Share Your Books
              </Button>
              <Button size="lg" variant="outline" className="gap-2 px-8 text-base" asChild>
                <a href="#books">
                  Browse Available
                  <ArrowDown className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-secondary"
                  >
                    <Users className="h-3.5 w-3.5 text-muted-foreground" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">500+</span> books shared
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={heroBooks}
                alt="Stack of colorful textbooks"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
