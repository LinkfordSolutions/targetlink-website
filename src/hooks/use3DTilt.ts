import { useRef, useState } from "react";
import { useMotionValue, useSpring } from "framer-motion";

export const use3DTilt = (intensity: number = 20) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15 };
  const rotateX = useSpring(x, springConfig);
  const rotateY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rotX = ((e.clientY - centerY) / (rect.height / 2)) * -intensity;
    const rotY = ((e.clientX - centerX) / (rect.width / 2)) * intensity;

    x.set(rotX);
    y.set(rotY);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    x.set(0);
    y.set(0);
  };

  return {
    ref,
    isHovering,
    rotateX,
    rotateY,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  };
};
