import { motion } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useState, useEffect } from "react";

export const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsPointer(!!isClickable);
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  if (isHidden) return null;

  return (
    <>
      <motion.div
        className="fixed w-4 h-4 bg-brand-primary rounded-full pointer-events-none z-[10000] mix-blend-difference"
        animate={{
          x: x - 8,
          y: y - 8,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      <motion.div
        className="fixed w-10 h-10 border-2 border-brand-primary/50 rounded-full pointer-events-none z-[10000] mix-blend-difference"
        animate={{
          x: x - 20,
          y: y - 20,
          scale: isPointer ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      />
    </>
  );
};
