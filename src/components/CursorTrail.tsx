import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TrailDot {
  x: number;
  y: number;
  id: number;
}

export const CursorTrail = () => {
  const [trail, setTrail] = useState<TrailDot[]>([]);
  const [nextId, setNextId] = useState(0);

  useEffect(() => {
    let lastTime = Date.now();
    const throttleTime = 50;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < throttleTime) return;
      lastTime = now;

      const newDot: TrailDot = {
        x: e.clientX,
        y: e.clientY,
        id: nextId,
      };

      setNextId((prev) => prev + 1);
      setTrail((prev) => [...prev.slice(-8), newDot]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [nextId]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <AnimatePresence>
        {trail.map((dot, index) => (
          <motion.div
            key={dot.id}
            className="absolute w-2 h-2 rounded-full bg-brand-primary/30"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 1, opacity: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              left: dot.x - 4,
              top: dot.y - 4,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
