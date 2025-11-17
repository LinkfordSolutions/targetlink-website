import { ReactNode } from "react";
import { motion } from "framer-motion";

interface InfiniteMarqueeProps {
  children: ReactNode;
  duration?: number;
  reverse?: boolean;
}

export const InfiniteMarquee = ({
  children,
  duration = 40,
  reverse = false,
}: InfiniteMarqueeProps) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-6"
        animate={{
          x: reverse ? [0, "50%"] : ["50%", 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration,
            ease: "linear",
          },
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};
