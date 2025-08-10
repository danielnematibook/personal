// ===== IMPORTS & DEPENDENCIES =====
import type { Metadata } from "next";
import { ThemeProvider } from "./providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/ui/CookieConsent";
import "./globals.css";

// ===== CONFIGURATION & CONSTANTS =====
export const metadata: Metadata = {
  title: "دنیل نعمتی | وب‌سایت رسمی",
  description: "پورتفولیو رسمی دانیال نعمتی، موزیسین، گرافیست و شاعر",
};

// ===== ROOT LAYOUT =====
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="pt-20"> 
            {children}
          </main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}