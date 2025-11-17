import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode } from "react";

interface Enhanced3DCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export const Enhanced3DCard = ({ children, className = "", glowColor = "rgba(0, 102, 255, 0.5)" }: Enhanced3DCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative will-change-transform ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute -inset-1 rounded-2xl blur-xl opacity-0 pointer-events-none"
        style={{
          background: glowColor,
        }}
        animate={{
          opacity: isHovered ? 0.6 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden"
        style={{
          transform: "translateZ(50px)",
        }}
      >
        <motion.div
          className="absolute inset-0 opacity-0"
          style={{
            background: `radial-gradient(circle at ${useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"])} ${useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"])}, rgba(255,255,255,0.3) 0%, transparent 60%)`,
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      <div style={{ transform: "translateZ(50px)" }}>{children}</div>
    </motion.div>
  );
};
