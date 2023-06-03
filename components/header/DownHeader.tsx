import Link from 'next/link';
import { BarsIcon } from '../Icons';
import ActiveLink from './ActiveLink';
import HeaderDropdown from './HeaderDropdown';
import { useRecoilState } from 'recoil';
import hoverState from '@/atoms/hoverAtom';

export default function DownHeader() {
  const [isHovered, setIsHovered] = useRecoilState(hoverState);

  return (
    <div className="px-6 lg:px-24 xl:px-48 pt-3 lg:pt-10 lg:flex justify-between">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="hidden lg:block relative"
      >
        <Link href={'/products/categories/1?sort=newest'} className="lg:flex items-center">
          <BarsIcon />
          <h3 className="header-link">전체 상품 보기</h3>
        </Link>
        <HeaderDropdown isHovered={isHovered} />
      </div>

      <div className="lg:space-x-5 xl:space-x-12 flex justify-evenly lg:justify-between">
        <ActiveLink href={'/'} className="hidden lg:inline lg:header-link">
          홈
        </ActiveLink>
        <ActiveLink href={'/products/categories/0?sort=newest'}>바로구매</ActiveLink>
        <ActiveLink href={'/request/purchase'} className="mx-3">
          제품구매 의뢰
        </ActiveLink>
        <ActiveLink href={'/partners'}>입점 의뢰</ActiveLink>
      </div>
    </div>
  );
}
