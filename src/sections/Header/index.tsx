import { HeaderContainer } from "@/sections/Header/components/HeaderContainer";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <motion.header 
      className="fixed box-border caret-transparent min-h-16 z-50 top-0 inset-x-0 backdrop-blur-md bg-white/80"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <HeaderContainer />
    </motion.header>
  );
};
