import { motion } from "framer-motion";

export const FloatingElements = () => {
  const elements = [
    { icon: "⚡", size: "text-5xl", delay: 0, duration: 7, x: 15, y: 25 },
    { icon: "🚀", size: "text-6xl", delay: 1, duration: 8, x: 80, y: 20 },
    { icon: "✨", size: "text-5xl", delay: 2, duration: 7.5, x: 30, y: 65 },
    { icon: "💎", size: "text-5xl", delay: 1.5, duration: 9, x: 85, y: 60 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size}`}
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.6))",
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, -20, 0],
            rotate: [0, 15, -15, 0],
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: element.delay,
          }}
        >
          {element.icon}
        </motion.div>
      ))}
    </div>
  );
};
