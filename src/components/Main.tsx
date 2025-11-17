import { HeroSection } from "@/sections/HeroSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ContactSectionNew } from "@/sections/ContactSectionNew";

export const Main = () => {
  return (
    <main className="box-border caret-transparent bg-black">
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSectionNew />
    </main>
  );
};
