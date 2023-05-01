import Link from 'next/link';
import { CartIcon, MagnifyingGlass } from './Icons';

export default function Header() {
  return (
    <div className="h-16 px-6 flex items-center sticky top-0">
      <Link href={'/'} className="text-[20px] font-bold leading-[28.96px] flex-1">
        BIZ CURATOR
      </Link>
      <button className="header-btn">
        <MagnifyingGlass />
      </button>
      <button className="header-btn">
        <CartIcon color="#1C1C1C" width="17.45" height="17.45" />
      </button>
    </div>
  );
}
