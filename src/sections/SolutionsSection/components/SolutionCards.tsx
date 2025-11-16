import { motion } from "framer-motion";

export const SolutionCards = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="box-border caret-transparent gap-x-8 grid grid-cols-none gap-y-8 md:grid-cols-[repeat(4,minmax(0px,1fr))]">
      <motion.div 
        className="box-border caret-transparent"
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
      >
        <motion.div 
          className="relative text-slate-900 bg-white shadow-[0_4px_20px_rgba(0,102,255,0.08)] box-border caret-transparent h-full border border-gray-100 overflow-hidden rounded-xl hover:shadow-[0_8px_32px_rgba(0,102,255,0.15)] hover:border-brand-primary/30 transition-all duration-300 group"
          whileHover={{ y: -8 }}
        >
          <div className="box-border caret-transparent flex flex-col p-5">
            <motion.div 
              className="text-white items-center bg-gradient-brand shadow-[0_8px_24px_rgba(0,102,255,0.25)] box-border caret-transparent flex h-14 justify-center w-14 mb-3 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://c.animaapp.com/mi0dh37lZbc34b/assets/icon-5.svg"
                alt="Icon"
                className="box-border caret-transparent h-8 w-8 group-hover:scale-110 transition-transform duration-300"
              />
            </motion.div>
            <div className="text-zinc-950 text-lg font-bold box-border caret-transparent tracking-tight leading-snug mt-1 font-sora group-hover:text-brand-primary transition-colors duration-300">
              🎯 Мини-приложения
            </div>
          </div>
          <div className="box-border caret-transparent pb-5 px-5 group-hover:bg-gradient-to-b group-hover:from-transparent group-hover:to-blue-50/30 transition-all duration-300">
            <ul className="box-border caret-transparent list-none pl-0 space-y-2">
              <motion.li 
                className="text-gray-600 text-sm items-start box-border caret-transparent flex leading-relaxed group-hover:text-gray-800 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <span className="text-brand-primary text-lg mr-2">✓</span>
                Бронирование и заказы
              </motion.li>
              <motion.li 
                className="text-gray-600 text-sm items-start box-border caret-transparent flex leading-5 group-hover:text-gray-800 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <span className="text-2xl mr-2">✓</span>
                Программы лояльности
              </motion.li>
              <motion.li 
                className="text-gray-600 text-sm items-start box-border caret-transparent flex leading-5 group-hover:text-gray-800 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <span className="text-2xl mr-2">✓</span>
                Реферальные системы
              </motion.li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="box-border caret-transparent"
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
      >
        <motion.div 
          className="relative text-slate-900 bg-white shadow-[0_4px_20px_rgba(99,102,241,0.1)] box-border caret-transparent h-full border border-gray-100 overflow-hidden rounded-xl hover:shadow-[0_8px_32px_rgba(99,102,241,0.2)] hover:border-brand-primary/30 transition-all duration-300 group"
          whileHover={{ y: -8 }}
        >
          <div className="box-border caret-transparent flex flex-col p-5">
            <motion.div 
              className="text-white items-center bg-gradient-brand shadow-[0_8px_24px_rgba(99,102,241,0.3)] box-border caret-transparent flex h-14 justify-center w-14 mb-3 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://c.animaapp.com/mi0dh37lZbc34b/assets/icon-7.svg"
                alt="Icon"
                className="box-border caret-transparent h-8 w-8 group-hover:scale-110 transition-transform duration-300"
              />
            </motion.div>
            <div className="text-zinc-950 text-lg font-bold box-border caret-transparent tracking-tight leading-snug mt-1 font-sora group-hover:text-brand-primary transition-colors duration-300">
              🌐 Веб-сайты
            </div>
          </div>
          <div className="box-border caret-transparent pb-5 px-5 group-hover:bg-gradient-to-b group-hover:from-transparent group-hover:to-indigo-50/30 transition-all duration-300">
            <ul className="box-border caret-transparent list-none pl-0 space-y-3">
              <motion.li 
                className="text-gray-600 text-sm items-start box-border caret-transparent flex leading-5 group-hover:text-gray-800 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <span className="text-2xl mr-2">✓</span>
                SEO-оптимизация
              </motion.li>
              <motion.li 
                className="text-gray-600 text-sm items-start box-border caret-transparent flex leading-5 group-hover:text-gray-800 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <span className="text-2xl mr-2">✓</span>
                Высокая производительность
              </motion.li>
              <motion.li 
                className="text-gray-600 text-sm items-start box-border caret-transparent flex leading-5 group-hover:text-gray-800 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <span className="text-2xl mr-2">✓</span>
                Кастомные интеграции
              </motion.li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="box-border caret-transparent"
        custom={2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
      >
        <motion.div 
          className="relative text-slate-900 bg-white shadow-[0_4px_20px_rgba(99,102,241,0.1)] box-border caret-transparent h-full border border-gray-100 overflow-hidden rounded-xl hover:shadow-[0_8px_32px_rgba(99,102,241,0.2)] hover:border-brand-primary/30 transition-all duration-300 group"
          whileHover={{ y: -8 }}
        >
          <div className="box-border caret-transparent flex flex-col p-5">
            <motion.div 
              className="text-white items-center bg-gradient-brand shadow-[0_8px_24px_rgba(99,102,241,0.3)] box-border caret-transparent flex h-14 justify-center w-14 mb-3 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://c.animaapp.com/mi0dh37lZbc34b/assets/icon-8.svg"
                alt="Icon"
                className="box-border caret-transparent h-8 w-8 group-hover:scale-110 transition-transform duration-300"
              />
            </motion.div>
            <div className="text-zinc-950 text-lg font-bold box-border caret-transparent tracking-tight leading-snug mt-1 font-sora group-hover:text-brand-primary transition-colors duration-300">
              💼 Вертикальное ПО
            </div>
          </div>
          <div className="box-border caret-transparent pb-5 px-5 group-hover:bg-gradient-to-b group-hover:from-transparent group-hover:to-indigo-50/30 transition-all duration-300">
            <ul className="box-border caret-transparent list-none pl-0 space-y-3">
              <motion.li 
                className="text-gray-600 text-sm items-start box-border caret-transparent flex leading-5 group-hover:text-gray-800 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <span className="text-2xl mr-2">✓</span>
                Панели управления
              </motion.li>
              <motion.li 
                className="text-gray-600 text-sm items-start box-border caret-transparent flex leading-5 group-hover:text-gray-800 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <span className="text-2xl mr-2">✓</span>
                Инструменты аналитики
              </motion.li>
              <motion.li 
                className="text-gray-600 text-sm items-start box-border caret-transparent flex leading-5 group-hover:text-gray-800 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <span className="text-2xl mr-2">✓</span>
                Контроль доступа
              </motion.li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="box-border caret-transparent"
        custom={3}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
      >
        <motion.div 
          className="relative text-slate-900 bg-white shadow-[0_4px_20px_rgba(99,102,241,0.1)] box-border caret-transparent h-full border border-gray-100 overflow-hidden rounded-xl hover:shadow-[0_8px_32px_rgba(99,102,241,0.2)] hover:border-brand-primary/30 transition-all duration-300 group"
          whileHover={{ y: -8 }}
        >
          <div className="box-border caret-transparent flex flex-col p-5">
            <motion.div 
              className="text-white items-center bg-gradient-brand shadow-[0_8px_24px_rgba(99,102,241,0.3)] box-border caret-transparent flex h-14 justify-center w-14 mb-3 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://c.animaapp.com/mi0dh37lZbc34b/assets/icon-9.svg"
                alt="Icon"
                className="box-border caret-transparent h-8 w-8 group-hover:scale-110 transition-transform duration-300"
              />
            </motion.div>
            <div className="text-zinc-950 text-lg font-bold box-border caret-transparent tracking-tight leading-snug mt-1 font-sora group-hover:text-brand-primary transition-colors duration-300">
              🤖 AI &amp; Автоматизация
            </div>
          </div>
          <div className="box-border caret-transparent pb-5 px-5 group-hover:bg-gradient-to-b group-hover:from-transparent group-hover:to-indigo-50/30 transition-all duration-300">
            <ul className="box-border caret-transparent list-none pl-0 space-y-3">
              <motion.li 
                className="text-gray-600 text-sm items-start box-border caret-transparent flex leading-5 group-hover:text-gray-800 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <span className="text-2xl mr-2">✓</span>
                Чат/голосовые агенты
              </motion.li>
              <motion.li 
                className="text-gray-600 text-sm items-start box-border caret-transparent flex leading-5 group-hover:text-gray-800 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <span className="text-2xl mr-2">✓</span>
                Автоматизация бэк-офиса
              </motion.li>
              <motion.li 
                className="text-gray-600 text-sm items-start box-border caret-transparent flex leading-5 group-hover:text-gray-800 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <span className="text-2xl mr-2">✓</span>
                Умные процессы
              </motion.li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
