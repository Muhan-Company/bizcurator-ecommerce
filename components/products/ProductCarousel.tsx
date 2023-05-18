import Image from 'next/image';
import { ChevronLeft, ChevronRight } from '@/components/Icons';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import required modules
import { Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import { Trending } from '@/pages';

export default function ProductCarousel({ main_image_url, detail_image_url }: Trending) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation={{
        nextEl: '.swiper-button-next-2',
        prevEl: '.swiper-button-prev-2',
      }}
      loop
      className="h-[375px] mt-[68px] relative"
    >
      <div className="swiper-button-prev-2">
        <ChevronLeft />
      </div>
      <SwiperSlide>
        <Image src={main_image_url} alt="Main Banner 1" fill priority className="object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={detail_image_url!} alt="Main Banner 3" fill priority className="object-cover" />
      </SwiperSlide>
      <div className="swiper-button-next-2">
        <ChevronRight />
      </div>
    </Swiper>
  );
}
