import Link from 'next/link';
import { ChevronRightIcon } from '../Icons';

export default function RequestBanner() {
  return (
    <div className="bg-gray_04 rounded-[10px] my-20 py-10 lg:py-20 flex justify-center lg:mx-24 xl:mx-48">
      <Link href={'/request/purchase'} className="inline-block space-y-3 lg:space-y-10">
        <h1 className="font-bold text-title-md lg:text-4xl text-main text-center">
          원하시는 제품이 없나요? <br /> 저희가 빠르게 찾아드립니다
        </h1>
        <h3 className="flex items-center gap-x-2 font-normal text-primary text-button-sm lg:text-title-md text-center">
          <span>무료로 의뢰하고 시간을 절약하세요</span>
          <ChevronRightIcon color="#16133A" width="20" height="20" />
        </h3>
      </Link>
    </div>
  );
}
