import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useMagneticEffect } from "@/hooks/useMagneticEffect";

interface MagneticTitleProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export const MagneticTitle = ({
  children,
  className = "",
  strength = 0.15
}: MagneticTitleProps) => {
  const { ref, x, y, handleMouseMove, handleMouseEnter, handleMouseLeave } =
    useMagneticEffect(strength);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
};
