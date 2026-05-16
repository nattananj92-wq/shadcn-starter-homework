import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExploreSection from "@/components/ExploreSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full bg-white">
      <Header />
      <main className="flex flex-col items-start w-full">
        <HeroSection />
        <ExploreSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
