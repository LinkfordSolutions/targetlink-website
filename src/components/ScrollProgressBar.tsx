import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export const ScrollProgressBar = () => {
  const scrollProgress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-brand origin-left z-[9999]"
      style={{
        scaleX: scrollProgress / 100,
      }}
      initial={{ scaleX: 0 }}
      transition={{ duration: 0.1 }}
    />
  );
};
