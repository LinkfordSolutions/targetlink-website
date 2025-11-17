import { motion } from "framer-motion";
import { useState } from "react";

export const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: "🎯",
      title: "Telegram Mini Apps",
      description: "Создаем мини-приложения для Telegram, которые работают прямо в мессенджере без установки",
      features: ["Web App интеграция", "Платежные системы", "Боты и автоматизация", "Analytics"],
    },
    {
      icon: "🌐",
      title: "Веб-разработка",
      description: "Современные веб-сайты и приложения с фокусом на UX и производительность",
      features: ["React/Next.js", "Responsive дизайн", "SEO оптимизация", "Высокая скорость"],
    },
    {
      icon: "💼",
      title: "Вертикальное ПО",
      description: "Индивидуальные решения для вашего бизнеса - CRM, ERP, системы управления",
      features: ["Custom development", "API интеграции", "Cloud решения", "Масштабируемость"],
    },
    {
      icon: "🤖",
      title: "AI & Автоматизация",
      description: "Внедрение искусственного интеллекта и автоматизация рутинных процессов",
      features: ["ChatGPT интеграция", "ML модели", "Process automation", "Data analysis"],
    },
  ];

  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-black mb-6">
            Что мы <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">делаем</span>
          </h2>
          <p className="text-xl text-black/60 max-w-2xl mx-auto">
            Полный спектр услуг для цифровой трансформации вашего бизнеса
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Service cards */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeService === index
                    ? "bg-black text-white shadow-2xl scale-105"
                    : "bg-gray-50 text-black hover:bg-gray-100"
                }`}
                onClick={() => setActiveService(index)}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className={activeService === index ? "text-white/80" : "text-black/60"}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active service details */}
          <motion.div
            key={activeService}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-12 text-white sticky top-24 h-fit"
          >
            <div className="text-6xl mb-6">{services[activeService].icon}</div>
            <h3 className="text-4xl font-bold mb-6">{services[activeService].title}</h3>
            <p className="text-xl mb-8 text-white/90">
              {services[activeService].description}
            </p>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white/80 uppercase tracking-wider">
                Ключевые возможности
              </h4>
              {services[activeService].features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <span className="text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="mt-8 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-black hover:text-white transition-all duration-300 w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Обсудить проект
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
