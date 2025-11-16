import { SolutionsHeader } from "@/sections/SolutionsSection/components/SolutionsHeader";
import { SolutionCards } from "@/sections/SolutionsSection/components/SolutionCards";

export const SolutionsSection = () => {
  return (
    <section className="bg-white box-border caret-transparent px-6 py-16 scroll-mt-16 md:px-8 md:py-20">
      <div className="box-border caret-transparent max-w-screen-xl w-full mx-auto">
        <SolutionsHeader />
        <SolutionCards />
      </div>
    </section>
  );
};
