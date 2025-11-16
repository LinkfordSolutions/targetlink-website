import { motion } from "framer-motion";

export const LogoIcon = ({ className = "h-8 w-8" }: { className?: string }) => {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{ scale: 1.05, rotate: 5 }}
      transition={{ duration: 0.3 }}
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0066FF" />
          <stop offset="50%" stopColor="#7B61FF" />
          <stop offset="100%" stopColor="#FF3D71" />
        </linearGradient>
      </defs>
      
      {/* Outer circle */}
      <circle
        cx="20"
        cy="20"
        r="18"
        stroke="url(#logo-gradient)"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Target crosshair */}
      <motion.circle
        cx="20"
        cy="20"
        r="12"
        stroke="url(#logo-gradient)"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      />
      
      <motion.circle
        cx="20"
        cy="20"
        r="6"
        stroke="url(#logo-gradient)"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      
      {/* Center dot */}
      <motion.circle
        cx="20"
        cy="20"
        r="3"
        fill="url(#logo-gradient)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
      
      {/* Link chain element */}
      <motion.path
        d="M 28 12 L 32 8 M 32 8 L 36 12 M 32 8 L 32 4"
        stroke="url(#logo-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      />
      
      <motion.path
        d="M 12 28 L 8 32 M 8 32 L 4 28 M 8 32 L 8 36"
        stroke="url(#logo-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      />
    </motion.svg>
  );
};
