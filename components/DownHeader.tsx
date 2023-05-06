import Link from 'next/link';
import { BarsIcon } from './Icons';
import NavLink from './NavLink';
import HeaderDropdown from './HeaderDropdown';

interface HoverProps {
  isHovered: boolean;
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DownHeader({ isHovered, setIsHovered }: HoverProps) {
  return (
    <div>
      <div className="px-6 lg:px-0 lg:flex justify-between">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="hidden lg:block relative"
        >
          <Link href={'#'} className="lg:flex items-center">
            {/* <BarsIcon /> */}
            <h3 className="header-link">전체 상품 보기</h3>
          </Link>
          <HeaderDropdown isHovered={isHovered} />
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
