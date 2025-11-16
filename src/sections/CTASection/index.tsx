import { CTAContent } from "@/sections/CTASection/components/CTAContent";
import { motion } from "framer-motion";

export const CTASection = () => {
  return (
    <section className="relative bg-gradient-brand box-border caret-transparent overflow-hidden px-6 py-16 md:px-8 md:py-20">
      <motion.div 
        className="absolute bg-white/20 box-border caret-transparent blur-3xl h-96 w-96 rounded-full"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ left: "10%", top: "10%" }}
      />
      <motion.div 
        className="absolute bg-white/20 box-border caret-transparent blur-3xl h-96 w-96 rounded-full"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ right: "10%", bottom: "10%" }}
      />
      <motion.div 
        className="absolute bg-white/10 box-border caret-transparent blur-3xl h-[800px] w-[800px] rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
      />
      <CTAContent />
    </section>
  );
};
