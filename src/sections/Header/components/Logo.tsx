import { LogoIcon } from "@/components/Logo/LogoIcon";
import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <motion.a
      href="/"
      aria-label="TargetLink Home"
      className="flex items-center gap-2 group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <LogoIcon className="h-10 w-10" />
      <span className="text-brand-dark text-2xl font-bold bg-transparent caret-transparent leading-8 font-sora group-hover:text-brand-primary transition-colors duration-300">
        TargetLink
      </span>
    </motion.a>
  );
};
