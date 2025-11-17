import { motion } from "framer-motion";
import { useCounter } from "@/hooks/useCounter";

interface Stat {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

interface StatsCounterProps {
  stats: Stat[];
}

export const StatsCounter = ({ stats }: StatsCounterProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
      {stats.map((stat, index) => (
        <StatItem key={index} stat={stat} index={index} />
      ))}
    </div>
  );
};

const StatItem = ({ stat, index }: { stat: Stat; index: number }) => {
  const { count, ref } = useCounter(stat.value, 2000);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div
        className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-brand font-sora mb-2"
        whileHover={{ scale: 1.1 }}
      >
        {stat.prefix || ""}
        {count}
        {stat.suffix || ""}
      </motion.div>
      <div className="text-gray-600 text-sm md:text-base font-medium">
        {stat.label}
      </div>
    </motion.div>
  );
};
