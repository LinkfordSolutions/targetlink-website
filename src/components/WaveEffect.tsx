import { motion } from "framer-motion";

export const WaveEffect = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated liquid waves at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-64 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#7B61FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FF3D71" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFD700" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#FF6B35" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#7B61FF" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id="wave-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF3D71" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#00D4FF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FFD700" stopOpacity="0.6" />
            </linearGradient>
          </defs>

          {/* Wave 1 - Large slow wave */}
          <motion.path
            d="M0,160 Q360,100 720,160 T1440,160 L1440,320 L0,320 Z"
            fill="url(#wave-gradient-1)"
            animate={{
              d: [
                "M0,160 Q360,100 720,160 T1440,160 L1440,320 L0,320 Z",
                "M0,160 Q360,220 720,160 T1440,160 L1440,320 L0,320 Z",
                "M0,160 Q360,100 720,160 T1440,160 L1440,320 L0,320 Z",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Wave 2 - Medium wave */}
          <motion.path
            d="M0,200 Q360,160 720,200 T1440,200 L1440,320 L0,320 Z"
            fill="url(#wave-gradient-2)"
            animate={{
              d: [
                "M0,200 Q360,160 720,200 T1440,200 L1440,320 L0,320 Z",
                "M0,200 Q360,240 720,200 T1440,200 L1440,320 L0,320 Z",
                "M0,200 Q360,160 720,200 T1440,200 L1440,320 L0,320 Z",
              ],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          />

          {/* Wave 3 - Fast wave */}
          <motion.path
            d="M0,240 Q360,200 720,240 T1440,240 L1440,320 L0,320 Z"
            fill="url(#wave-gradient-3)"
            animate={{
              d: [
                "M0,240 Q360,200 720,240 T1440,240 L1440,320 L0,320 Z",
                "M0,240 Q360,280 720,240 T1440,240 L1440,320 L0,320 Z",
                "M0,240 Q360,200 720,240 T1440,240 L1440,320 L0,320 Z",
              ],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          />
        </svg>
      </div>

      {/* Floating gradient orbs - more visible */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(0,212,255,0.4) 0%, transparent 70%)",
          top: "10%",
          left: "5%",
        }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 60, 0],
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(123,97,255,0.4) 0%, transparent 70%)",
          bottom: "10%",
          right: "5%",
        }}
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 100, -70, 0],
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </div>
  );
};
