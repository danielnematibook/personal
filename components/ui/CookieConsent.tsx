// ===== IMPORTS & DEPENDENCIES =====
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Cookie } from "lucide-react";

// ===== CORE BUSINESS LOGIC: CookieConsent Component =====
const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("cookie_consent");
      if (consent !== "true") {
        setIsVisible(true);
      }
    } catch (error) {
      console.error("Could not access localStorage:", error);
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem("cookie_consent", "true");
      setIsVisible(false);
    } catch (error) {
      console.error("Could not set localStorage item:", error);
      setIsVisible(false);
    }
  };

  const bannerVariants = {
    hidden: { y: "120%", opacity: 0 },
    visible: { y: "0%", opacity: 1, transition: { type: "spring", stiffness: 200, damping: 25 } },
    exit: { y: "120%", opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={bannerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed bottom-4 inset-x-4 z-50 p-4 sm:p-6 glass-ui rounded-2xl shadow-2xl"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            <div className="flex items-center gap-4 text-sm text-foreground/80 text-center sm:text-right">
              <Cookie className="w-10 h-10 text-royal-gold flex-shrink-0 hidden sm:block" />
              <p>
                این وب‌سایت از کوکی‌ها برای بهبود تجربه کاربری شما استفاده می‌کند. با ادامه استفاده از سایت، با این موضوع موافقت می‌کنید. 
                <Link href="/privacy-policy" className="underline hover:text-royal-gold-light transition-colors">
                  اطلاعات بیشتر
                </Link>
              </p>
            </div>

            {/* CRITICAL FIX WAS HERE */}
            <button
              onClick={handleAccept}
              className="flex-shrink-0 px-6 py-2 bg-royal-gold text-white font-bold rounded-full hover:bg-royal-gold-light transition-colors duration-300 shadow-lg"
            >
              پذیرفتن
            </button>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;