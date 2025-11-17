import { motion } from "framer-motion";
import { useCounter } from "@/hooks/useCounter";

export const ResultsSection = () => {
  const results = [
    {
      metric: "300%",
      label: "Рост конверсии",
      description: "E-commerce платформа",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      metric: "10x",
      label: "Ускорение процессов",
      description: "Автоматизация CRM",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      metric: "50K+",
      label: "Активных пользователей",
      description: "Telegram Mini App",
      gradient: "from-orange-500 to-red-500",
    },
    {
      metric: "24ч",
      label: "Время отклика",
      description: "Поддержка клиентов",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            📊 Доказанные результаты
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Цифры{" "}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              говорят
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Реальные метрики от наших клиентов. Результаты, которые можно измерить.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className="relative h-full p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:border-white/30 transition-all"
                whileHover={{ y: -10, scale: 1.05 }}
              >
                {/* Gradient glow */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-br ${result.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity -z-10`}
                />

                <div className="text-center">
                  <motion.div
                    className={`text-6xl font-black bg-gradient-to-br ${result.gradient} bg-clip-text text-transparent mb-4`}
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                  >
                    {result.metric}
                  </motion.div>
                  <div className="text-xl font-bold text-white mb-2">
                    {result.label}
                  </div>
                  <div className="text-white/60 text-sm">
                    {result.description}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Case study preview */}
        <motion.div
          className="mt-20 grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <motion.div
              className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              💼 Кейс
            </motion.div>
            <h3 className="text-4xl font-bold text-white mb-6">
              Как мы увеличили продажи на 300%
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Клиент обратился с запросом на создание Telegram мини-приложения для
              своего e-commerce бизнеса. За 3 месяца мы разработали полноценную
              платформу с интеграцией платежей, каталогом товаров и AI-рекомендациями.
            </p>
            <div className="space-y-3 mb-8">
              {[
                "Автоматизация 90% бизнес-процессов",
                "Интеграция с CRM и 1C",
                "AI-помощник для клиентов",
                "Аналитика в реальном времени",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 text-white"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M13 4L6 11L3 8"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Читать полный кейс →
            </motion.button>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1">
              <div className="w-full h-full bg-black rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop"
                  alt="Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl opacity-60"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 0.8, 0.6],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
