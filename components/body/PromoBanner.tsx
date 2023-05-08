// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';

export default function PromoBanner() {
  return (
    <div
      className="
    prioritymy-10 px-3 my-10 block sm:hidden"
    >
      <Swiper loop spaceBetween={10} className="h-[242px]">
        <SwiperSlide className="swiper-slide-1 rounded-[20px] w-full h-full relative overflow-hidden">
          <Image
            src={'/img/bannerImg1.png?v=1'}
            alt="Promo Banner 1"
            width={100}
            height={100}
            priority
            className="absolute object-cover bottom-0 right-10"
            style={{ width: '50%', height: 'auto' }}
          />
          <h1 className="font-bold text-head-xs text-[#6DBD66] absolute top-9 left-6">
            바로구매로 <br /> 대량구매 시 <br /> 할인률이 올라가요
          </h1>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-2 rounded-[20px] relative overflow-hidden">
          <Image
            src={'/img/bannerImg2.png'}
            alt="Promo Banner 2"
            width={100}
            height={100}
            priority
            className="absolute object-cover right-0"
            style={{ width: '50%', height: 'auto' }}
          />
          <h3 className="font-medium text-[26px] text-gray_03 absolute left-6 top-28">선물세트 할인 대전</h3>
          <h1 className="font-bold text-[64px] text-gray_03 absolute left-6 bottom-1.5">20%</h1>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-3 rounded-[20px] relative overflow-hidden">
          <Image
            src={'/img/bannerImg3.png'}
            alt="Promo Banner 3"
            width={180}
            height={180}
            priority
            className="absolute object-cover right-0"
            style={{ width: '50%', height: 'auto' }}
          />
          <h1 className="font-bold text-head-xs text-gray_01 absolute left-6 top-[118px]">
            대량구매! <br /> 의뢰를 통해 <br /> 더욱 저렴하게 구매할 수 있어요
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
