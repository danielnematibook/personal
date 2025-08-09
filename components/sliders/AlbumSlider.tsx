// ===== IMPORTS & DEPENDENCIES =====
"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// ===== CONFIGURATION & CONSTANTS =====
const albumTracks = [
  { src: '/assets/images/album-track1.webp', title: 'Track 1' },
  { src: '/assets/images/album-main.webp', title: 'Main Album Art' },
  { src: '/assets/images/album-track2.webp', title: 'Track 2' },
  { src: '/assets/images/album-track3.webp', title: 'Track 3' },
  { src: '/assets/images/album-track4.webp', title: 'Track 4' },
];

// ===== CORE BUSINESS LOGIC: AlbumSlider Component =====
// A modern, 2025-style slider using Swiper.js with a coverflow effect.
// It's designed to be responsive and visually appealing.
const AlbumSlider = () => {
  return (
    <div className="w-full">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper w-full py-12"
      >
        {albumTracks.map((track, index) => (
          <SwiperSlide key={index} style={{ width: '60%', maxWidth: '400px' }}>
            <div className="relative aspect-square rounded-20px overflow-hidden shadow-2xl transition-all duration-300">
              <Image
                src={track.src}
                alt={track.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AlbumSlider;