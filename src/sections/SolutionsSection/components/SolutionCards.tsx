import { motion } from "framer-motion";
import { Enhanced3DCard } from "@/components/Enhanced3DCard";

export const SolutionCards = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20, rotateX: -15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
        ease: [0.6, 0.05, 0.01, 0.9],
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
    <div className="box-border caret-transparent gap-x-8 grid grid-cols-none gap-y-8 md:grid-cols-[repeat(4,minmax(0px,1fr))] perspective-1000">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="box-border caret-transparent"
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          <Enhanced3DCard
            className="relative text-slate-900 bg-white shadow-[0_4px_20px_rgba(0,102,255,0.08)] box-border caret-transparent h-full border border-gray-100 overflow-visible rounded-xl hover:shadow-[0_12px_40px_rgba(0,102,255,0.2)] hover:border-brand-primary/50 transition-all duration-500 group backdrop-blur-sm"
            glowColor={card.glowColor}
          >
              <div className="relative z-10 h-full flex flex-col p-6">
                <motion.div
                  className="text-white items-center bg-gradient-brand shadow-[0_8px_24px_rgba(0,102,255,0.25)] box-border caret-transparent flex h-16 justify-center w-16 mb-4 rounded-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500"
                  whileHover={{
                    rotate: [0, -10, 10, -10, 10, 0],
                    scale: 1.3
                  }}
                  transition={{ duration: 0.8, type: "spring", stiffness: 300 }}
                >
                  <motion.img
                    src={card.icon}
                    alt="Icon"
                    className="box-border caret-transparent h-9 w-9"
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
                <div className="text-zinc-950 text-xl font-bold box-border caret-transparent tracking-tight leading-snug mt-2 mb-4 font-sora group-hover:text-brand-primary transition-colors duration-300">
                  {card.emoji} {card.title}
                </div>
                <div className="box-border caret-transparent flex-1">
                  <ul className="box-border caret-transparent list-none pl-0 space-y-3">
                    {card.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="text-gray-600 text-sm items-start box-border caret-transparent flex leading-relaxed group-hover:text-gray-800 transition-colors duration-300"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: featureIndex * 0.1 + index * 0.15 }}
                        whileHover={{ x: 8, scale: 1.05 }}
                      >
                        <motion.span
                          className="text-brand-primary text-lg mr-2 inline-block"
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: featureIndex * 0.2,
                          }}
                        >
                          ✓
                        </motion.span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
          </Enhanced3DCard>
        </motion.div>
      ))}
    </div>
  );
};
