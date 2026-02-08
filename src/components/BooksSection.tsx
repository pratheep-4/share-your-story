import { useState } from "react";
import { Search } from "lucide-react";
import BookCard from "./BookCard";

const books = [
  {
    title: "Calculus: Early Transcendentals",
    author: "James Stewart",
    subject: "Mathematics",
    location: "Boston, MA",
    condition: "Good" as const,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
  },
  {
    title: "Introduction to Psychology",
    author: "James W. Kalat",
    subject: "Psychology",
    location: "New York, NY",
    condition: "Like New" as const,
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop",
  },
  {
    title: "Organic Chemistry",
    author: "David R. Klein",
    subject: "Chemistry",
    location: "Chicago, IL",
    condition: "Fair" as const,
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=600&fit=crop",
    claimed: true,
  },
  {
    title: "Physics for Scientists",
    author: "Raymond A. Serway",
    subject: "Physics",
    location: "San Francisco, CA",
    condition: "Good" as const,
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop",
  },
  {
    title: "World History: Patterns",
    author: "Roger B. Beck",
    subject: "History",
    location: "Austin, TX",
    condition: "Like New" as const,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
  },
  {
    title: "Biology: Life on Earth",
    author: "Gerald Audesirk",
    subject: "Biology",
    location: "Seattle, WA",
    condition: "Good" as const,
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&h=600&fit=crop",
  },
];

const BooksSection = () => {
  const [search, setSearch] = useState("");

  const filtered = books.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase()) ||
      b.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="books" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Available Books</h2>
          <p className="text-muted-foreground">
            Browse through textbooks shared by students. Claim one for free!
          </p>
        </div>

        <div className="mx-auto mb-10 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by title, author, or subject..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border bg-card py-2.5 pl-10 pr-4 text-sm text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((book) => (
            <BookCard key={book.title} {...book} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-12 text-center text-muted-foreground">No books found matching your search.</p>
        )}
      </div>
    </section>
  );
};

export default BooksSection;
