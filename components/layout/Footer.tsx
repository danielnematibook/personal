// ===== IMPORTS & DEPENDENCIES =====
"use client";
import Link from "next/link";
import Image from "next/image";

// ===== CONFIGURATION & CONSTANTS =====
// This array holds all the social media link data, making it easy to manage and update.
const socialLinks = [
    { name: "Instagram", href: "https://instagram.com/danielnemati", icon: "/assets/icons/instagram.svg", color: "text-[#E1306C]", glow: "hover:text-glow-instagram" },
    { name: "Telegram", href: "https://t.me/danielnemati", icon: "/assets/icons/telegram.svg", color: "text-[#229ED9]", glow: "hover:text-glow-telegram" },
    { name: "YouTube", href: "https://www.youtube.com/channel/UCavOuqZO1uuOwxMW-6lOKxg", icon: "/assets/icons/youtube.svg", color: "text-[#FF0000]", glow: "hover:text-glow-youtube" },
    { name: "Spotify", href: "https://open.spotify.com/artist/181tewJQfyOyyqJtMU7mq9", icon: "/assets/icons/spotify.svg", color: "text-[#1DB954]", glow: "hover:text-glow-spotify" },
    { name: "SoundCloud", href: "https://soundcloud.com/daniel_nemati", icon: "/assets/icons/soundcloud.svg", color: "text-[#FF5500]", glow: "hover:text-glow-soundcloud" },
    { name: "Apple Music", href: "https://music.apple.com/us/artist/daniel-nemati/1584787895", icon: "/assets/icons/applemusic.svg", color: "text-[#FB2A42]", glow: "hover:text-glow-applemusic" },
];

// ===== CORE BUSINESS LOGIC: Footer Component =====
// This component renders the site's footer, including social links and copyright info.
// It uses the centralized `.glass-ui` class for its styling.
const Footer = () => {
  return (
    <footer id="footer" className="relative mt-24 py-8 glass-ui">
      <div className="container mx-auto text-center text-foreground/80">
        <h3 className="text-2xl font-bold mb-6 tracking-wider text-royal-gold-light">
          Follow My Journey
        </h3>
        <div className="flex justify-center items-center space-x-6 md:space-x-8 mb-8">
          {socialLinks.map((social) => (
            <Link 
              key={social.name} 
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              title={social.name}
            >
              <div className={`w-10 h-10 transition-transform duration-300 ease-in-out hover:scale-125 ${social.color} ${social.glow}`}>
                <Image 
                  src={social.icon} 
                  alt={social.name} 
                  width={40} 
                  height={40} 
                />
              </div>
            </Link>
          ))}
        </div>
        <p className="text-sm text-foreground/60">
          &copy; {new Date().getFullYear()} Daniel Nemati. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;