import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProcessSectionNew = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const steps = [
    {
      number: "01",
      title: "Анализ и стратегия",
      description: "Глубокое погружение в ваш бизнес. Определяем цели, метрики успеха и создаем roadmap.",
      icon: "🔍",
      duration: "1-2 дня",
      gradient: "from-blue-500 via-cyan-500 to-blue-500",
      glowColor: "rgba(0, 212, 255, 0.4)",
    },
    {
      number: "02",
      title: "Дизайн и прототипирование",
      description: "Создаем UX/UI дизайн, прототипы и интерактивные макеты для валидации идей.",
      icon: "🎨",
      duration: "3-5 дней",
      gradient: "from-purple-500 via-pink-500 to-purple-500",
      glowColor: "rgba(168, 85, 247, 0.4)",
    },
    {
      number: "03",
      title: "Разработка MVP",
      description: "Быстрая разработка минимально жизнеспособного продукта с ключевым функционалом.",
      icon: "⚡",
      duration: "2-3 недели",
      gradient: "from-cyan-500 via-blue-500 to-cyan-500",
      glowColor: "rgba(34, 211, 238, 0.4)",
    },
    {
      number: "04",
      title: "Тестирование и запуск",
      description: "Тестируем на реальных пользователях, собираем feedback и запускаем в production.",
      icon: "🚀",
      duration: "1 неделя",
      gradient: "from-pink-500 via-purple-500 to-pink-500",
      glowColor: "rgba(236, 72, 153, 0.4)",
    },
    {
      number: "05",
      title: "Масштабирование",
      description: "Добавляем новые фичи, оптимизируем, масштабируем под рост аудитории.",
      icon: "📈",
      duration: "Постоянно",
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      glowColor: "rgba(99, 102, 241, 0.4)",
    },
  ];

  return (
    <section ref={containerRef} className="relative py-32 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        style={{
          x: useTransform(scrollYProgress, [0, 1], [-100, 100]),
          y: useTransform(scrollYProgress, [0, 1], [0, -200]),
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        style={{
          x: useTransform(scrollYProgress, [0, 1], [100, -100]),
          y: useTransform(scrollYProgress, [0, 1], [0, 200]),
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
              delay: 0.1
            }}
            whileHover={{
              scale: 1.1,
              rotate: [0, -5, 5, -5, 0],
              transition: { duration: 0.5 }
            }}
          >
            ⚙️ Как мы работаем
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl font-bold text-black mb-6 font-sora"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Процесс{" "}
            <motion.span
              className="inline-block bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent bg-[length:200%_auto]"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              создания
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            От первой встречи до запуска и дальнейшей поддержки
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: index * 0.1,
                }}
              >
                <motion.div
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${
                    isEven ? "" : "md:direction-rtl"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Step number and icon - with wobble */}
                  <motion.div
                    className={`relative ${isEven ? "md:text-right" : "md:text-left"}`}
                    whileInView={{
                      rotate: [0, -2, 2, -2, 0],
                      scale: [1, 1.05, 1],
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1 + 0.3,
                    }}
                  >
                    <motion.div
                      className="inline-block relative"
                      whileHover={{
                        rotate: [0, -10, 10, -10, 0],
                        scale: 1.1,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Glow effect */}
                      <motion.div
                        className={`absolute -inset-4 bg-gradient-to-r ${step.gradient} rounded-full blur-2xl opacity-0`}
                        animate={{
                          opacity: [0, 0.6, 0],
                          scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                      />

                      {/* Number */}
                      <motion.div
                        className={`relative text-8xl md:text-9xl font-black bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 12,
                          delay: index * 0.1 + 0.2,
                        }}
                      >
                        {step.number}
                      </motion.div>

                      {/* Icon with bounce */}
                      <motion.div
                        className="absolute -top-4 -right-4 text-5xl"
                        initial={{ scale: 0, y: -50 }}
                        whileInView={{ scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 10,
                          delay: index * 0.1 + 0.4,
                        }}
                        whileHover={{
                          y: [0, -10, 0],
                          rotate: [0, 10, -10, 0],
                          transition: {
                            duration: 0.5,
                            repeat: Infinity,
                            repeatDelay: 0.2,
                          },
                        }}
                      >
                        {step.icon}
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Content card with tilt effect */}
                  <motion.div
                    className={`relative ${isEven ? "md:direction-ltr" : "md:direction-ltr"}`}
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      delay: index * 0.1 + 0.2,
                    }}
                  >
                    <motion.div
                      className="relative group"
                      whileHover={{ scale: 1.03, rotateY: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Animated border gradient */}
                      <motion.div
                        className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(135deg, ${step.glowColor}, transparent)`,
                          filter: "blur(20px)",
                        }}
                      />

                      <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-200 group-hover:border-transparent transition-all duration-300">
                        {/* Gradient overlay on hover */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                        />

                        <div className="relative z-10">
                          {/* Title with underline animation */}
                          <motion.h3
                            className="text-3xl font-bold text-black mb-4"
                            whileHover={{
                              x: [0, 5, 0],
                              transition: { duration: 0.3 },
                            }}
                          >
                            {step.title}
                            <motion.div
                              className={`h-1 bg-gradient-to-r ${step.gradient} rounded-full mt-2`}
                              initial={{ width: 0 }}
                              whileInView={{ width: "100%" }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.8,
                                delay: index * 0.1 + 0.5,
                                ease: "easeOut"
                              }}
                            />
                          </motion.h3>

                          <motion.p
                            className="text-gray-600 mb-6 leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.6 }}
                          >
                            {step.description}
                          </motion.p>

                          {/* Duration badge with pulse */}
                          <motion.div
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${step.gradient} text-white font-semibold text-sm`}
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              type: "spring",
                              stiffness: 200,
                              damping: 10,
                              delay: index * 0.1 + 0.7,
                            }}
                            whileHover={{
                              scale: 1.1,
                              boxShadow: `0 10px 40px ${step.glowColor}`,
                            }}
                          >
                            <motion.svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            >
                              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2" />
                              <motion.path
                                d="M8 4V8L11 10"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                animate={{
                                  pathLength: [0, 1],
                                }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                              />
                            </motion.svg>
                            {step.duration}
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Connecting line with progress animation */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="relative h-24 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="w-1 h-full bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 relative overflow-hidden"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                    >
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-b ${step.gradient}`}
                        initial={{ y: "-100%" }}
                        whileInView={{ y: "100%" }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.5,
                          delay: index * 0.1 + 0.9,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>

                    {/* Animated arrow */}
                    <motion.div
                      className="absolute"
                      initial={{ y: -20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 1 }}
                    >
                      <motion.svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className={`text-purple-500`}
                        animate={{
                          y: [0, 10, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <path
                          d="M12 5L12 19M12 19L5 12M12 19L19 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </motion.svg>
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA with bounce */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.5,
          }}
        >
          <motion.p
            className="text-xl text-gray-600 mb-6"
            whileInView={{
              scale: [1, 1.05, 1],
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Готовы начать свой проект?
          </motion.p>

          <motion.a
            href="https://t.me/targetlink_demo"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block px-12 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_auto] text-white font-bold text-lg rounded-full overflow-hidden"
            whileHover={{
              scale: 1.05,
              y: -5,
              backgroundPosition: "100% 50%",
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 10px 40px rgba(168, 85, 247, 0.3)",
                "0 10px 60px rgba(236, 72, 153, 0.4)",
                "0 10px 40px rgba(168, 85, 247, 0.3)",
              ],
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <motion.span
              className="relative z-10 flex items-center gap-2"
              whileHover={{
                x: [0, 5, 0],
                transition: { duration: 0.5, repeat: Infinity },
              }}
            >
              Обсудить проект
              <motion.span
                animate={{
                  x: [0, 5, 0],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                →
              </motion.span>
            </motion.span>

            {/* Animated background shine */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
