import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BooksSection from "@/components/BooksSection";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <BooksSection />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
