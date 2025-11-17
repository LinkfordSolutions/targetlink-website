import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const mousePos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    // Smooth animation loop using RAF
    const animate = () => {
      const dx = mousePos.current.x - currentPos.current.x;
      const dy = mousePos.current.y - currentPos.current.y;

      currentPos.current.x += dx * 0.15;
      currentPos.current.y += dy * 0.15;

      setMousePosition({
        x: currentPos.current.x,
        y: currentPos.current.y,
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] mix-blend-difference will-change-transform"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
          opacity: mousePosition.x === -100 ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div className="relative">
          <div className="w-4 h-4 bg-white rounded-full" />
          <div
            className="absolute inset-0 bg-white rounded-full blur-sm opacity-50"
            style={{ transform: "scale(1.5)" }}
          />
        </div>
      </motion.div>

      <motion.div
        className="fixed pointer-events-none z-[9998] will-change-transform"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          scale: isClicking ? 0.6 : isHovering ? 2.5 : 2,
          opacity: mousePosition.x === -100 ? 0 : 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.8,
        }}
      >
        <div className="w-8 h-8 border-2 border-white rounded-full" />
      </motion.div>
    </>
  );
};
