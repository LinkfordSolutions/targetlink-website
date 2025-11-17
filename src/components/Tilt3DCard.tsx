import { ReactNode } from "react";
import { motion } from "framer-motion";
import { use3DTilt } from "@/hooks/use3DTilt";

interface Tilt3DCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export const Tilt3DCard = ({
  children,
  className = "",
  intensity = 15,
}: Tilt3DCardProps) => {
  const { ref, rotateX, rotateY, handleMouseMove, handleMouseEnter, handleMouseLeave } =
    use3DTilt(intensity);

  return (
    <motion.div
      ref={ref}
      className={`transform-gpu ${className}`}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div style={{ transform: "translateZ(50px)" }}>{children}</div>
    </motion.div>
  );
};
