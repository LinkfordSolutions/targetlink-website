import { motion } from "framer-motion";
import { MagneticButton } from "@/components/MagneticButton";
import { WaveEffect } from "@/components/WaveEffect";
import { FloatingElements } from "@/components/FloatingElements";
import { AuroraEffect } from "@/components/AuroraEffect";
import { EnergyEffect } from "@/components/EnergyEffect";

export const HeroContentEnhanced = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Background Effects - behind content */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <WaveEffect />
        <AuroraEffect />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white text-sm font-semibold">TargetLink</span>
            </motion.div>

            {/* ОРИГИНАЛЬНЫЙ стиль заголовка */}
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-sora"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Создавайте{" "}
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-brand-secondary via-brand-success to-brand-secondary bg-[length:200%_auto] animate-gradient-shift">
                быстрее
              </span>{" "}
              и работайте{" "}
              <motion.span
                className="relative inline-block"
                style={{ display: "inline-block" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.05, rotate: -1 }}
              >
                <motion.span
                  className="relative inline-block px-6 py-2 bg-gradient-to-r from-brand-purple via-brand-accent to-brand-accent rounded-xl"
                  style={{
                    transform: "rotate(-2deg)",
                    boxShadow: "0 10px 40px rgba(255, 61, 113, 0.4)"
                  }}
                  animate={{
                    boxShadow: [
                      "0 10px 40px rgba(255, 61, 113, 0.4)",
                      "0 10px 50px rgba(123, 97, 255, 0.5)",
                      "0 10px 40px rgba(255, 61, 113, 0.4)"
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="relative z-10 text-white font-bold">
                    умнее
                  </span>
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-brand-accent/50 via-brand-purple/50 to-brand-primary/50 rounded-xl opacity-0"
                    animate={{
                      opacity: [0, 0.3, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.span>
                <motion.span
                  className="absolute -top-2 -right-2 text-2xl md:text-3xl"
                  animate={{
                    rotate: [0, 15, -15, 0],
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ✨
                </motion.span>
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl text-white/90 mb-8 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Telegram мини-приложения, веб-сайты, вертикальное ПО и AI-автоматизация для вашего бизнеса
            </motion.p>

            {/* Tags */}
            <motion.div
              className="flex flex-wrap gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {["🎯 Мини-приложения", "🌐 Веб-сайты", "💼 Вертикальное ПО", "🤖 AI & Автоматизация"].map((tag, i) => (
                <motion.div
                  key={i}
                  className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-medium"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.3)" }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                >
                  {tag}
                </motion.div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <MagneticButton href="https://t.me/targetlink_demo">
                <div className="px-8 py-4 bg-white text-purple-600 font-bold rounded-full shadow-2xl hover:shadow-white/50 transition-all">
                  🚀 Начать сейчас
                </div>
              </MagneticButton>
              <MagneticButton>
                <div className="px-8 py-4 border-2 border-white/30 backdrop-blur-md text-white font-bold rounded-full hover:bg-white/10 transition-all">
                  ✨ Смотреть результаты
                </div>
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right: Demo card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full text-white text-sm font-bold">
                Live Demo
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Telegram Mini App</div>
                    <div className="text-white/60 text-sm">Booking System</div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-4 space-y-3">
                  <div className="flex gap-2">
                    {["Запись", "Каталог", "AI Ассистент"].map((tab, i) => (
                      <motion.button
                        key={i}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                          i === 0 ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white" : "text-white/60 hover:text-white"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tab}
                      </motion.button>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {["10:00", "11:00", "14:00", "15:00", "16:00"].map((time, i) => (
                      <motion.button
                        key={i}
                        className="px-3 py-2 bg-white/10 rounded-lg text-white text-sm hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 + i * 0.05 }}
                      >
                        {time}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div className="text-white/60 text-xs text-center">
                  Оплата на месте — 0% комиссий
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          {[
            { value: "50+", label: "Проектов запущено" },
            { value: "100%", label: "Удовлетворенных клиентов" },
            { value: "24/7", label: "Поддержка и консультации" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + i * 0.1 }}
            >
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Foreground Effects - above content */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <EnergyEffect />
        <FloatingElements />
      </div>
    </div>
  );
};
