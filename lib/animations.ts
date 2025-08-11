// ===== SHARED ANIMATION DEFINITIONS =====
// This file centralizes all Framer Motion animation variants for easy reuse and consistency.

import { Variants } from "framer-motion";

/**
 * A gentle fade-up and stagger effect for containers.
 * The container fades in, and then its children stagger in one by one.
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

/**
 * A smooth fade-up animation for individual items within a staggering container.
 * Uses a professional ease-out cubic-bezier curve for a polished feel.
 */
export const smoothFadeUp: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.33, 1, 0.68, 1], // Gentle ease-out curve
    },
  },
};