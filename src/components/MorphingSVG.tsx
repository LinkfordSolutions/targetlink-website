import { motion } from "framer-motion";

export const MorphingSVG = () => {
  const shapes = [
    "M20,10 C20,5 25,5 30,10 C35,15 35,20 30,25 C25,30 20,30 15,25 C10,20 10,15 15,10 Z",
    "M20,5 L30,15 L25,30 L15,30 L10,15 Z",
    "M15,10 Q10,20 15,30 Q25,35 35,30 Q40,20 35,10 Q25,5 15,10 Z",
    "M20,5 C30,5 35,10 35,20 C35,30 30,35 20,35 C10,35 5,30 5,20 C5,10 10,5 20,5 Z",
  ];

  return (
    <svg width="200" height="200" viewBox="0 0 40 40" className="w-full h-full">
      <motion.path
        d={shapes[0]}
        fill="url(#morph-gradient)"
        animate={{
          d: shapes,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <defs>
        <linearGradient id="morph-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0066FF" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#00D4FF" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#7B61FF" stopOpacity="0.4" />
        </linearGradient>
      </defs>
    </svg>
  );
};
