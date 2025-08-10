"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { useRef, useEffect } from "react";

export default function NotFound() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.currentTime >= 14) {
        video.pause();
        video.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden flex items-center justify-center p-4">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        poster="/assets/images/universe-poster.webp"
      >
        <source
          src="/assets/videos/universe-mobile.webm"
          media="(max-width: 768px)"
          type="video/webm"
        />
        <source
          src="/assets/videos/universe-desktop.webm"
          media="(min-width: 769px)"
          type="video/webm"
        />
        مرورگر شما از ویدیو پشتیبانی نمی‌کند.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content Layer */}
      <motion.div
        className="relative z-20 w-full max-w-2xl text-center text-white p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Rocket
          className="mx-auto w-12 h-12 text-yellow-400 mb-4"
          style={{ filter: "drop-shadow(0 0 10px #D4AF37)" }}
        />

        <h1
          className="text-4xl md:text-5xl font-black mb-4"
          style={{ textShadow: "0 0 15px rgba(255, 255, 255, 0.3)" }}
        >
          در کل کیهان گشتیم...
        </h1>

        <p className="text-lg md:text-xl text-white/80 max-w-lg mx-auto mb-10 drop-shadow-md">
          ...اما این آدرس در هیچ ستاره‌ای ثبت نشده بود.
        </p>

        <Link
          href="/"
          className="inline-block px-8 py-3 bg-yellow-500 text-black font-bold rounded-full 
                     hover:bg-yellow-400 transition-all duration-300 shadow-lg 
                     hover:shadow-xl hover:shadow-yellow-400/30 transform hover:-translate-y-1"
        >
          بازگشت به صفحه اصلی
        </Link>
      </motion.div>
    </div>
  );
}
