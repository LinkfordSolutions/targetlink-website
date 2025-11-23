import { motion } from "framer-motion";

export const AuroraEffect = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Aurora waves */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(0, 212, 255, 0.35) 0%, transparent 50%), " +
            "radial-gradient(ellipse at 70% 40%, rgba(123, 97, 255, 0.35) 0%, transparent 50%), " +
            "radial-gradient(ellipse at 50% 60%, rgba(255, 61, 113, 0.3) 0%, transparent 50%)",
        }}
        animate={{
          opacity: [0.5, 0.8, 0.6, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Shimmer effect - moving light rays */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-full w-2 opacity-40"
          style={{
            left: `${20 + i * 20}%`,
            background: `linear-gradient(180deg,
              transparent 0%,
              ${
                i % 3 === 0
                  ? "rgba(0, 212, 255, 0.6)"
                  : i % 3 === 1
                  ? "rgba(123, 97, 255, 0.6)"
                  : "rgba(255, 61, 113, 0.6)"
              } 50%,
              transparent 100%)`,
            filter: "blur(40px)",
          }}
          animate={{
            x: [0, 50, -50, 0],
            opacity: [0.2, 0.6, 0.3, 0.2],
            scaleX: [1, 1.5, 1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Sparkle particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background:
              i % 3 === 0
                ? "rgba(255, 255, 255, 0.9)"
                : i % 3 === 1
                ? "rgba(0, 212, 255, 0.9)"
                : "rgba(255, 215, 0, 0.9)",
            boxShadow: `0 0 ${8 + Math.random() * 12}px ${
              i % 3 === 0
                ? "rgba(255, 255, 255, 0.8)"
                : i % 3 === 1
                ? "rgba(0, 212, 255, 0.8)"
                : "rgba(255, 215, 0, 0.8)"
            }`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
