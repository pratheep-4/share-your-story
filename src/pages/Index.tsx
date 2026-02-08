import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BooksSection from "@/components/BooksSection";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import ShareBookDialog from "@/components/ShareBookDialog";

const Index = () => {
  const [shareOpen, setShareOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onShareClick={() => setShareOpen(true)} />
      <HeroSection onShareClick={() => setShareOpen(true)} />
      <BooksSection />
      <HowItWorks />
      <Footer />
      <ShareBookDialog open={shareOpen} onOpenChange={setShareOpen} />
    </div>
  );
};

export default Index;
