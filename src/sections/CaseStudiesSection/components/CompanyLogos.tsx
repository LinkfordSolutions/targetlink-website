import { motion } from "framer-motion";

export const CompanyLogos = () => {
  const companies = [
    { name: "Yandex", logo: "🟡" },
    { name: "Sber", logo: "🟢" },
    { name: "VK", logo: "🔵" },
    { name: "Ozon", logo: "🔷" },
    { name: "Wildberries", logo: "🟣" },
    { name: "Tinkoff", logo: "🟨" },
    { name: "Avito", logo: "🟩" },
    { name: "Lamoda", logo: "⬛" },
  ];

  const duplicatedCompanies = [...companies, ...companies];

  return (
    <div className="relative w-full overflow-hidden py-12 bg-white/50 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none"></div>
      
      <motion.div
        className="flex gap-16 items-center"
        animate={{
          x: [0, -50 * companies.length * 16],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {duplicatedCompanies.map((company, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center min-w-[200px] group"
            whileHover={{ scale: 1.1 }}
          >
            <div className="text-6xl mb-2 group-hover:scale-110 transition-transform duration-300">
              {company.logo}
            </div>
            <div className="text-xl font-bold text-gray-700 group-hover:text-brand-primary transition-colors duration-300">
              {company.name}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
