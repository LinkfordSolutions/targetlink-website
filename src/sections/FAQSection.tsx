import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Сколько стоит разработка Telegram Mini App?",
      answer: "Стоимость зависит от сложности проекта. Простое приложение от 150 000₽, сложные проекты от 500 000₽. Предоставляем бесплатную оценку после первой консультации.",
    },
    {
      question: "Как долго длится разработка?",
      answer: "MVP мы можем создать за 2-3 недели. Полноценный проект занимает 1-3 месяца в зависимости от функционала. Используем Agile подход с еженедельными релизами.",
    },
    {
      question: "Предоставляете ли вы поддержку после запуска?",
      answer: "Да! Первые 2 недели после запуска поддержка бесплатная. Далее предлагаем различные пакеты поддержки: от базового (20 000₽/мес) до премиум (100 000₽/мес) с приоритетом и SLA.",
    },
    {
      question: "Можно ли интегрировать с существующими системами?",
      answer: "Абсолютно! Интегрируем с любыми системами: 1C, CRM, ERP, платежными шлюзами, API сервисами. Опыт интеграции с 50+ различными платформами.",
    },
    {
      question: "Работаете ли вы с международными клиентами?",
      answer: "Да, работаем с клиентами по всему миру. Поддерживаем мультиязычность, различные валюты и локализацию. Команда свободно общается на английском.",
    },
    {
      question: "Какие гарантии вы предоставляете?",
      answer: "Гарантируем соблюдение сроков (или возврат денег), качество кода (code review + тесты), безопасность (аудит безопасности) и результат (метрики успеха в договоре).",
    },
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-semibold"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            ❓ FAQ
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold text-black mb-6">
            Частые{" "}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              вопросы
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о нашей работе
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <motion.div
                className={`bg-gradient-to-br ${
                  openIndex === index
                    ? "from-orange-50 to-red-50 border-orange-300"
                    : "from-gray-50 to-white border-gray-200"
                } border-2 rounded-2xl overflow-hidden transition-all duration-300`}
                whileHover={{ scale: 1.01 }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="text-xl font-bold text-gray-900 flex-1">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className={openIndex === index ? "text-orange-600" : "text-gray-400"}
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-600 mb-6">
            Остались вопросы? Мы всегда на связи!
          </p>
          <motion.a
            href="https://t.me/targetlink_demo"
            className="inline-block px-12 py-5 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-orange-500/50 transition-all"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            Задать вопрос в Telegram →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
