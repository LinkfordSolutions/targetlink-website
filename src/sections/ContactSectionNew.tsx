import { motion } from "framer-motion";
import { MagneticButton } from "@/components/MagneticButton";

export const ContactSectionNew = () => {
  return (
    <section className="bg-black py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-8 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
            <span className="text-white/60 text-sm font-medium">
              💬 Готовы начать?
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight font-sora">
            Давайте создадим
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              что-то великое
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto">
            Свяжитесь с нами и получите бесплатную консультацию по вашему проекту
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <MagneticButton href="https://t.me/targetlink_demo">
              <div className="group relative px-12 py-5 bg-white text-black font-bold rounded-full overflow-hidden text-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 group-hover:text-white transition-colors">
                  Написать в Telegram
                </span>
              </div>
            </MagneticButton>

            <MagneticButton href="mailto:hello@targetlink.net">
              <div className="px-12 py-5 border-2 border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-lg">
                Email нам
              </div>
            </MagneticButton>
          </div>

          {/* Contact info */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 pt-16 border-t border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div>
              <div className="text-white/40 text-sm uppercase tracking-wider mb-2">Email</div>
              <a href="mailto:hello@targetlink.net" className="text-white hover:text-cyan-400 transition-colors">
                hello@targetlink.net
              </a>
            </div>
            <div>
              <div className="text-white/40 text-sm uppercase tracking-wider mb-2">Telegram</div>
              <a href="https://t.me/targetlink_demo" className="text-white hover:text-cyan-400 transition-colors">
                @targetlink_demo
              </a>
            </div>
            <div>
              <div className="text-white/40 text-sm uppercase tracking-wider mb-2">Время работы</div>
              <div className="text-white">24/7 Support</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
