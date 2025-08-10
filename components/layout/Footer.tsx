// ===== IMPORTS & DEPENDENCIES =====
"use client";
import Link from "next/link";
import { motion } from "framer-motion";

// ===== CONFIGURATION & CONSTANTS =====
// We provide the hex color for both the background color and the glow effect.
const socialLinks = [
  { name: "Instagram", href: "https://instagram.com/danielnemati", icon: "/assets/icons/instagram.svg", color: "#E1306C" },
  { name: "Telegram", href: "https://t.me/danielnemati", icon: "/assets/icons/telegram.svg", color: "#229ED9" },
  { name: "YouTube", href: "https://www.youtube.com/channel/UCavOuqZO1uuOwxMW-6lOKxg", icon: "/assets/icons/youtube.svg", color: "#FF0000" },
  { name: "Spotify", href: "https://open.spotify.com/artist/181tewJQfyOyyqJtMU7mq9", icon: "/assets/icons/spotify.svg", color: "#1DB954" },
  { name: "SoundCloud", href: "https://soundcloud.com/daniel_nemati", icon: "/assets/icons/soundcloud.svg", color: "#FF5500" },
  { name: "Apple Music", href: "https://music.apple.com/us/artist/daniel-nemati/1584787895", icon: "/assets/icons/applemusic.svg", color: "#FB2A42" },
];

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };

// ===== CORE BUSINESS LOGIC: Footer Component =====
const Footer = () => {
  return (
    <footer id="footer" className="relative mt-24 py-12 glass-ui rounded-t-2xl">
      <div className="container mx-auto text-center text-foreground/80">
        <motion.h3 
          className="text-2xl font-bold mb-8 tracking-wider text-royal-gold-light"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          Follow My Journey
        </motion.h3>
        
        <motion.div 
          className="flex justify-center items-center gap-x-4 md:gap-x-6 mb-10"
          variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          {socialLinks.map((social) => (
            <motion.div key={social.name} variants={itemVariants}>
              <Link 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                title={social.name}
                className="group"
              >
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-white/10"
                  // The custom property is now used by the icon-glow class
                  style={{ '--glow-color': social.color } as React.CSSProperties}
                >
                  <div
                    // The `group-hover:icon-glow` class is the key to applying the filter on hover
                    className="w-8 h-8 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:icon-glow"
                    style={{
                      backgroundColor: social.color, 
                      maskImage: `url(${social.icon})`,
                      maskSize: 'contain',
                      maskPosition: 'center',
                      maskRepeat: 'no-repeat',
                      WebkitMaskImage: `url(${social.icon})`,
                      WebkitMaskSize: 'contain',
                      WebkitMaskPosition: 'center',
                      WebkitMaskRepeat: 'no-repeat',
                    }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.p 
            className="text-sm text-foreground/60"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
        >
          &copy; {new Date().getFullYear()} Daniel Nemati. All Rights Reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;