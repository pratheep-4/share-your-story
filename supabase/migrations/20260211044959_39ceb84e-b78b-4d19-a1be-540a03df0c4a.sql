
-- Create books table
CREATE TABLE public.books (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  author TEXT NOT NULL,
  subject TEXT NOT NULL,
  condition TEXT NOT NULL CHECK (condition IN ('Like New', 'Good', 'Fair')),
  location TEXT NOT NULL,
  image_url TEXT,
  claimed BOOLEAN NOT NULL DEFAULT false,
  claimed_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.books ENABLE ROW LEVEL SECURITY;

-- Anyone can view books
CREATE POLICY "Anyone can view books"
  ON public.books FOR SELECT
  USING (true);

-- Authenticated users can insert their own books
CREATE POLICY "Users can insert own books"
  ON public.books FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Users can update their own books
CREATE POLICY "Users can update own books"
  ON public.books FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Users can delete their own books
CREATE POLICY "Users can delete own books"
  ON public.books FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Allow any authenticated user to claim a book (update claimed status)
CREATE POLICY "Users can claim books"
  ON public.books FOR UPDATE
  TO authenticated
  USING (claimed = false)
  WITH CHECK (claimed = true AND claimed_by = auth.uid());

-- Create storage bucket for book images
INSERT INTO storage.buckets (id, name, public) VALUES ('book-images', 'book-images', true);

-- Storage policies
CREATE POLICY "Anyone can view book images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'book-images');

CREATE POLICY "Authenticated users can upload book images"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'book-images');
