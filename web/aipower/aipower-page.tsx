import AnnouncementBar from "@/web/aipower/sections/announcement-bar";
import Navbar from "@/web/aipower/sections/navbar";
import Hero from "@/web/aipower/sections/hero";
import LogoStrip from "@/web/aipower/sections/logo-strip";
import CaseStudies from "@/web/aipower/sections/case-studies";
import Features from "@/web/aipower/sections/features";
import CustomizedCard from "@/web/aipower/sections/customized-card";
import Faq from "@/web/aipower/sections/faq";
import Cta from "@/web/aipower/sections/cta";
import Footer from "@/web/aipower/sections/footer";

export default function AipowerPage() {
  return (
    <div className="flex flex-col items-center w-full bg-white">
      <AnnouncementBar />
      <Navbar />
      <main className="flex flex-col items-start w-full">
        <Hero />
        <LogoStrip />
        <CaseStudies />
        <Features />
        <CustomizedCard />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
