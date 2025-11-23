import { HeroSection } from "@/sections/HeroSection";
import { FeaturesSection } from "@/sections/FeaturesSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { CTASectionNew } from "@/sections/CTASectionNew";
import { ResultsSection } from "@/sections/ResultsSection";
import { ProcessSectionNew } from "@/sections/ProcessSectionNew";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { TestimonialsCarousel } from "@/sections/TestimonialsCarousel";
import { FAQSection } from "@/sections/FAQSection";
import { ContactSectionNew } from "@/sections/ContactSectionNew";
import { FooterNew } from "@/sections/FooterNew";

export const Main = () => {
  return (
    <>
      <main className="box-border caret-transparent">
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <CTASectionNew />
        <ResultsSection />
        <ProcessSectionNew />
        <ProjectsSection />
        <TestimonialsCarousel />
        <FAQSection />
        <ContactSectionNew />
      </main>
      <FooterNew />
    </>
  );
};
