import { HeroSection } from "@/sections/HeroSection";
import { SolutionsSection } from "@/sections/SolutionsSection";
import { IndustriesSection } from "@/sections/IndustriesSection";
import { CaseStudiesSection } from "@/sections/CaseStudiesSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { ContactSection } from "@/sections/ContactSection";
import { CTASection } from "@/sections/CTASection";

export const Main = () => {
  return (
    <main className="box-border caret-transparent">
      <HeroSection />
      <SolutionsSection />
      <IndustriesSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <ContactSection />
      <CTASection />
    </main>
  );
};
