// ===== IMPORTS & DEPENDENCIES =====
import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

// ===== CONFIGURATION & CONSTANTS =====
export const metadata: Metadata = {
  title: 'سیاست حریم خصوصی | دانیال نعمتی',
  description: 'سیاست‌های مربوط به حریم خصوصی و استفاده از کوکی‌ها در وب‌سایت رسمی دانیال نعمتی.',
};

// A simple reusable component for styling sections
const PolicySection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4 text-royal-gold-light">{title}</h2>
    <div className="space-y-4 text-lg text-foreground/80 leading-loose">
      {children}
    </div>
  </div>
);

// ===== CORE BUSINESS LOGIC: Privacy Policy Page =====
export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
      <div className="text-center mb-12">
        <ShieldCheck className="mx-auto w-16 h-16 text-royal-gold mb-4" />
        <h1 className="text-4xl md:text-5xl font-black text-foreground">
          سیاست حریم خصوصی
        </h1>
        <p className="mt-4 text-lg text-foreground/70">
          آخرین به‌روزرسانی: ۱۰ آگوست ۲۰۲۵
        </p>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <PolicySection title="مقدمه">
          <p>
            به وب‌سایت رسمی دانیال نعمتی خوش آمدید. ما به حریم خصوصی شما احترام می‌گذاریم و متعهد به حفاظت از آن هستیم. این سند توضیح می‌دهد که ما چگونه از اطلاعات شما، به ویژه کوکی‌ها، برای بهبود تجربه شما در این وب‌سایت استفاده می‌کنیم.
          </p>
        </PolicySection>

        <PolicySection title="کوکی‌ها (Cookies) چه هستند؟">
          <p>
            کوکی‌ها فایل‌های متنی کوچکی هستند که توسط وب‌سایت در مرورگر شما ذخیره می‌شوند. این فایل‌ها به وب‌سایت اجازه می‌دهند تا اطلاعات مربوط به بازدید شما را به خاطر بسپارد. در این وب‌سایت، ما فقط از یک کوکی برای یک هدف خاص استفاده می‌کنیم.
          </p>
        </PolicySection>
        
        <PolicySection title="ما از چه کوکی‌هایی استفاده می‌کنیم؟">
          <p>
            این وب‌سایت تنها از یک کوکی عملکردی در `localStorage` مرورگر شما استفاده می‌کند:
          </p>
          <ul className="list-disc pr-6 space-y-2">
            <li>
              <strong>کوکی رضایت (cookie_consent):</strong> هنگامی که شما روی دکمه "پذیرفتن" در پنل کوکی‌ها کلیک می‌کنید، این کوکی ذخیره می‌شود تا در بازدیدهای بعدی، پنل مزاحم شما نشود. این کوکی هیچ اطلاعات شخصی‌ای را ردیابی یا ذخیره نمی‌کند.
            </li>
          </ul>
        </PolicySection>

        <PolicySection title="جمع‌آوری اطلاعات شخصی">
          <p>
            این وب‌سایت به طور مستقیم هیچ‌گونه اطلاعات شخصی (مانند نام، ایمیل یا آدرس IP) را از بازدیدکنندگان جمع‌آوری، ذخیره یا پردازش نمی‌کند. هدف اصلی این سایت، نمایش آثار هنری است و نیازی به اطلاعات شما ندارد.
          </p>
        </PolicySection>

        <PolicySection title="لینک به وب‌سایت‌های دیگر">
          <p>
            وب‌سایت ما ممکن است حاوی لینک‌هایی به پلتفرم‌های دیگر مانند اسپاتیفای، یوتیوب و شبکه‌های اجتماعی باشد. لطفاً توجه داشته باشید که ما هیچ کنترلی بر سیاست‌های حریم خصوصی آن وب‌سایت‌ها نداریم. توصیه می‌کنیم سیاست‌های حریم خصوصی هر سایتی که بازدید می‌کنید را مطالعه نمایید.
          </p>
        </PolicySection>

        <PolicySection title="تماس با ما">
          <p>
            اگر در مورد این سیاست حریم خصوصی سوالی دارید، می‌توانید از طریق لینک‌های موجود در بخش "ارتباط با من" در فوتر وب‌سایت با ما در تماس باشید.
          </p>
          <div className="mt-8 text-center">
             <Link href="/" className="px-6 py-3 bg-royal-gold text-white font-bold rounded-full hover:bg-royal-gold-light transition-colors duration-300 shadow-lg">
                بازگشت به صفحه اصلی
             </Link>
          </div>
        </PolicySection>
      </div>
    </div>
  );
}