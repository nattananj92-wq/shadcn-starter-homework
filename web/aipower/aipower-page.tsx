import Navbar from "@/web/aipower/sections/navbar";
import Hero from "@/web/aipower/sections/hero";
import Features from "@/web/aipower/sections/features";
import Testimonials from "@/web/aipower/sections/testimonials";
import Footer from "@/web/aipower/sections/footer";

export default function AipowerPage() {
  return (
    <div className="flex flex-col items-center w-full bg-white">
      <Navbar />
      <main className="flex flex-col items-start w-full">
        <Hero />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
