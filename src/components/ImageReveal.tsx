import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ImageRevealProps {
  children: ReactNode;
  direction?: "left" | "right" | "top" | "bottom";
  delay?: number;
}

export const ImageReveal = ({
  children,
  direction = "bottom",
  delay = 0,
}: ImageRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const clipPathVariants = {
    left: {
      hidden: { clipPath: "inset(0 100% 0 0)" },
      visible: { clipPath: "inset(0 0% 0 0)" },
    },
    right: {
      hidden: { clipPath: "inset(0 0 0 100%)" },
      visible: { clipPath: "inset(0 0% 0 0%)" },
    },
    top: {
      hidden: { clipPath: "inset(100% 0 0 0)" },
      visible: { clipPath: "inset(0% 0 0 0)" },
    },
    bottom: {
      hidden: { clipPath: "inset(0 0 100% 0)" },
      visible: { clipPath: "inset(0 0 0% 0)" },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={clipPathVariants[direction]}
      transition={{
        duration: 1,
        delay,
        ease: [0.65, 0, 0.35, 1],
      }}
    >
      {children}
    </motion.div>
  );
};
