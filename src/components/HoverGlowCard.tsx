import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useMousePositionOnElement } from "@/hooks/useMousePositionOnElement";

interface HoverGlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export const HoverGlowCard = ({
  children,
  className = "",
  glowColor = "rgba(0, 102, 255, 0.4)"
}: HoverGlowCardProps) => {
  const { position, isHovering, ref } = useMousePositionOnElement();

  return (
    <div ref={ref} className={`relative ${className}`}>
      {isHovering && (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: position.x,
            top: position.y,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="w-[200px] h-[200px] rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
            }}
          />
        </motion.div>
      )}
      {children}
    </div>
  );
};
