
-- Create a public view that excludes sensitive user identity fields
CREATE VIEW public.books_public
WITH (security_invoker = on) AS
SELECT id, title, author, subject, condition, location, image_url, claimed, created_at
FROM public.books;

-- Drop the existing permissive SELECT policy
DROP POLICY "Anyone can view books" ON public.books;

-- Authenticated users can view all columns (needed for own-book management and claiming)
CREATE POLICY "Authenticated users can view books"
ON public.books FOR SELECT
TO authenticated
USING (true);

-- Anonymous/public access denied on base table (they use the view)
CREATE POLICY "Public view only via books_public"
ON public.books FOR SELECT
TO anon
USING (false);
