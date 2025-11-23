import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const LightningEffect = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(true);
      setTimeout(() => setShow(false), 200);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {show && (
        <motion.div
          className="absolute inset-0 pointer-events-none z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0, 1, 0] }}
          transition={{ duration: 0.2 }}
        >
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 50 0 L 45 30 L 55 30 L 50 60 L 60 60 L 50 100"
              fill="none"
              stroke="url(#lightning-gradient)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 1, 0] }}
              transition={{ duration: 0.15, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="lightning-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
                <stop offset="100%" stopColor="#7B61FF" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>

          {/* Lightning glow */}
          <motion.div
            className="absolute inset-0 bg-cyan-400/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 0.15 }}
          />
        </motion.div>
      )}
    </>
  );
};
