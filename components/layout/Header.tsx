// ===== IMPORTS & DEPENDENCIES =====
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from 'next/navigation';

// ===== CONFIGURATION & CONSTANTS =====
// --- Reverted to static, single-language array ---
const navLinks = [
  { name: "خانه", href: "/" },
  { name: "موزیک و آلبوم‌ها", href: "/music" },
  { name: "اشعار و کتاب‌ها", href: "/books" },
  { name: "پروژه‌های گرافیکی", href: "/graphics" },
  { name: "ارتباط با من", href: "/#footer" },
];

// ===== REUSABLE NavItem COMPONENT =====
const NavItem = ({ href, name }: { href: string; name:string }) => {
  const pathname = usePathname();
  // Simplified isActive logic for single language
  const isActive = pathname === href;

  return (
    <Link href={href} className="relative block px-3 py-2 text-foreground/80 transition-colors hover:text-foreground">
      {name}
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

// ===== Theme Toggle Button (Stable) =====
const ThemeToggleButton = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return <div className="w-16 h-8" />;

    const isDark = theme === 'dark';
    const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');
    const spring = { type: "spring", stiffness: 500, damping: 35 };

    return (
        <LayoutGroup>
            <div
                onClick={toggleTheme}
                className={`flex items-center w-16 h-8 p-1 rounded-full cursor-pointer relative transition-colors duration-300 ease-in-out border border-transparent dark:border-white/10 ${
                    isDark ? 'bg-royal-blue-dark/50 justify-end' : 'bg-yellow-400/50 justify-start'
                }`}
            >
                <motion.div
                    className="w-6 h-6 rounded-full flex items-center justify-center shadow-lg"
                    layout
                    transition={spring}
                    style={{ backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.4)' }}
                >
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={isDark ? "moon" : "sun"}
                            initial={{ y: -20, opacity: 0, rotate: -90 }}
                            animate={{ y: 0, opacity: 1, rotate: 0 }}
                            exit={{ y: 20, opacity: 0, rotate: 90 }}
                            transition={{ duration: 0.2 }}
                        >
                            {isDark ? ( <Moon size={14} className="text-slate-200" /> ) : ( <Sun size={14} className="text-yellow-600" /> )}
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>
        </LayoutGroup>
    );
};


// ===== CORE BUSINESS LOGIC: Header Component =====
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) setIsOpen(false);
  }, [pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Animation variants
  const topBarVariants = { open: { top: "50%", rotate: 135, y: "-50%" }, closed: { top: "0%", rotate: 0, y: "0%" } };
  const middleBarVariants = { open: { opacity: 0 }, closed: { opacity: 1 } };
  const bottomBarVariants = { open: { top: "50%", rotate: -135, y: "-50%" }, closed: { top: "100%", rotate: 0, y: "-100%" } };
  const mobileMenuVariants = { hidden: { x: "100%" }, visible: { x: "0%" } };
  const mobileLinkVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };

  return (
    <>
      <header className="fixed top-4 inset-x-4 z-50 glass-ui rounded-2xl">
        <div className="container mx-auto flex items-center justify-between h-14 px-4">
          
          <Link href="/" className="flex items-center text-xl md:text-2xl font-bold tracking-wider text-royal-gold">
            DANIEL NEMATI
          </Link>
          
          <nav className="hidden md:flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <LayoutGroup>
              <ul className="flex items-center gap-x-2 lg:gap-x-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <NavItem href={link.href} name={link.name} />
                  </li>
                ))}
              </ul>
            </LayoutGroup>
          </nav>
          
          <div className="flex items-center justify-end gap-4">
            <ThemeToggleButton />
            
            <div className="md:hidden flex items-center justify-center w-8 h-8">
              <button onClick={toggleMenu} className="relative w-[30px] h-[22px]" aria-label="Toggle menu">
                <motion.div className="absolute left-0 w-full h-[3px] bg-foreground rounded-full" variants={topBarVariants} animate={isOpen ? "open" : "closed"} />
                <motion.div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[3px] bg-foreground rounded-full" variants={middleBarVariants} animate={isOpen ? "open" : "closed"} />
                <motion.div className="absolute left-0 w-full h-[3px] bg-foreground rounded-full" variants={bottomBarVariants} animate={isOpen ? "open" : "closed"} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div className="fixed inset-0 z-40 md:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={toggleMenu} />
            <motion.div
              className="absolute top-0 right-0 h-full w-2/3 max-w-sm bg-background/95 shadow-2xl p-8"
              variants={mobileMenuVariants} initial="hidden" animate="visible" exit="hidden"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <motion.nav 
                className="mt-24 flex flex-col items-center justify-center h-full"
                variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } } }}
                initial="hidden" animate="visible"
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