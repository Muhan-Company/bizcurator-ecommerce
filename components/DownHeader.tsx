import Link from 'next/link';
import { BarsIcon } from './Icons';
import NavLink from './NavLink';

export default function DownHeader() {
  return (
    <div>
      <div className="px-6 lg:px-0 lg:flex lg:justify-between">
        <div className="hidden lg:flex space-x-2 items-center flex-1">
          <BarsIcon />
          <Link href={'#'} className="header-link">
            전체 상품 보기
          </Link>
        </div>
        <div className="lg:space-x-5 xl:space-x-12 flex justify-evenly lg:justify-between">
          <NavLink href={'/'} className="hidden lg:inline lg:header-link">
            홈
          </NavLink>
          <NavLink href={'#'}>바로구매</NavLink>
          <NavLink href={'#'} className="mx-3">
            제품구매 의뢰
          </NavLink>
          <NavLink href={'#'}>입점 의뢰</NavLink>
        </div>
      </div>
    </div>
  );
}
