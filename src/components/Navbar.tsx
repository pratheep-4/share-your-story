import { BookOpen, Plus, LogIn, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  onShareClick: () => void;
}

const Navbar = ({ onShareClick }: NavbarProps) => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="/" className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold font-serif text-foreground">Book Share</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#books" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Browse Books
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            How It Works
          </a>
        </div>

        <div className="flex items-center gap-2">
          <Button size="sm" className="gap-1.5" onClick={onShareClick}>
            <Plus className="h-4 w-4" />
            Share a Book
          </Button>
          {user ? (
            <Button size="sm" variant="outline" className="gap-1.5" onClick={signOut}>
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Sign Out</span>
            </Button>
          ) : (
            <Button size="sm" variant="outline" className="gap-1.5" onClick={() => navigate("/auth")}>
              <LogIn className="h-4 w-4" />
              <span className="hidden sm:inline">Sign In</span>
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
