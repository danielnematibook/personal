// ===== IMPORTS & DEPENDENCIES =====
import type { Metadata } from "next";
import { ThemeProvider } from "./providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
  // lang="fa" and dir="rtl" are set for Persian as the primary language.
  // suppressHydrationWarning is necessary when using next-themes.
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
        </ThemeProvider>
      </body>
    </html>
  );
}