import { motion } from "framer-motion";
import { MagneticButton } from "@/components/MagneticButton";

export const CTASectionNew = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-red-600">
      {/* Animated background elements */}
      <motion.div
        className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "10%", left: "10%" }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 100, -50, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ bottom: "10%", right: "10%" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-block mb-8 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-white font-bold text-lg">
              🎯 Специальное предложение
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h2
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Готовы изменить
            <br />
            <motion.span
              className="inline-block bg-white text-purple-600 px-8 py-2 rounded-2xl"
              whileHover={{ scale: 1.05, rotate: -2 }}
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(255,255,255,0.7)",
                  "0 0 0 20px rgba(255,255,255,0)",
                ],
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                },
              }}
            >
              свой бизнес?
            </motion.span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            className="text-2xl md:text-3xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Первая консультация <span className="font-bold underline">бесплатно</span>.
            Покажем, как технологии могут <span className="font-bold">удвоить ваш доход</span>.
          </motion.p>

          {/* Value props */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            {[
              "✅ Без предоплаты",
              "✅ Гарантия результата",
              "✅ Поддержка 24/7",
              "✅ Быстрый старт",
            ].map((item, i) => (
              <motion.div
                key={i}
                className="px-6 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white font-semibold"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + i * 0.1 }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
              >
                {item}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            <MagneticButton href="https://t.me/targetlink_demo">
              <motion.div
                className="group relative px-12 py-6 bg-white text-purple-600 font-black text-xl rounded-full shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Получить консультацию 🚀</span>
              </motion.div>
            </MagneticButton>

            <MagneticButton>
              <div className="px-12 py-6 border-3 border-white text-white font-black text-xl rounded-full backdrop-blur-md hover:bg-white/10 transition-all">
                Посмотреть кейсы →
              </div>
            </MagneticButton>
          </motion.div>

          {/* Social proof */}
          <motion.div
            className="flex items-center justify-center gap-3 text-white/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1 }}
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-white"
                />
              ))}
            </div>
            <div className="text-sm">
              <span className="font-bold">50+ клиентов</span> уже получили результат
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0L60 10C120 20 240 40 360 45C480 50 600 40 720 35C840 30 960 30 1080 35C1200 40 1320 50 1380 55L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};
