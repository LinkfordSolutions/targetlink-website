import { motion } from "framer-motion";

export const CTAButton = () => {
  return (
    <div className="box-border caret-transparent hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
      <motion.a
        href="https://t.me/targetlink_demo"
        className="text-white text-sm font-bold items-center bg-gradient-brand shadow-[0_4px_16px_rgba(99,102,241,0.3)] box-border caret-transparent gap-x-2 inline-flex h-9 justify-center leading-5 gap-y-2 text-nowrap px-4 rounded-lg hover:shadow-[0_4px_20px_rgba(236,72,153,0.4)] transition-all duration-300"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        🚀 Начать
      </motion.a>
    </div>
  );
};
