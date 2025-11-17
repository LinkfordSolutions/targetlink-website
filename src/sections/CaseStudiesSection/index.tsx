import { CompanyLogos } from "@/sections/CaseStudiesSection/components/CompanyLogos";
import { StatsCounter } from "@/components/StatsCounter";
import { motion } from "framer-motion";

export const CaseStudiesSection = () => {
  return (
    <section className="bg-white box-border caret-transparent py-16 scroll-mt-16 md:py-20 overflow-hidden">
      <div className="relative box-border caret-transparent max-w-screen-xl w-full z-10 mx-auto px-6 mb-12 md:px-8">
        <motion.div 
          className="box-border caret-transparent text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="box-border caret-transparent inline-block mb-3">
            <span className="text-white text-xs font-bold items-center bg-gradient-brand shadow-[0_4px_20px_rgba(99,102,241,0.3)] box-border caret-transparent inline-flex leading-5 px-4 py-1.5 rounded-full uppercase tracking-wider">
              🤝 Наши партнеры
            </span>
          </div>
          <h2 className="text-3xl font-bold box-border caret-transparent leading-tight mb-3 font-sora md:text-4xl bg-clip-text text-transparent bg-gradient-brand">
            Нам доверяют лидеры рынка
          </h2>
          <p className="text-gray-600 text-base box-border caret-transparent leading-relaxed max-w-2xl mx-auto md:text-lg">
            Работаем с крупнейшими компаниями России
          </p>
        </motion.div>
      </div>
      
      <CompanyLogos />

      <div className="max-w-screen-xl mx-auto px-6 md:px-8 mt-16">
        <StatsCounter
          stats={[
            { value: 150, suffix: "+", label: "Проектов реализовано" },
            { value: 95, suffix: "%", label: "Клиентов возвращаются" },
            { value: 50, suffix: "+", label: "Компаний-партнеров" },
            { value: 24, suffix: "/7", label: "Поддержка клиентов" },
          ]}
        />
      </div>

      <motion.div 
        className="text-center mt-12 px-6 md:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.a
          href="https://t.me/targetlink_demo"
          className="inline-flex items-center gap-2 text-white text-base font-bold bg-gradient-brand shadow-[0_8px_32px_rgba(0,102,255,0.3)] px-8 py-3 rounded-xl hover:shadow-[0_8px_40px_rgba(0,212,255,0.4)] transition-all duration-300"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          🚀 Стать партнером
        </motion.a>
      </motion.div>
    </section>
  );
};
