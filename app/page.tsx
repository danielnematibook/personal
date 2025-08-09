"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// REFINEMENT: A standard, softer transition for reuse
const smoothFadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] } // A gentle ease-out curve
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Section 1: Hero */}
      {/* REFINEMENT: Wrapper div to round the image corners */}
      <div className="relative h-[90vh] md:h-screen w-full -mt-24 overflow-hidden rounded-b-2xl">
        <motion.div 
            className="w-full h-full"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
        >
            <Image
              src="/assets/images/home-portrait.webp"
              alt="Daniel Nemati Portrait"
              fill
              className="object-cover"
              quality={90}
              priority
            />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent z-10"></div>
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-foreground drop-shadow-lg">
                دانیال نعمتی
              </h1>
              <p className="mt-4 text-lg md:text-2xl font-light text-foreground/80">
                آهنگساز | شاعر | گرافیست
              </p>
            </motion.div>
        </div>
      </div>

      {/* Section 2: Biography */}
      <section id="biography" className="py-20 md:py-32 container mx-auto px-6">
        <motion.div
          // REFINEMENT: Using the reusable animation object
          {...smoothFadeUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center"
        >
          <div className="md:col-span-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/bio-small.webp"
                alt="Daniel Nemati"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
          <div className="md:col-span-2 text-center md:text-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-royal-gold-light">
              بیوگرافی
            </h2>
            <p className="text-lg/loose md:text-xl/loose text-foreground/90">
              دانیال نعمتی (Daniel Nemati) آهنگساز، شاعر و گرافیست ایرانی، متولد 
              <span className="font-bold text-royal-gold mx-1">۱ اردیبهشت ۱۳۸۱</span> 
              (21 April 2002) در تهران. او با تلفیق هنرهای مختلف، به دنبال خلق آثاری است که احساسات عمیق و داستان‌های انسانی را روایت می‌کنند.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}