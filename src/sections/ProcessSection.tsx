import { motion } from "framer-motion";

export const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Анализ и стратегия",
      description: "Глубокое погружение в ваш бизнес. Определяем цели, метрики успеха и создаем roadmap.",
      icon: "🔍",
      duration: "1-2 дня",
    },
    {
      number: "02",
      title: "Дизайн и прототипирование",
      description: "Создаем UX/UI дизайн, прототипы и интерактивные макеты для валидации идей.",
      icon: "🎨",
      duration: "3-5 дней",
    },
    {
      number: "03",
      title: "Разработка MVP",
      description: "Быстрая разработка минимально жизнеспособного продукта с ключевым функционалом.",
      icon: "⚡",
      duration: "2-3 недели",
    },
    {
      number: "04",
      title: "Тестирование и запуск",
      description: "Тестируем на реальных пользователях, собираем feedback и запускаем в production.",
      icon: "🚀",
      duration: "1 неделя",
    },
    {
      number: "05",
      title: "Масштабирование",
      description: "Добавляем новые фичи, оптимизируем, масштабируем под рост аудитории.",
      icon: "📈",
      duration: "Постоянно",
    },
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            ⚙️ Как мы работаем
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold text-black mb-6">
            Процесс{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              создания
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            От первой встречи до запуска и дальнейшей поддержки
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-orange-500 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-16 h-16 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2">
                  <motion.div
                    className="w-full h-full rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {step.icon}
                  </motion.div>
                </div>

                {/* Content card */}
                <motion.div
                  className={`flex-1 ml-24 md:ml-0 ${
                    index % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-6xl font-black mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-3xl font-bold text-black mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed max-w-md">
                    {step.description}
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-purple-600 font-semibold text-sm">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="flex-shrink-0"
                    >
                      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2" />
                      <path
                        d="M8 4V8L11 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    {step.duration}
                  </div>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-600 mb-6">
            Готовы начать свой проект?
          </p>
          <motion.button
            className="px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            Обсудить проект →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
