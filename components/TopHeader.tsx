import Link from 'next/link';
import { Cart, LogoIcon, MagnifyingGlassIcon, UserIcon } from './Icons';

export default function TopHeader() {
  return (
    <div className="h-16 lg:h-auto px-6 lg:px-0 flex items-center">
      <Link href={'/'} className="flex flex-1 items-center">
        <h1 className="text-[20px] lg:text-head-xl font-bold">BIZ CURATOR</h1>
        <LogoIcon />
      </Link>
      <div className="lg:flex flex-col lg:space-y-10">
        <div className="hidden lg:block space-x-5">
          <Link href={'#'}>회원가입</Link>
          <button>로그인</button>
          <Link href={'#'}>고객센터</Link>
        </div>
        <div className="flex items-center space-x-5 ml-auto">
          <button className="header-btn">
            <MagnifyingGlassIcon />
          </button>
          <button className="hidden lg:inline header-btn">
            <UserIcon />
          </button>
          <button className="header-btn">
            <Cart />
          </button>
        </div>
      </div>
    </div>
  );
}
