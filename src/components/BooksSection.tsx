import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import BookCard from "./BookCard";

interface Book {
  id: string;
  title: string;
  author: string;
  subject: string;
  location: string;
  condition: "Like New" | "Good" | "Fair";
  image_url: string | null;
  claimed: boolean;
}

const BooksSection = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = async () => {
    const { data } = await supabase
      .from("books_public" as any)
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setBooks(data as unknown as Book[]);
    setLoading(false);
  };

  useEffect(() => {
    fetchBooks();

    const channel = supabase
      .channel("books-changes")
      .on("postgres_changes", { event: "*", schema: "public", table: "books" }, () => {
        fetchBooks();
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, []);

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

        {loading ? (
          <p className="py-12 text-center text-muted-foreground">Loading books...</p>
        ) : (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((book) => (
                <BookCard
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  subject={book.subject}
                  location={book.location}
                  condition={book.condition}
                  image={book.image_url || "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop"}
                  claimed={book.claimed}
                  onClaimed={fetchBooks}
                />
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="py-12 text-center text-muted-foreground">
                {books.length === 0 ? "No books shared yet. Be the first!" : "No books found matching your search."}
              </p>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default BooksSection;
