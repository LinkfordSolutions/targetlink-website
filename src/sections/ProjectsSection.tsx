import { motion } from "framer-motion";
import { HorizontalScroll } from "@/components/HorizontalScroll";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "AI Бот-Ассистент",
      category: "Telegram Mini App",
      description: "Умный помощник для автоматизации бизнес-процессов",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "E-Commerce Platform",
      category: "Web Application",
      description: "Полноценная платформа электронной коммерции",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "CRM System",
      category: "Enterprise Software",
      description: "Управление взаимоотношениями с клиентами",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Analytics Dashboard",
      category: "Data Visualization",
      description: "Визуализация данных и аналитика в реальном времени",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="bg-black">
      <div className="py-24 px-6">
        <div className="max-w-7xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Наши <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">работы</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl">
              Проекты, которые изменили бизнес наших клиентов
            </p>
          </motion.div>
        </div>
      </div>

      <HorizontalScroll>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-[500px] h-[600px] group cursor-pointer"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="relative h-full rounded-3xl overflow-hidden">
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <div className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                    <span className="text-white text-sm font-medium">{project.category}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-white/80 mb-6">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-white group-hover:gap-4 transition-all">
                    <span className="font-medium">Подробнее</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="transform group-hover:translate-x-1 transition-transform"
                    >
                      <path
                        d="M7.5 5L12.5 10L7.5 15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </motion.div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-3xl transition-all duration-300 pointer-events-none" />
            </div>
          </motion.div>
        ))}
      </HorizontalScroll>
    </div>
  );
};
