import { TestimonialsHeader } from "@/sections/TestimonialsSection/components/TestimonialsHeader";
import { TestimonialCard } from "@/sections/TestimonialsSection/components/TestimonialCard";

export const TestimonialsSection = () => {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white box-border caret-transparent px-6 py-16 scroll-mt-16 md:px-8 md:py-20">
      <div className="box-border caret-transparent max-w-screen-xl w-full mx-auto">
        <TestimonialsHeader />
        <div className="box-border caret-transparent gap-x-8 grid grid-cols-none gap-y-8 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
          <TestimonialCard
            avatar="https://c.animaapp.com/mi0dh37lZbc34b/assets/avatar-1.jpg"
            name="Анна Петрова"
            role="Владелица"
            company="BeautySpace"
            text="TargetLink создали для нас идеальное мини-приложение. Количество записей выросло в 3 раза, а клиенты в восторге от удобства!"
            rating={5}
          />
          <TestimonialCard
            avatar="https://c.animaapp.com/mi0dh37lZbc34b/assets/avatar-2.jpg"
            name="Дмитрий Соколов"
            role="Управляющий"
            company="TasteHub"
            text="Система бронирования работает безупречно. AI-рекомендации увеличили средний чек на 40%. Рекомендую!"
            rating={5}
          />
        </div>
      </div>
    </section>
  );
};
