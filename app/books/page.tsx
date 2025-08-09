// ===== IMPORTS & DEPENDENCIES =====
"use client";
import { TypeAnimation } from "react-type-animation";
import BookSlider from "@/components/sliders/BookSlider"; // This component should exist
import PoemCard from "@/components/ui/PoemCard"; // This component should also exist

// ===== CONFIGURATION & CONSTANTS =====
const poems = [
  { title: "شعر اول", preview: "اینجا دو بیت اول شعر اول قرار می‌گیرد...", fullText: "اینجا متن کامل شعر اول قرار می‌گیرد.\nبا حفظ فاصله‌گذاری خطوط." },
  { title: "شعر دوم", preview: "اینجا دو بیت اول شعر دوم قرار می‌گیرد...", fullText: "اینجا متن کامل شعر دوم قرار می‌گیرد.\nبا حفظ فاصله‌گذاری خطوط." },
  { title: "شعر سوم", preview: "اینجا دو بیت اول شعر سوم قرار می‌گیرد...", fullText: "اینجا متن کامل شعر سوم قرار می‌گیرد.\nبا حفظ فاصله‌گذاری خطوط." },
  { title: "شعر چهارم", preview: "اینجا دو بیت اول شعر چهارم قرار می‌گیرد...", fullText: "اینجا متن کامل شعر چهارم قرار می‌گیرد.\nبا حفظ فاصله‌گذاری خطوط." },
];

// ===== CORE BUSINESS LOGIC: Books Page =====
export default function BooksPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Section 1: Main Book */}
      <section className="text-center mb-24">
        <h1 className="text-4xl md:text-5xl font-black mb-4 text-royal-gold">
          کتاب: کنار مزار من
        </h1>
        <div className="max-w-4xl mx-auto">
          <BookSlider />
        </div>
        <div className="mt-8 text-lg md:text-xl font-light text-gray-600 dark:text-gray-300 h-20 flex items-center justify-center">
          <TypeAnimation
            sequence={[
              'کنار مزار من – سال انتشار 1400 (2021)\nواژه در ذهنم فراوانند اما تکرار کلمات بی‌دلیل نیستند...',
              5000,
              ''
            ]}
            wrapper="p"
            cursor={true}
            repeat={Infinity}
            style={{ whiteSpace: 'pre-line', lineHeight: '1.8' }}
          />
        </div>
      </section>

      {/* Section 2: Selected Poems */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-royal-gold-light">
          گزیده اشعار
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {poems.map((poem, index) => (
            <PoemCard key={index} title={poem.title} preview={poem.preview} fullText={poem.fullText} />
          ))}
        </div>
      </section>
    </div>
  );
}