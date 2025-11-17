import { HeroSection } from "@/sections/HeroSection";
import { SolutionsSection } from "@/sections/SolutionsSection";
import { IndustriesSection } from "@/sections/IndustriesSection";
import { CaseStudiesSection } from "@/sections/CaseStudiesSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { ContactSection } from "@/sections/ContactSection";
import { CTASection } from "@/sections/CTASection";
import { SectionTransition } from "@/components/SectionTransition";

export const Main = () => {
  return (
    <main className="box-border caret-transparent">
      <HeroSection />
      <SectionTransition>
        <SolutionsSection />
      </SectionTransition>
      <SectionTransition>
        <IndustriesSection />
      </SectionTransition>
      <SectionTransition>
        <CaseStudiesSection />
      </SectionTransition>
      <SectionTransition>
        <TestimonialsSection />
      </SectionTransition>
      <SectionTransition>
        <ContactSection />
      </SectionTransition>
      <SectionTransition>
        <CTASection />
      </SectionTransition>
    </main>
  );
};
