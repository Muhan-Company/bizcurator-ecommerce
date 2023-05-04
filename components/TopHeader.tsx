import Link from 'next/link';
import { Cart, LogoIcon, MagnifyingGlassIcon, UserIcon } from './Icons';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import SearchModal from './SearchModal';

export default function TopHeader() {
  const [showLogInModal, setShowLogInModal] = useState<boolean>(false);

  return (
    <div className="h-16 lg:h-auto px-6 lg:px-0 flex justify-between items-center">
      <Link href={'/'} className="flex items-center">
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
          <button className="header-btn" onClick={() => setShowLogInModal(true)}>
            <MagnifyingGlassIcon />
          </button>
          {showLogInModal && createPortal(<SearchModal setShowLogInModal={setShowLogInModal} />, document.body)}
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
