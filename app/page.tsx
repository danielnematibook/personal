// ===== IMPORTS & DEPENDENCIES =====
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// ===== CORE BUSINESS LOGIC: Home Page =====
export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Section 1: Hero */}
      <section className="relative h-[80vh] md:h-screen w-full flex items-center justify-center text-white -mt-20">
        <Image
          src="/assets/images/home-portrait.webp"
          alt="Daniel Nemati Portrait"
          layout="fill"
          objectFit="cover"
          quality={90}
          priority
          className="z-0 opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-royal-blue-dark via-transparent to-transparent z-10"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-20 text-center"
        >
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-shadow-lg">
            دنیل نعمتی
          </h1>
          <p className="mt-4 text-lg md:text-2xl font-light text-white/80">
            آهنگساز | شاعر | گرافیست
          </p>
        </motion.div>
      </section>

      {/* Section 2: Biography */}
      <section id="biography" className="py-20 md:py-32 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center"
        >
          <div className="md:col-span-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-20px overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/bio-small.webp"
                alt="Daniel Nemati"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
          <div className="md:col-span-2 text-center md:text-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-royal-gold-light">
              بیوگرافی
            </h2>
            <p className="text-lg/loose md:text-xl/loose text-gray-700 dark:text-gray-300">
              دنیل نعمتی (Daniel Nemati) آهنگساز، شاعر و گرافیست ایرانی، متولد 
              <span className="font-bold text-royal-gold mx-1">۱ اردیبهشت ۱۳۸۱</span> 
              (21 April 2002) در تهران. او با تلفیق هنرهای مختلف، به دنبال خلق آثاری است که احساسات عمیق و داستان‌های انسانی را روایت می‌کنند.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}