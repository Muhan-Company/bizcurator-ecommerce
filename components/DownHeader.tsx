import Link from 'next/link';
import { Bars } from './Icons';

export default function DownHeader() {
  return (
    <div className="h-[55px]">
      <div className="px-6 md:px-0 md:flex md:justify-between">
        <div className="hidden md:flex space-x-2 items-center flex-1">
          <Bars />
          <Link href={'#'} className="header-link">
            전체 상품 보기
          </Link>
        </div>
        <div className="md:space-x-5 xl:space-x-12 flex justify-evenly md:justify-between">
          <Link href={'/'} className="hidden md:inline md:header-link">
            홈
          </Link>
          <Link href={'#'} className="header-link">
            바로구매
          </Link>
          <Link href={'#'} className="header-link mx-3">
            제품구매 의뢰
          </Link>
          <Link href={'#'} className="header-link">
            입점 의뢰
          </Link>
        </div>
      </div>
    </div>
  );
}