// ===== IMPORTS & DEPENDENCIES =====
"use client";
import { motion, Variants } from "framer-motion"; // Import Variants type for strong typing
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import AlbumSlider from "@/components/sliders/AlbumSlider";

// ===== CONFIGURATION & CONSTANTS =====
const singles = [
  { name: "رویا", year: 2021, img: "/assets/images/album-track1.webp" },
  { name: "قهرمان", year: 2022, img: "/assets/images/album-track2.webp" },
  { name: "شکل قلب من", year: 2022, img: "/assets/images/album-track3.webp" },
  { name: "بهت قول میدم", year: 2023, img: "/assets/images/album-track4.webp" },
  { name: "سمفونی یک سقوط", year: 2024, img: "/assets/images/album-track5.webp" },
  { name: "با تو", year: 2024, img: "/assets/images/album-track6.webp" },
  { name: "سایه‌های زیرین", year: 2024, img: "/assets/images/album-track7.webp" },
  { name: "خون سبز من", year: 2024, img: "/assets/images/album-track8.webp" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // A bit faster stagger
    },
  },
};

// FINAL FIX: This is the definitive fix for the framer-motion type error.
// The `ease` property is removed from the transition object.
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring", // Using spring for a more natural feel
      stiffness: 100,
    }
  },
};

// ===== CORE BUSINESS LOGIC: Music Page =====
export default function MusicPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Section 1: Main Album */}
      <section className="text-center mb-24">
        <h1 className="text-4xl md:text-5xl font-black mb-4 text-royal-gold">
          آلبوم: از ملاقات تا تولدی دوباره
        </h1>
        <div className="max-w-4xl mx-auto">
          <AlbumSlider />
        </div>
        <div className="mt-8 text-lg md:text-xl font-light text-gray-600 dark:text-gray-300 h-24 flex items-center justify-center">
            <TypeAnimation
                sequence={[
                    'De la Rencontre à la Renaissance\nمجموعه بی‌کلام سال 2024، شامل 8 قطعه نئوکلاسیک، روایت لحظات خاص زندگی و تحولات درونی با موسیقی.',
                    5000,
                    ''
                ]}
                wrapper="p"
                cursor={true}
                repeat={Infinity}
                style={{ whiteSpace: 'pre-line', lineHeight: '1.8' }}
            />
        </div>
      </section>

      {/* Section 2: Singles */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-royal-gold-light">
          تک آهنگ‌ها
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Animate when the section scrolls into view
          viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% is visible
        >
          {singles.map((song) => (
            <motion.div key={song.name} variants={itemVariants}>
              <Link href="#" className="block group">
                <div className="relative aspect-square rounded-20px overflow-hidden shadow-lg bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20">
                  <Image
                    src={song.img}
                    alt={song.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <div>
                      <h3 className="text-white text-xl font-bold">{song.name}</h3>
                      <p className="text-white/80 text-sm">{song.year}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}