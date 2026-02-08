import { BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-card py-10">
      <div className="container mx-auto flex flex-col items-center gap-4 px-4 text-center">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          <span className="font-serif text-lg font-bold">Book Share</span>
        </div>
        <p className="max-w-sm text-sm text-muted-foreground">
          Giving textbooks a second life. Share knowledge, help students, make a difference.
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Book Share. Made with ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
