import { motion } from "framer-motion";

export const FeaturesSection = () => {
  const features = [
    {
      icon: "⚡",
      title: "Молниеносная разработка",
      description: "Запускаем MVP за 2 недели. Полный цикл от идеи до релиза.",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: "🎯",
      title: "Точное попадание в цель",
      description: "Глубокий анализ бизнес-задач. Решения, которые работают.",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      icon: "🚀",
      title: "Масштабирование без боли",
      description: "Архитектура готова к росту. От стартапа до enterprise.",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      icon: "🤖",
      title: "AI-первый подход",
      description: "Интеграция ChatGPT, автоматизация процессов, ML-модели.",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      icon: "💎",
      title: "Премиум качество",
      description: "Код ревью, тестирование, документация. Только лучшее.",
      gradient: "from-red-400 to-rose-500",
    },
    {
      icon: "🛡️",
      title: "Безопасность в приоритете",
      description: "GDPR, шифрование, безопасные платежи. Ваши данные защищены.",
      gradient: "from-indigo-400 to-violet-500",
    },
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            💪 Наши преимущества
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6 font-sora">
            Почему выбирают{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              нас
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы не просто пишем код — мы создаем решения, которые приносят результат
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className="relative h-full p-8 bg-white rounded-3xl border border-gray-200 hover:border-transparent transition-all duration-300"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl -z-10`} />

                {/* Glow effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-br ${feature.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-20`}
                />

                <div className="relative z-10">
                  <motion.div
                    className="text-6xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-black group-hover:text-white mb-3 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/90 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
