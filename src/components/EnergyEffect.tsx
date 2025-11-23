import { motion } from "framer-motion";

export const EnergyEffect = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Large energy particles rising */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${4 + Math.random() * 8}px`,
            height: `${4 + Math.random() * 8}px`,
            background: `radial-gradient(circle, ${
              i % 4 === 0
                ? "rgba(255, 61, 113, 0.9)"
                : i % 4 === 1
                ? "rgba(255, 215, 0, 0.9)"
                : i % 4 === 2
                ? "rgba(0, 212, 255, 0.9)"
                : "rgba(123, 97, 255, 0.9)"
            } 0%, transparent 70%)`,
            boxShadow: `0 0 ${10 + Math.random() * 20}px ${
              i % 4 === 0
                ? "rgba(255, 61, 113, 0.8)"
                : i % 4 === 1
                ? "rgba(255, 215, 0, 0.8)"
                : i % 4 === 2
                ? "rgba(0, 212, 255, 0.8)"
                : "rgba(123, 97, 255, 0.8)"
            }`,
          }}
          animate={{
            y: ["100%", "-20%"],
            x: [0, (Math.random() - 0.5) * 100],
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Energy waves - much more visible */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-96"
        style={{
          background:
            "radial-gradient(ellipse at bottom, rgba(255, 61, 113, 0.5) 0%, rgba(255, 61, 113, 0.2) 40%, transparent 80%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-96"
        style={{
          background:
            "radial-gradient(ellipse at bottom, rgba(255, 215, 0, 0.4) 0%, rgba(255, 215, 0, 0.15) 40%, transparent 80%)",
        }}
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-96"
        style={{
          background:
            "radial-gradient(ellipse at bottom, rgba(0, 212, 255, 0.35) 0%, rgba(0, 212, 255, 0.1) 40%, transparent 80%)",
        }}
        animate={{
          scale: [1.1, 1.4, 1.1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
};
