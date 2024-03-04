import { Separator } from "@/components/ui/separator";
import ContactSection from "@/sections/contact-section";
import FaqSection from "@/sections/faq-section";
import HeroSection from "@/sections/hero-section";
import RentSection from "@/sections/rent-section";
import ServicesSection from "@/sections/services-section";
export default function Home() {
  return (
    <main className="relative mx-auto w-full 3xl:max-w-7xl">
      <HeroSection />

      <div id="Services">
        <ServicesSection />
      </div>

      <div id="Rent">
        <RentSection />
      </div>

      <Separator className="mx-auto my-5 w-full max-w-7xl" />

      <div id="Contact">
        <ContactSection />
      </div>

      <Separator className="mx-auto my-5 w-full max-w-7xl" />

      <div id="FAQ">
        <FaqSection />
      </div>
    </main>
  );
}
