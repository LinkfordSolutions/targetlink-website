import { TestimonialsHeader } from "@/sections/TestimonialsSection/components/TestimonialsHeader";
import { TestimonialCard } from "@/sections/TestimonialsSection/components/TestimonialCard";
import { InfiniteMarquee } from "@/components/InfiniteMarquee";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      avatar: "https://c.animaapp.com/mi0dh37lZbc34b/assets/avatar-1.jpg",
      name: "Анна Петрова",
      role: "Владелица",
      company: "BeautySpace",
      text: "TargetLink создали для нас идеальное мини-приложение. Количество записей выросло в 3 раза, а клиенты в восторге от удобства!",
      rating: 5,
    },
    {
      avatar: "https://c.animaapp.com/mi0dh37lZbc34b/assets/avatar-2.jpg",
      name: "Дмитрий Соколов",
      role: "Управляющий",
      company: "TasteHub",
      text: "Система бронирования работает безупречно. AI-рекомендации увеличили средний чек на 40%. Рекомендую!",
      rating: 5,
    },
    {
      avatar: "https://c.animaapp.com/mi0dh37lZbc34b/assets/avatar-1.jpg",
      name: "Ирина Волкова",
      role: "Директор",
      company: "FitnessClub Pro",
      text: "Автоматизация процессов сэкономила нам массу времени. Теперь можем сосредоточиться на развитии бизнеса.",
      rating: 5,
    },
    {
      avatar: "https://c.animaapp.com/mi0dh37lZbc34b/assets/avatar-2.jpg",
      name: "Максим Орлов",
      role: "CEO",
      company: "ShopExpress",
      text: "Веб-сайт превзошел все ожидания. Конверсия увеличилась на 60%, а клиенты отмечают удобство навигации.",
      rating: 5,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white box-border caret-transparent py-16 scroll-mt-16 md:py-20 overflow-hidden">
      <div className="box-border caret-transparent max-w-screen-xl w-full mx-auto px-6 md:px-8">
        <TestimonialsHeader />
      </div>

      <div className="mt-12">
        <InfiniteMarquee duration={50}>
          <div className="flex gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-[400px] md:min-w-[500px]">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </InfiniteMarquee>
      </div>
    </section>
  );
};
