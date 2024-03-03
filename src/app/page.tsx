
import HeroSection from "@/sections/hero-section";
import ServicesSection from "@/sections/services-section";
export default function Home() {
  return (
    <main className="relative w-full mx-auto 3xl:max-w-7xl">
      <HeroSection />

      <ServicesSection/>
    </main>
  );
}
