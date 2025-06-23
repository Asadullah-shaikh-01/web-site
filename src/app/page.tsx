import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSections from "@/components/ServicesSections";
import Team from "@/components/Team";
import TestimonialCard from "@/components/TestimonialCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <main className="min-h-secreen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
       <HeroSection/>
       <FeaturedSection />
       <WhyChooseUs />
       <TestimonialCard />
       <ServicesSections/>
       <Team />
       <Footer />
    </main>
    </>
  );
}
