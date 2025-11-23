import { motion } from "framer-motion";

export const FooterNew = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                TargetLink
              </h3>
              <p className="text-white/60 mb-6 max-w-sm leading-relaxed">
                Создаем Telegram мини-приложения, веб-сайты и AI-решения для роста вашего бизнеса.
              </p>
              <div className="flex gap-4">
                <motion.a
                  href="https://t.me/targetlink_demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.015-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.154.232.17.326.015.094.034.308.019.475z"/>
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Services column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-bold mb-4">Услуги</h4>
            <ul className="space-y-3">
              {[
                "Telegram Mini Apps",
                "Веб-разработка",
                "Вертикальное ПО",
                "AI & Автоматизация",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-bold mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@targetlink.net"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  hello@targetlink.net
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/targetlink_demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  @targetlink_demo
                </a>
              </li>
              <li className="text-white/60">
                Поддержка 24/7
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-white/40 text-sm">
            © {currentYear} TargetLink. Все права защищены.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/40 hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-white/40 hover:text-white transition-colors">
              Условия использования
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
