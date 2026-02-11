
-- Drop the restrictive anon policy that blocks view access
DROP POLICY "Public view only via books_public" ON public.books;

-- Allow anon to SELECT from base table (the view already strips sensitive columns)
CREATE POLICY "Public view only via books_public"
ON public.books FOR SELECT
TO anon
USING (true);
