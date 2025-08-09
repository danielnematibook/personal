// ===== IMPORTS & DEPENDENCIES =====
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from 'next/navigation';

// ===== CONFIGURATION & CONSTANTS =====
const navLinks = [
  { name: "خانه", href: "/" },
  { name: "موسیقی", href: "/music" },
  { name: "کتاب‌ها", href: "/books" },
  { name: "گرافیک", href: "/graphics" },
  { name: "ارتباط", href: "/#footer" },
];

// ===== REUSABLE NavItem COMPONENT with HOVER ANIMATION =====
// This sub-component handles the rendering and hover animation for each navigation link.
const NavItem = ({ href, name }: { href: string; name:string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className="relative block px-3 py-2 text-foreground/80 transition-colors hover:text-foreground">
      {name}
      {/* Active page indicator */}
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-royal-gold"
          layoutId="underline"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
};


// ===== CORE BUSINESS LOGIC: Header Component =====
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);
  
  // Close mobile menu on route change
  useEffect(() => {
    if (isOpen) setIsOpen(false);
  }, [pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Animation variants for the hamburger menu icon
  const topBarVariants = { open: { top: "50%", rotate: 135, y: "-50%" }, closed: { top: "0%", rotate: 0, y: "0%" } };
  const middleBarVariants = { open: { opacity: 0 }, closed: { opacity: 1 } };
  const bottomBarVariants = { open: { top: "50%", rotate: -135, y: "-50%" }, closed: { top: "100%", rotate: 0, y: "-100%" } };
  
  // Animation variants for the mobile menu overlay
  const mobileMenuVariants = { hidden: { x: "100%" }, visible: { x: "0%" } };
  const mobileLinkVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };

  if (!mounted) {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 glass-ui">
            <div className="container mx-auto flex justify-between items-center">
                 <Link href="/" className="text-xl md:text-2xl font-bold tracking-wider text-royal-gold">
                    DANIEL NEMATI
                 </Link>
            </div>
        </header>
    );
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 glass-ui">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl md:text-2xl font-bold tracking-wider text-royal-gold">
            DANIEL NEMATI
          </Link>
          
          {/* --- IMPROVED Desktop Navigation --- */}
          <nav className="hidden md:flex items-center justify-center">
            <ul className="flex items-center gap-x-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavItem href={link.href} name={link.name} />
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="flex items-center gap-4">
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded-full text-foreground/80 hover:text-foreground hover:bg-foreground/10 transition-colors" aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <div className="md:hidden z-50">
              <button onClick={toggleMenu} className="relative w-[30px] h-[22px]" aria-label="Toggle menu">
                <motion.div className="absolute left-0 w-full h-[3px] bg-foreground rounded-full" variants={topBarVariants} animate={isOpen ? "open" : "closed"} />
                <motion.div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[3px] bg-foreground rounded-full" variants={middleBarVariants} animate={isOpen ? "open" : "closed"} />
                <motion.div className="absolute left-0 w-full h-[3px] bg-foreground rounded-full" variants={bottomBarVariants} animate={isOpen ? "open" : "closed"} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* --- Mobile Menu Overlay (No changes needed here) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={toggleMenu} />
            <motion.div
              className="absolute top-0 right-0 h-full w-2/3 max-w-sm bg-background/95 shadow-2xl p-8"
              variants={mobileMenuVariants} initial="hidden" animate="visible" exit="hidden"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <motion.nav 
                className="mt-24 flex flex-col items-center justify-center h-full"
                variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } } }}
              >
                {navLinks.map((link) => (
                  <motion.div key={link.name} variants={mobileLinkVariants} className="w-full text-center py-4">
                    <Link href={link.href} className="text-3xl font-bold text-foreground/80 hover:text-royal-gold transition-colors duration-300">
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;