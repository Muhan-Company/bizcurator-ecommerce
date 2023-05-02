import Link from 'next/link';
import { CartIcon, Logo, MagnifyingGlass, User } from './Icons';

export default function TopHeader() {
  return (
    <div className="h-16 md:h-auto px-6 md:px-0 flex items-center">
      <Link href={'/'} className="flex flex-1 items-center">
        <h1 className="text-[20px] md:text-head-xl font-bold">BIZ CURATOR</h1>
        <Logo />
      </Link>
      <div className="md:flex flex-col md:space-y-10">
        <div className="hidden md:block space-x-5">
          <Link href={'#'}>회원가입</Link>
          <button>로그인</button>
          <Link href={'#'}>고객센터</Link>
        </div>
        <div className="flex items-center space-x-5 ml-auto">
          <button className="header-btn">
            <MagnifyingGlass />
          </button>
          <button className="hidden md:inline header-btn">
            <User />
          </button>
          <button className="header-btn">
            <CartIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
