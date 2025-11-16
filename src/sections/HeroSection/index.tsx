import { HeroContent } from "@/sections/HeroSection/components/HeroContent";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative items-center bg-gradient-brand box-border caret-transparent flex min-h-[90vh] overflow-hidden pt-20">
      <div className="absolute bg-gradient-mesh bg-[length:200%_200%] animate-gradient-shift box-border caret-transparent z-0 inset-0"></div>
      
      <motion.div 
        className="absolute bg-brand-primary/20 box-border caret-transparent blur-3xl h-80 w-80 rounded-full"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ left: "10%", top: "20%" }}
      />
      
      <motion.div 
        className="absolute bg-brand-secondary/20 box-border caret-transparent blur-3xl h-96 w-96 rounded-full"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ right: "10%", bottom: "20%" }}
      />
      
      <motion.div 
        className="absolute bg-brand-purple/15 box-border caret-transparent blur-3xl h-72 w-72 rounded-full"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
      />
      
      <HeroContent />
    </section>
  );
};
