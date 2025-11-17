import { motion } from "framer-motion";
import { HoverGlowCard } from "@/components/HoverGlowCard";

export const SolutionCards = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const cards = [
    {
      emoji: "🎯",
      title: "Мини-приложения",
      glowColor: "rgba(0, 102, 255, 0.5)",
      icon: "https://c.animaapp.com/mi0dh37lZbc34b/assets/icon-5.svg",
      features: [
        "Бронирование и заказы",
        "Программы лояльности",
        "Реферальные системы",
      ],
    },
    {
      emoji: "🌐",
      title: "Веб-сайты",
      glowColor: "rgba(0, 212, 255, 0.5)",
      icon: "https://c.animaapp.com/mi0dh37lZbc34b/assets/icon-7.svg",
      features: [
        "SEO-оптимизация",
        "Высокая производительность",
        "Кастомные интеграции",
      ],
    },
    {
      emoji: "💼",
      title: "Вертикальное ПО",
      glowColor: "rgba(123, 97, 255, 0.5)",
      icon: "https://c.animaapp.com/mi0dh37lZbc34b/assets/icon-8.svg",
      features: [
        "Панели управления",
        "Инструменты аналитики",
        "Контроль доступа",
      ],
    },
    {
      emoji: "🤖",
      title: "AI & Автоматизация",
      glowColor: "rgba(255, 61, 113, 0.5)",
      icon: "https://c.animaapp.com/mi0dh37lZbc34b/assets/icon-9.svg",
      features: [
        "Чат/голосовые агенты",
        "Автоматизация бэк-офиса",
        "Умные процессы",
      ],
    },
  ];

  return (
    <div className="box-border caret-transparent gap-x-8 grid grid-cols-none gap-y-8 md:grid-cols-[repeat(4,minmax(0px,1fr))]">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="box-border caret-transparent"
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <HoverGlowCard
            className="relative text-slate-900 bg-white shadow-[0_4px_20px_rgba(0,102,255,0.08)] box-border caret-transparent h-full border border-gray-100 overflow-hidden rounded-xl hover:shadow-[0_8px_32px_rgba(0,102,255,0.15)] hover:border-brand-primary/30 transition-all duration-300 group"
            glowColor={card.glowColor}
          >
            <motion.div className="relative z-10 h-full flex flex-col" whileHover={{ y: -8 }}>
              <div className="box-border caret-transparent flex flex-col p-5">
                <motion.div
                  className="text-white items-center bg-gradient-brand shadow-[0_8px_24px_rgba(0,102,255,0.25)] box-border caret-transparent flex h-14 justify-center w-14 mb-3 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                >
                  <motion.img
                    src={card.icon}
                    alt="Icon"
                    className="box-border caret-transparent h-8 w-8"
                    animate={{
                      y: [0, -2, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
                <div className="text-zinc-950 text-lg font-bold box-border caret-transparent tracking-tight leading-snug mt-1 font-sora group-hover:text-brand-primary transition-colors duration-300">
                  {card.emoji} {card.title}
                </div>
              </div>
              <div className="box-border caret-transparent pb-5 px-5 group-hover:bg-gradient-to-b group-hover:from-transparent group-hover:to-blue-50/30 transition-all duration-300 flex-1">
                <ul className="box-border caret-transparent list-none pl-0 space-y-2">
                  {card.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="text-gray-600 text-sm items-start box-border caret-transparent flex leading-relaxed group-hover:text-gray-800 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-brand-primary text-lg mr-2">✓</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </HoverGlowCard>
        </motion.div>
      ))}
    </div>
  );
};
