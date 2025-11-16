import { motion } from "framer-motion";

export const CTAContent = () => {
  return (
    <div className="relative box-border caret-transparent max-w-screen-lg text-center w-full z-10 mx-auto">
      <motion.div
        className="flex items-center justify-center gap-3 mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20">
          <svg
            className="h-12 w-12"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="cta-logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#FFB800" />
                <stop offset="100%" stopColor="#FF3D71" />
              </linearGradient>
            </defs>
            <circle cx="20" cy="20" r="18" stroke="url(#cta-logo-gradient)" strokeWidth="2.5" fill="none" />
            <circle cx="20" cy="20" r="12" stroke="url(#cta-logo-gradient)" strokeWidth="2.5" fill="none" />
            <circle cx="20" cy="20" r="6" stroke="url(#cta-logo-gradient)" strokeWidth="2.5" fill="none" />
            <circle cx="20" cy="20" r="4" fill="url(#cta-logo-gradient)" />
            <path d="M 28 12 L 32 8 M 32 8 L 36 12 M 32 8 L 32 4" stroke="url(#cta-logo-gradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 12 28 L 8 32 M 8 32 L 4 28 M 8 32 L 8 36" stroke="url(#cta-logo-gradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </motion.div>
      
      <motion.h2 
        className="text-white text-4xl font-bold box-border caret-transparent leading-tight mb-4 font-sora md:text-5xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Готовы создать что-то
        <br className="box-border caret-transparent" />
        <motion.span 
          className="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400 bg-[length:200%_auto] animate-gradient-shift box-border caret-transparent inline-block leading-[48px] md:text-6xl md:leading-[63px]"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          невероятное?
        </motion.span>
      </motion.h2>
      <motion.p 
        className="text-white/90 text-lg box-border caret-transparent leading-relaxed max-w-2xl mx-auto mb-6 md:text-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Начните свой проект сегодня и получите первую консультацию бесплатно
      </motion.p>
      <motion.div 
        className="box-border caret-transparent gap-x-3 flex flex-wrap justify-center gap-y-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.a
          href="https://t.me/targetlink_demo"
          className="text-white text-base font-bold items-center bg-white/20 backdrop-blur-md shadow-[0_8px_32px_rgba(255,255,255,0.2)] box-border caret-transparent gap-x-2 flex h-12 justify-center leading-7 gap-y-2 text-nowrap px-8 rounded-xl border border-white/30 hover:bg-white hover:text-brand-primary hover:shadow-[0_8px_40px_rgba(255,255,255,0.4)] transition-all duration-300"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          🚀 Начать проект
        </motion.a>
        <motion.button 
          className="text-white text-base font-bold items-center backdrop-blur-md bg-white/10 caret-transparent gap-x-2 flex h-12 justify-center leading-7 gap-y-2 text-center text-nowrap px-8 py-0 rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          ✨ Посмотреть портфолио
        </motion.button>
      </motion.div>
    </div>
  );
};
