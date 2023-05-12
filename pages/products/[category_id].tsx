import Footer from '@/components/footer/Footer';
import DownHeader from '@/components/header/DownHeader';
import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from '@/components/Icons';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import required modules
import { Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';

export default function Item() {
  return (
    <Layout>
      <DownHeader />

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
          <Image src={'/img/main 1.jpg'} alt="Main Banner 1" fill priority className="object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={'/img/main 3.jpg'} alt="Main Banner 3" fill priority className="object-cover" />
        </SwiperSlide>
        <div className="swiper-button-next-2">
          <ChevronRight />
        </div>
      </Swiper>

      <Footer />
    </Layout>
  );
}
