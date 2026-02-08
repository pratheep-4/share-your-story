import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BookCardProps {
  title: string;
  author: string;
  subject: string;
  location: string;
  condition: "Like New" | "Good" | "Fair";
  image: string;
  claimed?: boolean;
}

const conditionStyles: Record<string, string> = {
  "Like New": "bg-condition-like-new/15 text-condition-like-new",
  Good: "bg-condition-good/15 text-condition-good",
  Fair: "bg-condition-fair/15 text-condition-fair",
};

const BookCard = ({ title, author, subject, location, condition, image, claimed }: BookCardProps) => {
  return (
    <div className="group overflow-hidden rounded-xl border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${conditionStyles[condition]}`}>
          {condition}
        </span>
        {claimed && (
          <div className="absolute inset-0 flex items-center justify-center bg-foreground/50">
            <span className="rounded-full bg-card px-4 py-2 text-sm font-bold text-foreground">
              Claimed!
            </span>
          </div>
        )}
      </div>

      <div className="p-4 space-y-2">
        <h3 className="font-serif text-lg font-semibold leading-tight text-card-foreground line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">by {author}</p>

        <div className="flex items-center justify-between pt-1">
          <span className="rounded-full bg-badge px-2.5 py-0.5 text-xs font-medium text-badge-foreground">
            {subject}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" />
            {location}
          </span>
        </div>

        <Button
          className="mt-3 w-full"
          variant={claimed ? "secondary" : "default"}
          disabled={claimed}
        >
          {claimed ? "Already Claimed" : "Claim This Book"}
        </Button>
      </div>
    </div>
  );
};

export default BookCard;
