import { Separator } from "@/components/ui/separator";
import ContactSection from "@/sections/contact-section";
import HeroSection from "@/sections/hero-section";
import RentSection from "@/sections/rent-section";
import ServicesSection from "@/sections/services-section";
export default function Home() {
  return (
    <main className="relative mx-auto w-full 3xl:max-w-7xl">
      <HeroSection />

      <ServicesSection />

      <RentSection />

      <Separator className="my-5 w-full max-w-7xl mx-auto" />

      <ContactSection />

      <Separator className="my-5 w-full max-w-7xl mx-auto" />
    </main>
  );
}
