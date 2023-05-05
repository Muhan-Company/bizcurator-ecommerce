// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import required modules
import { Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

export default function MainBanner() {
  return (
    <div>
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ type: 'fraction', el: '.swiper-pagination' }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop
        className="w-full h-[281px] md:h-[calc(100vh-212px)] relative"
      >
        <div className="swiper-button-prev">
          <svg
            className="w-2 h-[14px] md:w-[16.5px] md:h-[30.25px]"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.45711 0.542893C7.84763 0.933418 7.84763 1.56658 7.45711 1.95711L2.66421 6.75L7.45711 11.5429C7.84763 11.9334 7.84763 12.5666 7.45711 12.9571C7.06658 13.3476 6.43342 13.3476 6.04289 12.9571L0.542893 7.45711C0.152369 7.06658 0.152369 6.43342 0.542893 6.04289L6.04289 0.542893C6.43342 0.152369 7.06658 0.152369 7.45711 0.542893Z"
              fill="white"
            />
          </svg>
        </div>

        <SwiperSlide>
          <Image src={'/img/main 1.jpg'} alt="Main Banner 1" fill priority className="object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={'/img/main 2.jpg'} alt="Main Banner 2" fill priority className="object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={'/img/main 3.jpg'} alt="Main Banner 3" fill priority className="object-cover" />
        </SwiperSlide>

        <div className="swiper-button-next">
          <svg
            className="w-2 h-[14px] md:w-[16.5px] md:h-[30.25px]"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.542893 12.9571C0.152369 12.5666 0.152369 11.9334 0.542893 11.5429L5.33579 6.75L0.542894 1.95711C0.15237 1.56658 0.15237 0.933417 0.542895 0.542893C0.933419 0.152368 1.56658 0.152368 1.95711 0.542893L7.45711 6.04289C7.84763 6.43342 7.84763 7.06658 7.45711 7.45711L1.95711 12.9571C1.56658 13.3476 0.933417 13.3476 0.542893 12.9571Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
}
