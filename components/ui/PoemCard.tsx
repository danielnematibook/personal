"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

// --- Simple, clean props interface ---
interface PoemCardProps {
  title: string;
  preview: string;
  fullText: string;
}

// --- Original, working component logic ---
const PoemCard = ({ title, preview, fullText }: PoemCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Note: The outer element is a simple `div`, not a `motion.div`.
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="p-6 rounded-20px cursor-pointer bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 shadow-lg"
    >
      <motion.div layout="position" className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-royal-gold-light">{title}</h3>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown />
        </motion.div>
      </motion.div>
      
      <motion.p layout="position" className="mt-4 text-gray-600 dark:text-gray-300">
        {preview}
      </motion.p>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="mt-4 pt-4 border-t border-white/20 whitespace-pre-line text-gray-700 dark:text-gray-200">
              {fullText}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PoemCard;