import { motion } from "framer-motion";
import { LottieAnimation } from "./LottieAnimation";

export const HeroContent = () => {
  return (
    <div className="relative box-border caret-transparent max-w-none w-full z-20 mx-auto px-6 py-16 md:px-8 md:py-20 md:max-w-screen-xl">
      <div className="items-center box-border caret-transparent gap-x-12 grid grid-cols-none gap-y-12 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
        <motion.div 
          className="box-border caret-transparent"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white/10 backdrop-blur-md p-2 rounded-xl border border-white/20">
              <svg
                className="h-8 w-8 md:h-10 md:w-10"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="hero-logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00D4FF" />
                    <stop offset="50%" stopColor="#FFFFFF" />
                    <stop offset="100%" stopColor="#FF3D71" />
                  </linearGradient>
                </defs>
                <circle cx="20" cy="20" r="18" stroke="url(#hero-logo-gradient)" strokeWidth="2" fill="none" />
                <circle cx="20" cy="20" r="12" stroke="url(#hero-logo-gradient)" strokeWidth="2" fill="none" />
                <circle cx="20" cy="20" r="6" stroke="url(#hero-logo-gradient)" strokeWidth="2" fill="none" />
                <circle cx="20" cy="20" r="3" fill="url(#hero-logo-gradient)" />
                <path d="M 28 12 L 32 8 M 32 8 L 36 12 M 32 8 L 32 4" stroke="url(#hero-logo-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 12 28 L 8 32 M 8 32 L 4 28 M 8 32 L 8 36" stroke="url(#hero-logo-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-white/80 text-lg font-semibold">TargetLink</span>
          </motion.div>
          
          <motion.h1 
            className="text-white text-5xl font-bold box-border caret-transparent leading-tight font-sora md:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Создавайте{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-secondary to-brand-success animate-gradient-shift">
              быстрее
            </span>
            {" "}и работайте{" "}
            <motion.span 
              className="relative inline-block"
              style={{ display: "inline-block" }}
              whileHover={{ scale: 1.05, rotate: -1 }}
              transition={{ duration: 0.3 }}
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
            className="text-white/90 text-lg box-border caret-transparent leading-relaxed max-w-xl mt-6 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Telegram мини-приложения, веб-сайты, вертикальное ПО и AI-автоматизация для вашего бизнеса.
          </motion.p>
          
          <motion.div 
            className="box-border caret-transparent gap-x-2 flex flex-wrap gap-y-2 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div 
              className="text-white text-sm font-semibold backdrop-blur-md bg-white/20 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent leading-5 px-5 py-2.5 rounded-[999px] border-2 border-solid border-white/40 hover:bg-white/30 hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🎯 Мини-приложения
            </motion.div>
            <motion.div 
              className="text-white text-sm font-semibold backdrop-blur-md bg-white/20 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent leading-5 px-5 py-2.5 rounded-[999px] border-2 border-solid border-white/40 hover:bg-white/30 hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🌐 Веб-сайты
            </motion.div>
            <motion.div 
              className="text-white text-sm font-semibold backdrop-blur-md bg-white/20 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent leading-5 px-5 py-2.5 rounded-[999px] border-2 border-solid border-white/40 hover:bg-white/30 hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              💼 Вертикальное ПО
            </motion.div>
            <motion.div 
              className="text-white text-sm font-semibold backdrop-blur-md bg-white/20 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent leading-5 px-5 py-2.5 rounded-[999px] border-2 border-solid border-white/40 hover:bg-white/30 hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🤖 AI &amp; Автоматизация
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="box-border caret-transparent gap-x-3 flex flex-wrap gap-y-3 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="https://t.me/targetlink_demo"
              className="text-white text-base font-bold items-center bg-white/20 backdrop-blur-md shadow-[0_8px_32px_rgba(255,255,255,0.1)] box-border caret-transparent gap-x-2 flex h-12 justify-center leading-7 gap-y-2 text-nowrap px-8 rounded-xl border border-white/30 hover:bg-white hover:text-brand-primary hover:shadow-[0_8px_32px_rgba(255,255,255,0.3)] transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              🚀 Начать сейчас
            </motion.a>
            <motion.button 
              className="text-white text-base font-bold items-center backdrop-blur-md bg-white/10 caret-transparent gap-x-2 flex h-12 justify-center leading-7 gap-y-2 text-center text-nowrap px-8 py-0 rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              ✨ Смотреть результаты
            </motion.button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="box-border caret-transparent"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div 
            className="relative text-slate-900 backdrop-blur-xl bg-white/98 shadow-[0_20px_60px_rgba(0,102,255,0.2)] box-border caret-transparent overflow-hidden rounded-2xl border border-white/50 hover:shadow-[0_20px_80px_rgba(0,212,255,0.3)] transition-all duration-500"
            whileHover={{ y: -5 }}
          >
            <div className="absolute bg-gradient-brand box-border caret-transparent h-1 w-full left-0 top-0"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white/80 z-[1]"></div>
            <LottieAnimation />
            <div className="box-border caret-transparent p-6 relative z-[2]">
              <div className="box-border caret-transparent w-full">
                <div
                  role="tablist"
                  className="text-gray-500 items-center bg-gray-100 box-border caret-transparent grid grid-cols-[repeat(3,minmax(0px,1fr))] h-9 justify-center w-full mb-6 p-1 rounded-2xl"
                >
                  <button
                    type="button"
                    role="tab"
                    className="text-white text-sm items-center bg-gradient-brand shadow-[0_4px_12px_rgba(0,102,255,0.3)] caret-transparent flex justify-center leading-5 text-center text-nowrap px-3 py-1 rounded-xl"
                  >
                    <img
                      src="https://c.animaapp.com/mi0dh37lZbc34b/assets/icon-2.svg"
                      alt="Icon"
                      className="box-border caret-transparent h-4 text-nowrap w-4 mr-2"
                    />
                    Запись
                  </button>
                  <button
                    type="button"
                    role="tab"
                    className="text-zinc-950 text-sm items-center bg-transparent caret-transparent flex justify-center leading-5 text-center text-nowrap px-3 py-1 rounded-xl"
                  >
                    <img
                      src="https://c.animaapp.com/mi0dh37lZbc34b/assets/icon-3.svg"
                      alt="Icon"
                      className="box-border caret-transparent h-4 text-nowrap w-4 mr-2"
                    />
                    Каталог
                  </button>
                  <button
                    type="button"
                    role="tab"
                    className="text-zinc-950 text-sm items-center bg-transparent caret-transparent flex justify-center leading-5 text-center text-nowrap px-3 py-1 rounded-xl"
                  >
                    <img
                      src="https://c.animaapp.com/mi0dh37lZbc34b/assets/icon-4.svg"
                      alt="Icon"
                      className="box-border caret-transparent h-4 text-nowrap w-4 mr-2"
                    />
                    AI Ассистент
                  </button>
                </div>
                <div
                  role="tabpanel"
                  className="box-border caret-transparent mt-2"
                >
                  <div className="box-border caret-transparent">
                    <h3 className="text-zinc-950 text-lg font-semibold box-border caret-transparent leading-7 mb-4 font-sora">
                      Выберите время
                    </h3>
                    <div className="box-border caret-transparent gap-x-3 grid grid-cols-[repeat(3,minmax(0px,1fr))] gap-y-3">
                      <button className="text-zinc-950 text-sm items-center bg-gray-100 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] caret-transparent gap-x-2 flex h-10 justify-center leading-5 gap-y-2 text-center text-nowrap px-4 py-2 rounded-2xl hover:bg-gray-100/80">
                        10:00
                      </button>
                      <button className="text-zinc-950 text-sm items-center bg-gray-100 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] caret-transparent gap-x-2 flex h-10 justify-center leading-5 gap-y-2 text-center text-nowrap px-4 py-2 rounded-2xl hover:bg-gray-100/80">
                        11:00
                      </button>
                      <button className="text-zinc-950 text-sm items-center bg-gray-100 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] caret-transparent gap-x-2 flex h-10 justify-center leading-5 opacity-50 pointer-events-none gap-y-2 text-center text-nowrap px-4 py-2 rounded-2xl hover:bg-gray-100/80">
                        12:00
                      </button>
                      <button className="text-zinc-950 text-sm items-center bg-gray-100 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] caret-transparent gap-x-2 flex h-10 justify-center leading-5 gap-y-2 text-center text-nowrap px-4 py-2 rounded-2xl hover:bg-gray-100/80">
                        14:00
                      </button>
                      <button className="text-zinc-950 text-sm items-center bg-gray-100 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] caret-transparent gap-x-2 flex h-10 justify-center leading-5 gap-y-2 text-center text-nowrap px-4 py-2 rounded-2xl hover:bg-gray-100/80">
                        15:00
                      </button>
                    </div>
                    <p className="text-gray-500 text-sm box-border caret-transparent leading-5 mt-4">
                      Оплата на месте — 0% комиссий
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
