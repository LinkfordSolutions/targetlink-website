import { motion, AnimatePresence } from "framer-motion";

interface SuccessAnimationProps {
  show: boolean;
  onClose: () => void;
}

export const SuccessAnimation = ({ show, onClose }: SuccessAnimationProps) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center shadow-2xl"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              className="relative w-24 h-24 mx-auto mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-brand rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 24 24"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              >
                <motion.path
                  d="M5 13l4 4L19 7"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                />
              </motion.svg>
            </motion.div>

            <motion.h3
              className="text-2xl font-bold text-gray-900 mb-2 font-sora"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Спасибо!
            </motion.h3>

            <motion.p
              className="text-gray-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              Ваше сообщение успешно отправлено. Мы свяжемся с вами в ближайшее
              время!
            </motion.p>

            <motion.button
              onClick={onClose}
              className="bg-gradient-brand text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Закрыть
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
