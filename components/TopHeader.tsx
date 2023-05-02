import Link from 'next/link';
import { CartIcon, Logo, MagnifyingGlass } from './Icons';

export default function TopHeader() {
  return (
    <div className="h-16 md:h-auto px-6 md:px-0 flex items-center sticky top-0">
      <Link href={'/'} className="flex flex-1 items-center">
        <h1 className="text-[20px] md:text-head-xl font-bold">BIZ CURATOR</h1>
        <Logo />
      </Link>

      <button className="header-btn">
        <MagnifyingGlass />
      </button>

      <button className="header-btn ml-2">
        <CartIcon />
      </button>
    </div>
  );
}
