import { motion } from "framer-motion";

export const SolutionsHeader = () => {
  return (
    <motion.div 
      className="box-border caret-transparent text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="box-border caret-transparent inline-block mb-3">
        <motion.span 
          className="text-white text-xs font-bold items-center bg-gradient-brand shadow-[0_4px_20px_rgba(99,102,241,0.3)] box-border caret-transparent inline-flex leading-5 px-4 py-1.5 rounded-full uppercase tracking-wider"
          whileHover={{ scale: 1.05 }}
        >
          ✨ Наши решения
        </motion.span>
      </div>
      <h2 className="text-3xl font-bold box-border caret-transparent leading-tight mb-3 font-sora md:text-4xl bg-clip-text text-transparent bg-gradient-brand">
        Что мы делаем
      </h2>
      <p className="text-gray-600 text-base box-border caret-transparent leading-relaxed max-w-2xl mx-auto md:text-lg">
        Комплексные цифровые решения для вашего бизнеса
      </p>
    </motion.div>
  );
};
