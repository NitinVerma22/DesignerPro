import { Hero } from "@/components/sections/Hero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="animate-fade-in">
      <Hero />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
