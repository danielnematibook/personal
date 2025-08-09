// ===== IMPORTS & DEPENDENCIES =====
"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// ===== CONFIGURATION & CONSTANTS =====
// Placeholder images for the book slider.
// Ensure these images exist in your /public/assets/images/ folder.
const bookImages = [
  { src: '/assets/images/book-main.webp', title: 'Book Cover' },
  { src: '/assets/images/book-page1.webp', title: 'Book Page 1' },
  { src: '/assets/images/book-page2.webp', title: 'Book Page 2' },
];

// ===== CORE BUSINESS LOGIC: BookSlider Component =====
const BookSlider = () => {
  return (
    <div className="w-full">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mySwiper w-full py-12"
      >
        {bookImages.map((book, index) => (
          // Make sure the key is unique and the aspect ratio is correct for a book
          <SwiperSlide key={index} style={{ width: '60%', maxWidth: '350px' }}>
            <div className="relative aspect-[3/4] rounded-20px overflow-hidden shadow-2xl transition-all duration-300">
              <Image src={book.src} alt={book.title} layout="fill" objectFit="cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BookSlider;