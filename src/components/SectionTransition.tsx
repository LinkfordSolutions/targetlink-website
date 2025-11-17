import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionTransitionProps {
  children: ReactNode;
  className?: string;
}

export const SectionTransition = ({ children, className = "" }: SectionTransitionProps) => {
  return (
    <>
      <motion.div
        className={`relative ${className}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>

      {/* Divider with animated gradient */}
      <div className="relative h-px w-full overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-primary to-transparent"
          initial={{ x: "-100%" }}
          whileInView={{ x: "100%" }}
          viewport={{ once: true }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        />
      </div>
    </>
  );
};
