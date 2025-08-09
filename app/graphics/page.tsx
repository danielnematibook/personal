// ===== IMPORTS & DEPENDENCIES =====
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// ===== CONFIGURATION & CONSTANTS =====
const graphicProjects = [
  { src: '/assets/images/graphic-project1.webp', title: 'پروژه اول' },
  { src: '/assets/images/graphic-project2.webp', title: 'پروژه دوم' },
  { src: '/assets/images/graphic-project3.webp', title: 'پروژه سوم' },
  { src: '/assets/images/graphic-project4.webp', title: 'پروژه چهارم' },
  { src: '/assets/images/graphic-project5.webp', title: 'پروژه پنجم' },
  { src: '/assets/images/graphic-project6.webp', title: 'پروژه ششم' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

// ===== CORE BUSINESS LOGIC: Graphics Page =====
export default function GraphicsPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black mb-4 text-royal-gold">
          پروژه‌های گرافیکی
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          مجموعه‌ای از طراحی‌های گرافیکی، از هویت بصری تا آرت‌ورک.
        </p>
      </section>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {graphicProjects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="group relative rounded-20px overflow-hidden shadow-2xl cursor-pointer"
          >
            <Image
              src={project.src}
              alt={project.title}
              width={800}
              height={800}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <h3 className="text-white text-2xl font-bold">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}