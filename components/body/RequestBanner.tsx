import Link from 'next/link';

export default function RequestBanner() {
  return (
    <div className="bg-gray_04 rounded-[10px] my-20 py-10 lg:py-20 flex justify-center lg:mx-24 xl:mx-48">
      <Link href={'#'} className="inline-block space-y-3 lg:space-y-10">
        <h1 className="font-bold text-title-md lg:text-4xl text-main text-center">
          원하시는 제품이 없나요? <br /> 저희가 빠르게 찾아드립니다
        </h1>
        <h3 className="flex items-center gap-x-2 font-normal text-primary text-button-sm lg:text-title-md text-center">
          <span>무료로 의뢰하고 시간을 절약하세요</span>
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.503141 9.8302C0.332286 9.65935 0.332286 9.38234 0.503141 9.21148L4.56878 5.14584L0.503142 1.0802C0.332287 0.909348 0.332287 0.632338 0.503142 0.461484C0.673996 0.29063 0.951005 0.29063 1.12186 0.461484L5.49686 4.83648C5.66771 5.00734 5.66771 5.28435 5.49686 5.4552L1.12186 9.8302C0.951005 10.0011 0.673995 10.0011 0.503141 9.8302Z"
              fill="#16133A"
            />
          </svg>
        </h3>
      </Link>
    </div>
  );
}
